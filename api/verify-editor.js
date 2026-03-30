// Tisk Šepic Frontend Editor — Token verification
// Vercel serverless function — zero npm deps

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { token } = req.body || {};
  const secret = process.env.EDITOR_SECRET || "Tjasa*2026";

  if (!token) return res.status(400).json({ valid: false, error: "No token" });

  if (token === secret) {
    return res.status(200).json({ valid: true });
  }

  return res.status(401).json({ valid: false });
};
