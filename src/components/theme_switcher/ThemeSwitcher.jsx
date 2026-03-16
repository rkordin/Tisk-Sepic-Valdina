import React, { useEffect, useState } from "react";

const STORAGE_KEY = "tisk-sepic-theme";
const DEFAULT_THEME = "light";

const themes = [
  { id: "light", icon: "light_mode", title: "Svetla" },
  { id: "dark", icon: "dark_mode", title: "Temna" },
  { id: "colorful", icon: "palette", title: "Barvita" },
];

export const ThemeSwitcher = () => {
  const [active, setActive] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
    }
    return DEFAULT_THEME;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", active);
    localStorage.setItem(STORAGE_KEY, active);
  }, [active]);

  return (
    <div className="theme-switcher" id="themeSwitcher">
      {themes.map((t) => (
        <button
          key={t.id}
          className={`theme-btn${active === t.id ? " active" : ""}`}
          onClick={() => setActive(t.id)}
          title={t.title}
          aria-label={`Tema: ${t.title}`}
        >
          <span className="material-symbols-outlined">{t.icon}</span>
        </button>
      ))}
    </div>
  );
};
