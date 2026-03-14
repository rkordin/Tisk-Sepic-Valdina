import React, { useState, useMemo } from "react";
import { Layout } from "../../layouts/Layout";
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

export const Calculator = () => {
  const [categoryId, setCategoryId] = useState("tiskalni-izdelki");
  const [productId, setProductId] = useState("letaki");
  const [formatCode, setFormatCode] = useState("A6");
  const [paperId, setPaperId] = useState("coated-matt-115");
  const [sides, setSides] = useState("4/4 obojestransko");
  const [lamination, setLamination] = useState("none");
  const [quantity, setQuantity] = useState(100);
  const [customQty, setCustomQty] = useState("");
  const [deliveryTier, setDeliveryTier] = useState("standard");
  const [showPerUnit, setShowPerUnit] = useState(false);
  const [showNet, setShowNet] = useState(false);

  const product = useMemo(() => getProductById(productId), [productId]);
  const categoryProducts = useMemo(
    () => getProductsByCategory(categoryId),
    [categoryId]
  );
  const availableTiers = useMemo(
    () => (product ? getAvailableTiers(product.pricing) : ["standard"]),
    [product]
  );
  const prices = useMemo(() => {
    if (!product) return [];
    return calculatePrices(product.pricing, quantity, deliveryTier);
  }, [product, quantity, deliveryTier]);
  const diskPrice = useMemo(() => {
    if (!product) return null;
    return calculateDiskPrice(product.id, quantity, deliveryTier);
  }, [product, quantity, deliveryTier]);

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

  function buildSummary() {
    if (!product) return null;
    const fmt = product.formats.find((f) => f.code === formatCode);
    const pap = product.papers.find((p) => p.id === paperId);
    const lam = LAMINATION_OPTIONS.find((l) => l.id === lamination);
    return {
      izdelek: product.name,
      format: fmt?.label || formatCode,
      papir: pap?.label || paperId,
      tisk: sides,
      plastifikacija: lamination !== "none" ? lam?.label || "" : "Brez",
      kolicina: quantity,
      dostava: DELIVERY_TIERS[deliveryTier].label,
      cenaNetTotal: diskPrice?.available ? formatPrice(diskPrice.netTotal) : "—",
      cenaBrutoTotal: diskPrice?.available
        ? formatPrice(diskPrice.grossTotal)
        : "—",
      cenaNetKos: diskPrice?.available
        ? formatPrice(diskPrice.netPerUnit)
        : "—",
      cenaBrutoKos: diskPrice?.available
        ? formatPrice(diskPrice.grossPerUnit)
        : "—",
      dobavniRok: diskPrice?.available ? diskPrice.deliveryDays : "—",
    };
  }

  async function handleDownloadPDF() {
    const summary = buildSummary();
    if (!summary) return;

    const htmlContent = `<!DOCTYPE html>
<html lang="sl"><head><meta charset="UTF-8"><title>Ponudba — Tisk Šepic</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Helvetica Neue',Arial,sans-serif;color:#1a1a1a;padding:60px;background:#fff}
.header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:50px;padding-bottom:30px;border-bottom:2px solid #e8e6e3}
.logo{font-size:28px;font-weight:700}.logo span{color:#F79C18}.date{font-size:13px;color:#7a7572;text-align:right}
.title{font-size:36px;font-weight:300;margin-bottom:8px}.subtitle{font-size:14px;color:#7a7572;margin-bottom:50px}
table{width:100%;border-collapse:collapse;margin-bottom:40px}th{text-align:left;font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#9e9a96;padding:12px 16px;border-bottom:1px solid #e8e6e3}
td{padding:16px;font-size:15px;border-bottom:1px solid #f5f2ef}td:first-child{font-weight:600;color:#7a7572;font-size:13px}
.price-row{background:#f9f8f6}.price-row td{font-weight:700;font-size:18px}.price-row td:first-child{font-size:13px;font-weight:600;color:#7a7572}
.footer{margin-top:60px;padding-top:30px;border-top:1px solid #e8e6e3;font-size:12px;color:#9e9a96;line-height:1.8}
</style></head><body>
<div class="header"><div><div class="logo">Tisk <span>Šepic</span></div></div><div class="date">Datum: ${new Date().toLocaleDateString("sl-SI")}<br>Referenca: KAL-${Date.now().toString(36).toUpperCase()}</div></div>
<h1 class="title">Informativna ponudba</h1><p class="subtitle">Izračun na podlagi izbranih parametrov</p>
<table><thead><tr><th>Parameter</th><th>Vrednost</th></tr></thead><tbody>
<tr><td>Izdelek</td><td>${summary.izdelek}</td></tr>
<tr><td>Format</td><td>${summary.format}</td></tr>
<tr><td>Papir / Material</td><td>${summary.papir}</td></tr>
<tr><td>Tisk</td><td>${summary.tisk}</td></tr>
<tr><td>Plastifikacija</td><td>${summary.plastifikacija}</td></tr>
<tr><td>Količina</td><td>${summary.kolicina.toLocaleString("sl-SI")} kosov</td></tr>
<tr><td>Hitrost dostave</td><td>${summary.dostava}</td></tr>
<tr><td>Dobavni rok</td><td>${summary.dobavniRok}</td></tr>
<tr class="price-row"><td>Cena (neto)</td><td>${summary.cenaNetTotal} &euro;</td></tr>
<tr class="price-row"><td>Cena (bruto z DDV)</td><td>${summary.cenaBrutoTotal} &euro;</td></tr>
<tr><td>Cena na kos (neto)</td><td>${summary.cenaNetKos} &euro;</td></tr>
<tr><td>Cena na kos (bruto)</td><td>${summary.cenaBrutoKos} &euro;</td></tr>
</tbody></table>
<div class="footer"><p><strong>Tisk Šepic d.o.o.</strong></p><p>Livada 14, 8000 Novo mesto</p><p>Tel: +386 7 39 42 669 · E-pošta: komerciala@tisksepic.si</p><p style="margin-top:16px">Cene so informativne narave. Za dokončno ponudbo nas kontaktirajte.</p><p>ISO 9001 · ISO 15378 · ISO 14001 · FSC</p></div>
</body></html>`;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const printWindow = window.open(url, "_blank");
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
        URL.revokeObjectURL(url);
      };
    }
  }

  return (
    <Layout
      breadcrumbTitle={"Kalkulator"}
      breadcrumbSubtitle={"Izračunajte ceno tiska"}
    >
      <div className="td-service-area pt-120 pb-80">
        <div className="container">
          {/* ── STEP 1: Category & Product ── */}
          <div className="row mb-60">
            <div className="col-12">
              <div className="td-section-title-wrapper text-center mb-50">
                <span className="td-section-title-pre">Korak 01</span>
                <h2 className="td-section-title mb-20">Izberi izdelek</h2>
              </div>
            </div>

            {/* Category tabs */}
            <div className="col-12 mb-40">
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`td-btn ${
                      cat.id === categoryId
                        ? "td-left-right"
                        : "td-btn-border td-left-right"
                    }`}
                    style={{ padding: "10px 20px", fontSize: "14px" }}
                  >
                    <i className={`${cat.icon} me-2`}></i>
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Product cards */}
            <div className="col-12">
              <div className="row">
                {categoryProducts.map((p) => {
                  const isSelected = p.id === productId;
                  return (
                    <div
                      key={p.id}
                      className="col-lg-3 col-md-4 col-sm-6 mb-30"
                    >
                      <div
                        onClick={() => handleProductChange(p.id)}
                        className="td-service-item text-center"
                        style={{
                          cursor: "pointer",
                          border: isSelected
                            ? "2px solid var(--td-theme-primary)"
                            : "2px solid transparent",
                          borderRadius: "10px",
                          padding: "30px 20px",
                          transition: "all 0.3s",
                          background: isSelected
                            ? "rgba(243, 120, 32, 0.05)"
                            : "",
                        }}
                      >
                        <div className="td-service-icon mb-20">
                          <i
                            className={p.icon}
                            style={{ fontSize: "36px" }}
                          ></i>
                        </div>
                        <h4
                          className="td-service-title"
                          style={{ fontSize: "16px" }}
                        >
                          {p.name}
                        </h4>
                        <p
                          style={{
                            fontSize: "12px",
                            color: "#888",
                            marginTop: "8px",
                          }}
                        >
                          od {p.minQty} kos ·{" "}
                          {p.formats.length}{" "}
                          {p.formats.length === 1 ? "format" : "formatov"}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── STEP 2: Configuration ── */}
          {product && (
            <div className="row mb-60">
              <div className="col-12">
                <div className="td-section-title-wrapper text-center mb-50">
                  <span className="td-section-title-pre">Korak 02</span>
                  <h2 className="td-section-title mb-20">
                    Prilagodi konfiguracijo
                  </h2>
                </div>
              </div>

              <div className="col-12">
                <div
                  className="td-contact-form-area"
                  style={{
                    background: "#f9f8f6",
                    borderRadius: "10px",
                    padding: "40px",
                  }}
                >
                  {/* Config selects */}
                  <div className="row mb-30">
                    <div className="col-lg-4 col-md-6 mb-20">
                      <label className="form-label fw-semibold text-uppercase small">
                        Format / Velikost
                      </label>
                      <select
                        className="form-select"
                        value={formatCode}
                        onChange={(e) => setFormatCode(e.target.value)}
                      >
                        {product.formats.map((f) => (
                          <option key={f.code} value={f.code}>
                            {f.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-20">
                      <label className="form-label fw-semibold text-uppercase small">
                        Papir / Material
                      </label>
                      <select
                        className="form-select"
                        value={paperId}
                        onChange={(e) => setPaperId(e.target.value)}
                      >
                        {product.papers.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-20">
                      <label className="form-label fw-semibold text-uppercase small">
                        Tisk
                      </label>
                      <select
                        className="form-select"
                        value={sides}
                        onChange={(e) => setSides(e.target.value)}
                      >
                        {product.sides.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    {laminationOptions.length > 1 && (
                      <div className="col-lg-4 col-md-6 mb-20">
                        <label className="form-label fw-semibold text-uppercase small">
                          Plastifikacija
                        </label>
                        <select
                          className="form-select"
                          value={lamination}
                          onChange={(e) => setLamination(e.target.value)}
                        >
                          {laminationOptions.map((l) => (
                            <option key={l.id} value={l.id}>
                              {l.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>

                  {/* Quantity */}
                  <div className="text-center mb-30">
                    <label className="form-label fw-semibold text-uppercase small d-block mb-15">
                      Količina (kosov)
                    </label>
                    <div className="d-flex flex-wrap justify-content-center gap-2 mb-15">
                      {product.qtyBreaks.slice(0, 10).map((qty) => (
                        <button
                          key={qty}
                          onClick={() => handleQuantity(qty)}
                          className={`btn ${
                            quantity === qty && !customQty
                              ? "btn-dark"
                              : "btn-outline-secondary"
                          }`}
                          style={{
                            minWidth: "70px",
                            fontSize: "14px",
                          }}
                        >
                          {qty.toLocaleString("sl-SI")}
                        </button>
                      ))}
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Po meri..."
                        value={customQty}
                        onChange={(e) => handleCustomQty(e.target.value)}
                        min={product.minQty}
                        max={product.maxQty}
                        style={{ maxWidth: "140px" }}
                      />
                    </div>
                    <small className="text-muted">
                      Min: {product.minQty.toLocaleString("sl-SI")} · Max:{" "}
                      {product.maxQty.toLocaleString("sl-SI")}
                    </small>
                  </div>

                  {/* Delivery tier */}
                  <div className="text-center">
                    <label className="form-label fw-semibold text-uppercase small d-block mb-15">
                      Hitrost dostave
                    </label>
                    <div className="btn-group" role="group">
                      {availableTiers.map((tier) => (
                        <button
                          key={tier}
                          onClick={() => setDeliveryTier(tier)}
                          className={`btn ${
                            deliveryTier === tier
                              ? "btn-dark"
                              : "btn-outline-secondary"
                          }`}
                          style={{ fontSize: "14px" }}
                        >
                          {DELIVERY_TIERS[tier].label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 3: Price ── */}
          {product && (
            <div className="row mb-60">
              <div className="col-12">
                <div className="td-section-title-wrapper text-center mb-30">
                  <span className="td-section-title-pre">Korak 03</span>
                  <h2 className="td-section-title mb-20">Vaša cena</h2>
                  {/* Toggles */}
                  <div className="d-flex justify-content-center gap-2 mb-30">
                    <button
                      onClick={() => setShowNet(!showNet)}
                      className={`btn btn-sm ${
                        showNet ? "btn-dark" : "btn-outline-secondary"
                      }`}
                    >
                      {showNet ? "Neto" : "Bruto"}
                    </button>
                    <button
                      onClick={() => setShowPerUnit(!showPerUnit)}
                      className={`btn btn-sm ${
                        showPerUnit ? "btn-dark" : "btn-outline-secondary"
                      }`}
                    >
                      {showPerUnit ? "Na kos" : "Skupaj"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 offset-lg-2">
                <div
                  style={{
                    background: "#1a1a1a",
                    borderRadius: "16px",
                    padding: "50px 40px",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  {diskPrice?.available ? (
                    <>
                      <span
                        style={{
                          display: "inline-block",
                          background: "rgba(255,255,255,0.1)",
                          borderRadius: "20px",
                          padding: "6px 20px",
                          fontSize: "12px",
                          fontWeight: "600",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          marginBottom: "30px",
                        }}
                      >
                        Tisk Šepic
                      </span>

                      {/* Big price */}
                      <div style={{ marginBottom: "30px" }}>
                        <p
                          style={{
                            fontSize: "clamp(40px, 8vw, 80px)",
                            fontWeight: "700",
                            lineHeight: 1,
                            marginBottom: "10px",
                          }}
                        >
                          {formatPrice(
                            showNet
                              ? showPerUnit
                                ? diskPrice.netPerUnit
                                : diskPrice.netTotal
                              : showPerUnit
                              ? diskPrice.grossPerUnit
                              : diskPrice.grossTotal
                          )}
                          <span
                            style={{
                              fontSize: "clamp(20px, 4vw, 40px)",
                              fontWeight: "400",
                              color: "#F37820",
                              marginLeft: "8px",
                            }}
                          >
                            &euro;
                          </span>
                        </p>
                        <p style={{ fontSize: "14px", color: "#999" }}>
                          {showNet ? "brez DDV" : "z DDV (22%)"}
                          {showPerUnit
                            ? " / kos"
                            : ` za ${quantity.toLocaleString("sl-SI")} kosov`}
                        </p>
                      </div>

                      {/* Config summary */}
                      <div
                        style={{
                          borderTop: "1px solid rgba(255,255,255,0.1)",
                          paddingTop: "25px",
                          marginBottom: "25px",
                        }}
                      >
                        <div className="row g-3">
                          {[
                            { label: "Izdelek", value: product.name },
                            {
                              label: "Format",
                              value:
                                product.formats.find(
                                  (f) => f.code === formatCode
                                )?.label || formatCode,
                            },
                            {
                              label: "Papir",
                              value:
                                product.papers.find((p) => p.id === paperId)
                                  ?.label || paperId,
                            },
                            { label: "Tisk", value: sides },
                            ...(lamination !== "none"
                              ? [
                                  {
                                    label: "Plastifikacija",
                                    value:
                                      LAMINATION_OPTIONS.find(
                                        (l) => l.id === lamination
                                      )?.label || "Brez",
                                  },
                                ]
                              : []),
                            {
                              label: "Količina",
                              value: `${quantity.toLocaleString("sl-SI")} kos`,
                            },
                            {
                              label: "Dobavni rok",
                              value: diskPrice.deliveryDays,
                            },
                            {
                              label: "Hitrost",
                              value: DELIVERY_TIERS[deliveryTier].label,
                            },
                          ].map((item) => (
                            <div
                              key={item.label}
                              className="col-6 col-md-3"
                            >
                              <div
                                style={{
                                  background: "rgba(255,255,255,0.06)",
                                  borderRadius: "8px",
                                  padding: "12px",
                                }}
                              >
                                <small
                                  style={{
                                    display: "block",
                                    fontSize: "10px",
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                    color: "#888",
                                    marginBottom: "4px",
                                  }}
                                >
                                  {item.label}
                                </small>
                                <span style={{ fontSize: "13px" }}>
                                  {item.value}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Price breakdown */}
                      <div
                        style={{
                          borderTop: "1px solid rgba(255,255,255,0.06)",
                          paddingTop: "20px",
                          marginBottom: "30px",
                          fontSize: "13px",
                          color: "#999",
                        }}
                      >
                        <span className="me-4">
                          Neto:{" "}
                          <strong style={{ color: "#fff" }}>
                            {formatPrice(
                              showPerUnit
                                ? diskPrice.netPerUnit
                                : diskPrice.netTotal
                            )}{" "}
                            &euro;
                          </strong>
                        </span>
                        <span className="me-4">
                          Bruto:{" "}
                          <strong style={{ color: "#fff" }}>
                            {formatPrice(
                              showPerUnit
                                ? diskPrice.grossPerUnit
                                : diskPrice.grossTotal
                            )}{" "}
                            &euro;
                          </strong>
                        </span>
                        {!showPerUnit && (
                          <span>
                            Na kos:{" "}
                            <strong style={{ color: "#fff" }}>
                              {formatPrice(
                                showNet
                                  ? diskPrice.netPerUnit
                                  : diskPrice.grossPerUnit
                              )}{" "}
                              &euro;
                            </strong>
                          </span>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div className="d-flex flex-wrap justify-content-center gap-3">
                        <button
                          onClick={handleDownloadPDF}
                          className="td-btn td-left-right"
                        >
                          <i className="fa-regular fa-file-pdf me-2"></i>
                          Prenesi PDF
                          <span className="td-arrow-angle ml-10">
                            <svg
                              className="td-arrow-svg-top-right"
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                            >
                              <path d="M1.018 10.009 0 8.991l7.569-7.582H1.723L1.737 0h8.26v8.274H8.574l.013-5.847Z" />
                              <path d="M1.018 10.009 0 8.991l7.569-7.582H1.723L1.737 0h8.26v8.274H8.574l.013-5.847Z" />
                            </svg>
                          </span>
                        </button>
                        <a
                          href="/contact"
                          className="td-btn td-btn-border td-left-right"
                          style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}
                        >
                          <i className="fa-regular fa-envelope me-2"></i>
                          Pošlji povpraševanje
                        </a>
                      </div>
                    </>
                  ) : (
                    <div style={{ padding: "20px 0" }}>
                      <span
                        style={{
                          display: "inline-block",
                          background: "rgba(255,255,255,0.1)",
                          borderRadius: "20px",
                          padding: "6px 20px",
                          fontSize: "12px",
                          fontWeight: "600",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          marginBottom: "24px",
                        }}
                      >
                        Tisk Šepic
                      </span>
                      <h3 style={{ marginBottom: "12px" }}>
                        Pošljite povpraševanje
                      </h3>
                      <p
                        style={{
                          color: "#999",
                          fontSize: "14px",
                          maxWidth: "400px",
                          margin: "0 auto 24px",
                        }}
                      >
                        Za izbrano konfiguracijo pripravimo ponudbo po meri.
                        Kontaktirajte nas za natančno ceno.
                      </p>
                      <a href="/contact" className="td-btn td-left-right">
                        Pošlji povpraševanje
                        <span className="td-arrow-angle ml-10">
                          <svg
                            className="td-arrow-svg-top-right"
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                          >
                            <path d="M1.018 10.009 0 8.991l7.569-7.582H1.723L1.737 0h8.26v8.274H8.574l.013-5.847Z" />
                            <path d="M1.018 10.009 0 8.991l7.569-7.582H1.723L1.737 0h8.26v8.274H8.574l.013-5.847Z" />
                          </svg>
                        </span>
                      </a>
                    </div>
                  )}

                  {/* Competitor comparison */}
                  {available.length > 0 && (
                    <div
                      style={{
                        marginTop: "30px",
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                        paddingTop: "20px",
                        textAlign: "left",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "10px",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          color: "#666",
                          marginBottom: "12px",
                          cursor: "pointer",
                        }}
                        onClick={(e) => {
                          const el =
                            e.currentTarget.nextElementSibling;
                          el.style.display =
                            el.style.display === "none" ? "flex" : "none";
                        }}
                      >
                        <i className="fa-regular fa-chevron-right me-1"></i>{" "}
                        Primerjava s konkurenco
                      </p>
                      <div
                        className="flex-wrap gap-2"
                        style={{ display: "none" }}
                      >
                        {available.map((result) => {
                          const price = showNet
                            ? showPerUnit
                              ? result.netPerUnit
                              : result.netTotal
                            : showPerUnit
                            ? result.grossPerUnit
                            : result.grossTotal;
                          const sourceInfo = SOURCE_LABELS[result.source];
                          return (
                            <span
                              key={result.source}
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                background: "rgba(255,255,255,0.06)",
                                borderRadius: "6px",
                                padding: "8px 14px",
                                fontSize: "12px",
                              }}
                            >
                              <span
                                style={{
                                  width: "8px",
                                  height: "8px",
                                  borderRadius: "50%",
                                  background: sourceInfo?.color || "#666",
                                  opacity: 0.6,
                                }}
                              ></span>
                              <span style={{ color: "#888" }}>
                                {result.sourceName}
                              </span>
                              <strong>{formatPrice(price)} &euro;</strong>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ── Footer info ── */}
          <div className="row">
            <div className="col-lg-6 mb-30">
              <div
                style={{
                  background: "#f9f8f6",
                  borderRadius: "10px",
                  padding: "30px",
                }}
              >
                <h5
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    color: "#999",
                    marginBottom: "15px",
                  }}
                >
                  Pomembne informacije
                </h5>
                <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.8 }}>
                  Vse cene so informativne narave in namenjene olajšanju vašega
                  načrtovanja. Tisk Šepic zagotavlja najvišjo kakovost s
                  certificiranimi procesi (ISO 9001, 15378, 14001).
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div
                style={{
                  background: "#f9f8f6",
                  borderRadius: "10px",
                  padding: "30px",
                }}
              >
                <h5
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    color: "#999",
                    marginBottom: "15px",
                  }}
                >
                  Viri podatkov
                </h5>
                <div className="d-flex flex-column gap-2 mb-15">
                  {["demago", "tiskarna", "etiskarna"].map((src) => (
                    <div key={src} className="d-flex align-items-center gap-2">
                      <span
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: SOURCE_LABELS[src].color,
                        }}
                      ></span>
                      <span style={{ fontSize: "13px", color: "#888" }}>
                        {SOURCE_LABELS[src].name}
                      </span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: "12px", color: "#999" }}>
                  Plačilo: PayPal, Mastercard, Visa, račun, predplačilo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
