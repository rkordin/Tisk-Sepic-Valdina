// ═══════════════════════════════════════════════════════════════
// PRINTING CALCULATOR — Price Calculation Utilities
// ═══════════════════════════════════════════════════════════════

const VAT_RATE = 0.22;

export function interpolatePrice(points, qty) {
  if (points.length === 0) return null;
  if (points.length === 1) return points[0].price;

  const sorted = [...points].sort((a, b) => a.qty - b.qty);
  const exact = sorted.find((p) => p.qty === qty);
  if (exact) return exact.price;

  if (qty < sorted[0].qty) {
    const [p1, p2] = sorted;
    const ratio = (qty - p1.qty) / (p2.qty - p1.qty);
    return Math.max(0, p1.price + ratio * (p2.price - p1.price));
  }

  if (qty > sorted[sorted.length - 1].qty) {
    const p1 = sorted[sorted.length - 2];
    const p2 = sorted[sorted.length - 1];
    const ratio = (qty - p1.qty) / (p2.qty - p1.qty);
    return p1.price + ratio * (p2.price - p1.price);
  }

  for (let i = 0; i < sorted.length - 1; i++) {
    const p1 = sorted[i];
    const p2 = sorted[i + 1];
    if (qty >= p1.qty && qty <= p2.qty) {
      const ratio = (qty - p1.qty) / (p2.qty - p1.qty);
      return p1.price + ratio * (p2.price - p1.price);
    }
  }

  return null;
}

export function netToGross(net) {
  return net * (1 + VAT_RATE);
}

export function grossToNet(gross) {
  return gross / (1 + VAT_RATE);
}

function roundPrice(n) {
  return Math.round(n * 100) / 100;
}

function getSourceName(source) {
  const names = {
    demago: "Demago",
    tiskarna: "Tiskarna Online",
    etiskarna: "eTiskarna",
  };
  return names[source] || source;
}

export function calculatePrices(pricing, qty, tier) {
  const results = pricing.map((sp) => {
    const tierData = sp.tiers[tier] || sp.tiers.standard;

    if (!tierData || tierData.length === 0) {
      return {
        source: sp.source, sourceName: getSourceName(sp.source),
        netTotal: 0, grossTotal: 0, netPerUnit: 0, grossPerUnit: 0,
        deliveryDays: sp.deliveryDays, tier, available: false,
      };
    }

    const totalPrice = interpolatePrice(tierData, qty);
    if (totalPrice === null) {
      return {
        source: sp.source, sourceName: getSourceName(sp.source),
        netTotal: 0, grossTotal: 0, netPerUnit: 0, grossPerUnit: 0,
        deliveryDays: sp.deliveryDays, tier, available: false,
      };
    }

    let netTotal, grossTotal;
    if (sp.priceType === "net") {
      netTotal = totalPrice;
      grossTotal = netToGross(totalPrice);
    } else {
      grossTotal = totalPrice;
      netTotal = grossToNet(totalPrice);
    }

    return {
      source: sp.source,
      sourceName: getSourceName(sp.source),
      netTotal: roundPrice(netTotal),
      grossTotal: roundPrice(grossTotal),
      netPerUnit: roundPrice(netTotal / qty),
      grossPerUnit: roundPrice(grossTotal / qty),
      deliveryDays: sp.deliveryDays,
      tier,
      available: true,
    };
  });

  const available = results.filter((r) => r.available);
  if (available.length > 0) {
    const cheapest = available.reduce((min, r) =>
      r.grossTotal < min.grossTotal ? r : min
    );
    cheapest.isCheapest = true;
  }

  return results;
}

export function formatPrice(price) {
  return price.toLocaleString("sl-SI", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function getAvailableTiers(pricing) {
  const tiers = new Set();
  tiers.add("standard");
  for (const sp of pricing) {
    if (sp.tiers.express && sp.tiers.express.length > 0) tiers.add("express");
    if (sp.tiers.priority && sp.tiers.priority.length > 0) tiers.add("priority");
  }
  return Array.from(tiers);
}
