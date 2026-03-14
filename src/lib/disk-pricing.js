// ═══════════════════════════════════════════════════════════════
// DISK SHIPPING — Our Pricing (Tisk Šepic)
// ═══════════════════════════════════════════════════════════════

import { interpolatePrice } from "./calculator-utils";

const VAT_RATE = 0.22;

function roundPrice(n) {
  return Math.round(n * 100) / 100;
}

export const DISK_PRICING = [
  {
    productId: "letaki", deliveryDays: "3–5 dni",
    tiers: {
      standard: [
        { qty: 10, price: 41.86 }, { qty: 100, price: 25.79 },
        { qty: 125, price: 29.52 }, { qty: 150, price: 29.96 },
        { qty: 200, price: 30.84 }, { qty: 250, price: 50.78 },
        { qty: 500, price: 59.54 }, { qty: 1000, price: 72.75 },
        { qty: 2000, price: 102.13 }, { qty: 5000, price: 174.53 },
        { qty: 10000, price: 307.57 },
      ],
    },
  },
  {
    productId: "vizitke", deliveryDays: "3–5 dni",
    tiers: {
      standard: [{ qty: 100, price: 20.82 }, { qty: 125, price: 21.82 }, { qty: 150, price: 21.98 }, { qty: 200, price: 21.80 }],
      express: [{ qty: 100, price: 30.14 }, { qty: 125, price: 30.79 }, { qty: 150, price: 30.99 }, { qty: 200, price: 31.40 }],
      priority: [{ qty: 100, price: 46.45 }, { qty: 125, price: 47.17 }, { qty: 150, price: 47.40 }, { qty: 200, price: 47.85 }],
    },
  },
  {
    productId: "razglednice", deliveryDays: "3–5 dni",
    tiers: {
      standard: [{ qty: 5, price: 14.54 }, { qty: 50, price: 18.56 }],
      express: [{ qty: 5, price: 22.12 }, { qty: 50, price: 27.35 }],
      priority: [{ qty: 5, price: 37.47 }, { qty: 50, price: 43.31 }],
    },
  },
  {
    productId: "plakati", deliveryDays: "3–5 dni",
    tiers: {
      standard: [{ qty: 1, price: 23.01 }, { qty: 5, price: 68.96 }],
      express: [{ qty: 1, price: 32.26 }, { qty: 5, price: 89.71 }],
      priority: [{ qty: 1, price: 48.83 }, { qty: 5, price: 113.16 }],
    },
  },
  {
    productId: "dopisni-listi", deliveryDays: "3–5 dni",
    tiers: {
      standard: [{ qty: 500, price: 49.32 }, { qty: 1000, price: 59.39 }, { qty: 2000, price: 84.63 }],
      express: [{ qty: 500, price: 64.84 }, { qty: 1000, price: 77.37 }, { qty: 2000, price: 108.79 }],
      priority: [{ qty: 500, price: 85.16 }, { qty: 1000, price: 99.16 }, { qty: 2000, price: 134.29 }],
    },
  },
  {
    productId: "brosure", deliveryDays: "3–5 dni",
    tiers: {
      standard: [{ qty: 1, price: 10.94 }, { qty: 2, price: 19.94 }, { qty: 3, price: 20.19 }, { qty: 5, price: 30.49 }],
      express: [{ qty: 1, price: 17.18 }, { qty: 2, price: 28.44 }, { qty: 3, price: 28.75 }, { qty: 5, price: 41.62 }],
      priority: [{ qty: 1, price: 31.93 }, { qty: 2, price: 44.54 }, { qty: 3, price: 44.89 }, { qty: 5, price: 59.31 }],
    },
  },
  {
    productId: "knjige", deliveryDays: "5–8 dni",
    tiers: { standard: [{ qty: 1, price: 33.64 }, { qty: 5, price: 69.09 }, { qty: 10, price: 84.46 }, { qty: 20, price: 165.56 }] },
  },
  {
    productId: "revije", deliveryDays: "5–7 dni",
    tiers: {
      standard: [{ qty: 1, price: 52.16 }, { qty: 5, price: 68.63 }, { qty: 20, price: 89.80 }],
      express: [{ qty: 1, price: 68.72 }, { qty: 5, price: 89.30 }, { qty: 20, price: 115.77 }],
      priority: [{ qty: 1, price: 89.65 }, { qty: 5, price: 112.70 }, { qty: 20, price: 142.35 }],
    },
  },
  {
    productId: "koledarji", deliveryDays: "4–6 dni",
    tiers: {
      standard: [{ qty: 1, price: 21.62 }, { qty: 5, price: 42.85 }],
      express: [{ qty: 1, price: 30.53 }, { qty: 5, price: 57.08 }],
      priority: [{ qty: 1, price: 46.89 }, { qty: 5, price: 76.62 }],
    },
  },
  {
    productId: "nalepke", deliveryDays: "3–5 dni",
    tiers: {
      standard: [{ qty: 50, price: 21.58 }, { qty: 250, price: 30.03 }, { qty: 500, price: 46.72 }, { qty: 750, price: 64.81 }],
      express: [{ qty: 50, price: 30.48 }, { qty: 250, price: 41.05 }, { qty: 500, price: 61.92 }],
      priority: [{ qty: 50, price: 46.83 }, { qty: 250, price: 58.66 }, { qty: 500, price: 82.03 }],
    },
  },
  {
    productId: "kuverte", deliveryDays: "5–7 dni",
    tiers: {
      standard: [{ qty: 100, price: 69.35 }, { qty: 500, price: 101.19 }, { qty: 1000, price: 130.55 }],
      express: [{ qty: 100, price: 89.88 }, { qty: 500, price: 129.44 }, { qty: 1000, price: 165.83 }],
      priority: [{ qty: 100, price: 113.20 }, { qty: 500, price: 157.39 }, { qty: 1000, price: 197.98 }],
    },
  },
  {
    productId: "zlozljive-skatle", deliveryDays: "7–9 dni",
    tiers: { standard: [{ qty: 1, price: 18.44 }, { qty: 5, price: 58.70 }, { qty: 10, price: 91.23 }, { qty: 25, price: 170.44 }, { qty: 50, price: 323.91 }] },
  },
  {
    productId: "rolo-stojala", deliveryDays: "3–5 dni",
    tiers: {
      standard: [{ qty: 1, price: 70.76 }, { qty: 2, price: 141.52 }, { qty: 5, price: 363.43 }],
      express: [{ qty: 1, price: 91.66 }, { qty: 5, price: 457.23 }],
      priority: [{ qty: 1, price: 115.20 }, { qty: 5, price: 524.52 }],
    },
  },
  {
    productId: "beachflags", deliveryDays: "3–5 dni",
    tiers: {
      standard: [{ qty: 1, price: 164.20 }, { qty: 5, price: 821.03 }],
      express: [{ qty: 1, price: 208.46 }, { qty: 5, price: 1042.28 }],
      priority: [{ qty: 1, price: 246.01 }, { qty: 5, price: 1230.04 }],
    },
  },
  {
    productId: "zastave", deliveryDays: "3–5 dni",
    tiers: {
      standard: [{ qty: 1, price: 25.12 }, { qty: 5, price: 97.94 }],
      express: [{ qty: 1, price: 34.91 }, { qty: 5, price: 125.95 }],
      priority: [{ qty: 1, price: 51.78 }, { qty: 5, price: 153.74 }],
    },
  },
  {
    productId: "cerade", deliveryDays: "3–5 dni",
    tiers: {
      standard: [{ qty: 1, price: 20.32 }, { qty: 5, price: 51.24 }],
      express: [{ qty: 1, price: 28.92 }, { qty: 5, price: 67.18 }],
      priority: [{ qty: 1, price: 45.08 }, { qty: 5, price: 87.74 }],
    },
  },
  {
    productId: "majice", deliveryDays: "3–5 dni",
    tiers: {
      standard: [{ qty: 1, price: 19.18 }, { qty: 5, price: 71.18 }],
      express: [{ qty: 1, price: 27.48 }, { qty: 5, price: 92.48 }],
      priority: [{ qty: 1, price: 43.47 }, { qty: 5, price: 116.27 }],
    },
  },
  {
    productId: "pisalni-bloki", deliveryDays: "4–6 dni",
    tiers: {
      standard: [{ qty: 1, price: 25.86 }, { qty: 5, price: 79.17 }, { qty: 20, price: 96.30 }],
      express: [{ qty: 1, price: 35.85 }, { qty: 5, price: 102.49 }, { qty: 20, price: 123.56 }],
      priority: [{ qty: 1, price: 52.83 }, { qty: 5, price: 127.47 }, { qty: 20, price: 150.93 }],
    },
  },
  {
    productId: "predstavitvene-mape", deliveryDays: "3–5 dni",
    tiers: {
      standard: [{ qty: 1, price: 20.93 }, { qty: 5, price: 42.16 }],
      express: [{ qty: 1, price: 29.67 }, { qty: 5, price: 56.21 }],
      priority: [{ qty: 1, price: 45.92 }, { qty: 5, price: 75.64 }],
    },
  },
  {
    productId: "beleznice", deliveryDays: "10–16 dni",
    tiers: { standard: [{ qty: 1, price: 38.74 }, { qty: 10, price: 122.04 }, { qty: 50, price: 708.67 }, { qty: 100, price: 1442.82 }] },
  },
];

export function calculateDiskPrice(productId, qty, tier) {
  const dp = DISK_PRICING.find((p) => p.productId === productId);
  if (!dp) return null;

  const tierData = dp.tiers[tier] || dp.tiers.standard;
  if (!tierData || tierData.length === 0) return null;

  const grossTotal = interpolatePrice(tierData, qty);
  if (grossTotal === null) return null;

  const netTotal = grossTotal / (1 + VAT_RATE);

  return {
    grossTotal: roundPrice(grossTotal),
    netTotal: roundPrice(netTotal),
    grossPerUnit: roundPrice(grossTotal / qty),
    netPerUnit: roundPrice(netTotal / qty),
    deliveryDays: dp.deliveryDays,
    available: true,
  };
}
