-- ═══════════════════════════════════════════════════════════════
-- Supabase CMS Migration — Tisk Šepic (adina_react)
-- Run this in your Supabase SQL Editor
-- ═══════════════════════════════════════════════════════════════

-- Table (skip if already exists from previous migration)
CREATE TABLE IF NOT EXISTS page_content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page TEXT NOT NULL,
  section TEXT NOT NULL,
  content JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(page, section)
);

CREATE INDEX IF NOT EXISTS idx_page_content_page ON page_content(page);

-- Auto-update timestamp
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS set_updated_at ON page_content;
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON page_content
  FOR EACH ROW
  EXECUTE FUNCTION update_modified_column();

-- RLS
ALTER TABLE page_content ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all access" ON page_content;
CREATE POLICY "Allow all access" ON page_content
  FOR ALL USING (true) WITH CHECK (true);

-- ═══════════════════════════════════════════════════════════════
-- Seed content (matches hardcoded values in adina_react components)
-- ═══════════════════════════════════════════════════════════════

INSERT INTO page_content (page, section, content) VALUES

-- HERO
('home', 'hero', '{
  "tagline_line1": "ČISTA tehnologija.",
  "tagline_line2": "ČISTI odnosi.",
  "tagline_line3": "ČISTO zadovoljstvo.",
  "expertise": "Celoten spekter tiskarskih in grafičnih storitev",
  "slider_words": ["Tisk", "Grafika", "Embalaža", "Inovacija"]
}'::jsonb),

-- ABOUT (panels + right side)
('home', 'about', '{
  "section_label": "O nas",
  "heading": "Družinsko podjetje z več kot 40-letno tradicijo",
  "paragraph": "V podjetju Tisk Šepic rastemo in se učimo že več kot 40 let. Z visokimi standardi kakovosti želimo zadovoljiti potrebe vsakega kupca. Naša tiskarna ponuja celoten spekter tiskarskih in grafičnih storitev na enem mestu.",
  "panels": [
    {"id": "01", "title": "Tradicija", "link_title": "Več kot 40 let izkušenj v tiskarski industriji.", "description": "Družinsko podjetje, ki raste in se uči že od leta 1980."},
    {"id": "02", "title": "Tehnologija", "link_title": "Sodobna oprema za najzahtevnejše projekte.", "description": "Clean Room, CNC, laser in najsodobnejša tiskarska tehnologija."},
    {"id": "03", "title": "Kakovost", "link_title": "Certificirana kakovost na vsakem koraku.", "description": "ISO 9001, ISO 15378, FSC in ISO 14001 certificirani procesi."}
  ]
}'::jsonb),

-- SERVICES
('home', 'services', '{
  "items": [
    {"category": "Tisk", "number": "01", "title": "Digitalni & Offset tisk", "description": "Katalogi, brošure, letaki, vizitke, plakati in druge tiskovine vrhunske kakovosti.", "link": "/service-details"},
    {"category": "Nalepke", "number": "02", "title": "Nalepke in folije", "description": "Samolepilne nalepke, etikete, talne in stenske nalepke, tapete ter dekorativne folije.", "link": "/service-details"},
    {"category": "Reklama", "number": "03", "title": "Reklamni izdelki", "description": "Transparenti, zastave, roll-up stojala, pop-up stene in druga reklamna oprema.", "link": "/service-details"},
    {"category": "3D napisi", "number": "04", "title": "Napisi in table", "description": "3D napisi, table iz pleksi stekla, reklamne table, CNC izrez in laserski razrez.", "link": "/service-details"},
    {"category": "Embalaža", "number": "05", "title": "Embalaža in pakiranje", "description": "Kartonska embalaža, blistri, večslojne etikete, darilne vrečke in promocijska darila.", "link": "/service-details"}
  ]
}'::jsonb),

-- TESTIMONIALS
('home', 'testimonials', '{
  "items": [
    {"name": "Marko Kovač", "designation": "Direktor, Adria Mobil", "content": "S Tisk Šepic sodelujemo že vrsto let. Njihova zanesljivost in kakovost tiska sta izjemni. Vedno znova nas presenetijo s hitrostjo in natančnostjo izvedbe, tudi pri najzahtevnejših projektih embalaže in katalogov."},
    {"name": "Ana Novak", "designation": "Vodja marketinga, Krka d.d.", "content": "Za farmacevtsko embalažo potrebujemo najvišje standarde kakovosti. Clean Room certificirana proizvodnja pri Tisk Šepic nam zagotavlja skladnost z vsemi regulatornimi zahtevami. Odlično partnerstvo."},
    {"name": "Peter Zupančič", "designation": "Lastnik, Zupančič Gradnje", "content": "Od vizitk do velikoformatnih plakatov — pri Tisk Šepic dobimo vse na enem mestu. Kakovost je vedno vrhunska, roki so kratki, ekipa pa izjemno odzivna. Priporočam brez zadržkov."},
    {"name": "Maja Horvat", "designation": "Kreativna direktorica, Studio MH", "content": "Kot oblikovalska agencija potrebujemo tiskarskega partnerja, ki razume naše zahteve. Tisk Šepic to odlično obvladuje — od posebnih UV efektov do slepega tiska. Rezultati so vedno nad pričakovanji."},
    {"name": "Tomaž Dolenc", "designation": "Direktor prodaje, TPV Group", "content": "Polepitve naših vozil in reklamne table so vedno brezhibne. Profesionalen pristop, korektni odnosi in zanesljiva dobava. Tisk Šepic je naš dolgoletni partner in to z razlogom."}
  ]
}'::jsonb),

-- BLOG
('home', 'blog', '{
  "section_label": "Blog",
  "heading": "Novosti in nasveti",
  "posts": [
    {"title": "6 prednosti tiska na steklo", "meta": "Tisk / Nasveti", "link": "/blog-details"},
    {"title": "Digitalni ali offset tisk — kaj izbrati?", "meta": "Tisk / Primerjava", "link": "/blog-details"},
    {"title": "12 notranjih nasvetov za izbiro tiskarne", "meta": "Marketing / Nasveti", "link": "/blog-details"},
    {"title": "Zakaj oglaševanje ne deluje?", "meta": "Oglaševanje / Strategija", "link": "/blog-details"},
    {"title": "Kako zagotoviti brezhibne tiskovine", "meta": "Tisk / Kakovost", "link": "/blog-details"},
    {"title": "Oglaševanje na vozilih — se splača?", "meta": "Vozila / Oglaševanje", "link": "/blog-details"}
  ]
}'::jsonb),

-- FOOTER
('footer', 'info', '{
  "tagline": "Tiskamo prihodnost.",
  "subtitle": "Z vami že več kot 40 let.",
  "cta_text": "Pišite nam",
  "company": "Tisk Šepic d.o.o.",
  "address": "Livada 14, 8000 Novo Mesto",
  "phone": "+386 7 393 7100",
  "email": "info@tisksepic.si",
  "hours": "Pon–Pet 07:00–15:00"
}'::jsonb)

ON CONFLICT (page, section) DO UPDATE SET content = EXCLUDED.content;
