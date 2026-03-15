import React, { useState, useMemo } from "react";
import {
  CATEGORIES,
  getProductById,
  getProductsByCategory,
  LAMINATION_OPTIONS,
  DELIVERY_TIERS,
  SOURCE_LABELS,
} from "../../lib/calculator-data";
import {
  calculatePrices,
  getAvailableTiers,
  formatPrice,
} from "../../lib/calculator-utils";
import { calculateDiskPrice } from "../../lib/disk-pricing";

// Product images
import imgLetaki from "../../assets/img/products/letaki.png";
import imgVizitke from "../../assets/img/products/vizitke.png";
import imgRazglednice from "../../assets/img/products/razglednice.png";
import imgPlakati from "../../assets/img/products/plakati.png";
import imgDopisniListi from "../../assets/img/products/dopisni-listi.png";
import imgBrosure from "../../assets/img/products/brosure.png";
import imgKnjige from "../../assets/img/products/knjige.png";
import imgRevije from "../../assets/img/products/revije.png";
import imgKoledarji from "../../assets/img/products/koledarji.png";
import imgNalepke from "../../assets/img/products/nalepke.jpg";
import imgKuverte from "../../assets/img/products/kuverte.webp";
import imgZlozljiveSkatle from "../../assets/img/products/zlozljive-skatle.png";
import imgRoloStojala from "../../assets/img/products/rolo-stojala.jpg";
import imgBeachflags from "../../assets/img/products/beachflags.jpeg";
import imgZastave from "../../assets/img/products/zastave.png";
import imgCerade from "../../assets/img/products/cerade.webp";
import imgMajice from "../../assets/img/products/majice.jpg";
import imgPisalniBloki from "../../assets/img/products/pisalni-bloki.jpg";
import imgPredstavitvene from "../../assets/img/products/predstavitvene-mape.png";
import imgBeleznice from "../../assets/img/products/beleznice.png";

// New products (reuse closest matching image until dedicated ones are added)
const imgZlozljiveVizitke = imgVizitke; // folded business cards — reuse vizitke image
const imgVabila = imgRazglednice; // invitations — reuse razglednice image
const imgZlozenke = imgBrosure; // folded brochures — reuse brosure image

const PRODUCT_IMAGES = {
  letaki: imgLetaki,
  vizitke: imgVizitke,
  "zlozljive-vizitke": imgZlozljiveVizitke,
  vabila: imgVabila,
  razglednice: imgRazglednice,
  plakati: imgPlakati,
  "dopisni-listi": imgDopisniListi,
  brosure: imgBrosure,
  zlozenke: imgZlozenke,
  knjige: imgKnjige,
  revije: imgRevije,
  koledarji: imgKoledarji,
  nalepke: imgNalepke,
  kuverte: imgKuverte,
  "zlozljive-skatle": imgZlozljiveSkatle,
  "rolo-stojala": imgRoloStojala,
  beachflags: imgBeachflags,
  zastave: imgZastave,
  cerade: imgCerade,
  majice: imgMajice,
  "pisalni-bloki": imgPisalniBloki,
  "predstavitvene-mape": imgPredstavitvene,
  beleznice: imgBeleznice,
};

export const Calculator = () => {
  const [categoryId, setCategoryId] = useState("tiskalni-izdelki");
  const [productId, setProductId] = useState("letaki");
  const [formatCode, setFormatCode] = useState("A6");
  const [paperId, setPaperId] = useState("coated-matt-115");
  const [sides, setSides] = useState("4/4 obojestransko");
  const [lamination, setLamination] = useState("none");
  const [quantity, setQuantity] = useState(100);
  const [customQty, setCustomQty] = useState("");
  const [variations, setVariations] = useState(1);
  const [deliveryTier, setDeliveryTier] = useState("standard");
  const [showPerUnit, setShowPerUnit] = useState(false);
  const [showNet, setShowNet] = useState(false);

  const product = useMemo(() => getProductById(productId), [productId]);
  const categoryProducts = useMemo(() => getProductsByCategory(categoryId), [categoryId]);
  const totalQty = product?.supportsVariations ? quantity * variations : quantity;
  const availableTiers = useMemo(() => (product ? getAvailableTiers(product.pricing) : ["standard"]), [product]);
  const prices = useMemo(() => {
    if (!product) return [];
    return calculatePrices(product.pricing, totalQty, deliveryTier);
  }, [product, totalQty, deliveryTier]);
  const diskPrice = useMemo(() => {
    if (!product) return null;
    return calculateDiskPrice(product.id, totalQty, deliveryTier);
  }, [product, totalQty, deliveryTier]);

  const available = prices.filter((p) => p.available);
  const laminationOptions = product
    ? LAMINATION_OPTIONS.filter((opt) => product.lamination.includes(opt.id))
    : [];

  function handleCategoryChange(catId) {
    const products = getProductsByCategory(catId);
    const first = products[0];
    if (first) {
      setCategoryId(catId);
      setProductId(first.id);
      setFormatCode(first.formats[0]?.code || "");
      setPaperId(first.papers[0]?.id || "");
      setSides(first.sides[0] || "");
      setLamination("none");
      setQuantity(first.qtyBreaks[0] || first.minQty);
      setCustomQty("");
      setVariations(1);
      setDeliveryTier("standard");
    }
  }

  function handleProductChange(id) {
    const p = getProductById(id);
    if (p) {
      setProductId(id);
      setFormatCode(p.formats[0]?.code || "");
      setPaperId(p.papers[0]?.id || "");
      setSides(p.sides[0] || "");
      setLamination("none");
      setQuantity(p.qtyBreaks[0] || p.minQty);
      setCustomQty("");
      setVariations(1);
      setDeliveryTier("standard");
    }
  }

  function handleQuantity(qty) {
    if (product) {
      setQuantity(Math.max(product.minQty, Math.min(product.maxQty, qty)));
      setCustomQty("");
    }
  }

  function handleCustomQty(input) {
    const num = parseInt(input, 10);
    if (!isNaN(num) && product) {
      setQuantity(Math.max(product.minQty, Math.min(product.maxQty, num)));
    }
    setCustomQty(input);
  }

  function handleDownloadPDF() {
    if (!product || !diskPrice?.available) return;
    const fmt = product.formats.find((f) => f.code === formatCode);
    const pap = product.papers.find((p) => p.id === paperId);
    const lam = LAMINATION_OPTIONS.find((l) => l.id === lamination);
    const s = {
      izdelek: product.name, format: fmt?.label || formatCode,
      papir: pap?.label || paperId, tisk: sides,
      plastifikacija: lamination !== "none" ? lam?.label || "" : "Brez",
      variante: product.supportsVariations && variations > 1 ? variations : null,
      kolicinaNaVarianto: quantity,
      kolicina: totalQty, dostava: DELIVERY_TIERS[deliveryTier].label,
      cenaNetTotal: formatPrice(diskPrice.netTotal),
      cenaBrutoTotal: formatPrice(diskPrice.grossTotal),
      cenaNetKos: formatPrice(diskPrice.netPerUnit),
      cenaBrutoKos: formatPrice(diskPrice.grossPerUnit),
      dobavniRok: diskPrice.deliveryDays,
    };
    const html = `<!DOCTYPE html><html lang="sl"><head><meta charset="UTF-8"><title>Ponudba — Tisk Šepic</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Helvetica Neue',Arial,sans-serif;color:#1a1a1a;padding:60px;background:#fff}.header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:50px;padding-bottom:30px;border-bottom:2px solid #e8e6e3}.logo{font-size:28px;font-weight:700}.logo span{color:#F79C18}.date{font-size:13px;color:#7a7572;text-align:right}.title{font-size:36px;font-weight:300;margin-bottom:8px}.subtitle{font-size:14px;color:#7a7572;margin-bottom:50px}table{width:100%;border-collapse:collapse;margin-bottom:40px}th{text-align:left;font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#9e9a96;padding:12px 16px;border-bottom:1px solid #e8e6e3}td{padding:16px;font-size:15px;border-bottom:1px solid #f5f2ef}td:first-child{font-weight:600;color:#7a7572;font-size:13px}.price-row{background:#f9f8f6}.price-row td{font-weight:700;font-size:18px}.price-row td:first-child{font-size:13px;font-weight:600;color:#7a7572}.footer{margin-top:60px;padding-top:30px;border-top:1px solid #e8e6e3;font-size:12px;color:#9e9a96;line-height:1.8}</style></head><body><div class="header"><div><div class="logo">Tisk <span>Šepic</span></div></div><div class="date">Datum: ${new Date().toLocaleDateString("sl-SI")}<br>Ref: KAL-${Date.now().toString(36).toUpperCase()}</div></div><h1 class="title">Informativna ponudba</h1><p class="subtitle">Izračun na podlagi izbranih parametrov</p><table><thead><tr><th>Parameter</th><th>Vrednost</th></tr></thead><tbody><tr><td>Izdelek</td><td>${s.izdelek}</td></tr><tr><td>Format</td><td>${s.format}</td></tr><tr><td>Papir</td><td>${s.papir}</td></tr><tr><td>Tisk</td><td>${s.tisk}</td></tr><tr><td>Plastifikacija</td><td>${s.plastifikacija}</td></tr>${s.variante ? `<tr><td>Variante</td><td>${s.variante} × ${s.kolicinaNaVarianto.toLocaleString("sl-SI")} kosov</td></tr>` : ""}<tr><td>Količina skupaj</td><td>${s.kolicina.toLocaleString("sl-SI")} kosov</td></tr><tr><td>Dostava</td><td>${s.dostava}</td></tr><tr><td>Dobavni rok</td><td>${s.dobavniRok}</td></tr><tr class="price-row"><td>Cena (neto)</td><td>${s.cenaNetTotal} &euro;</td></tr><tr class="price-row"><td>Cena (bruto z DDV)</td><td>${s.cenaBrutoTotal} &euro;</td></tr><tr><td>Na kos (neto)</td><td>${s.cenaNetKos} &euro;</td></tr><tr><td>Na kos (bruto)</td><td>${s.cenaBrutoKos} &euro;</td></tr></tbody></table><div class="footer"><p><strong>Tisk Šepic d.o.o.</strong></p><p>Livada 14, 8000 Novo mesto · Tel: +386 7 39 42 669 · komerciala@tisksepic.si</p><p style="margin-top:16px">Cene so informativne. Za dokončno ponudbo nas kontaktirajte.</p></div></body></html>`;
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const w = window.open(url, "_blank");
    if (w) { w.onload = () => { w.print(); URL.revokeObjectURL(url); }; }
  }

  const currentPrice = diskPrice?.available
    ? (showNet
        ? (showPerUnit ? diskPrice.netPerUnit : diskPrice.netTotal)
        : (showPerUnit ? diskPrice.grossPerUnit : diskPrice.grossTotal))
    : null;

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden", background: "#fff" }}>
      {/* ── Top bar ── */}
      <div style={{
        background: "#1a1a1a", color: "#fff", padding: "12px 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexShrink: 0,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a href="/" style={{ color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "16px" }}>
            TISK <span style={{ color: "#F37820" }}>ŠEPIC</span>
          </a>
          <span style={{ color: "#555", fontSize: "13px" }}>Kalkulator tiska</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {currentPrice !== null && (
            <span style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.5px" }}>
              {formatPrice(currentPrice)} <span style={{ color: "#F37820", fontWeight: 400 }}>&euro;</span>
            </span>
          )}
          <a href="/" style={{
            color: "#888", textDecoration: "none", fontSize: "12px",
            border: "1px solid #333", borderRadius: "4px", padding: "5px 12px",
          }}>
            <i className="fa-regular fa-arrow-left" style={{ marginRight: "6px" }}></i>Nazaj
          </a>
        </div>
      </div>

      {/* ── Main content ── */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden", minHeight: 0 }}>

        {/* ── LEFT: Products ── */}
        <div style={{
          width: "280px", flexShrink: 0, borderRight: "1px solid #eee",
          display: "flex", flexDirection: "column", overflow: "hidden",
        }}>
          {/* Category tabs */}
          <div style={{
            padding: "8px", borderBottom: "1px solid #eee",
            display: "flex", flexWrap: "wrap", gap: "4px", flexShrink: 0,
          }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                style={{
                  padding: "5px 10px", fontSize: "11px", border: "none",
                  borderRadius: "4px", cursor: "pointer",
                  fontWeight: cat.id === categoryId ? 700 : 400,
                  background: cat.id === categoryId ? "#1a1a1a" : "#f3f3f3",
                  color: cat.id === categoryId ? "#fff" : "#666",
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Product list */}
          <div style={{ flex: 1, overflowY: "auto", padding: "4px" }}>
            {categoryProducts.map((p) => {
              const isSelected = p.id === productId;
              const img = PRODUCT_IMAGES[p.id];
              return (
                <div
                  key={p.id}
                  onClick={() => handleProductChange(p.id)}
                  style={{
                    display: "flex", alignItems: "center", gap: "10px",
                    padding: "8px 10px", marginBottom: "2px",
                    borderRadius: "6px", cursor: "pointer",
                    background: isSelected ? "#f5f0eb" : "transparent",
                    border: isSelected ? "1px solid #e0d5c8" : "1px solid transparent",
                    transition: "all 0.15s",
                  }}
                >
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "6px",
                    overflow: "hidden", flexShrink: 0,
                    background: "#f8f8f8",
                  }}>
                    {img && (
                      <img src={img} alt={p.name} loading="lazy" style={{
                        width: "100%", height: "100%", objectFit: "cover",
                      }} />
                    )}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{
                      fontSize: "13px", fontWeight: isSelected ? 700 : 500,
                      color: "#1a1a1a", lineHeight: 1.3,
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                    }}>
                      {p.name}
                    </div>
                    <div style={{ fontSize: "10px", color: "#999", marginTop: "2px" }}>
                      od {p.minQty} kos
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT: Config + Price ── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {product && (
            <>
              {/* Product header with image */}
              <div style={{
                display: "flex", alignItems: "center", gap: "20px",
                padding: "16px 24px", borderBottom: "1px solid #eee", flexShrink: 0,
              }}>
                <div style={{
                  width: "64px", height: "64px", borderRadius: "8px",
                  overflow: "hidden", flexShrink: 0, background: "#f8f8f8",
                }}>
                  {PRODUCT_IMAGES[product.id] && (
                    <img src={PRODUCT_IMAGES[product.id]} alt={product.name} loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  )}
                </div>
                <div>
                  <h2 style={{ fontSize: "20px", fontWeight: 700, margin: 0, color: "#1a1a1a" }}>
                    {product.name}
                  </h2>
                  <p style={{ fontSize: "12px", color: "#999", margin: "4px 0 0" }}>
                    {product.formats.length} formatov · od {product.minQty} do {product.maxQty.toLocaleString("sl-SI")} kos
                  </p>
                </div>
              </div>

              {/* Config + Price row */}
              <div style={{ flex: 1, display: "flex", overflow: "hidden", minHeight: 0 }}>

                {/* Config panel */}
                <div style={{
                  flex: 1, padding: "20px 24px", overflowY: "auto",
                  borderRight: "1px solid #eee",
                }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
                    <div>
                      <label style={labelStyle}>Format</label>
                      <select style={selectStyle} value={formatCode} onChange={(e) => setFormatCode(e.target.value)}>
                        {product.formats.map((f) => <option key={f.code} value={f.code}>{f.label}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Papir</label>
                      <select style={selectStyle} value={paperId} onChange={(e) => setPaperId(e.target.value)}>
                        {product.papers.map((p) => <option key={p.id} value={p.id}>{p.label}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Tisk</label>
                      <select style={selectStyle} value={sides} onChange={(e) => setSides(e.target.value)}>
                        {product.sides.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    {laminationOptions.length > 1 && (
                      <div>
                        <label style={labelStyle}>Plastifikacija</label>
                        <select style={selectStyle} value={lamination} onChange={(e) => setLamination(e.target.value)}>
                          {laminationOptions.map((l) => <option key={l.id} value={l.id}>{l.label}</option>)}
                        </select>
                      </div>
                    )}
                  </div>

                  {/* Quantity */}
                  <div style={{ marginBottom: "16px" }}>
                    <label style={labelStyle}>Količina</label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "6px" }}>
                      {product.qtyBreaks.slice(0, 8).map((qty) => (
                        <button
                          key={qty}
                          onClick={() => handleQuantity(qty)}
                          style={{
                            padding: "6px 14px", fontSize: "12px", border: "1px solid #ddd",
                            borderRadius: "4px", cursor: "pointer",
                            fontWeight: quantity === qty && !customQty ? 700 : 400,
                            background: quantity === qty && !customQty ? "#1a1a1a" : "#fff",
                            color: quantity === qty && !customQty ? "#fff" : "#333",
                          }}
                        >
                          {qty.toLocaleString("sl-SI")}
                        </button>
                      ))}
                      <input
                        type="number"
                        placeholder="Po meri"
                        value={customQty}
                        onChange={(e) => handleCustomQty(e.target.value)}
                        style={{
                          padding: "6px 10px", fontSize: "12px", border: "1px solid #ddd",
                          borderRadius: "4px", width: "90px", outline: "none",
                        }}
                      />
                    </div>
                  </div>

                  {/* Variations */}
                  {product.supportsVariations && (
                    <div style={{ marginBottom: "16px" }}>
                      <label style={labelStyle}>{product.variationLabel || "Variante"}</label>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "6px" }}>
                        <div style={{ display: "flex", gap: "6px" }}>
                          {[1, 2, 3, 5, 10].map((v) => (
                            <button
                              key={v}
                              onClick={() => setVariations(v)}
                              style={{
                                padding: "6px 14px", fontSize: "12px", border: "1px solid #ddd",
                                borderRadius: "4px", cursor: "pointer",
                                fontWeight: variations === v ? 700 : 400,
                                background: variations === v ? "#1a1a1a" : "#fff",
                                color: variations === v ? "#fff" : "#333",
                              }}
                            >
                              {v}
                            </button>
                          ))}
                          <input
                            type="number"
                            min="1"
                            placeholder="Drugo"
                            value={variations > 10 || ![1, 2, 3, 5, 10].includes(variations) ? variations : ""}
                            onChange={(e) => {
                              const num = parseInt(e.target.value, 10);
                              if (!isNaN(num) && num >= 1) setVariations(num);
                            }}
                            style={{
                              padding: "6px 10px", fontSize: "12px", border: "1px solid #ddd",
                              borderRadius: "4px", width: "70px", outline: "none",
                            }}
                          />
                        </div>
                      </div>
                      {variations > 1 && (
                        <p style={{ fontSize: "11px", color: "#888", marginTop: "6px" }}>
                          {variations} × {quantity.toLocaleString("sl-SI")} = <strong>{totalQty.toLocaleString("sl-SI")} kos skupaj</strong>
                        </p>
                      )}
                    </div>
                  )}

                  {/* Delivery */}
                  <div>
                    <label style={labelStyle}>Dostava</label>
                    <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
                      {availableTiers.map((tier) => (
                        <button
                          key={tier}
                          onClick={() => setDeliveryTier(tier)}
                          style={{
                            padding: "6px 14px", fontSize: "12px", border: "1px solid #ddd",
                            borderRadius: "4px", cursor: "pointer",
                            fontWeight: deliveryTier === tier ? 700 : 400,
                            background: deliveryTier === tier ? "#1a1a1a" : "#fff",
                            color: deliveryTier === tier ? "#fff" : "#333",
                          }}
                        >
                          {DELIVERY_TIERS[tier].labelShort}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price panel */}
                <div style={{
                  width: "320px", flexShrink: 0, background: "#1a1a1a", color: "#fff",
                  display: "flex", flexDirection: "column", justifyContent: "center",
                  padding: "24px", textAlign: "center",
                }}>
                  {diskPrice?.available ? (
                    <>
                      <div style={{ marginBottom: "6px" }}>
                        <span style={{
                          display: "inline-block", background: "rgba(255,255,255,0.08)",
                          borderRadius: "12px", padding: "3px 12px",
                          fontSize: "10px", fontWeight: 600, letterSpacing: "1px",
                          textTransform: "uppercase", color: "#999",
                        }}>
                          Tisk Šepic
                        </span>
                      </div>
                      <p style={{
                        fontSize: "48px", fontWeight: 700, lineHeight: 1,
                        margin: "8px 0 4px",
                      }}>
                        {formatPrice(currentPrice)}
                        <span style={{ fontSize: "24px", fontWeight: 400, color: "#F37820", marginLeft: "4px" }}>&euro;</span>
                      </p>
                      <p style={{ fontSize: "12px", color: "#777", marginBottom: "16px" }}>
                        {showNet ? "brez DDV" : "z DDV (22%)"}
                        {showPerUnit ? " / kos" : ` za ${totalQty.toLocaleString("sl-SI")} kos`}
                      </p>

                      {/* Toggles */}
                      <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginBottom: "16px" }}>
                        <button onClick={() => setShowNet(!showNet)} style={toggleStyle(showNet)}>
                          {showNet ? "Neto" : "Bruto"}
                        </button>
                        <button onClick={() => setShowPerUnit(!showPerUnit)} style={toggleStyle(showPerUnit)}>
                          {showPerUnit ? "Na kos" : "Skupaj"}
                        </button>
                      </div>

                      {/* Summary grid */}
                      <div style={{
                        display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px",
                        marginBottom: "16px", textAlign: "left",
                      }}>
                        {[
                          { l: "Format", v: product.formats.find((f) => f.code === formatCode)?.label || formatCode },
                          { l: "Papir", v: product.papers.find((p) => p.id === paperId)?.label || paperId },
                          { l: "Količina", v: product.supportsVariations && variations > 1
                            ? `${variations} × ${quantity.toLocaleString("sl-SI")} = ${totalQty.toLocaleString("sl-SI")} kos`
                            : `${totalQty.toLocaleString("sl-SI")} kos` },
                          { l: "Rok", v: diskPrice.deliveryDays },
                        ].map((item) => (
                          <div key={item.l} style={{
                            background: "rgba(255,255,255,0.05)", borderRadius: "4px",
                            padding: "8px 10px",
                          }}>
                            <div style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.5px", color: "#666" }}>{item.l}</div>
                            <div style={{ fontSize: "11px", marginTop: "2px", color: "#ccc" }}>{item.v}</div>
                          </div>
                        ))}
                      </div>

                      {/* Price breakdown */}
                      <div style={{
                        fontSize: "11px", color: "#666", marginBottom: "16px",
                        display: "flex", justifyContent: "center", gap: "12px",
                      }}>
                        <span>Neto: <strong style={{ color: "#aaa" }}>{formatPrice(showPerUnit ? diskPrice.netPerUnit : diskPrice.netTotal)} &euro;</strong></span>
                        <span>Bruto: <strong style={{ color: "#aaa" }}>{formatPrice(showPerUnit ? diskPrice.grossPerUnit : diskPrice.grossTotal)} &euro;</strong></span>
                      </div>

                      {/* Actions */}
                      <div style={{ display: "flex", gap: "8px" }}>
                        <button onClick={handleDownloadPDF} style={{
                          flex: 1, padding: "10px", fontSize: "12px", fontWeight: 600,
                          background: "#F37820", color: "#fff", border: "none",
                          borderRadius: "6px", cursor: "pointer",
                        }}>
                          <i className="fa-regular fa-file-pdf" style={{ marginRight: "6px" }}></i>PDF
                        </button>
                        <a href="/contact" style={{
                          flex: 1, padding: "10px", fontSize: "12px", fontWeight: 600,
                          background: "transparent", color: "#fff",
                          border: "1px solid rgba(255,255,255,0.2)",
                          borderRadius: "6px", textDecoration: "none", textAlign: "center",
                        }}>
                          <i className="fa-regular fa-envelope" style={{ marginRight: "6px" }}></i>Kontakt
                        </a>
                      </div>

                      {/* Competitor comparison */}
                      {available.length > 0 && (
                        <details style={{ marginTop: "14px", textAlign: "left" }}>
                          <summary style={{
                            fontSize: "10px", textTransform: "uppercase",
                            letterSpacing: "0.5px", color: "#555", cursor: "pointer",
                          }}>
                            Primerjava s konkurenco
                          </summary>
                          <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "8px" }}>
                            {available.map((result) => {
                              const price = showNet
                                ? (showPerUnit ? result.netPerUnit : result.netTotal)
                                : (showPerUnit ? result.grossPerUnit : result.grossTotal);
                              const src = SOURCE_LABELS[result.source];
                              return (
                                <div key={result.source} style={{
                                  display: "flex", alignItems: "center", justifyContent: "space-between",
                                  background: "rgba(255,255,255,0.04)", borderRadius: "4px",
                                  padding: "6px 10px", fontSize: "11px",
                                }}>
                                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: src?.color || "#666" }}></span>
                                    <span style={{ color: "#777" }}>{result.sourceName}</span>
                                  </div>
                                  <strong style={{ color: "#aaa" }}>{formatPrice(price)} &euro;</strong>
                                </div>
                              );
                            })}
                          </div>
                        </details>
                      )}
                    </>
                  ) : (
                    <div>
                      <p style={{ fontSize: "14px", color: "#999", marginBottom: "16px" }}>
                        Za izbrano konfiguracijo pripravimo ponudbo po meri.
                      </p>
                      <a href="/contact" style={{
                        display: "inline-block", padding: "10px 24px", fontSize: "13px",
                        fontWeight: 600, background: "#F37820", color: "#fff",
                        border: "none", borderRadius: "6px", textDecoration: "none",
                      }}>
                        Pošlji povpraševanje
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const labelStyle = {
  display: "block", fontSize: "10px", fontWeight: 600,
  textTransform: "uppercase", letterSpacing: "0.5px",
  color: "#999", marginBottom: "4px",
};

const selectStyle = {
  width: "100%", padding: "8px 10px", fontSize: "13px",
  border: "1px solid #e0e0e0", borderRadius: "6px",
  background: "#fff", color: "#333", outline: "none",
  appearance: "auto",
};

function toggleStyle(active) {
  return {
    padding: "4px 12px", fontSize: "10px", fontWeight: 600,
    border: "1px solid rgba(255,255,255,0.15)", borderRadius: "4px",
    cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.5px",
    background: active ? "rgba(255,255,255,0.12)" : "transparent",
    color: active ? "#fff" : "#666",
  };
}
