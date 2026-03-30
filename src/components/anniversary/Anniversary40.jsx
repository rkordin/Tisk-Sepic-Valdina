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

/* Word that reveals via scroll */
const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <span className="a40-word">
      <span className="a40-word__ghost">{children}</span>
      <motion.span className="a40-word__fill" style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

/* Single panel — all hooks called unconditionally */
const Panel = ({ section, index, totalSections, scrollYProgress }) => {
  const size = 1 / totalSections;
  const start = index * size;
  const end = start + size;
  const isFirst = index === 0;
  const isLast = index === totalSections - 1;

  // Fade in: first panel starts visible, others fade in
  const fadeInRange = isFirst
    ? [0, 0]        // already visible
    : [start, start + size * 0.15];
  const fadeInValues = isFirst ? [1, 1] : [0, 1];

  // Fade out: last panel stays, others fade out
  const fadeOutRange = isLast
    ? [1, 1]         // never fades out
    : [end - size * 0.15, end];
  const fadeOutValues = isLast ? [1, 1] : [1, 0];

  const fadeInProgress = useTransform(scrollYProgress, fadeInRange, fadeInValues);
  const fadeOutProgress = useTransform(scrollYProgress, fadeOutRange, fadeOutValues);

  // Combine: multiply fade in × fade out
  const panelOpacity = useTransform(
    [fadeInProgress, fadeOutProgress],
    ([fi, fo]) => fi * fo
  );

  // Slide up on enter
  const panelY = useTransform(
    scrollYProgress,
    isFirst ? [0, 0] : [start, start + size * 0.15],
    isFirst ? [0, 0] : [50, 0]
  );

  // Background symbol parallax
  const bgY = useTransform(scrollYProgress, [start, end], [60, -60]);

  // Word highlight range
  const wordStart = start + size * 0.1;
  const wordEnd = start + size * 0.9;
  const words = section.body.split(" ");

  return (
    <motion.div className="a40-panel" style={{ opacity: panelOpacity, y: panelY }}>
      <motion.div className="a40-panel__bg" style={{ y: bgY }} aria-hidden="true">
        {section.bgSymbol}
      </motion.div>

      <div className="a40-panel__inner">
        {isFirst && <div className="a40-accent" />}

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

        <p className="a40-body">
          {words.map((word, i) => {
            const wS = wordStart + (i / words.length) * (wordEnd - wordStart);
            const wE = wordStart + ((i + 1) / words.length) * (wordEnd - wordStart);
            return <Word key={i} progress={scrollYProgress} range={[wS, wE]}>{word}</Word>;
          })}
        </p>

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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section className="a40-outer" ref={ref}>
      <div className="a40-sticky">
        {SECTIONS.map((section, i) => (
          <Panel
            key={section.id}
            section={section}
            index={i}
            totalSections={SECTIONS.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};
