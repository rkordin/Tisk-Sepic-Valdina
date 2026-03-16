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
import jsPDF from "jspdf";

// Product images
import imgLetaki from "../../assets/img/products/letaki-new.jpg";
import imgVizitke from "../../assets/img/products/vizitke.png";
import imgVabila from "../../assets/img/products/vabila-new.jpg";
import imgRazglednice from "../../assets/img/products/razglednice-new.jpg";
import imgPlakati from "../../assets/img/products/plakati-new.jpg";
import imgDopisniListi from "../../assets/img/products/dopisni-listi-new.jpg";
import imgBrosure from "../../assets/img/products/brosure-new.jpg";
import imgZlozenke from "../../assets/img/products/zlozenke-new.jpg";
import imgKnjige from "../../assets/img/products/knjige-new.jpg";
import imgRevije from "../../assets/img/products/revije-new.jpg";
import imgKoledarji from "../../assets/img/products/koledarji-new.jpg";
import imgNalepke from "../../assets/img/products/nalepke-new.jpg";
import imgKuverte from "../../assets/img/products/kuverte.webp";
import imgZlozljiveSkatle from "../../assets/img/products/zlozljive-skatle-new.jpg";
import imgRoloStojala from "../../assets/img/products/rolo-stojala-new.jpg";
import imgBeachflags from "../../assets/img/products/beachflags-new.jpg";
import imgZastave from "../../assets/img/products/zastave.png";
import imgCerade from "../../assets/img/products/cerade-new.jpg";
import imgMajice from "../../assets/img/products/majice-new.jpg";
import imgPisalniBloki from "../../assets/img/products/pisalni-bloki-new.jpg";
import imgPredstavitvene from "../../assets/img/products/predstavitvene-mape-new.jpg";
import imgBeleznice from "../../assets/img/products/beleznice-new.jpg";

const imgZlozljiveVizitke = imgVizitke;

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
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderForm, setOrderForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [orderStatus, setOrderStatus] = useState("");
  const [inquiryItems, setInquiryItems] = useState([]);

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

  function addToInquiry() {
    if (!product || !diskPrice?.available) return;
    const item = {
      id: Date.now(),
      productId: product.id,
      productName: product.name,
      formatCode,
      formatLabel: product.formats.find(f => f.code === formatCode)?.label || formatCode,
      paperId,
      paperLabel: (product.papers.find(p => p.id === paperId)?.label || paperId).split(" ").slice(0, 3).join(" "),
      sides: sides.split(" ")[0],
      lamination,
      laminationLabel: lamination !== "none" ? (LAMINATION_OPTIONS.find(l => l.id === lamination)?.label?.replace("plastifikacija", "").trim() || lamination) : null,
      quantity,
      variations: product.supportsVariations ? variations : 1,
      totalQty,
      deliveryTier,
      deliveryLabel: DELIVERY_TIERS[deliveryTier]?.label,
      netTotal: diskPrice.netTotal,
      grossTotal: diskPrice.grossTotal,
      netPerUnit: diskPrice.netPerUnit,
      grossPerUnit: diskPrice.grossPerUnit,
      deliveryDays: diskPrice.deliveryDays,
    };
    setInquiryItems(prev => [...prev, item]);
  }

  function removeFromInquiry(itemId) {
    setInquiryItems(prev => prev.filter(i => i.id !== itemId));
  }

  const inquiryNetTotal = inquiryItems.reduce((sum, i) => sum + i.netTotal, 0);
  const inquiryGrossTotal = inquiryItems.reduce((sum, i) => sum + i.grossTotal, 0);

  function handleDownloadPDF() {
    // Use inquiry items if available, otherwise build from current config
    const items = inquiryItems.length > 0 ? inquiryItems : (product && diskPrice?.available ? [{
      id: 1,
      productName: product.name,
      formatLabel: product.formats.find(f => f.code === formatCode)?.label || formatCode,
      paperLabel: product.papers.find(p => p.id === paperId)?.label || paperId,
      sides,
      laminationLabel: lamination !== "none" ? LAMINATION_OPTIONS.find(l => l.id === lamination)?.label : null,
      variations: product.supportsVariations && variations > 1 ? variations : 1,
      quantity,
      totalQty,
      deliveryLabel: DELIVERY_TIERS[deliveryTier]?.label,
      netTotal: diskPrice.netTotal,
      grossTotal: diskPrice.grossTotal,
      netPerUnit: diskPrice.netPerUnit,
      grossPerUnit: diskPrice.grossPerUnit,
      deliveryDays: diskPrice.deliveryDays,
    }] : []);

    if (items.length === 0) return;

    const netTotal = items.reduce((s, i) => s + i.netTotal, 0);
    const grossTotal = items.reduce((s, i) => s + i.grossTotal, 0);

    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const pw = 210; // page width
    const margin = 20;
    const cw = pw - margin * 2; // content width
    let y = margin;

    const col = {
      dark: [26, 26, 26],
      grey: [122, 117, 114],
      grey4: [158, 154, 150],
      line: [212, 208, 204],
      accent: [247, 156, 24],
      white: [255, 255, 255],
      bg: [249, 248, 246],
    };

    function checkPage(needed) {
      if (y + needed > 277) { doc.addPage(); y = margin; return true; }
      return false;
    }

    // Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(...col.dark);
    doc.text("Tisk", margin, y + 7);
    const tiskW = doc.getTextWidth("Tisk ");
    doc.setTextColor(...col.accent);
    doc.text("Sepic", margin + tiskW, y + 7);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...col.grey);
    const dateStr = `Datum: ${new Date().toLocaleDateString("sl-SI")}`;
    const refStr = `Ref: KAL-${Date.now().toString(36).toUpperCase()}`;
    doc.text(dateStr, pw - margin, y + 3, { align: "right" });
    doc.text(refStr, pw - margin, y + 7, { align: "right" });

    y += 14;
    doc.setDrawColor(...col.line);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pw - margin, y);
    y += 12;

    // Title
    doc.setFont("helvetica", "normal");
    doc.setFontSize(26);
    doc.setTextColor(...col.dark);
    doc.text("Informativna ponudba", margin, y);
    y += 6;
    doc.setFontSize(10);
    doc.setTextColor(...col.grey);
    doc.text("Izracun na podlagi izbranih parametrov", margin, y);
    y += 14;

    // Items
    items.forEach((item, idx) => {
      checkPage(50);

      // Item header bar
      doc.setFillColor(...col.bg);
      doc.roundedRect(margin, y, cw, 8, 1, 1, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(...col.dark);
      doc.text(`${String(idx + 1).padStart(2, "0")}. ${item.productName}`, margin + 4, y + 5.5);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(...col.accent);
      doc.text(`${formatPrice(item.grossTotal)} EUR`, pw - margin - 4, y + 5.5, { align: "right" });
      y += 12;

      // Details
      const details = [
        ["Format", item.formatLabel],
        ["Papir", item.paperLabel],
        ["Tisk", item.sides],
        item.laminationLabel ? ["Plastifikacija", item.laminationLabel] : null,
        item.variations > 1
          ? ["Kolicina", `${item.variations} x ${item.quantity.toLocaleString("sl-SI")} = ${item.totalQty.toLocaleString("sl-SI")} kos`]
          : ["Kolicina", `${item.totalQty.toLocaleString("sl-SI")} kos`],
        ["Dostava", item.deliveryLabel],
        ["Dobavni rok", item.deliveryDays ? `${item.deliveryDays}` : "-"],
        ["Cena na kos (neto)", `${formatPrice(item.netPerUnit)} EUR`],
      ].filter(Boolean);

      doc.setFontSize(9);
      details.forEach(([label, value]) => {
        checkPage(6);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(...col.grey);
        doc.text(label, margin + 4, y);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(...col.dark);
        doc.text(value, margin + 50, y);
        y += 5;
      });

      y += 6;

      // Separator between items
      if (idx < items.length - 1) {
        doc.setDrawColor(...col.line);
        doc.setLineWidth(0.2);
        doc.line(margin, y - 3, pw - margin, y - 3);
      }
    });

    // Grand total section
    checkPage(40);
    y += 4;
    doc.setDrawColor(...col.dark);
    doc.setLineWidth(0.6);
    doc.line(margin, y, pw - margin, y);
    y += 8;

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...col.grey);
    doc.text("Neto skupaj:", margin + 4, y);
    doc.setTextColor(...col.dark);
    doc.text(`${formatPrice(netTotal)} EUR`, pw - margin - 4, y, { align: "right" });
    y += 5;

    doc.setTextColor(...col.grey);
    doc.text("DDV (22%):", margin + 4, y);
    doc.setTextColor(...col.dark);
    doc.text(`${formatPrice(grossTotal - netTotal)} EUR`, pw - margin - 4, y, { align: "right" });
    y += 5;

    doc.setDrawColor(...col.line);
    doc.setLineWidth(0.2);
    doc.line(margin + 4, y, pw - margin - 4, y);
    y += 6;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(...col.dark);
    doc.text("SKUPAJ (z DDV):", margin + 4, y);
    doc.setTextColor(...col.accent);
    doc.text(`${formatPrice(grossTotal)} EUR`, pw - margin - 4, y, { align: "right" });
    y += 14;

    // Footer
    checkPage(20);
    doc.setDrawColor(...col.line);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pw - margin, y);
    y += 6;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...col.dark);
    doc.text("Tisk Sepic d.o.o.", margin, y);
    y += 4;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...col.grey4);
    doc.text("Livada 14, 8000 Novo mesto  |  Tel: +386 7 39 42 669  |  komerciala@tisksepic.si", margin, y);
    y += 6;
    doc.setTextColor(...col.grey);
    doc.setFontSize(8);
    doc.text("Cene so informativne. Za dokoncno ponudbo nas kontaktirajte.", margin, y);

    // Download
    doc.save(`Ponudba-Tisk-Sepic-${new Date().toISOString().slice(0, 10)}.pdf`);
  }

  async function handleOrderSubmit(e) {
    e.preventDefault();
    setOrderStatus("sending");
    // Build readable plain-text summary for the email
    const line = "----------------------------------------";
    const itemsSummary = inquiryItems.map((item, idx) => {
      const details = [
        item.formatLabel,
        item.paperLabel,
        item.sides,
        item.laminationLabel || null,
      ].filter(Boolean).join(" / ");
      const qtyStr = item.variations > 1
        ? `${item.variations} x ${item.quantity.toLocaleString("sl-SI")} = ${item.totalQty.toLocaleString("sl-SI")} kos`
        : `${item.totalQty.toLocaleString("sl-SI")} kos`;
      return [
        `${String(idx + 1).padStart(2, "0")}. ${item.productName}`,
        `   ${details}`,
        `   ${qtyStr} / ${item.deliveryLabel}`,
        `   Cena: ${formatPrice(item.grossTotal)} EUR (z DDV)`,
      ].join("\n");
    }).join("\n\n");

    const summary = [
      `POVPRASEVANJE (${inquiryItems.length} ${inquiryItems.length === 1 ? "izdelek" : "izdelkov"})`,
      line,
      "",
      itemsSummary,
      "",
      line,
      `NETO SKUPAJ:      ${formatPrice(inquiryNetTotal)} EUR`,
      `DDV (22%):        ${formatPrice(inquiryGrossTotal - inquiryNetTotal)} EUR`,
      `SKUPAJ (z DDV):   ${formatPrice(inquiryGrossTotal)} EUR`,
      line,
      "",
      "PODATKI STRANKE",
      `Ime:      ${orderForm.name}`,
      `Podjetje: ${orderForm.company}`,
      `E-posta:  ${orderForm.email}`,
      `Telefon:  ${orderForm.phone || "-"}`,
      orderForm.message ? `Sporocilo: ${orderForm.message}` : "",
      "",
      "Cene so informativne. Poslano iz konfiguratorja Tisk Sepic.",
    ].filter(l => l !== undefined).join("\n");

    const formData = new FormData();
    formData.append("access_key", "3643f083-8d95-4728-a130-f6ed50b49f7d");
    formData.append("subject", `Novo povprasevanje - ${inquiryItems.length} izdelkov - ${orderForm.company}`);
    formData.append("from_name", "Tisk Sepic Kalkulator");
    formData.append("replyto", orderForm.email);
    formData.append("Povzetek", summary);

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) {
        setOrderStatus("success");
        setTimeout(() => {
          setShowOrderModal(false); setOrderStatus("");
          setOrderForm({ name: "", company: "", email: "", phone: "", message: "" });
          setInquiryItems([]);
        }, 2500);
      } else { setOrderStatus("error"); }
    } catch { setOrderStatus("error"); }
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

            {/* Add to inquiry button */}
            {diskPrice?.available && (
              <button
                onClick={addToInquiry}
                style={{
                  marginTop: "16px",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                  width: "100%", padding: "14px",
                  background: C.dark, color: C.white,
                  fontWeight: 800, fontSize: "11px",
                  textTransform: "uppercase", letterSpacing: "0.15em",
                  borderRadius: "5px", border: "none", cursor: "pointer",
                  fontFamily: "'Manrope', sans-serif",
                  transition: "opacity 0.2s",
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>add_circle</span>
                Dodaj v povpraševanje
              </button>
            )}
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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
          <h4 style={{
            fontSize: "11px", fontWeight: 900, textTransform: "uppercase",
            letterSpacing: "0.2em", borderLeft: `2px solid ${C.accent}`,
            paddingLeft: "12px", margin: 0,
          }}>
            Trenutna konfiguracija
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
            <div style={{ marginBottom: "16px" }}>
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
                  padding: "10px 0",
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

            {/* Current item price */}
            {diskPrice?.available && (
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "baseline",
                padding: "12px 0", borderTop: "1px solid rgba(255,255,255,0.1)",
                marginBottom: "16px",
              }}>
                <span style={{ fontSize: "10px", color: C.grey4, textTransform: "uppercase", fontWeight: 700 }}>
                  Cena
                </span>
                <span style={{ fontSize: "20px", fontWeight: 900, color: C.white }}>
                  {formatPrice(showNet ? diskPrice.netTotal : diskPrice.grossTotal)}
                  <span style={{ fontSize: "12px" }}> &euro;</span>
                </span>
              </div>
            )}

            {/* Add to inquiry button */}
            {diskPrice?.available && (
              <button
                onClick={addToInquiry}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  width: "100%", padding: "12px",
                  background: C.accent, color: C.dark,
                  fontWeight: 800, fontSize: "10px",
                  textTransform: "uppercase", letterSpacing: "0.15em",
                  borderRadius: "5px", border: "none", cursor: "pointer",
                  fontFamily: "'Manrope', sans-serif",
                  transition: "opacity 0.2s",
                  marginBottom: "8px",
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>add_circle</span>
                Dodaj v povpraševanje
              </button>
            )}
          </>
        )}

        {/* ── INQUIRY ITEMS LIST ── */}
        {inquiryItems.length > 0 && (
          <div style={{ marginTop: "8px" }}>
            {/* Divider */}
            <div style={{ borderTop: `1px solid rgba(255,255,255,0.15)`, marginBottom: "20px" }} />

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
              <h4 style={{
                fontSize: "11px", fontWeight: 900, textTransform: "uppercase",
                letterSpacing: "0.2em", borderLeft: `2px solid ${C.accent}`,
                paddingLeft: "12px", margin: 0,
              }}>
                Povpraševanje ({inquiryItems.length})
              </h4>
            </div>

            {/* Item cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
              {inquiryItems.map((item, idx) => (
                <div key={item.id} style={{
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: "5px", padding: "12px",
                  position: "relative",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                        <span style={{
                          fontSize: "8px", fontWeight: 900, color: C.accent,
                          background: "rgba(247,156,24,0.15)", padding: "2px 6px",
                          borderRadius: "3px",
                        }}>
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span style={{ fontSize: "12px", fontWeight: 700 }}>
                          {item.productName}
                        </span>
                      </div>
                      <div style={{ fontSize: "10px", color: C.grey4, lineHeight: 1.6 }}>
                        {item.formatLabel} · {item.paperLabel} · {item.sides}
                        {item.laminationLabel && ` · ${item.laminationLabel}`}
                        <br />
                        {item.totalQty.toLocaleString("sl-SI")} kos · {item.deliveryLabel}
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                      <span style={{ fontSize: "13px", fontWeight: 900, whiteSpace: "nowrap" }}>
                        {formatPrice(showNet ? item.netTotal : item.grossTotal)} &euro;
                      </span>
                      <button
                        onClick={() => removeFromInquiry(item.id)}
                        style={{
                          background: "none", border: "none", color: C.grey4,
                          cursor: "pointer", padding: "0", lineHeight: 1,
                          transition: "color 0.15s",
                        }}
                        title="Odstrani"
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>close</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Grand total */}
            <div style={{ paddingTop: "16px", borderTop: `1px solid ${C.accent}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                <span style={{ fontSize: "10px", color: C.grey4, textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.15em" }}>
                  Neto skupaj
                </span>
                <span style={{ fontSize: "13px", fontWeight: 500 }}>
                  {formatPrice(inquiryNetTotal)} &euro;
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                <span style={{ fontSize: "10px", color: C.grey4, textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.15em" }}>
                  DDV (22%)
                </span>
                <span style={{ fontSize: "13px", fontWeight: 500 }}>
                  {formatPrice(inquiryGrossTotal - inquiryNetTotal)} &euro;
                </span>
              </div>
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "baseline",
                marginTop: "12px", paddingTop: "12px",
                borderTop: `1px solid rgba(255,255,255,0.1)`,
              }}>
                <span style={{ fontSize: "11px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em" }}>
                  Skupaj
                </span>
                <span style={{ fontSize: "28px", fontWeight: 900, color: C.accent }}>
                  {formatPrice(showNet ? inquiryNetTotal : inquiryGrossTotal)}
                  <span style={{ fontSize: "16px" }}> &euro;</span>
                </span>
              </div>
              <p style={{
                fontSize: "8px", color: C.grey4, textAlign: "right",
                fontWeight: 500, textTransform: "uppercase", margin: "4px 0 0",
              }}>
                {showNet ? "Brez DDV" : "Z DDV"} · {inquiryItems.length} {inquiryItems.length === 1 ? "izdelek" : inquiryItems.length < 5 ? "izdelki" : "izdelkov"}
              </p>
            </div>
          </div>
        )}

        {/* Empty state when no inquiry items */}
        {inquiryItems.length === 0 && product && (
          <div style={{
            marginTop: "8px", borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "20px", textAlign: "center",
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: "24px", color: "rgba(255,255,255,0.15)", marginBottom: "8px", display: "block" }}>
              playlist_add
            </span>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", lineHeight: 1.5, margin: 0 }}>
              Konfigurirajte izdelek in ga dodajte v povpraševanje.
              Dodate lahko več različnih izdelkov.
            </p>
          </div>
        )}

        {/* Actions - pinned to bottom */}
        <div style={{ marginTop: "auto", paddingTop: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* Main CTA */}
          <button
            onClick={() => setShowOrderModal(true)}
            disabled={inquiryItems.length === 0}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
              width: "100%", padding: "16px",
              background: inquiryItems.length > 0 ? C.accent : "rgba(255,255,255,0.1)",
              color: inquiryItems.length > 0 ? C.dark : C.grey4,
              fontWeight: 800, fontSize: "12px",
              textTransform: "uppercase", letterSpacing: "0.2em",
              borderRadius: "5px", border: "none",
              cursor: inquiryItems.length > 0 ? "pointer" : "not-allowed",
              textDecoration: "none", textAlign: "center",
              fontFamily: "'Manrope', sans-serif",
              transition: "opacity 0.2s, transform 0.2s",
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>send</span>
            Pošlji povpraševanje
          </button>

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

      {/* ── ORDER MODAL ── */}
      {showOrderModal && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setShowOrderModal(false); }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Manrope', sans-serif",
          }}
        >
          <div style={{
            background: C.dark, color: C.white, borderRadius: "8px",
            width: "640px", maxWidth: "95vw", maxHeight: "90vh", overflowY: "auto",
            boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
          }}>
            {/* Modal header */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "24px 32px", borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}>
              <h3 style={{
                fontSize: "11px", fontWeight: 900, textTransform: "uppercase",
                letterSpacing: "0.2em", margin: 0,
                borderLeft: `2px solid ${C.accent}`, paddingLeft: "12px",
              }}>
                Povpraševanje
              </h3>
              <button
                onClick={() => setShowOrderModal(false)}
                style={{
                  background: "none", border: "none", color: C.grey4,
                  cursor: "pointer", fontSize: "20px", lineHeight: 1, padding: "4px",
                }}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Order summary — all inquiry items */}
            <div style={{ padding: "24px 32px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{
                fontSize: "9px", fontWeight: 700, textTransform: "uppercase",
                letterSpacing: "0.15em", color: C.grey4, marginBottom: "16px",
              }}>
                Vaše povpraševanje — {inquiryItems.length} {inquiryItems.length === 1 ? "izdelek" : inquiryItems.length < 5 ? "izdelki" : "izdelkov"}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {inquiryItems.map((item, idx) => (
                  <div key={item.id} style={{
                    background: "rgba(255,255,255,0.04)", borderRadius: "5px", padding: "14px 16px",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{
                          fontSize: "8px", fontWeight: 900, color: C.accent,
                          background: "rgba(247,156,24,0.15)", padding: "2px 6px",
                          borderRadius: "3px",
                        }}>
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: 700 }}>{item.productName}</span>
                      </div>
                      <span style={{ fontSize: "13px", fontWeight: 900 }}>
                        {formatPrice(item.grossTotal)} &euro;
                      </span>
                    </div>
                    <div style={{ fontSize: "10px", color: C.grey4, lineHeight: 1.6 }}>
                      {item.formatLabel} · {item.paperLabel} · {item.sides}
                      {item.laminationLabel && ` · ${item.laminationLabel}`}
                      {" · "}{item.totalQty.toLocaleString("sl-SI")} kos · {item.deliveryLabel}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "baseline",
                marginTop: "20px", paddingTop: "16px",
                borderTop: `1px solid ${C.accent}`,
              }}>
                <span style={{ fontSize: "10px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em" }}>
                  Skupaj (z DDV)
                </span>
                <span style={{ fontSize: "28px", fontWeight: 900, color: C.accent }}>
                  {formatPrice(inquiryGrossTotal)}<span style={{ fontSize: "16px" }}> &euro;</span>
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleOrderSubmit} style={{ padding: "24px 32px 32px" }}>
              <div style={{
                fontSize: "9px", fontWeight: 700, textTransform: "uppercase",
                letterSpacing: "0.15em", color: C.grey4, marginBottom: "20px",
              }}>
                Vaši podatki
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                {/* Name */}
                <div>
                  <label style={{ display: "block", fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: C.grey4, marginBottom: "6px" }}>
                    Ime in priimek *
                  </label>
                  <input
                    type="text" required value={orderForm.name}
                    onChange={(e) => setOrderForm(f => ({ ...f, name: e.target.value }))}
                    style={{
                      width: "100%", padding: "10px 12px", fontSize: "13px",
                      fontFamily: "'Manrope', sans-serif", background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)", borderRadius: "5px",
                      color: C.white, outline: "none",
                    }}
                  />
                </div>
                {/* Company */}
                <div>
                  <label style={{ display: "block", fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: C.grey4, marginBottom: "6px" }}>
                    Podjetje *
                  </label>
                  <input
                    type="text" required value={orderForm.company}
                    onChange={(e) => setOrderForm(f => ({ ...f, company: e.target.value }))}
                    style={{
                      width: "100%", padding: "10px 12px", fontSize: "13px",
                      fontFamily: "'Manrope', sans-serif", background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)", borderRadius: "5px",
                      color: C.white, outline: "none",
                    }}
                  />
                </div>
                {/* Email */}
                <div>
                  <label style={{ display: "block", fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: C.grey4, marginBottom: "6px" }}>
                    E-pošta *
                  </label>
                  <input
                    type="email" required value={orderForm.email}
                    onChange={(e) => setOrderForm(f => ({ ...f, email: e.target.value }))}
                    style={{
                      width: "100%", padding: "10px 12px", fontSize: "13px",
                      fontFamily: "'Manrope', sans-serif", background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)", borderRadius: "5px",
                      color: C.white, outline: "none",
                    }}
                  />
                </div>
                {/* Phone */}
                <div>
                  <label style={{ display: "block", fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: C.grey4, marginBottom: "6px" }}>
                    Telefon
                  </label>
                  <input
                    type="tel" value={orderForm.phone}
                    onChange={(e) => setOrderForm(f => ({ ...f, phone: e.target.value }))}
                    style={{
                      width: "100%", padding: "10px 12px", fontSize: "13px",
                      fontFamily: "'Manrope', sans-serif", background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)", borderRadius: "5px",
                      color: C.white, outline: "none",
                    }}
                  />
                </div>
              </div>

              {/* Message */}
              <div style={{ marginBottom: "24px" }}>
                <label style={{ display: "block", fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: C.grey4, marginBottom: "6px" }}>
                  Sporočilo
                </label>
                <textarea
                  value={orderForm.message} rows={3}
                  onChange={(e) => setOrderForm(f => ({ ...f, message: e.target.value }))}
                  style={{
                    width: "100%", padding: "10px 12px", fontSize: "13px",
                    fontFamily: "'Manrope', sans-serif", background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)", borderRadius: "5px",
                    color: C.white, outline: "none", resize: "vertical",
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={orderStatus === "sending"}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                  width: "100%", padding: "16px",
                  background: orderStatus === "success" ? "#2ecc71" : C.accent,
                  color: orderStatus === "success" ? "#fff" : C.dark,
                  fontWeight: 800, fontSize: "12px",
                  textTransform: "uppercase", letterSpacing: "0.2em",
                  borderRadius: "5px", border: "none", cursor: orderStatus === "sending" ? "wait" : "pointer",
                  fontFamily: "'Manrope', sans-serif",
                  opacity: orderStatus === "sending" ? 0.7 : 1,
                  transition: "all 0.3s",
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                  {orderStatus === "success" ? "check_circle" : orderStatus === "sending" ? "hourglass_top" : "send"}
                </span>
                {orderStatus === "success" ? "Poslano!" : orderStatus === "sending" ? "Pošiljam..." : orderStatus === "error" ? "Napaka — poskusi znova" : "Pošlji povpraševanje"}
              </button>
            </form>
          </div>
        </div>
      )}

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
