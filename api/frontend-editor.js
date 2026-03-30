// Tisk Šepic Frontend Editor — Save/Load content overrides + image upload
// Vercel serverless function — zero npm deps

const SUPABASE_URL  = (process.env.VITE_SUPABASE_URL  || "https://pwwalwcqwikzpxtwavuq.supabase.co").trim();
const SUPABASE_ANON = (process.env.VITE_SUPABASE_KEY  || "sb_publishable_FqxdrFY_Op3nI_KgQPYIZw_iJ3pyLhN").trim();
const SUPABASE_SVC  = (process.env.SUPABASE_SECRET_KEY || "").trim() || undefined;
const EDITOR_SECRET = process.env.EDITOR_SECRET;

async function supaFetch(path, options = {}) {
  const key = options.write ? SUPABASE_SVC : SUPABASE_ANON;
  const resp = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: options.prefer || "return=representation",
      ...options.headers,
    },
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`Supabase ${resp.status}: ${text}`);
  }
  const ct = resp.headers.get("content-type") || "";
  return ct.includes("json") ? resp.json() : resp.text();
}

async function uploadImage(bucket, fileName, base64Data, contentType) {
  const key = SUPABASE_SVC;
  const binary = Buffer.from(base64Data, "base64");
  const resp = await fetch(
    `${SUPABASE_URL}/storage/v1/object/${bucket}/${fileName}`,
    {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": contentType,
        "x-upsert": "true",
      },
      body: binary,
    }
  );
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`Storage upload error ${resp.status}: ${text}`);
  }
  return `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${fileName}`;
}

function checkAuth(req) {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.replace("Bearer ", "");
  return token === EDITOR_SECRET;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(200).end();

  // GET: Load overrides for a page (public)
  if (req.method === "GET") {
    const pageId = req.query.page || "/";
    try {
      const rows = await supaFetch(
        `frontend_edits?page_id=eq.${encodeURIComponent(pageId)}&select=element_id,content_type,content,image_url,updated_at`
      );
      const overrides = {};
      for (const row of rows) {
        overrides[row.element_id] = {
          type: row.content_type,
          content: row.content,
          image_url: row.image_url ? row.image_url.replace(/[\r\n]/g, "") : row.image_url,
          updated_at: row.updated_at,
        };
      }
      return res.status(200).json({ overrides });
    } catch (err) {
      return res.status(200).json({ overrides: {} });
    }
  }

  // POST: Save overrides (auth required)
  if (req.method === "POST") {
    if (!checkAuth(req)) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    if (!SUPABASE_SVC) {
      return res.status(500).json({ error: "SUPABASE_SECRET_KEY not set" });
    }

    const { action, page_id, element_id, content_type, content, image_data, image_type, image_name } = req.body || {};

    if (action === "save_text") {
      try {
        await supaFetch("frontend_edits?on_conflict=page_id,element_id", {
          method: "POST",
          write: true,
          prefer: "resolution=merge-duplicates",
          body: JSON.stringify({
            page_id,
            element_id,
            content_type: content_type || "text",
            content,
            updated_at: new Date().toISOString(),
          }),
        });
        return res.status(200).json({ success: true });
      } catch (err) {
        return res.status(500).json({ error: err.message });
      }
    }

    if (action === "save_image") {
      try {
        const safeName = `${page_id.replace(/\//g, "_")}__${element_id}__${Date.now()}.${image_name.split(".").pop()}`;
        const imageUrl = await uploadImage("frontend-editor", safeName, image_data, image_type);
        await supaFetch("frontend_edits?on_conflict=page_id,element_id", {
          method: "POST",
          write: true,
          prefer: "resolution=merge-duplicates",
          body: JSON.stringify({
            page_id,
            element_id,
            content_type: "image",
            content: null,
            image_url: imageUrl,
            updated_at: new Date().toISOString(),
          }),
        });
        return res.status(200).json({ success: true, image_url: imageUrl });
      } catch (err) {
        return res.status(500).json({ error: err.message });
      }
    }

    if (action === "fix_urls") {
      try {
        // Fetch all rows with image URLs
        const allRows = await supaFetch(
          `frontend_edits?content_type=eq.image&image_url=not.is.null&select=id,page_id,element_id,image_url`
        );
        let fixed = 0;
        for (const row of allRows) {
          if (row.image_url && /[\r\n]/.test(row.image_url)) {
            const cleanUrl = row.image_url.replace(/[\r\n]/g, "");
            await supaFetch(
              `frontend_edits?id=eq.${row.id}`,
              {
                method: "PATCH",
                write: true,
                body: JSON.stringify({ image_url: cleanUrl }),
              }
            );
            fixed++;
          }
        }
        return res.status(200).json({ success: true, total: allRows.length, fixed });
      } catch (err) {
        return res.status(500).json({ error: err.message });
      }
    }

    if (action === "delete") {
      try {
        await supaFetch(
          `frontend_edits?page_id=eq.${encodeURIComponent(page_id)}&element_id=eq.${encodeURIComponent(element_id)}`,
          { method: "DELETE", write: true }
        );
        return res.status(200).json({ success: true });
      } catch (err) {
        return res.status(500).json({ error: err.message });
      }
    }

    return res.status(400).json({ error: "Unknown action" });
  }

  return res.status(405).json({ error: "Method not allowed" });
};
