import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
);

const SECTION_LABELS = {
  "home/hero": "Hero sekcija (tagline_line1, tagline_line2, tagline_line3, expertise, slider_words)",
  "home/about": "O nas sekcija (section_label, heading, paragraph, panels[{id, title, link_title, description}])",
  "home/services": "Storitve (items[{category, number, title, description, link}])",
  "home/testimonials": "Mnenja strank (items[{name, designation, content}])",
  "home/blog": "Blog sekcija (section_label, heading, posts[{title, meta, link}])",
  "home/team": "Ekipa (section_label, heading, members[{name, designation}])",
  "home/awards": "Certifikati in mejniki (section_label, heading, items[{year, title, location}])",
  "home/counter": "Statistika (paragraph, paragraph2, cta_text, stats[{value, suffix, label}])",
  "footer/info": "Noga strani (tagline, subtitle, cta_text, company, address, phone, email, hours)",
};

export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "No message" });

  // Fetch all current content
  const { data: rows, error: fetchErr } = await supabase
    .from("page_content")
    .select("page, section, content")
    .in("page", [...new Set(Object.keys(SECTION_LABELS).map(k => k.split("/")[0]))]);

  if (fetchErr) return res.status(500).json({ error: fetchErr.message });

  const currentContent = {};
  for (const row of rows) {
    const key = `${row.page}/${row.section}`;
    if (SECTION_LABELS[key]) {
      currentContent[key] = row.content;
    }
  }

  const systemPrompt = `Si pomočnica za urejanje vsebine spletne strani Tisk Šepic (tiskarna iz Novega mesta).

Uporabnica ti bo v slovenščini povedala, kaj želi spremeniti na spletni strani. Tvoja naloga je:
1. Razumi, kaj želi spremeniti
2. Naredi spremembo v ustreznem JSON-u
3. Vrni rezultat

TRENUTNA VSEBINA SPLETNE STRANI:
${JSON.stringify(currentContent, null, 2)}

SEKCIJE IN NJIHOVA STRUKTURA:
${Object.entries(SECTION_LABELS).map(([k, v]) => `- ${k}: ${v}`).join("\n")}

PRAVILA:
- Odgovarjaj v slovenščini
- Vedno vrni JSON blok z VSEMI spremembami v formatu:
  \`\`\`changes
  {"page/section": {celoten posodobljen content objekt}}
  \`\`\`
- Spremeni SAMO tisto, kar uporabnica želi. Ostalo pusti nespremenjeno.
- Če uporabnica želi dodati novo mnenje stranke, ga dodaj na konec seznama items v home/testimonials
- Če ni jasno, kaj želi, jo vprašaj
- Bodi prijazna, jedrnata in profesionalna
- Če uporabnica vpraša nekaj, kar ni povezano z vsebino strani, ji prijazno povej, da lahko pomagaš le pri urejanju vsebine`;

  try {
    const apiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        max_tokens: 4096,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
      }),
    });

    if (!apiRes.ok) {
      const errText = await apiRes.text();
      console.error("OpenAI API error:", errText);
      return res.status(500).json({ error: "AI error" });
    }

    const aiData = await apiRes.json();
    const aiText = aiData.choices[0].message.content;

    // Extract changes JSON if present
    const changesMatch = aiText.match(/```changes\s*([\s\S]*?)\s*```/);
    let applied = false;

    if (changesMatch) {
      try {
        const changes = JSON.parse(changesMatch[1]);

        for (const [key, newContent] of Object.entries(changes)) {
          const [page, section] = key.split("/");
          const { error: updateErr } = await supabase
            .from("page_content")
            .upsert(
              { page, section, content: newContent },
              { onConflict: "page,section" }
            );

          if (updateErr) {
            console.error("Update error:", updateErr);
            return res.status(500).json({
              reply: `Napaka pri shranjevanju: ${updateErr.message}`,
              applied: false,
            });
          }
        }
        applied = true;
      } catch (parseErr) {
        console.error("JSON parse error:", parseErr);
      }
    }

    // Remove the changes block from the reply text
    const cleanReply = aiText.replace(/```changes[\s\S]*?```/g, "").trim();

    return res.status(200).json({
      reply: cleanReply,
      applied,
    });
  } catch (err) {
    console.error("Handler error:", err);
    return res.status(500).json({ error: "Internal error" });
  }
}
