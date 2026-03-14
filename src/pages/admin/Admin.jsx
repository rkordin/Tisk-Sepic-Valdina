import React, { useState, useEffect } from "react";
import { getAllContent, updateContent } from "../../lib/supabase";
import { clearCmsCache } from "../../hooks/useCmsContent";

const ADMIN_USER = "Tisk";
const ADMIN_PASS = "Sepic2026";

// Friendly labels for pages and sections
const LABELS = {
  home: {
    _page: "Domača stran",
    hero: "Hero sekcija",
    about: "O nas sekcija",
    services: "Storitve",
    testimonials: "Mnenja strank",
    blog: "Blog sekcija",
  },
  footer: {
    _page: "Noga strani",
    info: "Kontaktne informacije",
  },
};

export const Admin = () => {
  const [authed, setAuthed] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  if (!authed) {
    return (
      <LoginScreen
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        error={loginError}
        onLogin={() => {
          if (username === ADMIN_USER && password === ADMIN_PASS) {
            setAuthed(true);
            setLoginError("");
          } else {
            setLoginError("Napačno uporabniško ime ali geslo.");
          }
        }}
      />
    );
  }

  return <AdminDashboard onLogout={() => setAuthed(false)} />;
};

const LoginScreen = ({
  username,
  setUsername,
  password,
  setPassword,
  error,
  onLogin,
}) => (
  <div style={styles.loginContainer}>
    <div style={styles.loginCard}>
      <h1 style={styles.loginTitle}>Tisk Šepic CMS</h1>
      <p style={styles.loginSubtitle}>Upravljanje vsebine spletne strani</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin();
        }}
      >
        <input
          style={styles.input}
          type="text"
          placeholder="Uporabniško ime"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Geslo"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={styles.error}>{error}</p>}
        <button style={styles.loginBtn} type="submit">
          Prijava
        </button>
      </form>
    </div>
  </div>
);

const AdminDashboard = ({ onLogout }) => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(null);
  const [saved, setSaved] = useState(null);
  const [editingRow, setEditingRow] = useState(null);
  const [editJson, setEditJson] = useState("");

  useEffect(() => {
    loadContent();
  }, []);

  async function loadContent() {
    setLoading(true);
    const data = await getAllContent();
    setRows(data);
    setLoading(false);
  }

  async function handleSave(row) {
    try {
      const parsed = JSON.parse(editJson);
      setSaving(row.id);
      await updateContent(row.page, row.section, parsed);
      clearCmsCache();
      setSaved(row.id);
      setEditingRow(null);
      setTimeout(() => setSaved(null), 2000);
      await loadContent();
    } catch (err) {
      alert("Napaka: " + (err.message || "Neveljavni podatki"));
    } finally {
      setSaving(null);
    }
  }

  function startEdit(row) {
    setEditingRow(row.id);
    setEditJson(JSON.stringify(row.content, null, 2));
  }

  // Group rows by page
  const grouped = rows.reduce((acc, row) => {
    if (!acc[row.page]) acc[row.page] = [];
    acc[row.page].push(row);
    return acc;
  }, {});

  return (
    <div style={styles.dashboard}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.headerTitle}>Tisk Šepic CMS</h1>
          <p style={styles.headerSub}>Upravljanje vsebine</p>
        </div>
        <button style={styles.logoutBtn} onClick={onLogout}>
          Odjava
        </button>
      </div>

      {loading ? (
        <p style={styles.loading}>Nalaganje vsebine...</p>
      ) : rows.length === 0 ? (
        <div style={styles.empty}>
          <p>Ni vsebine v bazi. Najprej zaženite SQL migracijo.</p>
        </div>
      ) : (
        Object.entries(grouped).map(([page, sections]) => (
          <div key={page} style={styles.pageGroup}>
            <h2 style={styles.pageTitle}>
              {LABELS[page]?._page || page}
            </h2>
            {sections.map((row) => (
              <div key={row.id} style={styles.sectionCard}>
                <div style={styles.sectionHeader}>
                  <h3 style={styles.sectionTitle}>
                    {LABELS[page]?.[row.section] || row.section}
                  </h3>
                  <div style={styles.sectionActions}>
                    {saved === row.id && (
                      <span style={styles.savedBadge}>Shranjeno!</span>
                    )}
                    {editingRow === row.id ? (
                      <>
                        <button
                          style={styles.cancelBtn}
                          onClick={() => setEditingRow(null)}
                        >
                          Prekliči
                        </button>
                        <button
                          style={styles.saveBtn}
                          onClick={() => handleSave(row)}
                          disabled={saving === row.id}
                        >
                          {saving === row.id ? "Shranjujem..." : "Shrani"}
                        </button>
                      </>
                    ) : (
                      <button
                        style={styles.editBtn}
                        onClick={() => startEdit(row)}
                      >
                        Uredi
                      </button>
                    )}
                  </div>
                </div>

                {editingRow === row.id ? (
                  <textarea
                    style={styles.textarea}
                    value={editJson}
                    onChange={(e) => setEditJson(e.target.value)}
                    rows={Math.min(
                      30,
                      Math.max(8, editJson.split("\n").length + 2)
                    )}
                  />
                ) : (
                  <ContentPreview content={row.content} />
                )}

                <p style={styles.updatedAt}>
                  Zadnja sprememba:{" "}
                  {new Date(row.updated_at).toLocaleString("sl-SI")}
                </p>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

// Render content as a readable preview
const ContentPreview = ({ content }) => {
  if (!content) return null;

  return (
    <div style={styles.preview}>
      {Object.entries(content).map(([key, value]) => (
        <div key={key} style={styles.previewRow}>
          <span style={styles.previewKey}>{key}:</span>
          {Array.isArray(value) ? (
            <div style={styles.previewArray}>
              {value.map((item, i) => (
                <div key={i} style={styles.previewArrayItem}>
                  {typeof item === "object" ? (
                    Object.entries(item).map(([k, v]) => (
                      <span key={k} style={styles.previewInner}>
                        <strong>{k}:</strong> {String(v)}
                        {"  "}
                      </span>
                    ))
                  ) : (
                    <span>{String(item)}</span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <span style={styles.previewValue}>{String(value)}</span>
          )}
        </div>
      ))}
    </div>
  );
};

// ─── Styles ──────────────────────────────────────────────
const styles = {
  loginContainer: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f5f5f0",
    fontFamily: "'Inter', -apple-system, sans-serif",
  },
  loginCard: {
    background: "#fff",
    padding: "48px 40px",
    borderRadius: "12px",
    boxShadow: "0 2px 20px rgba(0,0,0,0.08)",
    width: "100%",
    maxWidth: "400px",
  },
  loginTitle: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#1a1a1a",
    margin: "0 0 4px",
  },
  loginSubtitle: {
    fontSize: "14px",
    color: "#888",
    margin: "0 0 32px",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "12px 16px",
    fontSize: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginBottom: "16px",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },
  error: {
    color: "#e53935",
    fontSize: "14px",
    margin: "0 0 12px",
  },
  loginBtn: {
    width: "100%",
    padding: "12px",
    fontSize: "15px",
    fontWeight: "600",
    background: "#1a1a1a",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  dashboard: {
    minHeight: "100vh",
    background: "#f5f5f0",
    fontFamily: "'Inter', -apple-system, sans-serif",
    paddingBottom: "80px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 40px",
    background: "#1a1a1a",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  headerTitle: {
    fontSize: "20px",
    fontWeight: "700",
    margin: 0,
  },
  headerSub: {
    fontSize: "13px",
    color: "#aaa",
    margin: 0,
  },
  logoutBtn: {
    padding: "8px 20px",
    fontSize: "13px",
    background: "transparent",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: "6px",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  loading: {
    textAlign: "center",
    padding: "80px 40px",
    color: "#888",
    fontSize: "16px",
  },
  empty: {
    textAlign: "center",
    padding: "80px 40px",
    color: "#888",
  },
  pageGroup: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "0 20px",
  },
  pageTitle: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#1a1a1a",
    marginTop: "40px",
    marginBottom: "16px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  sectionCard: {
    background: "#fff",
    borderRadius: "10px",
    padding: "24px",
    marginBottom: "16px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
  },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  sectionTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#333",
    margin: 0,
  },
  sectionActions: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  editBtn: {
    padding: "6px 16px",
    fontSize: "13px",
    background: "#f0f0f0",
    color: "#333",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  saveBtn: {
    padding: "6px 16px",
    fontSize: "13px",
    background: "#1a1a1a",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  cancelBtn: {
    padding: "6px 16px",
    fontSize: "13px",
    background: "transparent",
    color: "#888",
    border: "1px solid #ddd",
    borderRadius: "6px",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  savedBadge: {
    fontSize: "13px",
    color: "#4caf50",
    fontWeight: "600",
  },
  textarea: {
    width: "100%",
    padding: "16px",
    fontSize: "13px",
    fontFamily: "'SF Mono', 'Fira Code', monospace",
    lineHeight: "1.6",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#fafafa",
    outline: "none",
    resize: "vertical",
    boxSizing: "border-box",
  },
  preview: {
    fontSize: "14px",
    lineHeight: "1.8",
    color: "#555",
  },
  previewRow: {
    marginBottom: "8px",
  },
  previewKey: {
    fontWeight: "600",
    color: "#333",
    marginRight: "8px",
  },
  previewValue: {
    color: "#555",
  },
  previewArray: {
    marginLeft: "16px",
    marginTop: "4px",
  },
  previewArrayItem: {
    padding: "6px 0",
    borderBottom: "1px solid #f0f0f0",
    fontSize: "13px",
    lineHeight: "1.6",
  },
  previewInner: {
    marginRight: "12px",
    display: "inline",
  },
  updatedAt: {
    fontSize: "12px",
    color: "#bbb",
    marginTop: "12px",
    marginBottom: 0,
  },
};
