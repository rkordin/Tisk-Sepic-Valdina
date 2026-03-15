import React, { useState, useEffect } from "react";

const LANGUAGES = [
  { code: "sl", label: "SL", flag: "🇸🇮", url: "https://tisksepic.com" },
  { code: "hr", label: "HR", flag: "🇭🇷", url: "https://hr.tisksepic.com" },
  { code: "cs", label: "CS", flag: "🇨🇿", url: "https://cs.tisksepic.com" },
  { code: "en", label: "EN", flag: "🇬🇧", url: "https://en.tisksepic.com" },
  { code: "fr", label: "FR", flag: "🇫🇷", url: "https://fr.tisksepic.com" },
  { code: "de", label: "DE", flag: "🇩🇪", url: "https://de.tisksepic.com" },
  { code: "hu", label: "HU", flag: "🇭🇺", url: "https://hu.tisksepic.com" },
  { code: "ru", label: "RU", flag: "🇷🇺", url: "https://ru.tisksepic.com" },
];

function detectCurrentLang() {
  if (typeof window === "undefined") return "sl";
  const host = window.location.hostname;
  const sub = host.split(".")[0];
  const match = LANGUAGES.find((l) => l.code === sub);
  return match ? match.code : "sl";
}

export const LanguageSwitcher = () => {
  const [currentLang] = useState(detectCurrentLang);

  const active = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <>
      <a href="#">{active.flag} {active.label}</a>
      <ul className="td-submenu submenu">
        {LANGUAGES.filter((l) => l.code !== currentLang).map((lang) => (
          <li key={lang.code}>
            <a href={lang.url + window.location.pathname}>
              {lang.flag} {lang.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
