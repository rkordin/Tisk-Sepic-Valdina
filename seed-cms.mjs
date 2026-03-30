// One-time script to seed CMS content into Supabase
// Run with: node seed-cms.mjs

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://pwwalwcqwikzpxtwavuq.supabase.co",
  "sb_secret_hoGcOunCczn2_Ov6qwI-cg_Ay2oExzO"
);

const rows = [
  {
    page: "home",
    section: "hero",
    content: {
      tagline_line1: "ČISTA tehnologija.",
      tagline_line2: "ČISTI odnosi.",
      tagline_line3: "ČISTO zadovoljstvo.",
      expertise: "Celoten spekter tiskarskih in grafičnih storitev",
      slider_words: ["Tisk", "Grafika", "Embalaža", "Inovacija"],
    },
  },
  {
    page: "home",
    section: "about",
    content: {
      section_label: "O nas",
      heading: "Družinsko podjetje z več kot 40-letno tradicijo",
      paragraph:
        "V podjetju Tisk Šepic rastemo in se učimo že več kot 40 let. Z visokimi standardi kakovosti želimo zadovoljiti potrebe vsakega kupca. Naša tiskarna ponuja celoten spekter tiskarskih in grafičnih storitev na enem mestu.",
      panels: [
        { id: "01", title: "Tradicija", link_title: "Več kot 40 let izkušenj v tiskarski industriji.", description: "Družinsko podjetje, ki raste in se uči že od leta 1980." },
        { id: "02", title: "Tehnologija", link_title: "Sodobna oprema za najzahtevnejše projekte.", description: "Clean Room, CNC, laser in najsodobnejša tiskarska tehnologija." },
        { id: "03", title: "Kakovost", link_title: "Certificirana kakovost na vsakem koraku.", description: "ISO 9001, ISO 15378, FSC in ISO 14001 certificirani procesi." },
      ],
    },
  },
  {
    page: "home",
    section: "services",
    content: {
      items: [
        { category: "Tisk", number: "01", title: "Digitalni & Offset tisk", description: "Katalogi, brošure, letaki, vizitke, plakati in druge tiskovine vrhunske kakovosti.", link: "/service-details" },
        { category: "Nalepke", number: "02", title: "Nalepke in folije", description: "Samolepilne nalepke, etikete, talne in stenske nalepke, tapete ter dekorativne folije.", link: "/service-details" },
        { category: "Reklama", number: "03", title: "Reklamni izdelki", description: "Transparenti, zastave, roll-up stojala, pop-up stene in druga reklamna oprema.", link: "/service-details" },
        { category: "3D napisi", number: "04", title: "Napisi in table", description: "3D napisi, table iz pleksi stekla, reklamne table, CNC izrez in laserski razrez.", link: "/service-details" },
        { category: "Embalaža", number: "05", title: "Embalaža in pakiranje", description: "Kartonska embalaža, blistri, večslojne etikete, darilne vrečke in promocijska darila.", link: "/service-details" },
      ],
    },
  },
  {
    page: "home",
    section: "testimonials",
    content: {
      items: [
        { name: "Marko Kovač", designation: "Direktor, Adria Mobil", content: "S Tisk Šepic sodelujemo že vrsto let. Njihova zanesljivost in kakovost tiska sta izjemni. Vedno znova nas presenetijo s hitrostjo in natančnostjo izvedbe, tudi pri najzahtevnejših projektih embalaže in katalogov." },
        { name: "Ana Novak", designation: "Vodja marketinga, Krka d.d.", content: "Za farmacevtsko embalažo potrebujemo najvišje standarde kakovosti. Clean Room certificirana proizvodnja pri Tisk Šepic nam zagotavlja skladnost z vsemi regulatornimi zahtevami. Odlično partnerstvo." },
        { name: "Peter Zupančič", designation: "Lastnik, Zupančič Gradnje", content: "Od vizitk do velikoformatnih plakatov — pri Tisk Šepic dobimo vse na enem mestu. Kakovost je vedno vrhunska, roki so kratki, ekipa pa izjemno odzivna. Priporočam brez zadržkov." },
        { name: "Maja Horvat", designation: "Kreativna direktorica, Studio MH", content: "Kot oblikovalska agencija potrebujemo tiskarskega partnerja, ki razume naše zahteve. Tisk Šepic to odlično obvladuje — od posebnih UV efektov do slepega tiska. Rezultati so vedno nad pričakovanji." },
        { name: "Tomaž Dolenc", designation: "Direktor prodaje, TPV Group", content: "Polepitve naših vozil in reklamne table so vedno brezhibne. Profesionalen pristop, korektni odnosi in zanesljiva dobava. Tisk Šepic je naš dolgoletni partner in to z razlogom." },
      ],
    },
  },
  {
    page: "home",
    section: "blog",
    content: {
      section_label: "Blog",
      heading: "Novosti in nasveti",
      posts: [
        { title: "6 prednosti tiska na steklo", meta: "Tisk / Nasveti", link: "/blog-details" },
        { title: "Digitalni ali offset tisk — kaj izbrati?", meta: "Tisk / Primerjava", link: "/blog-details" },
        { title: "12 notranjih nasvetov za izbiro tiskarne", meta: "Marketing / Nasveti", link: "/blog-details" },
        { title: "Zakaj oglaševanje ne deluje?", meta: "Oglaševanje / Strategija", link: "/blog-details" },
        { title: "Kako zagotoviti brezhibne tiskovine", meta: "Tisk / Kakovost", link: "/blog-details" },
        { title: "Oglaševanje na vozilih — se splača?", meta: "Vozila / Oglaševanje", link: "/blog-details" },
      ],
    },
  },
  {
    page: "home",
    section: "team",
    content: {
      section_label: "Ekipa",
      heading: "Naša ekipa",
      members: [
        { name: "Tjaša Šepic", designation: "Direktorica" },
        { name: "Danijela Klemenčič", designation: "Direktorica kakovosti" },
        { name: "Vanja Potočar", designation: "Računovodstvo" },
        { name: "Katja Kren", designation: "Administracija" },
      ],
    },
  },
  {
    page: "home",
    section: "awards",
    content: {
      section_label: "Naša pot",
      heading: "Certifikati in mejniki",
      items: [
        { year: "2024", title: "ISO 14001 — Okoljski certifikat", location: "Novo Mesto, Slovenija" },
        { year: "2022", title: "ISO 15378 — Farmacevtska embalaža", location: "Novo Mesto, Slovenija" },
        { year: "2021", title: "FSC Certifikat (FSC-C172697)", location: "Trajnostno upravljanje" },
        { year: "2012", title: "ISO 9001 — Sistem vodenja kakovosti", location: "Novo Mesto, Slovenija" },
        { year: "2001", title: "Ustanovitev TISK ŠEPIC d.o.o.", location: "Novo Mesto, Slovenija" },
        { year: "1980", title: "Začetek zgodbe — Žare Šepic", location: "Novo Mesto, Slovenija" },
      ],
    },
  },
  {
    page: "home",
    section: "counter",
    content: {
      paragraph: "Naš fokus je na zagotavljanju vrhunske vrednosti za naše stranke. Ponujamo trajnostne rešitve, ki nadgrajujejo vaše poslovanje. Od strategije do izvedbe smo tukaj, da zagotovimo uspeh vašega projekta. Z izkušnjami že več kot 40 let.",
      paragraph2: "Nenehno premikamo meje z najsodobnejšo tehnologijo in inovativnimi pristopi. Nemogoče danes postane samoumevno jutri.",
      cta_text: "Kontaktirajte nas",
      stats: [
        { value: 40, suffix: "+", label: "Let izkušenj v\ntiskarski industriji" },
        { value: 37, suffix: "", label: "Zaposlenih" },
      ],
    },
  },
  {
    page: "footer",
    section: "info",
    content: {
      tagline: "Tiskamo prihodnost.",
      subtitle: "Z vami že več kot 40 let.",
      cta_text: "Pišite nam",
      company: "Tisk Šepic d.o.o.",
      address: "Livada 14, 8000 Novo Mesto",
      phone: "+386 7 393 7100",
      email: "info@tisksepic.si",
      hours: "Pon–Pet 07:00–15:00",
    },
  },
];

async function seed() {
  console.log("Seeding CMS content...");

  const { error } = await supabase
    .from("page_content")
    .upsert(rows, { onConflict: "page,section" });

  if (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }

  console.log(`Seeded ${rows.length} content sections.`);

  // Verify
  const { data } = await supabase
    .from("page_content")
    .select("page, section")
    .order("page");

  console.log("\nContent in database:");
  data.forEach((r) => console.log(`  ${r.page} / ${r.section}`));
}

seed();
