import React, { useState, useMemo, useEffect } from "react";
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

const imgZlozljiveVizitke = imgVizitke;
const imgVabila = imgRazglednice;
const imgZlozenke = imgBrosure;

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

// Category icons mapping to Material Symbols
const CATEGORY_ICONS = {
  "tiskalni-izdelki": "description",
  "publikacije": "menu_book",
  "nalepke-embalaza": "loyalty",
  "reklamni-izdelki": "flag",
  "pisarnisko": "edit_note",
};

// Product icons mapping to Material Symbols
const PRODUCT_ICONS = {
  letaki: "description",
  vizitke: "badge",
  "zlozljive-vizitke": "flip",
  vabila: "mail",
  razglednice: "image",
  plakati: "gallery_thumbnail",
  "dopisni-listi": "edit_document",
  brosure: "menu_book",
  zlozenke: "layers",
  knjige: "book",
  revije: "newspaper",
  koledarji: "calendar_month",
  nalepke: "loyalty",
  kuverte: "mail",
  "zlozljive-skatle": "inventory_2",
  "rolo-stojala": "signpost",
  beachflags: "flag",
  zastave: "flag",
  cerade: "panorama_wide_angle",
  majice: "checkroom",
  "pisalni-bloki": "note_alt",
  "predstavitvene-mape": "folder_open",
  beleznice: "auto_stories",
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

  // Load fonts
  useEffect(() => {
    const link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href = "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap";
    document.head.appendChild(link1);
    const link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap";
    document.head.appendChild(link2);
    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
    };
  }, []);

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

  const currentCategory = CATEGORIES.find(c => c.id === categoryId);
  const currentFormat = product?.formats.find(f => f.code === formatCode);
  const currentPaper = product?.papers.find(p => p.id === paperId);
  const currentLamination = LAMINATION_OPTIONS.find(l => l.id === lamination);

  // Colors
  const C = {
    bg: "#e8e6e3",
    white: "#fff",
    line: "#d4d0cc",
    grey1: "#f5f2ef",
    grey2: "#7a7572",
    grey3: "#8a8683",
    grey4: "#9e9a96",
    dark: "#1a1a1a",
    accent: "#F79C18",
  };

  return (
    <div style={{
      height: "100vh", display: "flex", overflow: "hidden",
      fontFamily: "'Manrope', sans-serif", background: C.bg, color: C.dark,
    }}>
      {/* ── LEFT SIDEBAR ── */}
      <aside style={{
        width: "264px", flexShrink: 0, borderRight: `1px solid ${C.line}`,
        display: "flex", flexDirection: "column", background: C.white,
      }}>
        {/* Logo */}
        <div style={{
          padding: "24px", borderBottom: `1px solid ${C.line}`,
          display: "flex", alignItems: "center", gap: "12px",
        }}>
          <div style={{
            width: "32px", height: "32px", background: C.dark,
            display: "flex", alignItems: "center", justifyContent: "center",
            borderRadius: "5px",
          }}>
            <span className="material-symbols-outlined" style={{ color: C.white, fontSize: "18px" }}>layers</span>
          </div>
          <a href="/" style={{
            fontWeight: 800, fontSize: "18px", letterSpacing: "-0.5px",
            textTransform: "uppercase", textDecoration: "none", color: C.dark,
          }}>
            Tisk Šepic
          </a>
        </div>

        {/* Category + Product navigation */}
        <nav style={{ flex: 1, padding: "16px", overflowY: "auto" }}>
          {/* Section label */}
          <div style={{
            padding: "0 12px", marginBottom: "10px",
            fontSize: "9px", fontWeight: 700, color: C.grey4,
            textTransform: "uppercase", letterSpacing: "0.18em",
          }}>
            Kategorije
          </div>

          {/* Category list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {CATEGORIES.map((cat) => {
              const isSelected = cat.id === categoryId;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  style={{
                    display: "flex", alignItems: "center", gap: "12px",
                    padding: "10px 12px", border: "none",
                    borderRadius: "5px", cursor: "pointer",
                    background: isSelected ? C.dark : "transparent",
                    color: isSelected ? C.white : C.grey2,
                    textAlign: "left", fontFamily: "'Manrope', sans-serif",
                    transition: "all 0.15s",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                    {CATEGORY_ICONS[cat.id] || "category"}
                  </span>
                  <span style={{ fontSize: "13px", fontWeight: isSelected ? 600 : 500 }}>
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Divider between categories and products */}
          <div style={{
            margin: "14px 12px 14px 12px",
            borderTop: `1px solid ${C.line}`,
          }} />

          {/* Subcategory label */}
          <div style={{
            padding: "0 12px", marginBottom: "8px",
            fontSize: "9px", fontWeight: 700, color: C.grey4,
            textTransform: "uppercase", letterSpacing: "0.18em",
          }}>
            {currentCategory?.name || "Izdelki"}
          </div>

          {/* Product list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {categoryProducts.map((p) => {
              const isSelected = p.id === productId;
              return (
                <button
                  key={p.id}
                  onClick={() => handleProductChange(p.id)}
                  style={{
                    display: "flex", alignItems: "center", gap: "12px",
                    padding: "10px 12px", border: "none",
                    borderRadius: "5px", cursor: "pointer",
                    background: isSelected ? C.dark : "transparent",
                    color: isSelected ? C.white : C.grey2,
                    textAlign: "left", fontFamily: "'Manrope', sans-serif",
                    transition: "all 0.15s",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                    {PRODUCT_ICONS[p.id] || "description"}
                  </span>
                  <span style={{ fontSize: "13px", fontWeight: isSelected ? 600 : 500 }}>
                    {p.name}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Support terminal */}
        <div style={{ padding: "16px", borderTop: `1px solid ${C.line}` }}>
          <div style={{ background: C.grey1, padding: "16px", borderRadius: "5px" }}>
            <p style={{
              fontSize: "10px", fontWeight: 700, color: C.grey3,
              textTransform: "uppercase", marginBottom: "8px",
            }}>
              Pomoč
            </p>
            <p style={{ fontSize: "12px", color: C.grey2, lineHeight: 1.5, marginBottom: "12px" }}>
              Na voljo za tehnične specifikacije in naročila.
            </p>
            <a href="/contact" style={{
              display: "block", width: "100%", padding: "8px",
              background: C.dark, color: C.white, border: "none",
              fontSize: "10px", fontWeight: 700, textTransform: "uppercase",
              letterSpacing: "0.15em", borderRadius: "5px",
              textAlign: "center", textDecoration: "none",
              cursor: "pointer",
            }}>
              Kontaktirajte nas
            </a>
          </div>
        </div>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <main style={{ flex: 1, overflowY: "auto", background: C.bg }}>
        {/* Top header bar */}
        <header style={{
          height: "56px", borderBottom: `1px solid ${C.line}`,
          background: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)",
          position: "sticky", top: 0, zIndex: 10,
          padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <nav style={{ display: "flex", gap: "16px" }}>
            <span style={{
              fontSize: "11px", fontWeight: 700, color: C.accent,
              borderBottom: `2px solid ${C.accent}`, paddingBottom: "4px",
              textTransform: "uppercase",
            }}>
              Konfigurator
            </span>
            <a href="/" style={{
              fontSize: "11px", fontWeight: 700, color: C.grey3,
              textDecoration: "none", textTransform: "uppercase",
            }}>
              Domov
            </a>
            <a href="/contact" style={{
              fontSize: "11px", fontWeight: 700, color: C.grey3,
              textDecoration: "none", textTransform: "uppercase",
            }}>
              Kontakt
            </a>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Price toggle buttons */}
            <button
              onClick={() => setShowNet(!showNet)}
              style={{
                padding: "4px 10px", fontSize: "10px", fontWeight: 600,
                border: `1px solid ${C.line}`, borderRadius: "5px",
                cursor: "pointer", background: C.white,
                fontFamily: "'Manrope', sans-serif",
                color: C.grey2, textTransform: "uppercase", letterSpacing: "0.05em",
              }}
            >
              {showNet ? "Neto" : "Bruto"}
            </button>
            <button
              onClick={() => setShowPerUnit(!showPerUnit)}
              style={{
                padding: "4px 10px", fontSize: "10px", fontWeight: 600,
                border: `1px solid ${C.line}`, borderRadius: "5px",
                cursor: "pointer", background: C.white,
                fontFamily: "'Manrope', sans-serif",
                color: C.grey2, textTransform: "uppercase", letterSpacing: "0.05em",
              }}
            >
              {showPerUnit ? "Na kos" : "Skupaj"}
            </button>
          </div>
        </header>

        {product && (
          <div style={{ padding: "32px", maxWidth: "820px", margin: "0 auto" }}>
            {/* Page title */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ width: "8px", height: "8px", background: C.accent, display: "block" }}></span>
                  <span style={{
                    fontSize: "10px", fontWeight: 900, textTransform: "uppercase",
                    letterSpacing: "0.2em", color: C.grey3,
                  }}>
                    Konfigurator / {currentCategory?.name} / {product.name}
                  </span>
                </div>
                <h2 style={{
                  fontSize: "36px", fontWeight: 800, letterSpacing: "-1.5px",
                  textTransform: "uppercase", lineHeight: 1, margin: 0,
                }}>
                  {product.name}
                </h2>
              </div>
              {/* Product image preview */}
              {PRODUCT_IMAGES[product.id] && (
                <div style={{
                  width: "180px", height: "100px", background: C.white,
                  padding: "6px", border: `1px solid ${C.line}`,
                  borderRadius: "5px", overflow: "hidden", position: "relative",
                  flexShrink: 0,
                }}>
                  <img
                    src={PRODUCT_IMAGES[product.id]}
                    alt={product.name}
                    style={{
                      width: "100%", height: "100%", objectFit: "cover",
                      filter: "grayscale(30%)", borderRadius: "3px",
                    }}
                  />
                  <div style={{
                    position: "absolute", bottom: "10px", left: "10px",
                    background: C.dark, color: C.white,
                    fontSize: "7px", padding: "2px 6px", fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: "0.15em",
                  }}>
                    Predogled
                  </div>
                </div>
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* ── SECTION 01: Format & Paper ── */}
              <section style={sectionStyle(C)}>
                <div style={sectionHeaderStyle}>
                  <span style={sectionNumberStyle(C)}>01</span>
                  <h3 style={sectionTitleStyle}>Format & Papir</h3>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
                  <div>
                    <label style={dataLabelStyle(C)}>Format</label>
                    <select
                      style={selectStyle(C)}
                      value={formatCode}
                      onChange={(e) => setFormatCode(e.target.value)}
                    >
                      {product.formats.map((f) => (
                        <option key={f.code} value={f.code}>{f.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={dataLabelStyle(C)}>Papir (gramatura)</label>
                    <select
                      style={selectStyle(C)}
                      value={paperId}
                      onChange={(e) => setPaperId(e.target.value)}
                    >
                      {product.papers.map((p) => (
                        <option key={p.id} value={p.id}>{p.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </section>

              {/* ── SECTION 02: Print & Lamination ── */}
              <section style={sectionStyle(C)}>
                <div style={sectionHeaderStyle}>
                  <span style={sectionNumberStyle(C)}>02</span>
                  <h3 style={sectionTitleStyle}>Tisk & Obdelava</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                  {/* Sides / Chromacity */}
                  <div>
                    <label style={{ ...dataLabelStyle(C), marginBottom: "12px", display: "block" }}>Tisk</label>
                    <div style={{ display: "grid", gridTemplateColumns: `repeat(${product.sides.length}, 1fr)`, gap: "12px" }}>
                      {product.sides.map((s) => {
                        const isActive = sides === s;
                        return (
                          <button
                            key={s}
                            onClick={() => setSides(s)}
                            style={{
                              display: "flex", alignItems: "center", justifyContent: "space-between",
                              border: isActive ? `2px solid ${C.dark}` : `1px solid ${C.line}`,
                              padding: "14px 16px", borderRadius: "5px",
                              background: isActive ? C.grey1 : C.white,
                              cursor: "pointer", textAlign: "left",
                              fontFamily: "'Manrope', sans-serif",
                              transition: "all 0.15s",
                            }}
                          >
                            <div>
                              <p style={{ fontSize: "12px", fontWeight: 900, textTransform: "uppercase", margin: 0 }}>
                                {s.split(" ")[0]}
                              </p>
                              <p style={{ fontSize: "10px", color: C.grey2, margin: "2px 0 0" }}>
                                {s.split(" ").slice(1).join(" ")}
                              </p>
                            </div>
                            <span className="material-symbols-outlined" style={{
                              fontSize: "18px",
                              color: isActive ? C.accent : C.grey1,
                            }}>
                              {isActive ? "check_circle" : "radio_button_unchecked"}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Lamination */}
                  {laminationOptions.length > 1 && (
                    <div>
                      <label style={{ ...dataLabelStyle(C), marginBottom: "12px", display: "block" }}>Plastifikacija</label>
                      <div style={{ display: "flex", gap: "8px" }}>
                        {laminationOptions.map((lam) => {
                          const isActive = lamination === lam.id;
                          return (
                            <button
                              key={lam.id}
                              onClick={() => setLamination(lam.id)}
                              style={{
                                flex: 1, padding: "12px",
                                fontSize: "10px", fontWeight: 900,
                                textTransform: "uppercase", letterSpacing: "0.1em",
                                border: isActive ? `2px solid ${C.dark}` : `1px solid ${C.line}`,
                                background: isActive ? C.dark : C.white,
                                color: isActive ? C.white : C.grey2,
                                borderRadius: "5px", cursor: "pointer",
                                fontFamily: "'Manrope', sans-serif",
                                transition: "all 0.15s",
                              }}
                            >
                              {lam.label.replace("plastifikacija", "").replace("Brez ", "Brez").trim() || lam.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </section>

              {/* ── SECTION 03: Volume ── */}
              <section style={sectionStyle(C)}>
                <div style={sectionHeaderStyle}>
                  <span style={sectionNumberStyle(C)}>03</span>
                  <h3 style={sectionTitleStyle}>Količina</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {/* Quantity selector */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{
                      display: "flex", alignItems: "center",
                      border: `1px solid ${C.line}`, borderRadius: "5px",
                      background: C.grey1, overflow: "hidden",
                    }}>
                      <button
                        onClick={() => {
                          const breaks = product.qtyBreaks;
                          const idx = breaks.indexOf(quantity);
                          if (idx > 0) handleQuantity(breaks[idx - 1]);
                          else handleQuantity(Math.max(product.minQty, quantity - (quantity >= 1000 ? 100 : quantity >= 100 ? 50 : 10)));
                        }}
                        style={{
                          padding: "12px 24px", border: "none", background: "transparent",
                          cursor: "pointer", fontFamily: "'Manrope', sans-serif",
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: "14px", fontWeight: 700 }}>remove</span>
                      </button>
                      <input
                        type="number"
                        value={customQty || quantity}
                        onChange={(e) => handleCustomQty(e.target.value)}
                        style={{
                          width: "96px", background: "transparent", border: "none",
                          textAlign: "center", fontWeight: 900, fontSize: "20px",
                          fontFamily: "'Manrope', sans-serif", outline: "none",
                        }}
                      />
                      <button
                        onClick={() => {
                          const breaks = product.qtyBreaks;
                          const idx = breaks.indexOf(quantity);
                          if (idx >= 0 && idx < breaks.length - 1) handleQuantity(breaks[idx + 1]);
                          else handleQuantity(Math.min(product.maxQty, quantity + (quantity >= 1000 ? 100 : quantity >= 100 ? 50 : 10)));
                        }}
                        style={{
                          padding: "12px 24px", border: "none", background: "transparent",
                          cursor: "pointer", fontFamily: "'Manrope', sans-serif",
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: "14px", fontWeight: 700 }}>add</span>
                      </button>
                    </div>
                    {diskPrice?.available && (
                      <div style={{ textAlign: "right" }}>
                        <p style={dataLabelStyle(C)}>Cena na kos</p>
                        <p style={{ fontSize: "24px", fontWeight: 900, margin: 0 }}>
                          {formatPrice(showNet ? diskPrice.netPerUnit : diskPrice.grossPerUnit)}{" "}
                          <span style={{ fontSize: "14px", fontWeight: 700 }}>&euro;</span>
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Quick quantity buttons */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {product.qtyBreaks.slice(0, 10).map((qty) => (
                      <button
                        key={qty}
                        onClick={() => handleQuantity(qty)}
                        style={{
                          padding: "6px 14px", fontSize: "11px",
                          border: quantity === qty && !customQty ? `1px solid ${C.dark}` : `1px solid ${C.line}`,
                          borderRadius: "5px", cursor: "pointer",
                          fontWeight: quantity === qty && !customQty ? 700 : 500,
                          background: quantity === qty && !customQty ? C.dark : C.white,
                          color: quantity === qty && !customQty ? C.white : C.grey2,
                          fontFamily: "'Manrope', sans-serif",
                          transition: "all 0.15s",
                        }}
                      >
                        {qty.toLocaleString("sl-SI")}
                      </button>
                    ))}
                  </div>

                  {/* Variations */}
                  {product.supportsVariations && (
                    <div style={{ borderTop: `1px solid ${C.line}`, paddingTop: "16px" }}>
                      <label style={{ ...dataLabelStyle(C), marginBottom: "8px", display: "block" }}>
                        {product.variationLabel || "Variante"}
                      </label>
                      <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                        {[1, 2, 3, 5, 10].map((v) => (
                          <button
                            key={v}
                            onClick={() => setVariations(v)}
                            style={{
                              padding: "6px 14px", fontSize: "11px",
                              border: variations === v ? `1px solid ${C.dark}` : `1px solid ${C.line}`,
                              borderRadius: "5px", cursor: "pointer",
                              fontWeight: variations === v ? 700 : 500,
                              background: variations === v ? C.dark : C.white,
                              color: variations === v ? C.white : C.grey2,
                              fontFamily: "'Manrope', sans-serif",
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
                            padding: "6px 10px", fontSize: "11px",
                            border: `1px solid ${C.line}`, borderRadius: "5px",
                            width: "70px", outline: "none",
                            fontFamily: "'Manrope', sans-serif",
                          }}
                        />
                      </div>
                      {variations > 1 && (
                        <p style={{ fontSize: "11px", color: C.grey2, marginTop: "8px" }}>
                          {variations} &times; {quantity.toLocaleString("sl-SI")} = <strong>{totalQty.toLocaleString("sl-SI")} kos skupaj</strong>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </section>

              {/* ── SECTION 04: Delivery ── */}
              {availableTiers.length > 1 && (
                <section style={sectionStyle(C)}>
                  <div style={sectionHeaderStyle}>
                    <span style={sectionNumberStyle(C)}>04</span>
                    <h3 style={sectionTitleStyle}>Dostava</h3>
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {availableTiers.map((tier) => {
                      const isActive = deliveryTier === tier;
                      return (
                        <button
                          key={tier}
                          onClick={() => setDeliveryTier(tier)}
                          style={{
                            flex: 1, padding: "12px",
                            fontSize: "10px", fontWeight: 900,
                            textTransform: "uppercase", letterSpacing: "0.1em",
                            border: isActive ? `2px solid ${C.dark}` : `1px solid ${C.line}`,
                            background: isActive ? C.dark : C.white,
                            color: isActive ? C.white : C.grey2,
                            borderRadius: "5px", cursor: "pointer",
                            fontFamily: "'Manrope', sans-serif",
                          }}
                        >
                          {DELIVERY_TIERS[tier].labelShort}
                        </button>
                      );
                    })}
                  </div>
                </section>
              )}
            </div>

            {/* Sustainability note */}
            <div style={{
              marginTop: "32px", display: "flex", alignItems: "center", gap: "12px",
              padding: "16px", border: `1px solid rgba(247, 156, 24, 0.2)`,
              background: "rgba(247, 156, 24, 0.05)", borderRadius: "5px",
            }}>
              <span className="material-symbols-outlined" style={{ color: C.accent, fontSize: "18px" }}>verified</span>
              <div>
                <p style={{
                  fontSize: "10px", fontWeight: 900, color: C.accent,
                  textTransform: "uppercase", letterSpacing: "0.15em", margin: 0,
                }}>
                  Trajnostni protokol
                </p>
                <p style={{ fontSize: "11px", color: C.grey2, margin: "2px 0 0" }}>
                  FSC certificiran papir & okolju prijazna barvila na osnovi soje.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ── RIGHT PANEL: Order Summary ── */}
      <aside style={{
        width: "320px", flexShrink: 0, background: C.dark, color: C.white,
        display: "flex", flexDirection: "column", padding: "32px",
        overflowY: "auto",
      }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px" }}>
          <h4 style={{
            fontSize: "11px", fontWeight: 900, textTransform: "uppercase",
            letterSpacing: "0.2em", borderLeft: `2px solid ${C.accent}`,
            paddingLeft: "12px", margin: 0,
          }}>
            Povzetek
          </h4>
          <div style={{ display: "flex", gap: "4px" }}>
            <span style={{
              width: "4px", height: "4px", borderRadius: "50%",
              background: C.accent, display: "block",
              animation: "pulse 2s infinite",
            }}></span>
            <span style={{
              width: "4px", height: "4px", borderRadius: "50%",
              background: "rgba(247,156,24,0.4)", display: "block",
            }}></span>
          </div>
        </div>

        {product && (
          <>
            {/* Config summary rows */}
            <div style={{ marginBottom: "32px" }}>
              {[
                { label: "Izdelek", value: product.name },
                { label: "Format", value: currentFormat?.label || formatCode },
                { label: "Papir", value: (currentPaper?.label || paperId).split(" ").slice(0, 3).join(" ") },
                { label: "Tisk", value: sides.split(" ")[0] },
                { label: "Količina", value: product.supportsVariations && variations > 1
                  ? `${variations} × ${quantity.toLocaleString("sl-SI")}`
                  : `${totalQty.toLocaleString("sl-SI")} kos` },
                ...(lamination !== "none" ? [{ label: "Plastifikacija", value: currentLamination?.label?.replace("plastifikacija", "").trim() || lamination }] : []),
              ].map((item, i, arr) => (
                <div key={item.label} style={{
                  display: "flex", justifyContent: "space-between",
                  borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  padding: "12px 0",
                }}>
                  <span style={{ fontSize: "10px", color: C.grey4, fontWeight: 500, textTransform: "uppercase" }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "-0.3px" }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Price section */}
            {diskPrice?.available ? (
              <>
                <div style={{
                  paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.1)",
                  marginBottom: "40px",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span style={{ fontSize: "10px", color: C.grey4, textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.15em" }}>
                      Neto
                    </span>
                    <span style={{ fontSize: "14px", fontWeight: 500 }}>
                      {formatPrice(showPerUnit ? diskPrice.netPerUnit : diskPrice.netTotal)} &euro;
                    </span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "8px" }}>
                    <span style={{ fontSize: "10px", color: C.grey4, textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.15em" }}>
                      DDV (22%)
                    </span>
                    <span style={{ fontSize: "14px", fontWeight: 500 }}>
                      {formatPrice((showPerUnit ? diskPrice.grossPerUnit : diskPrice.grossTotal) - (showPerUnit ? diskPrice.netPerUnit : diskPrice.netTotal))} &euro;
                    </span>
                  </div>

                  {/* Total */}
                  <div style={{ paddingTop: "24px", borderTop: `1px solid ${C.accent}` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px" }}>
                      <span style={{ fontSize: "11px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em" }}>
                        {showPerUnit ? "Cena / kos" : "Skupaj"}
                      </span>
                      <span style={{ fontSize: "32px", fontWeight: 900, color: C.accent }}>
                        {formatPrice(currentPrice)}
                        <span style={{ fontSize: "18px" }}>&euro;</span>
                      </span>
                    </div>
                    <p style={{
                      fontSize: "8px", color: C.grey4, textAlign: "right",
                      fontWeight: 500, textTransform: "uppercase", margin: 0,
                    }}>
                      {showNet ? "Brez DDV" : "Z DDV"} {showPerUnit ? "na kos" : `za ${totalQty.toLocaleString("sl-SI")} kos`}
                    </p>
                  </div>
                </div>

                {/* Competitor comparison */}
                {available.length > 0 && (
                  <div style={{ marginBottom: "24px" }}>
                    <details>
                      <summary style={{
                        fontSize: "10px", textTransform: "uppercase",
                        letterSpacing: "0.05em", color: "rgba(255,255,255,0.35)",
                        cursor: "pointer", marginBottom: "8px",
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
                              background: "rgba(255,255,255,0.04)", borderRadius: "5px",
                              padding: "8px 12px", fontSize: "11px",
                            }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                <span style={{
                                  width: "6px", height: "6px", borderRadius: "50%",
                                  background: src?.color || "#666",
                                }}></span>
                                <span style={{ color: "rgba(255,255,255,0.5)" }}>{result.sourceName}</span>
                              </div>
                              <strong style={{ color: "rgba(255,255,255,0.7)" }}>{formatPrice(price)} &euro;</strong>
                            </div>
                          );
                        })}
                      </div>
                    </details>
                  </div>
                )}
              </>
            ) : (
              <div style={{ paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.1)", marginBottom: "40px", textAlign: "center" }}>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginBottom: "16px" }}>
                  Za izbrano konfiguracijo pripravimo ponudbo po meri.
                </p>
              </div>
            )}
          </>
        )}

        {/* Actions - pinned to bottom */}
        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* ETA Pipeline */}
          {diskPrice?.available && (
            <div style={{
              background: "rgba(255,255,255,0.05)", padding: "16px",
              borderRadius: "5px", marginBottom: "12px",
            }}>
              <div style={{
                display: "flex", justifyContent: "space-between",
                fontSize: "10px", fontWeight: 700, textTransform: "uppercase",
                color: C.grey4, marginBottom: "8px",
              }}>
                <span>Dobavni rok</span>
                <span style={{ color: C.accent }}>{diskPrice.deliveryDays}</span>
              </div>
              <div style={{
                width: "100%", background: "rgba(255,255,255,0.1)",
                height: "4px", borderRadius: "5px", overflow: "hidden",
              }}>
                <div style={{ background: C.accent, height: "100%", width: "65%" }}></div>
              </div>
            </div>
          )}

          {/* Main CTA */}
          <a
            href="/contact"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
              width: "100%", padding: "16px",
              background: C.accent, color: C.dark,
              fontWeight: 800, fontSize: "12px",
              textTransform: "uppercase", letterSpacing: "0.2em",
              borderRadius: "5px", border: "none", cursor: "pointer",
              textDecoration: "none", textAlign: "center",
              transition: "opacity 0.2s, transform 0.2s",
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>shopping_cart</span>
            Naroči
          </a>

          {/* Secondary actions */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <button
              onClick={handleDownloadPDF}
              disabled={!diskPrice?.available}
              style={{
                padding: "12px", background: "rgba(255,255,255,0.1)",
                border: "none", borderRadius: "5px", cursor: diskPrice?.available ? "pointer" : "not-allowed",
                color: C.white, fontSize: "9px", fontWeight: 900,
                textTransform: "uppercase", letterSpacing: "0.15em",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                fontFamily: "'Manrope', sans-serif",
                opacity: diskPrice?.available ? 1 : 0.4,
                transition: "background 0.15s",
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>download</span>
              PDF
            </button>
            <a
              href="/contact"
              style={{
                padding: "12px", background: "rgba(255,255,255,0.1)",
                borderRadius: "5px", textDecoration: "none",
                color: C.white, fontSize: "9px", fontWeight: 900,
                textTransform: "uppercase", letterSpacing: "0.15em",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                transition: "background 0.15s",
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>mail</span>
              Kontakt
            </a>
          </div>
        </div>
      </aside>

      {/* Pulse animation keyframes */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }
        ::-webkit-scrollbar {
          width: 4px;
        }
        ::-webkit-scrollbar-track {
          background: #e8e6e3;
        }
        ::-webkit-scrollbar-thumb {
          background: #7a7572;
          border-radius: 4px;
        }
        details > summary {
          list-style: none;
        }
        details > summary::-webkit-details-marker {
          display: none;
        }
      `}</style>
    </div>
  );
};

// ── Style helpers ──

function sectionStyle(C) {
  return {
    background: C.white,
    padding: "32px",
    border: `1px solid ${C.line}`,
    borderLeft: `3px solid ${C.accent}`,
    borderRadius: "5px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
  };
}

const sectionHeaderStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  marginBottom: "32px",
};

function sectionNumberStyle(C) {
  return {
    fontSize: "20px",
    fontWeight: 900,
    color: C.grey4,
  };
}

const sectionTitleStyle = {
  fontSize: "11px",
  fontWeight: 900,
  textTransform: "uppercase",
  letterSpacing: "0.15em",
  margin: 0,
};

function dataLabelStyle(C) {
  return {
    color: C.grey3,
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    fontWeight: 600,
    marginBottom: "8px",
    display: "block",
  };
}

function selectStyle(C) {
  return {
    width: "100%",
    border: `1px solid ${C.line}`,
    borderRadius: "5px",
    padding: "10px 12px",
    fontSize: "13px",
    fontFamily: "'Manrope', sans-serif",
    background: C.white,
    color: "#1a1a1a",
    outline: "none",
    appearance: "auto",
  };
}
