import React, { useEffect, useRef } from "react";
import "./Anniversary40.css";

const PARAGRAPHS = [
  {
    text: "40 let je dolga doba.",
    emphasis: "40",
  },
  {
    text: "Tehnologije, ki so danes del našega vsakdana, pred 40 leti sploh še niso obstajale. Spremenil se je tudi svet tiska.",
  },
  {
    text: "Mnogo tiskaren je prišlo in odšlo, namesto njih so zrastle nove — in nekatere so ostale, druge ne.",
  },
  {
    text: "Mi smo ostali, ker smo ohranili človeški pogled na to, kaj se spreminja in kaj ostaja.",
  },
  {
    text: "Ker smo nenehno vlagali v izboljšavo procesov in novih tehnologij. Ne ker so nove, ampak ker prinašajo boljše rezultate za vas in boljše delovno okolje za naše zaposlene.",
  },
  {
    text: "Zavedamo se pomena novega. Novo je tisto, kar nas žene naprej in kar nam daje smisel.",
  },
  {
    text: "Ker vemo, kaj se spreminja in kaj ostaja, smo danes današnja tiskarna, jutri pa bomo tiskarna prihodnosti.",
  },
];

export const Anniversary40 = () => {
  const sectionRef = useRef(null);
  const wordsRef = useRef([]);

  useEffect(() => {
    const words = wordsRef.current;
    if (!words.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("a40-word--visible");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -15% 0px",
        threshold: 0.5,
      }
    );

    words.forEach((word) => {
      if (word) observer.observe(word);
    });

    return () => observer.disconnect();
  }, []);

  let wordIndex = 0;

  const renderWords = (text, emphasis) => {
    const tokens = text.split(/(\s+)/);
    return tokens.map((token, i) => {
      if (/^\s+$/.test(token)) return token;
      const idx = wordIndex++;
      const isEmphasis = emphasis && token === emphasis;
      return (
        <span
          key={idx}
          ref={(el) => (wordsRef.current[idx] = el)}
          className={`a40-word${isEmphasis ? " a40-word--emphasis" : ""}`}
          style={{ transitionDelay: `${(idx % 8) * 0.04}s` }}
        >
          {token}
        </span>
      );
    });
  };

  return (
    <section className="a40-section" ref={sectionRef}>
      {/* Large decorative 40 */}
      <div className="a40-bg-number" aria-hidden="true">
        40
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-9 col-lg-10">
            <div className="a40-content">
              {/* Accent line */}
              <div className="a40-accent-line" />

              {PARAGRAPHS.map((para, pIdx) => (
                <p
                  key={pIdx}
                  className={`a40-paragraph${pIdx === 0 ? " a40-paragraph--lead" : ""}`}
                >
                  {renderWords(para.text, para.emphasis)}
                </p>
              ))}

              {/* Subtle closing mark */}
              <div className="a40-closing-mark">
                <span className="a40-closing-years">1985 — 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
