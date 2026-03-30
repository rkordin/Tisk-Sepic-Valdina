import React, { useState, useEffect, useRef } from "react";
import { getAllContent, updateContent } from "../../lib/supabase";
import { clearCmsCache } from "../../hooks/useCmsContent";

const ADMIN_USER = "Tisk";
const ADMIN_PASS = "x12345y";

const SECTION_LABELS = {
  home: {
    _page: "Domača stran",
    hero: "Hero sekcija",
    about: "O nas sekcija",
    services: "Storitve",
    testimonials: "Mnenja strank",
    blog: "Blog sekcija",
    team: "Ekipa",
    awards: "Certifikati in mejniki",
    counter: "Statistika",
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

/* ─── Login ──────────────────────────────────────────── */
const LoginScreen = ({ username, setUsername, password, setPassword, error, onLogin }) => (
  <div style={s.loginWrap}>
    <div style={s.loginCard}>
      <div style={s.loginLogo}>TS</div>
      <h1 style={s.loginTitle}>Tisk Šepic</h1>
      <p style={s.loginSub}>Upravljanje vsebine spletne strani</p>
      <form onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
        <input
          style={s.input}
          type="text"
          placeholder="Uporabniško ime"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
        <input
          style={s.input}
          type="password"
          placeholder="Geslo"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={s.error}>{error}</p>}
        <button style={s.loginBtn} type="submit">Prijava</button>
      </form>
    </div>
  </div>
);

/* ─── Dashboard ──────────────────────────────────────── */
const AdminDashboard = ({ onLogout }) => {
  const [tab, setTab] = useState("chat"); // "chat" or "manual"
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { loadContent(); }, []);

  async function loadContent() {
    setLoading(true);
    const data = await getAllContent();
    setRows(data);
    setLoading(false);
  }

  return (
    <div style={s.dashboard}>
      {/* Header */}
      <div style={s.header}>
        <div style={s.headerLeft}>
          <div style={s.headerLogo}>TS</div>
          <div>
            <h1 style={s.headerTitle}>Upravljanje vsebine</h1>
            <p style={s.headerSub}>Tisk Šepic d.o.o.</p>
          </div>
        </div>
        <div style={s.headerRight}>
          <div style={s.tabBar}>
            <button
              style={tab === "chat" ? s.tabActive : s.tab}
              onClick={() => setTab("chat")}
            >
              Pomočnica
            </button>
            <button
              style={tab === "manual" ? s.tabActive : s.tab}
              onClick={() => setTab("manual")}
            >
              Ročno urejanje
            </button>
          </div>
          <button style={s.logoutBtn} onClick={onLogout}>Odjava</button>
        </div>
      </div>

      {tab === "chat" ? (
        <ChatPanel onContentChanged={loadContent} />
      ) : (
        <ManualPanel rows={rows} loading={loading} onReload={loadContent} />
      )}
    </div>
  );
};

/* ─── AI Chat Panel ──────────────────────────────────── */
const ChatPanel = ({ onContentChanged }) => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Pozdravljeni! Sem vaša pomočnica za urejanje spletne strani.\n\nPovejte mi, kaj želite spremeniti, na primer:\n• \"Spremeni telefonsko številko na 07 394 2669\"\n• \"Dodaj novo mnenje stranke od Janeza iz Revoz-a\"\n• \"Spremeni naslov hero sekcije\"\n• \"Posodobi delovni čas na 08:00–16:00\"",
    },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend() {
    const text = input.trim();
    if (!text || sending) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/chat-cms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();

      if (data.error) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", text: "Napaka: " + data.error, isError: true },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            text: data.reply,
            applied: data.applied,
          },
        ]);
        if (data.applied) {
          clearCmsCache();
          onContentChanged();
        }
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Povezava ni uspela. Poskusite znova.", isError: true },
      ]);
    } finally {
      setSending(false);
      inputRef.current?.focus();
    }
  }

  return (
    <div style={s.chatContainer}>
      <div style={s.chatMessages}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={msg.role === "user" ? s.msgUser : s.msgAssistant}
          >
            {msg.role === "assistant" && (
              <div style={s.msgAvatar}>TS</div>
            )}
            <div
              style={{
                ...s.msgBubble,
                ...(msg.role === "user" ? s.msgBubbleUser : s.msgBubbleAssistant),
                ...(msg.isError ? s.msgBubbleError : {}),
              }}
            >
              <p style={s.msgText}>{msg.text}</p>
              {msg.applied && (
                <div style={s.appliedBadge}>
                  Sprememba shranjena
                </div>
              )}
            </div>
          </div>
        ))}
        {sending && (
          <div style={s.msgAssistant}>
            <div style={s.msgAvatar}>TS</div>
            <div style={{ ...s.msgBubble, ...s.msgBubbleAssistant }}>
              <div style={s.typing}>
                <span style={s.dot1}></span>
                <span style={s.dot2}></span>
                <span style={s.dot3}></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div style={s.chatInputWrap}>
        <div style={s.chatInputInner}>
          <input
            ref={inputRef}
            style={s.chatInput}
            type="text"
            placeholder="Napišite, kaj želite spremeniti..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={sending}
            autoFocus
          />
          <button
            style={{
              ...s.sendBtn,
              opacity: sending || !input.trim() ? 0.4 : 1,
            }}
            onClick={handleSend}
            disabled={sending || !input.trim()}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
        <p style={s.chatHint}>
          Pišite v slovenščini. Pomočnica bo razumela in naredila spremembe.
        </p>
      </div>
    </div>
  );
};

/* ─── Manual Edit Panel ──────────────────────────────── */
const ManualPanel = ({ rows, loading, onReload }) => {
  const [saving, setSaving] = useState(null);
  const [saved, setSaved] = useState(null);
  const [editingRow, setEditingRow] = useState(null);
  const [editJson, setEditJson] = useState("");

  async function handleSave(row) {
    try {
      const parsed = JSON.parse(editJson);
      setSaving(row.id);
      await updateContent(row.page, row.section, parsed);
      clearCmsCache();
      setSaved(row.id);
      setEditingRow(null);
      setTimeout(() => setSaved(null), 2000);
      await onReload();
    } catch (err) {
      alert("Napaka: " + (err.message || "Neveljavni podatki"));
    } finally {
      setSaving(null);
    }
  }

  const grouped = rows.reduce((acc, row) => {
    if (!acc[row.page]) acc[row.page] = [];
    acc[row.page].push(row);
    return acc;
  }, {});

  if (loading) return <p style={s.loading}>Nalaganje vsebine...</p>;

  return (
    <div style={s.manualWrap}>
      {Object.entries(grouped).map(([page, sections]) => (
        <div key={page} style={s.pageGroup}>
          <h2 style={s.pageTitle}>{SECTION_LABELS[page]?._page || page}</h2>
          {sections.map((row) => (
            <div key={row.id} style={s.sectionCard}>
              <div style={s.sectionHeader}>
                <h3 style={s.sectionTitle}>
                  {SECTION_LABELS[page]?.[row.section] || row.section}
                </h3>
                <div style={s.sectionActions}>
                  {saved === row.id && <span style={s.savedBadge}>Shranjeno!</span>}
                  {editingRow === row.id ? (
                    <>
                      <button style={s.cancelBtn} onClick={() => setEditingRow(null)}>Prekliči</button>
                      <button style={s.saveBtn} onClick={() => handleSave(row)} disabled={saving === row.id}>
                        {saving === row.id ? "Shranjujem..." : "Shrani"}
                      </button>
                    </>
                  ) : (
                    <button style={s.editBtn} onClick={() => { setEditingRow(row.id); setEditJson(JSON.stringify(row.content, null, 2)); }}>
                      Uredi
                    </button>
                  )}
                </div>
              </div>
              {editingRow === row.id ? (
                <textarea
                  style={s.textarea}
                  value={editJson}
                  onChange={(e) => setEditJson(e.target.value)}
                  rows={Math.min(30, Math.max(8, editJson.split("\n").length + 2))}
                />
              ) : (
                <ContentPreview content={row.content} />
              )}
              <p style={s.updatedAt}>
                Zadnja sprememba: {new Date(row.updated_at).toLocaleString("sl-SI")}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const ContentPreview = ({ content }) => {
  if (!content) return null;
  return (
    <div style={s.preview}>
      {Object.entries(content).map(([key, value]) => (
        <div key={key} style={s.previewRow}>
          <span style={s.previewKey}>{key}:</span>
          {Array.isArray(value) ? (
            <div style={s.previewArray}>
              {value.map((item, i) => (
                <div key={i} style={s.previewArrayItem}>
                  {typeof item === "object"
                    ? Object.entries(item).map(([k, v]) => (
                        <span key={k} style={s.previewInner}>
                          <strong>{k}:</strong> {String(v)}{"  "}
                        </span>
                      ))
                    : <span>{String(item)}</span>}
                </div>
              ))}
            </div>
          ) : (
            <span style={s.previewValue}>{String(value)}</span>
          )}
        </div>
      ))}
    </div>
  );
};

/* ─── Styles ─────────────────────────────────────────── */
const s = {
  // Login
  loginWrap: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
    fontFamily: "'Inter', -apple-system, sans-serif",
  },
  loginCard: {
    background: "#fff",
    padding: "48px 40px",
    borderRadius: "16px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
    width: "100%",
    maxWidth: "380px",
    textAlign: "center",
  },
  loginLogo: {
    width: "56px",
    height: "56px",
    background: "#1a1a1a",
    color: "#fff",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: "800",
    margin: "0 auto 20px",
    letterSpacing: "-1px",
  },
  loginTitle: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#1a1a1a",
    margin: "0 0 4px",
  },
  loginSub: {
    fontSize: "14px",
    color: "#999",
    margin: "0 0 32px",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "14px 16px",
    fontSize: "15px",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    marginBottom: "12px",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
  },
  error: { color: "#e53935", fontSize: "14px", margin: "0 0 12px" },
  loginBtn: {
    width: "100%",
    padding: "14px",
    fontSize: "15px",
    fontWeight: "600",
    background: "#1a1a1a",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontFamily: "inherit",
    marginTop: "4px",
  },

  // Dashboard
  dashboard: {
    minHeight: "100vh",
    background: "#f5f5f0",
    fontFamily: "'Inter', -apple-system, sans-serif",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    background: "#1a1a1a",
    color: "#fff",
    flexShrink: 0,
  },
  headerLeft: { display: "flex", alignItems: "center", gap: "14px" },
  headerLogo: {
    width: "40px",
    height: "40px",
    background: "rgba(255,255,255,0.12)",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    fontWeight: "800",
    letterSpacing: "-1px",
  },
  headerTitle: { fontSize: "16px", fontWeight: "700", margin: 0 },
  headerSub: { fontSize: "12px", color: "#888", margin: 0 },
  headerRight: { display: "flex", alignItems: "center", gap: "16px" },
  tabBar: {
    display: "flex",
    background: "rgba(255,255,255,0.08)",
    borderRadius: "8px",
    padding: "3px",
  },
  tab: {
    padding: "7px 16px",
    fontSize: "13px",
    background: "transparent",
    color: "rgba(255,255,255,0.5)",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontFamily: "inherit",
    fontWeight: "500",
  },
  tabActive: {
    padding: "7px 16px",
    fontSize: "13px",
    background: "rgba(255,255,255,0.15)",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontFamily: "inherit",
    fontWeight: "600",
  },
  logoutBtn: {
    padding: "7px 16px",
    fontSize: "13px",
    background: "transparent",
    color: "rgba(255,255,255,0.5)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "6px",
    cursor: "pointer",
    fontFamily: "inherit",
  },

  // Chat
  chatContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    maxWidth: "720px",
    margin: "0 auto",
    width: "100%",
    padding: "0 20px",
  },
  chatMessages: {
    flex: 1,
    overflowY: "auto",
    padding: "32px 0 16px",
  },
  msgUser: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "16px",
  },
  msgAssistant: {
    display: "flex",
    justifyContent: "flex-start",
    gap: "10px",
    marginBottom: "16px",
    alignItems: "flex-start",
  },
  msgAvatar: {
    width: "32px",
    height: "32px",
    background: "#1a1a1a",
    color: "#fff",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
    fontWeight: "800",
    flexShrink: 0,
    marginTop: "2px",
    letterSpacing: "-0.5px",
  },
  msgBubble: {
    padding: "14px 18px",
    borderRadius: "16px",
    maxWidth: "85%",
    lineHeight: "1.5",
  },
  msgBubbleUser: {
    background: "#1a1a1a",
    color: "#fff",
    borderBottomRightRadius: "4px",
  },
  msgBubbleAssistant: {
    background: "#fff",
    color: "#333",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
    borderBottomLeftRadius: "4px",
  },
  msgBubbleError: {
    background: "#fff5f5",
    borderColor: "#ffcdd2",
  },
  msgText: {
    margin: 0,
    fontSize: "14px",
    whiteSpace: "pre-wrap",
    lineHeight: "1.6",
  },
  appliedBadge: {
    marginTop: "10px",
    padding: "6px 12px",
    background: "#e8f5e9",
    color: "#2e7d32",
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: "600",
    display: "inline-block",
  },
  typing: {
    display: "flex",
    gap: "4px",
    padding: "4px 0",
  },
  dot1: { width: 7, height: 7, borderRadius: "50%", background: "#ccc", animation: "blink 1.4s infinite 0s" },
  dot2: { width: 7, height: 7, borderRadius: "50%", background: "#ccc", animation: "blink 1.4s infinite 0.2s" },
  dot3: { width: 7, height: 7, borderRadius: "50%", background: "#ccc", animation: "blink 1.4s infinite 0.4s" },
  chatInputWrap: {
    padding: "16px 0 24px",
    flexShrink: 0,
  },
  chatInputInner: {
    display: "flex",
    gap: "8px",
    background: "#fff",
    borderRadius: "14px",
    padding: "6px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
  },
  chatInput: {
    flex: 1,
    padding: "12px 16px",
    fontSize: "15px",
    border: "none",
    outline: "none",
    fontFamily: "inherit",
    background: "transparent",
  },
  sendBtn: {
    width: "44px",
    height: "44px",
    background: "#1a1a1a",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "opacity 0.2s",
  },
  chatHint: {
    fontSize: "12px",
    color: "#aaa",
    textAlign: "center",
    marginTop: "8px",
    marginBottom: 0,
  },

  // Manual panel
  manualWrap: { paddingBottom: "80px" },
  loading: { textAlign: "center", padding: "80px 40px", color: "#888", fontSize: "16px" },
  pageGroup: { maxWidth: "900px", margin: "0 auto", padding: "0 20px" },
  pageTitle: {
    fontSize: "16px", fontWeight: "700", color: "#1a1a1a",
    marginTop: "32px", marginBottom: "12px",
    textTransform: "uppercase", letterSpacing: "0.5px",
  },
  sectionCard: {
    background: "#fff", borderRadius: "12px", padding: "24px",
    marginBottom: "12px", boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
  },
  sectionHeader: {
    display: "flex", justifyContent: "space-between",
    alignItems: "center", marginBottom: "16px",
  },
  sectionTitle: { fontSize: "15px", fontWeight: "600", color: "#333", margin: 0 },
  sectionActions: { display: "flex", alignItems: "center", gap: "8px" },
  editBtn: {
    padding: "6px 14px", fontSize: "13px", background: "#f0f0f0",
    color: "#333", border: "none", borderRadius: "6px", cursor: "pointer", fontFamily: "inherit",
  },
  saveBtn: {
    padding: "6px 14px", fontSize: "13px", background: "#1a1a1a",
    color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontFamily: "inherit",
  },
  cancelBtn: {
    padding: "6px 14px", fontSize: "13px", background: "transparent",
    color: "#888", border: "1px solid #ddd", borderRadius: "6px", cursor: "pointer", fontFamily: "inherit",
  },
  savedBadge: { fontSize: "13px", color: "#4caf50", fontWeight: "600" },
  textarea: {
    width: "100%", padding: "16px", fontSize: "13px",
    fontFamily: "'SF Mono', 'Fira Code', monospace", lineHeight: "1.6",
    border: "1px solid #e0e0e0", borderRadius: "10px", background: "#fafafa",
    outline: "none", resize: "vertical", boxSizing: "border-box",
  },
  preview: { fontSize: "14px", lineHeight: "1.8", color: "#555" },
  previewRow: { marginBottom: "6px" },
  previewKey: { fontWeight: "600", color: "#333", marginRight: "8px" },
  previewValue: { color: "#555" },
  previewArray: { marginLeft: "16px", marginTop: "4px" },
  previewArrayItem: {
    padding: "5px 0", borderBottom: "1px solid #f0f0f0",
    fontSize: "13px", lineHeight: "1.6",
  },
  previewInner: { marginRight: "12px", display: "inline" },
  updatedAt: { fontSize: "12px", color: "#bbb", marginTop: "12px", marginBottom: 0 },
};

// Add typing animation CSS
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes blink {
      0%, 80%, 100% { opacity: 0.3; }
      40% { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}
