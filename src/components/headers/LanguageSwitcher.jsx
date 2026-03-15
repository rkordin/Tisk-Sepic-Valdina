import React, { useState, useEffect, useRef } from "react";

const LANGUAGES = [
  { code: "sl", label: "SL", name: "Slovenščina" },
  { code: "en", label: "EN", name: "English" },
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "it", label: "IT", name: "Italiano" },
  { code: "hr", label: "HR", name: "Hrvatski" },
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
      <a
        href="#"
        className="td-lang-trigger"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        {active.label}
      </a>

      {isOpen && (
        <ul className="td-lang-dropdown submenu">
          {LANGUAGES.filter((l) => l.code !== currentLang).map((lang) => (
            <li key={lang.code}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  switchLanguage(lang.code);
                }}
              >
                {lang.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
