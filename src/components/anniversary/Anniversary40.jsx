import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import "./Anniversary40.css";

const SECTIONS = [
  {
    id: "intro",
    bgSymbol: "40",
    lines: [
      { text: "40", isNumber: true },
      { text: "let je dolga doba." },
    ],
    body: "Tehnologije, ki so danes del našega vsakdana, pred 40 leti sploh še niso obstajale. Spremenil se je tudi svet tiska. Mnogo tiskaren je prišlo in odšlo, namesto njih so zrastle nove — in nekatere so ostale, druge ne.",
  },
  {
    id: "why",
    bgSymbol: "S",
    lines: [
      { text: "Mi smo" },
      { text: "ostali.", isAccent: true },
    ],
    body: "Ker smo ohranili človeški pogled na to, kaj se spreminja in kaj ostaja. Ker smo nenehno vlagali v izboljšavo procesov in novih tehnologij. Ne ker so nove, ampak ker prinašajo boljše rezultate za vas in boljše delovno okolje za naše zaposlene.",
  },
  {
    id: "future",
    bgSymbol: "∞",
    lines: [
      { text: "Tiskarna" },
      { text: "prihodnosti.", isAccent: true },
    ],
    body: "Zavedamo se pomena novega. Novo je tisto, kar nas žene naprej in kar nam daje smisel. Ker vemo, kaj se spreminja in kaj ostaja, smo danes današnja tiskarna, jutri pa bomo tiskarna prihodnosti.",
    footer: "1985 — 2025",
  },
];

/* One word that reveals via scroll progress */
const Word = ({ children, progress, range, isForty }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = isForty ? "#f79c18" : "#1a1a1a";
  const ghostColor = isForty ? "rgba(247,156,24,0.1)" : "rgba(26,26,26,0.1)";

  return (
    <span className={`a40-word${isForty ? " a40-word--forty" : ""}`}>
      <span className="a40-word__ghost" style={{ color: ghostColor }}>{children}</span>
      <motion.span className="a40-word__fill" style={{ opacity, color }}>{children}</motion.span>
    </span>
  );
};

/* One panel inside the sticky container */
const Panel = ({ section, index, totalSections, scrollYProgress }) => {
  const sectionSize = 1 / totalSections;
  const start = index * sectionSize;
  const end = start + sectionSize;
  const mid = start + sectionSize * 0.5;

  // Panel fades in over first 15%, stays, fades out over last 15%
  // Last panel doesn't fade out
  const isLast = index === totalSections - 1;
  const fadeIn = useTransform(scrollYProgress, [start, start + sectionSize * 0.12], [0, 1]);
  const fadeOut = useTransform(
    scrollYProgress,
    [end - sectionSize * 0.12, end],
    [1, 0]
  );
  const panelOpacity = isLast ? fadeIn : useTransform(
    scrollYProgress,
    [start, start + sectionSize * 0.12, end - sectionSize * 0.15, end],
    [0, 1, 1, 0]
  );

  // Slide up slightly as it enters
  const panelY = useTransform(
    scrollYProgress,
    [start, start + sectionSize * 0.15],
    [40, 0]
  );

  // Background symbol parallax
  const bgY = useTransform(scrollYProgress, [start, end], [60, -60]);

  // Word highlight: map over the body portion of the scroll range
  const wordStart = start + sectionSize * 0.15;
  const wordEnd = start + sectionSize * 0.85;
  const words = section.body.split(" ");

  return (
    <motion.div
      className="a40-panel"
      style={{ opacity: panelOpacity, y: panelY }}
    >
      {/* Background decorative symbol */}
      <motion.div className="a40-panel__bg" style={{ y: bgY }} aria-hidden="true">
        {section.bgSymbol}
      </motion.div>

      <div className="a40-panel__inner">
        {/* Accent line on first panel */}
        {index === 0 && <div className="a40-accent" />}

        {/* Heading */}
        <h2 className="a40-heading">
          {section.lines.map((line, i) => (
            <span
              key={i}
              className={`a40-heading__line${line.isNumber ? " a40-heading--number" : ""}${line.isAccent ? " a40-heading--accent" : ""}`}
            >
              {line.text}{" "}
            </span>
          ))}
        </h2>

        {/* Body with word-by-word scroll highlight */}
        <p className="a40-body">
          {words.map((word, i) => {
            const wStart = wordStart + (i / words.length) * (wordEnd - wordStart);
            const wEnd = wordStart + ((i + 1) / words.length) * (wordEnd - wordStart);
            return (
              <Word key={i} progress={scrollYProgress} range={[wStart, wEnd]}>
                {word}
              </Word>
            );
          })}
        </p>

        {/* Footer on last panel */}
        {section.footer && (
          <div className="a40-footer">
            <span className="a40-footer__years">{section.footer}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export const Anniversary40 = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="a40-outer" ref={containerRef}>
      <div className="a40-sticky">
        {SECTIONS.map((section, index) => (
          <Panel
            key={section.id}
            section={section}
            index={index}
            totalSections={SECTIONS.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};
