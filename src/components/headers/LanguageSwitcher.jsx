import React, { useState, useEffect } from "react";

const LANGUAGES = [
  { code: "sl", label: "SL", flag: "🇸🇮" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "de", label: "DE", flag: "🇩🇪" },
  { code: "it", label: "IT", flag: "🇮🇹" },
  { code: "hr", label: "HR", flag: "🇭🇷" },
];

export const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState("sl");

  useEffect(() => {
    const checkWeglot = () => {
      if (window.Weglot && window.Weglot.getCurrentLang) {
        setCurrentLang(window.Weglot.getCurrentLang());
      }
    };
    checkWeglot();
    const interval = setInterval(checkWeglot, 1000);
    return () => clearInterval(interval);
  }, []);

  const switchLanguage = (e, code) => {
    e.preventDefault();
    if (window.Weglot) {
      window.Weglot.switchTo(code);
      setCurrentLang(code);
    }
  };

  const active = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <>
      <a href="#">{active.flag} {active.label}</a>
      <ul className="td-submenu submenu">
        {LANGUAGES.filter((l) => l.code !== currentLang).map((lang) => (
          <li key={lang.code}>
            <a href="#" onClick={(e) => switchLanguage(e, lang.code)}>
              {lang.flag} {lang.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
