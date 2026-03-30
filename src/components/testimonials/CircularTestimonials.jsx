import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useCmsContent } from "../../hooks/useCmsContent";
import authorImage01 from "../../assets/img/testimonial/01.png";
import authorImage02 from "../../assets/img/testimonial/02.png";
import authorImage03 from "../../assets/img/testimonial/03.png";
import authorImage04 from "../../assets/img/testimonial/04.png";
import authorImage05 from "../../assets/img/testimonial/05.png";
import "./CircularTestimonials.css";

const DEFAULT_TESTIMONIALS = [
  {
    name: "Marko Kovač",
    designation: "Direktor, Adria Mobil",
    quote:
      "S Tisk Šepic sodelujemo že vrsto let. Njihova zanesljivost in kakovost tiska sta izjemni. Vedno znova nas presenetijo s hitrostjo in natančnostjo izvedbe, tudi pri najzahtevnejših projektih embalaže in katalogov.",
    src: authorImage01,
  },
  {
    name: "Ana Novak",
    designation: "Vodja marketinga, Krka d.d.",
    quote:
      "Za farmacevtsko embalažo potrebujemo najvišje standarde kakovosti. Clean Room certificirana proizvodnja pri Tisk Šepic nam zagotavlja skladnost z vsemi regulatornimi zahtevami. Odlično partnerstvo.",
    src: authorImage02,
  },
  {
    name: "Peter Zupančič",
    designation: "Lastnik, Zupančič Gradnje",
    quote:
      "Od vizitk do velikoformatnih plakatov — pri Tisk Šepic dobimo vse na enem mestu. Kakovost je vedno vrhunska, roki so kratki, ekipa pa izjemno odzivna. Priporočam brez zadržkov.",
    src: authorImage03,
  },
  {
    name: "Maja Horvat",
    designation: "Kreativna direktorica, Studio MH",
    quote:
      "Kot oblikovalska agencija potrebujemo tiskarskega partnerja, ki razume naše zahteve. Tisk Šepic to odlično obvladuje — od posebnih UV efektov do slepega tiska. Rezultati so vedno nad pričakovanji.",
    src: authorImage04,
  },
  {
    name: "Tomaž Dolenc",
    designation: "Direktor prodaje, TPV Group",
    quote:
      "Polepitve naših vozil in reklamne table so vedno brezhibne. Profesionalen pristop, korektni odnosi in zanesljiva dobava. Tisk Šepic je naš dolgoletni partner in to z razlogom.",
    src: authorImage05,
  },
];

function calculateGap(width) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularTestimonials = () => {
  const { content } = useCmsContent("home");
  const cmsItems = content?.testimonials?.items;

  const testimonials = useMemo(() => {
    if (!cmsItems) return DEFAULT_TESTIMONIALS;
    const images = [authorImage01, authorImage02, authorImage03, authorImage04, authorImage05];
    return cmsItems.map((item, i) => ({
      name: item.name,
      designation: item.designation,
      quote: item.content,
      src: images[i] || images[0],
    }));
  }, [cmsItems]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);
  const imageContainerRef = useRef(null);
  const autoplayRef = useRef(null);

  const len = testimonials.length;
  const active = testimonials[activeIndex];

  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) setContainerWidth(imageContainerRef.current.offsetWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % len);
    }, 5000);
    return () => clearInterval(autoplayRef.current);
  }, [len]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + len) % len);
    clearInterval(autoplayRef.current);
  }, [len]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % len);
    clearInterval(autoplayRef.current);
  }, [len]);

  function getImageStyle(index) {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + len) % len === index;
    const isRight = (activeIndex + 1) % len === index;

    if (isActive)
      return { zIndex: 3, opacity: 1, pointerEvents: "auto", transform: "translateX(0) translateY(0) scale(1) rotateY(0deg)", transition: "all 0.8s cubic-bezier(.4,2,.3,1)" };
    if (isLeft)
      return { zIndex: 2, opacity: 1, pointerEvents: "auto", transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`, transition: "all 0.8s cubic-bezier(.4,2,.3,1)" };
    if (isRight)
      return { zIndex: 2, opacity: 1, pointerEvents: "auto", transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`, transition: "all 0.8s cubic-bezier(.4,2,.3,1)" };
    return { zIndex: 1, opacity: 0, pointerEvents: "none", transition: "all 0.8s cubic-bezier(.4,2,.3,1)" };
  }

  return (
    <div className="ct-area td-grey-bg">
      {/* Section header */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center mb-60">
            <span className="td-section-title-pre mb-10">Mnenja</span>
            <h2 className="td-section-title">Kaj pravijo naše stranke</h2>
          </div>
        </div>
      </div>

      <div className="ct-wrapper">
        <div className="ct-grid">
          {/* Images */}
          <div className="ct-images" ref={imageContainerRef} style={{ perspective: "1000px" }}>
            {testimonials.map((t, i) => (
              <img
                key={i}
                src={t.src}
                alt={t.name}
                className="ct-image"
                style={getImageStyle(i)}
                data-editable={`testimonial-author-${i}-img`}
                data-editable-type="image"
              />
            ))}
          </div>

          {/* Content */}
          <div className="ct-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <h3 className="ct-name">{active.name}</h3>
                <p className="ct-designation">{active.designation}</p>
                <motion.p className="ct-quote">
                  {active.quote.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ filter: "blur(8px)", opacity: 0, y: 5 }}
                      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * i }}
                      style={{ display: "inline-block" }}
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* Arrow buttons */}
            <div className="ct-arrows">
              <button
                className="ct-arrow"
                onClick={handlePrev}
                onMouseEnter={() => setHoverPrev(true)}
                onMouseLeave={() => setHoverPrev(false)}
                style={{ background: hoverPrev ? "#f79c18" : "#1a1a1a" }}
                aria-label="Prejšnje mnenje"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
              </button>
              <button
                className="ct-arrow"
                onClick={handleNext}
                onMouseEnter={() => setHoverNext(true)}
                onMouseLeave={() => setHoverNext(false)}
                style={{ background: hoverNext ? "#f79c18" : "#1a1a1a" }}
                aria-label="Naslednje mnenje"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
