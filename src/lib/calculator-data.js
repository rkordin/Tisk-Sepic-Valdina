// ═══════════════════════════════════════════════════════════════
// PRINTING CALCULATOR — Complete Product & Pricing Data
// Sources: Demago (NET), Tiskarna Online (GROSS), eTiskarna (GROSS), Vizitka.com (GROSS, 0% DDV)
// VAT: 22% DDV (except Vizitka.com which is DDV-exempt)
// ═══════════════════════════════════════════════════════════════

// ── Categories ──────────────────────────────────────────────
export const CATEGORIES = [
  {
    id: "tiskalni-izdelki",
    name: "Tiskalni izdelki",
    icon: "fa-regular fa-file-lines",
    products: ["letaki", "vizitke", "zlozljive-vizitke", "razglednice", "plakati", "dopisni-listi", "vabila"],
  },
  {
    id: "publikacije",
    name: "Publikacije",
    icon: "fa-regular fa-book-open",
    products: ["brosure", "zlozenke", "knjige", "revije", "koledarji"],
  },
  {
    id: "nalepke-embalaza",
    name: "Nalepke & embalaža",
    icon: "fa-regular fa-tag",
    products: ["nalepke", "kuverte", "zlozljive-skatle"],
  },
  {
    id: "reklamni-izdelki",
    name: "Reklamni izdelki",
    icon: "fa-regular fa-flag",
    products: ["rolo-stojala", "beachflags", "zastave", "cerade", "majice"],
  },
  {
    id: "pisarnisko",
    name: "Pisarniško",
    icon: "fa-regular fa-pen-to-square",
    products: ["pisalni-bloki", "predstavitvene-mape", "beleznice"],
  },
];

// ── Common Options ──────────────────────────────────────────

export const LAMINATION_OPTIONS = [
  { id: "none", label: "Brez plastifikacije" },
  { id: "matt", label: "Matt plastifikacija" },
  { id: "gloss", label: "Gloss plastifikacija" },
  { id: "anti-scratch", label: "Anti-Scratch Matt" },
  { id: "soft-touch", label: "Soft Touch Matt" },
];

export const DELIVERY_TIERS = {
  standard: { label: "Standard / Economy", labelShort: "Standard" },
  express: { label: "Ekspres", labelShort: "Ekspres" },
  priority: { label: "Prednostno / Priority", labelShort: "Prednostno" },
};

// ── Products ────────────────────────────────────────────────

export const PRODUCTS = [
  {
    id: "letaki",
    name: "Letaki",
    category: "tiskalni-izdelki",
    icon: "fa-regular fa-file-lines",
    formats: [
      { code: "A6", width: 105, height: 148, label: "A6 (105×148 mm)" },
      { code: "DL", width: 99, height: 210, label: "DL (99×210 mm)" },
      { code: "A5", width: 148, height: 210, label: "A5 (148×210 mm)" },
      { code: "A4", width: 210, height: 297, label: "A4 (210×297 mm)" },
      { code: "A3", width: 297, height: 420, label: "A3 (297×420 mm)" },
    ],
    papers: [
      { id: "coated-matt-115", label: "Premazni Matt 115 g/m²", weight: 115 },
      { id: "coated-gloss-115", label: "Z leskom 115 g/m²", weight: 115 },
      { id: "coated-matt-135", label: "Premazni Matt 135 g/m²", weight: 135 },
      { id: "coated-matt-200", label: "Premazni Matt 200 g/m²", weight: 200 },
      { id: "coated-matt-250", label: "Premazni Matt 250 g/m²", weight: 250 },
      { id: "coated-matt-300", label: "Premazni Matt 300 g/m²", weight: 300 },
    ],
    sides: ["4/0 enostransko", "4/4 obojestransko"],
    lamination: ["none", "matt", "gloss", "anti-scratch", "soft-touch"],
    minQty: 10,
    maxQty: 100000,
    qtyBreaks: [10, 25, 50, 100, 250, 500, 1000, 2000, 5000, 10000],
    pricing: [
      {
        source: "demago", priceType: "net", deliveryDays: "4–20 dni",
        tiers: {
          standard: [
            { qty: 10, price: 34.31 }, { qty: 100, price: 37.07 },
            { qty: 250, price: 41.62 }, { qty: 500, price: 48.80 },
            { qty: 1000, price: 59.63 }, { qty: 2000, price: 83.71 },
            { qty: 5000, price: 143.06 }, { qty: 10000, price: 252.11 },
          ],
        },
      },
      {
        source: "tiskarna", priceType: "gross", deliveryDays: "4 dni",
        tiers: {
          standard: [
            { qty: 100, price: 26.74 }, { qty: 125, price: 30.66 },
            { qty: 150, price: 31.12 }, { qty: 200, price: 32.05 },
          ],
        },
      },
      {
        source: "etiskarna", priceType: "gross", deliveryDays: "4 dni",
        tiers: {
          standard: [
            { qty: 100, price: 25.79 }, { qty: 125, price: 29.52 },
            { qty: 150, price: 29.96 }, { qty: 200, price: 30.84 },
          ],
        },
      },
      {
        source: "vizitka", priceType: "gross", deliveryDays: "1 dan",
        tiers: {
          standard: [
            { qty: 50, price: 29.99 }, { qty: 100, price: 38.99 },
            { qty: 300, price: 53.98 }, { qty: 500, price: 65.98 },
            { qty: 1000, price: 89.97 },
          ],
        },
      },
    ],
  },
  {
    id: "vizitke",
    name: "Vizitke",
    category: "tiskalni-izdelki",
    icon: "fa-regular fa-credit-card",
    formats: [
      { code: "standard", width: 85, height: 55, label: "Standard (85×55 mm)" },
      { code: "alt", width: 90, height: 50, label: "Alternativa (90×50 mm)" },
    ],
    papers: [
      { id: "coated-gloss-350", label: "Z leskom 350 g/m²", weight: 350 },
      { id: "coated-matt-350", label: "Premazni Matt 350 g/m²", weight: 350 },
    ],
    sides: ["4/0 enostransko", "4/4 obojestransko"],
    lamination: ["none", "matt", "gloss", "anti-scratch", "soft-touch"],
    minQty: 100,
    maxQty: 10000,
    qtyBreaks: [100, 125, 150, 200, 250, 500, 1000, 2000, 5000],
    pricing: [
      {
        source: "tiskarna", priceType: "gross", deliveryDays: "4 dni",
        tiers: { standard: [{ qty: 100, price: 20.82 }, { qty: 200, price: 21.80 }] },
      },
      {
        source: "etiskarna", priceType: "gross", deliveryDays: "4 dni",
        tiers: {
          standard: [{ qty: 100, price: 21.31 }, { qty: 125, price: 21.82 }, { qty: 150, price: 21.98 }, { qty: 200, price: 22.31 }],
          express: [{ qty: 100, price: 30.14 }, { qty: 125, price: 30.79 }, { qty: 150, price: 30.99 }, { qty: 200, price: 31.40 }],
          priority: [{ qty: 100, price: 46.45 }, { qty: 125, price: 47.17 }, { qty: 150, price: 47.40 }, { qty: 200, price: 47.85 }],
        },
      },
      {
        source: "vizitka", priceType: "gross", deliveryDays: "1 dan",
        tiers: {
          standard: [
            { qty: 100, price: 21.99 }, { qty: 300, price: 43.98 },
            { qty: 500, price: 48.38 }, { qty: 1000, price: 65.97 },
          ],
        },
      },
    ],
  },
  {
    id: "zlozljive-vizitke",
    name: "Zložljive vizitke",
    category: "tiskalni-izdelki",
    icon: "fa-regular fa-clone",
    formats: [
      { code: "standard", width: 170, height: 55, label: "85×55 mm (zaprto) / 170×55 mm (odprto)" },
    ],
    papers: [
      { id: "splendorgel-300", label: "Fedrigoni Splendorgel Extra White 300 g/m²", weight: 300 },
      { id: "astroprint-canvas-280", label: "Astroprint Canvas 280 g/m²", weight: 280 },
      { id: "constellation-lime-280", label: "Constellation Lime 280 g/m²", weight: 280 },
      { id: "constellation-fiandra-280", label: "Constellation Snow Fiandra 280 g/m²", weight: 280 },
      { id: "constellation-raster-350", label: "Constellation Snow Raster 350 g/m²", weight: 350 },
      { id: "rives-tradition-250", label: "Rives Tradition Ice White 250 g/m²", weight: 250 },
    ],
    sides: ["4/4 obojestransko"],
    lamination: ["none", "matt", "gloss"],
    minQty: 50,
    maxQty: 1000,
    qtyBreaks: [50, 100, 300, 500, 1000],
    pricing: [
      {
        source: "vizitka", priceType: "gross", deliveryDays: "1 dan",
        tiers: {
          standard: [
            { qty: 50, price: 39.99 }, { qty: 100, price: 55.99 },
            { qty: 300, price: 71.98 }, { qty: 500, price: 93.98 },
            { qty: 1000, price: 131.97 },
          ],
        },
      },
    ],
  },
  {
    id: "vabila",
    name: "Vabila",
    category: "tiskalni-izdelki",
    icon: "fa-regular fa-envelope-open-text",
    formats: [
      { code: "A6", width: 148, height: 105, label: "A6 (148×105 mm)" },
      { code: "DL", width: 210, height: 100, label: "DL (210×100 mm)" },
      { code: "A5", width: 148, height: 210, label: "A5 (148×210 mm)" },
      { code: "A5-folded", width: 210, height: 148, label: "A5 zloženo (210×148 mm)" },
    ],
    papers: [
      { id: "symbol-matt-300", label: "Fedrigoni Symbol Matt 300 g/m²", weight: 300 },
      { id: "splendorgel-300", label: "Fedrigoni Splendorgel Extra White 300 g/m²", weight: 300 },
      { id: "astroprint-canvas-280", label: "Astroprint Canvas 280 g/m²", weight: 280 },
      { id: "constellation-lime-280", label: "Constellation Lime 280 g/m²", weight: 280 },
      { id: "rives-tradition-250", label: "Rives Tradition Ice White 250 g/m²", weight: 250 },
    ],
    sides: ["4/0 enostransko", "4/4 obojestransko"],
    lamination: ["none", "matt", "gloss"],
    minQty: 25,
    maxQty: 500,
    qtyBreaks: [25, 50, 100, 250, 500],
    pricing: [
      {
        source: "vizitka", priceType: "gross", deliveryDays: "1 dan",
        tiers: {
          standard: [
            { qty: 25, price: 34.50 }, { qty: 50, price: 41.40 },
            { qty: 100, price: 48.30 }, { qty: 250, price: 62.10 },
            { qty: 500, price: 79.35 },
          ],
        },
      },
    ],
  },
  {
    id: "razglednice",
    name: "Razglednice",
    category: "tiskalni-izdelki",
    icon: "fa-regular fa-image",
    formats: [
      { code: "A6", width: 105, height: 148, label: "A6 (105×148 mm)" },
      { code: "DL", width: 99, height: 210, label: "DL (99×210 mm)" },
    ],
    papers: [
      { id: "chrome-300", label: "Kromo karton 300 g/m²", weight: 300 },
      { id: "coated-matt-300", label: "Premazni Matt 300 g/m²", weight: 300 },
    ],
    sides: ["4/0 enostransko", "4/4 obojestransko"],
    lamination: ["none", "matt", "gloss"],
    minQty: 5,
    maxQty: 10000,
    qtyBreaks: [5, 10, 25, 50, 100, 250, 500, 1000],
    pricing: [
      {
        source: "tiskarna", priceType: "gross", deliveryDays: "5 dni",
        tiers: { standard: [{ qty: 5, price: 14.54 }, { qty: 50, price: 18.56 }] },
      },
      {
        source: "etiskarna", priceType: "gross", deliveryDays: "5 dni",
        tiers: {
          standard: [{ qty: 5, price: 14.89 }, { qty: 50, price: 19.07 }],
          express: [{ qty: 5, price: 22.12 }, { qty: 50, price: 27.35 }],
          priority: [{ qty: 5, price: 37.47 }, { qty: 50, price: 43.31 }],
        },
      },
    ],
  },
  {
    id: "plakati",
    name: "Plakati",
    category: "tiskalni-izdelki",
    icon: "fa-regular fa-rectangle-wide",
    formats: [
      { code: "A4", width: 210, height: 297, label: "A4 (210×297 mm)" },
      { code: "A3", width: 297, height: 420, label: "A3 (297×420 mm)" },
      { code: "A2", width: 420, height: 594, label: "A2 (420×594 mm)" },
      { code: "A1", width: 594, height: 841, label: "A1 (594×841 mm)" },
    ],
    papers: [
      { id: "coated-gloss-135", label: "Z leskom 135 g/m²", weight: 135 },
      { id: "coated-matt-135", label: "Premazni Matt 135 g/m²", weight: 135 },
      { id: "coated-matt-200", label: "Premazni Matt 200 g/m²", weight: 200 },
    ],
    sides: ["4/0 enostransko"],
    lamination: ["none", "matt", "gloss"],
    minQty: 1,
    maxQty: 5000,
    qtyBreaks: [1, 5, 10, 25, 50, 100, 250, 500],
    pricing: [
      {
        source: "tiskarna", priceType: "gross", deliveryDays: "4 dni",
        tiers: { standard: [{ qty: 1, price: 24.77 }, { qty: 5, price: 75.49 }] },
      },
      {
        source: "etiskarna", priceType: "gross", deliveryDays: "4 dni",
        tiers: {
          standard: [{ qty: 1, price: 23.01 }, { qty: 5, price: 68.96 }],
          express: [{ qty: 1, price: 32.26 }, { qty: 5, price: 89.71 }],
          priority: [{ qty: 1, price: 48.83 }, { qty: 5, price: 113.16 }],
        },
      },
      {
        source: "vizitka", priceType: "gross", deliveryDays: "1 dan",
        tiers: {
          standard: [
            { qty: 10, price: 35.00 }, { qty: 25, price: 45.50 },
            { qty: 50, price: 52.50 }, { qty: 100, price: 70.00 },
            { qty: 250, price: 105.00 }, { qty: 500, price: 157.50 },
          ],
        },
      },
    ],
  },
  {
    id: "dopisni-listi",
    name: "Dopisni listi",
    category: "tiskalni-izdelki",
    icon: "fa-regular fa-pen-nib",
    formats: [{ code: "A4", width: 210, height: 297, label: "A4 (210×297 mm)" }],
    papers: [
      { id: "offset-90", label: "Offset papir 90 g/m²", weight: 90 },
      { id: "offset-120", label: "Offset papir 120 g/m²", weight: 120 },
    ],
    sides: ["4/0 enostransko", "4/4 obojestransko"],
    lamination: ["none"],
    minQty: 500,
    maxQty: 50000,
    qtyBreaks: [500, 1000, 2000, 5000, 10000],
    pricing: [
      {
        source: "tiskarna", priceType: "gross", deliveryDays: "4 dni",
        tiers: { standard: [{ qty: 500, price: 53.68 }, { qty: 1000, price: 64.78 }, { qty: 2000, price: 92.57 }] },
      },
      {
        source: "etiskarna", priceType: "gross", deliveryDays: "4 dni",
        tiers: {
          standard: [{ qty: 500, price: 49.32 }, { qty: 1000, price: 59.39 }, { qty: 2000, price: 84.63 }],
          express: [{ qty: 500, price: 64.84 }, { qty: 1000, price: 77.37 }, { qty: 2000, price: 108.79 }],
          priority: [{ qty: 500, price: 85.16 }, { qty: 1000, price: 99.16 }, { qty: 2000, price: 134.29 }],
        },
      },
    ],
  },
  {
    id: "brosure",
    name: "Brošure",
    category: "publikacije",
    icon: "fa-regular fa-book",
    formats: [
      { code: "A6", width: 105, height: 148, label: "A6 (105×148 mm)" },
      { code: "A5", width: 148, height: 210, label: "A5 (148×210 mm)" },
      { code: "A4", width: 210, height: 297, label: "A4 (210×297 mm)" },
    ],
    papers: [
      { id: "coated-gloss-115", label: "Z leskom 115 g/m²", weight: 115 },
      { id: "coated-matt-135", label: "Premazni Matt 135 g/m²", weight: 135 },
    ],
    sides: ["4/4 obojestransko"],
    lamination: ["none", "matt", "gloss"],
    minQty: 1, maxQty: 10000,
    qtyBreaks: [1, 2, 5, 10, 25, 50, 100, 250, 500, 1000],
    pricing: [
      {
        source: "tiskarna", priceType: "gross", deliveryDays: "5 dni",
        tiers: { standard: [{ qty: 1, price: 11.89 }, { qty: 5, price: 35.20 }] },
      },
      {
        source: "etiskarna", priceType: "gross", deliveryDays: "5 dni",
        tiers: {
          standard: [{ qty: 1, price: 10.94 }, { qty: 2, price: 19.94 }, { qty: 3, price: 20.19 }, { qty: 5, price: 30.49 }],
          express: [{ qty: 1, price: 17.18 }, { qty: 2, price: 28.44 }, { qty: 3, price: 28.75 }, { qty: 5, price: 41.62 }],
          priority: [{ qty: 1, price: 31.93 }, { qty: 2, price: 44.54 }, { qty: 3, price: 44.89 }, { qty: 5, price: 59.31 }],
        },
      },
    ],
  },
  {
    id: "zlozenke",
    name: "Zloženke",
    category: "publikacije",
    icon: "fa-regular fa-layer-group",
    formats: [
      { code: "A5-1fold", width: 210, height: 148, label: "A5 (1 pregib)" },
      { code: "DL-1fold", width: 200, height: 210, label: "Double DL (1 pregib)" },
      { code: "A4-1fold", width: 297, height: 210, label: "A4 (1 pregib)" },
      { code: "A4-2fold", width: 297, height: 210, label: "A4 (2 pregiba)" },
      { code: "A3-1fold", width: 420, height: 297, label: "A3 (1 pregib)" },
      { code: "A3-2fold", width: 420, height: 297, label: "A3 (2 pregiba)" },
    ],
    papers: [
      { id: "coated-matt-150", label: "Premazni Matt 150 g/m²", weight: 150 },
      { id: "coated-matt-200", label: "Premazni Matt 200 g/m²", weight: 200 },
      { id: "coated-matt-250", label: "Premazni Matt 250 g/m²", weight: 250 },
      { id: "coated-matt-300", label: "Premazni Matt 300 g/m²", weight: 300 },
    ],
    sides: ["4/4 obojestransko"],
    lamination: ["none"],
    minQty: 50,
    maxQty: 1000,
    qtyBreaks: [50, 100, 300, 500, 1000],
    pricing: [
      {
        source: "vizitka", priceType: "gross", deliveryDays: "1 dan",
        tiers: {
          standard: [
            { qty: 50, price: 64.90 }, { qty: 100, price: 84.37 },
            { qty: 300, price: 136.29 }, { qty: 500, price: 162.25 },
            { qty: 1000, price: 298.54 },
          ],
        },
      },
    ],
  },
  {
    id: "knjige", name: "Knjige", category: "publikacije", icon: "fa-regular fa-books",
    formats: [
      { code: "A5", width: 148, height: 210, label: "A5 (148×210 mm)" },
      { code: "A4", width: 210, height: 297, label: "A4 (210×297 mm)" },
    ],
    papers: [
      { id: "offset-90", label: "Offset papir 90 g/m²", weight: 90 },
      { id: "coated-matt-135", label: "Premazni Matt 135 g/m²", weight: 135 },
    ],
    sides: ["1/1 črno-belo", "4/4 barvno"],
    lamination: ["none", "matt", "gloss"],
    minQty: 1, maxQty: 5000,
    qtyBreaks: [1, 5, 10, 20, 50, 100, 250, 500],
    pricing: [
      {
        source: "tiskarna", priceType: "gross", deliveryDays: "8 dni",
        tiers: { standard: [{ qty: 1, price: 36.52 }, { qty: 5, price: 75.64 }, { qty: 10, price: 92.59 }] },
      },
      {
        source: "etiskarna", priceType: "gross", deliveryDays: "8 dni",
        tiers: { standard: [{ qty: 1, price: 33.64 }, { qty: 5, price: 69.09 }, { qty: 10, price: 84.46 }, { qty: 20, price: 165.56 }] },
      },
    ],
  },
  {
    id: "revije", name: "Revije", category: "publikacije", icon: "fa-regular fa-newspaper",
    formats: [
      { code: "A5", width: 148, height: 210, label: "A5 (148×210 mm)" },
      { code: "A4", width: 210, height: 297, label: "A4 (210×297 mm)" },
    ],
    papers: [
      { id: "coated-gloss-115", label: "Z leskom 115 g/m²", weight: 115 },
      { id: "coated-matt-250", label: "Premazni Matt 250 g/m² (ovitek)", weight: 250 },
    ],
    sides: ["4/4 obojestransko"],
    lamination: ["none", "matt", "gloss"],
    minQty: 1, maxQty: 5000,
    qtyBreaks: [1, 5, 10, 20, 50, 100, 250, 500],
    pricing: [
      {
        source: "tiskarna", priceType: "gross", deliveryDays: "7 dni",
        tiers: { standard: [{ qty: 1, price: 61.03 }, { qty: 5, price: 80.66 }, { qty: 20, price: 105.90 }] },
      },
      {
        source: "etiskarna", priceType: "gross", deliveryDays: "7 dni",
        tiers: {
          standard: [{ qty: 1, price: 52.16 }, { qty: 5, price: 68.63 }, { qty: 20, price: 89.80 }],
          express: [{ qty: 1, price: 68.72 }, { qty: 5, price: 89.30 }, { qty: 20, price: 115.77 }],
          priority: [{ qty: 1, price: 89.65 }, { qty: 5, price: 112.70 }, { qty: 20, price: 142.35 }],
        },
      },
    ],
  },
  {
    id: "koledarji", name: "Koledarji", category: "publikacije", icon: "fa-regular fa-calendar",
    formats: [
      { code: "A4", width: 210, height: 297, label: "A4 (210×297 mm)" },
      { code: "A3", width: 297, height: 420, label: "A3 (297×420 mm)" },
    ],
    papers: [
      { id: "coated-gloss-135", label: "Z leskom 135 g/m²", weight: 135 },
      { id: "coated-matt-135", label: "Premazni Matt 135 g/m²", weight: 135 },
    ],
    sides: ["4/4 obojestransko"],
    lamination: ["none"],
    minQty: 1, maxQty: 1000,
    qtyBreaks: [1, 5, 10, 25, 50, 100, 250],
    pricing: [
      {
        source: "tiskarna", priceType: "gross", deliveryDays: "6 dni",
        tiers: { standard: [{ qty: 1, price: 23.24 }, { qty: 5, price: 46.68 }] },
      },
      {
        source: "etiskarna", priceType: "gross", deliveryDays: "6 dni",
        tiers: {
          standard: [{ qty: 1, price: 21.62 }, { qty: 5, price: 42.85 }],
          express: [{ qty: 1, price: 30.53 }, { qty: 5, price: 57.08 }],
          priority: [{ qty: 1, price: 46.89 }, { qty: 5, price: 76.62 }],
        },
      },
    ],
  },
  {
    id: "nalepke", name: "Nalepke / Etikete", category: "nalepke-embalaza", icon: "fa-regular fa-tag",
    formats: [
      { code: "A7", width: 74, height: 105, label: "A7 (74×105 mm)" },
      { code: "A6", width: 105, height: 148, label: "A6 (105×148 mm)" },
      { code: "A5", width: 148, height: 210, label: "A5 (148×210 mm)" },
    ],
    papers: [
      { id: "adhesive-80", label: "Samolepilni papir 80 g/m²", weight: 80 },
      { id: "adhesive-gloss", label: "Samolepilni z leskom", weight: 80 },
    ],
    sides: ["4/0 enostransko"],
    lamination: ["none", "matt", "gloss"],
    minQty: 50, maxQty: 50000,
    qtyBreaks: [50, 100, 250, 500, 750, 1000, 2500, 5000],
    pricing: [
      {
        source: "tiskarna", priceType: "gross", deliveryDays: "4 dni",
        tiers: { standard: [{ qty: 50, price: 23.20 }, { qty: 500, price: 50.95 }, { qty: 750, price: 64.81 }] },
      },
      {
        source: "etiskarna", priceType: "gross", deliveryDays: "4 dni",
        tiers: {
          standard: [{ qty: 50, price: 21.58 }, { qty: 250, price: 30.03 }, { qty: 500, price: 46.72 }],
          express: [{ qty: 50, price: 30.48 }, { qty: 250, price: 41.05 }, { qty: 500, price: 61.92 }],
          priority: [{ qty: 50, price: 46.83 }, { qty: 250, price: 58.66 }, { qty: 500, price: 82.03 }],
        },
      },
    ],
  },
  {
    id: "kuverte", name: "Kuverte", category: "nalepke-embalaza", icon: "fa-regular fa-envelope",
    formats: [
      { code: "DL", width: 110, height: 220, label: "DL (110×220 mm)" },
      { code: "C5", width: 162, height: 229, label: "C5 (162×229 mm)" },
      { code: "C4", width: 229, height: 324, label: "C4 (229×324 mm)" },
    ],
    papers: [{ id: "offset-80", label: "Offset papir 80 g/m²", weight: 80 }],
    sides: ["4/0 enostransko", "4/4 obojestransko"],
    lamination: ["none"],
    minQty: 100, maxQty: 10000,
    qtyBreaks: [100, 250, 500, 1000, 2500, 5000],
    pricing: [
      {
        source: "tiskarna", priceType: "gross", deliveryDays: "7 dni",
        tiers: { standard: [{ qty: 100, price: 75.79 }, { qty: 500, price: 110.84 }, { qty: 1000, price: 143.10 }] },
      },
      {
        source: "etiskarna", priceType: "gross", deliveryDays: "7 dni",
        tiers: {
          standard: [{ qty: 100, price: 69.35 }, { qty: 500, price: 101.19 }, { qty: 1000, price: 130.55 }],
          express: [{ qty: 100, price: 89.88 }, { qty: 500, price: 129.44 }, { qty: 1000, price: 165.83 }],
          priority: [{ qty: 100, price: 113.20 }, { qty: 500, price: 157.39 }, { qty: 1000, price: 197.98 }],
        },
      },
    ],
  },
  {
    id: "zlozljive-skatle", name: "Zložljive škatlice", category: "nalepke-embalaza", icon: "fa-regular fa-box",
    formats: [{ code: "80x40x240", width: 80, height: 240, label: "80×40×240 mm" }],
    papers: [{ id: "chrome-300", label: "Kromo karton 300 g/m²", weight: 300 }],
    sides: ["4/0 enostransko", "4/4 obojestransko"],
    lamination: ["none", "matt", "gloss"],
    minQty: 1, maxQty: 5000,
    qtyBreaks: [1, 5, 10, 25, 50, 100, 250],
    pricing: [
      {
        source: "etiskarna", priceType: "gross", deliveryDays: "9 dni",
        tiers: { standard: [{ qty: 1, price: 18.44 }, { qty: 5, price: 58.70 }, { qty: 10, price: 91.23 }, { qty: 25, price: 170.44 }, { qty: 50, price: 323.91 }] },
      },
    ],
  },
  {
    id: "rolo-stojala", name: "Rolo stojala", category: "reklamni-izdelki", icon: "fa-regular fa-presentation-screen",
    formats: [
      { code: "800x2000", width: 800, height: 2000, label: "Classic 800×2000 mm" },
      { code: "850x2000", width: 850, height: 2000, label: "850×2000 mm" },
      { code: "1000x2000", width: 1000, height: 2000, label: "1000×2000 mm" },
    ],
    papers: [{ id: "pvc-510", label: "PVC ponjava 510 g/m²", weight: 510 }],
    sides: ["4/0 enostransko"],
    lamination: ["none"],
    minQty: 1, maxQty: 50,
    qtyBreaks: [1, 2, 3, 5, 10],
    pricing: [
      {
        source: "tiskarna", priceType: "gross", deliveryDays: "4 dni",
        tiers: { standard: [{ qty: 1, price: 77.36 }, { qty: 2, price: 156.02 }, { qty: 5, price: 400.26 }] },
      },
      {
        source: "etiskarna", priceType: "gross", deliveryDays: "4 dni",
        tiers: {
          standard: [{ qty: 1, price: 70.76 }, { qty: 5, price: 363.43 }],
          express: [{ qty: 1, price: 91.66 }, { qty: 5, price: 457.23 }],
          priority: [{ qty: 1, price: 115.20 }, { qty: 5, price: 524.52 }],
        },
      },
    ],
  },
  {
    id: "beachflags", name: "Beachflags", category: "reklamni-izdelki", icon: "fa-regular fa-flag-swallowtail",
    formats: [{ code: "610x1550", width: 610, height: 1550, label: "Zaobljeni 610×1550 mm" }],
    papers: [{ id: "flag-110", label: "Blago za zastave 110 g/m²", weight: 110 }],
    sides: ["4/0 enostransko"],
    lamination: ["none"],
    minQty: 1, maxQty: 50,
    qtyBreaks: [1, 2, 3, 5, 10],
    pricing: [
      {
        source: "tiskarna", priceType: "gross", deliveryDays: "5 dni",
        tiers: { standard: [{ qty: 1, price: 194.35 }, { qty: 5, price: 971.75 }] },
      },
      {
        source: "etiskarna", priceType: "gross", deliveryDays: "5 dni",
        tiers: {
          standard: [{ qty: 1, price: 164.20 }, { qty: 5, price: 821.03 }],
          express: [{ qty: 1, price: 208.46 }, { qty: 5, price: 1042.28 }],
          priority: [{ qty: 1, price: 246.01 }, { qty: 5, price: 1230.04 }],
        },
      },
    ],
  },
  {
    id: "zastave", name: "Zastave", category: "reklamni-izdelki", icon: "fa-regular fa-flag",
    formats: [
      { code: "800x1200", width: 800, height: 1200, label: "800×1200 mm" },
      { code: "1000x1500", width: 1000, height: 1500, label: "1000×1500 mm" },
    ],
    papers: [{ id: "flag-110", label: "Blago za zastave 110 g/m²", weight: 110 }],
    sides: ["4/0 enostransko"],
    lamination: ["none"],
    minQty: 1, maxQty: 100,
    qtyBreaks: [1, 2, 5, 10, 25, 50],
    pricing: [
      {
        source: "tiskarna", priceType: "gross", deliveryDays: "5 dni",
        tiers: { standard: [{ qty: 1, price: 25.64 }, { qty: 5, price: 100.49 }] },
      },
      {
        source: "etiskarna", priceType: "gross", deliveryDays: "5 dni",
        tiers: {
          standard: [{ qty: 1, price: 25.12 }, { qty: 5, price: 97.94 }],
          express: [{ qty: 1, price: 34.91 }, { qty: 5, price: 125.95 }],
          priority: [{ qty: 1, price: 51.78 }, { qty: 5, price: 153.74 }],
        },
      },
    ],
  },
  {
    id: "cerade", name: "Cerade / Transparenti", category: "reklamni-izdelki", icon: "fa-regular fa-bullseye",
    formats: [
      { code: "500x1000", width: 500, height: 1000, label: "500×1000 mm" },
      { code: "1000x2000", width: 1000, height: 2000, label: "1000×2000 mm" },
      { code: "2000x3000", width: 2000, height: 3000, label: "2000×3000 mm" },
    ],
    papers: [{ id: "pvc-500", label: "PVC ponjava 500 g/m²", weight: 500 }],
    sides: ["4/0 enostransko"],
    lamination: ["none"],
    minQty: 1, maxQty: 50,
    qtyBreaks: [1, 2, 3, 5, 10],
    pricing: [
      {
        source: "tiskarna", priceType: "gross", deliveryDays: "4 dni",
        tiers: { standard: [{ qty: 1, price: 23.09 }, { qty: 5, price: 59.64 }] },
      },
      {
        source: "etiskarna", priceType: "gross", deliveryDays: "4 dni",
        tiers: {
          standard: [{ qty: 1, price: 20.32 }, { qty: 5, price: 51.24 }],
          express: [{ qty: 1, price: 28.92 }, { qty: 5, price: 67.18 }],
          priority: [{ qty: 1, price: 45.08 }, { qty: 5, price: 87.74 }],
        },
      },
    ],
  },
  {
    id: "majice", name: "Kratke majice", category: "reklamni-izdelki", icon: "fa-regular fa-shirt",
    formats: [
      { code: "S", width: 0, height: 0, label: "S" },
      { code: "M", width: 0, height: 0, label: "M" },
      { code: "L", width: 0, height: 0, label: "L" },
      { code: "XL", width: 0, height: 0, label: "XL" },
    ],
    papers: [{ id: "cotton-white", label: "Bel bombaž", weight: 0 }],
    sides: ["Spredaj", "Spredaj + zadaj"],
    lamination: ["none"],
    minQty: 1, maxQty: 500,
    qtyBreaks: [1, 5, 10, 25, 50, 100],
    pricing: [
      {
        source: "tiskarna", priceType: "gross", deliveryDays: "5 dni",
        tiers: { standard: [{ qty: 1, price: 20.55 }, { qty: 5, price: 77.94 }] },
      },
      {
        source: "etiskarna", priceType: "gross", deliveryDays: "5 dni",
        tiers: {
          standard: [{ qty: 1, price: 19.18 }, { qty: 5, price: 71.18 }],
          express: [{ qty: 1, price: 27.48 }, { qty: 5, price: 92.48 }],
          priority: [{ qty: 1, price: 43.47 }, { qty: 5, price: 116.27 }],
        },
      },
    ],
  },
  {
    id: "pisalni-bloki", name: "Pisalni bloki", category: "pisarnisko", icon: "fa-regular fa-clipboard",
    formats: [
      { code: "A4", width: 210, height: 297, label: "A4 (210×297 mm)" },
      { code: "A5", width: 148, height: 210, label: "A5 (148×210 mm)" },
    ],
    papers: [{ id: "offset-90", label: "Offset papir 90 g/m²", weight: 90 }],
    sides: ["4/0 enostransko", "4/4 obojestransko"],
    lamination: ["none"],
    minQty: 1, maxQty: 500,
    qtyBreaks: [1, 5, 10, 20, 50, 100],
    pricing: [
      {
        source: "etiskarna", priceType: "gross", deliveryDays: "6 dni",
        tiers: {
          standard: [{ qty: 1, price: 25.86 }, { qty: 5, price: 79.17 }, { qty: 20, price: 96.30 }],
          express: [{ qty: 1, price: 35.85 }, { qty: 5, price: 102.49 }, { qty: 20, price: 123.56 }],
          priority: [{ qty: 1, price: 52.83 }, { qty: 5, price: 127.47 }, { qty: 20, price: 150.93 }],
        },
      },
    ],
  },
  {
    id: "predstavitvene-mape", name: "Predstavitvene mape", category: "pisarnisko", icon: "fa-regular fa-folder-open",
    formats: [{ code: "A4", width: 210, height: 297, label: "DIN A4" }],
    papers: [
      { id: "coated-gloss-350", label: "Z leskom 350 g/m²", weight: 350 },
      { id: "coated-matt-350", label: "Premazni Matt 350 g/m²", weight: 350 },
    ],
    sides: ["4/0 enostransko", "4/4 obojestransko"],
    lamination: ["none", "matt", "gloss"],
    minQty: 1, maxQty: 5000,
    qtyBreaks: [1, 5, 10, 25, 50, 100, 250],
    pricing: [
      {
        source: "tiskarna", priceType: "gross", deliveryDays: "5 dni",
        tiers: { standard: [{ qty: 1, price: 22.48 }, { qty: 5, price: 45.92 }] },
      },
      {
        source: "etiskarna", priceType: "gross", deliveryDays: "5 dni",
        tiers: {
          standard: [{ qty: 1, price: 20.93 }, { qty: 5, price: 42.16 }],
          express: [{ qty: 1, price: 29.67 }, { qty: 5, price: 56.21 }],
          priority: [{ qty: 1, price: 45.92 }, { qty: 5, price: 75.64 }],
        },
      },
    ],
  },
  {
    id: "beleznice", name: "Beležnice", category: "pisarnisko", icon: "fa-regular fa-notebook",
    formats: [
      { code: "A5", width: 148, height: 210, label: "A5 (148×210 mm)" },
      { code: "A4", width: 210, height: 297, label: "A4 (210×297 mm)" },
    ],
    papers: [{ id: "offset-120", label: "Offset papir 120 g/m²", weight: 120 }],
    sides: ["4/4 obojestransko"],
    lamination: ["none", "matt"],
    minQty: 1, maxQty: 500,
    qtyBreaks: [1, 5, 10, 25, 50, 100],
    pricing: [
      {
        source: "etiskarna", priceType: "gross", deliveryDays: "16 dni",
        tiers: { standard: [{ qty: 1, price: 38.74 }, { qty: 10, price: 122.04 }, { qty: 50, price: 708.67 }, { qty: 100, price: 1442.82 }] },
      },
    ],
  },
];

// ── Helper Functions ────────────────────────────────────────

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductsByCategory(categoryId) {
  const cat = CATEGORIES.find((c) => c.id === categoryId);
  if (!cat) return [];
  return cat.products.map((id) => getProductById(id)).filter(Boolean);
}

export const SOURCE_LABELS = {
  demago: { name: "Demago", color: "#e74c3c" },
  tiskarna: { name: "Tiskarna Online", color: "#3498db" },
  etiskarna: { name: "eTiskarna", color: "#2ecc71" },
  vizitka: { name: "Vizitka.com", color: "#9b59b6" },
};
