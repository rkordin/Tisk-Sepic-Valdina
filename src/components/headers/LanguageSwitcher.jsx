import React, { useState, useEffect, useRef } from "react";

const LANGUAGES = [
  { code: "sl", label: "SL", flag: "🇸🇮", name: "Slovenščina" },
  { code: "en", label: "EN", flag: "🇬🇧", name: "English" },
  { code: "de", label: "DE", flag: "🇩🇪", name: "Deutsch" },
  { code: "it", label: "IT", flag: "🇮🇹", name: "Italiano" },
  { code: "hr", label: "HR", flag: "🇭🇷", name: "Hrvatski" },
];

export const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("sl");
  const dropdownRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLanguage = (code) => {
    if (window.Weglot) {
      window.Weglot.switchTo(code);
      setCurrentLang(code);
    }
    setIsOpen(false);
  };

  const active = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <div className="td-lang-switcher" ref={dropdownRef}>
      <button
        className="td-lang-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Izberi jezik"
      >
        <span className="td-lang-flag">{active.flag}</span>
        <span className="td-lang-code">{active.label}</span>
        <svg
          className={`td-lang-chevron ${isOpen ? "open" : ""}`}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="td-lang-dropdown">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              className={`td-lang-option ${
                lang.code === currentLang ? "active" : ""
              }`}
              onClick={() => switchLanguage(lang.code)}
            >
              <span className="td-lang-flag">{lang.flag}</span>
              <span className="td-lang-name">{lang.name}</span>
              <span className="td-lang-code-small">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
