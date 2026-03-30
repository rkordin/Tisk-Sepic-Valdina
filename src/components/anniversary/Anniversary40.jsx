import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import "./Anniversary40.css";

const SECTIONS = [
  {
    id: "intro",
    lines: [
      { text: "40", isNumber: true },
      { text: "let je dolga doba." },
    ],
    body: "Tehnologije, ki so danes del našega vsakdana, pred 40 leti sploh še niso obstajale. Spremenil se je tudi svet tiska. Mnogo tiskaren je prišlo in odšlo, namesto njih so zrastle nove — in nekatere so ostale, druge ne.",
  },
  {
    id: "why",
    lines: [
      { text: "Mi smo" },
      { text: "ostali.", isAccent: true },
    ],
    body: "Ker smo ohranili človeški pogled na to, kaj se spreminja in kaj ostaja. Ker smo nenehno vlagali v izboljšavo procesov in novih tehnologij. Ne ker so nove, ampak ker prinašajo boljše rezultate za vas in boljše delovno okolje za naše zaposlene.",
  },
  {
    id: "future",
    lines: [
      { text: "Tiskarna" },
      { text: "prihodnosti.", isAccent: true },
    ],
    body: "Zavedamo se pomena novega. Novo je tisto, kar nas žene naprej in kar nam daje smisel. Ker vemo, kaj se spreminja in kaj ostaja, smo danes današnja tiskarna, jutri pa bomo tiskarna prihodnosti.",
    footer: "1985 — 2025",
  },
];

const ScrollPanel = ({ section, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Heading fades in at 20-40% of scroll, body at 35-55%
  const headingOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const headingY = useTransform(scrollYProgress, [0.1, 0.3], [60, 0]);
  const bodyOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const bodyY = useTransform(scrollYProgress, [0.2, 0.4], [40, 0]);
  const footerOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  // Parallax on the bg number
  const bgY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <div className="a40-panel" ref={ref}>
      {/* Background decorative element */}
      <motion.div className="a40-panel-bg" style={{ y: bgY }} aria-hidden="true">
        {section.id === "intro" && "40"}
        {section.id === "why" && "S"}
        {section.id === "future" && "∞"}
      </motion.div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-9 col-lg-10">
            {/* Accent line */}
            {index === 0 && <div className="a40-accent-line" />}

            {/* Heading */}
            <motion.div
              className="a40-panel-heading"
              style={{ opacity: headingOpacity, y: headingY }}
            >
              {section.lines.map((line, i) => (
                <span
                  key={i}
                  className={`a40-heading-line${line.isNumber ? " a40-heading-number" : ""}${line.isAccent ? " a40-heading-accent" : ""}`}
                >
                  {line.text}{" "}
                </span>
              ))}
            </motion.div>

            {/* Body text */}
            <motion.p
              className="a40-panel-body"
              style={{ opacity: bodyOpacity, y: bodyY }}
            >
              {section.body}
            </motion.p>

            {/* Footer (only on last panel) */}
            {section.footer && (
              <motion.div className="a40-panel-footer" style={{ opacity: footerOpacity }}>
                <span className="a40-closing-years">{section.footer}</span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Anniversary40 = () => {
  return (
    <section className="a40-section">
      {SECTIONS.map((section, index) => (
        <ScrollPanel key={section.id} section={section} index={index} />
      ))}
    </section>
  );
};
