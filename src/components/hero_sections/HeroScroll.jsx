import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";

const TOTAL_FRAMES = 192;
const FRAME_PATH = (i) => `/frames/frame_${String(i).padStart(4, "0")}.jpg`;

const ANNOTATIONS = [
  {
    id: 1,
    show: 0.08,
    hide: 0.24,
    label: "01 — Kreativnost",
    title: "Od abstraktne ideje",
    desc: "Vsak projekt se začne z vizijo. Pomagamo vam oblikovati idejo v otipljivo resničnost.",
    stat: "500+",
    statLabel: "projektov letno",
    position: "left-top",
  },
  {
    id: 2,
    show: 0.22,
    hide: 0.40,
    label: "02 — Oblikovanje",
    title: "Do jasne oblike",
    desc: "Naš tim oblikovalcev in tiskarjev združi estetiko s funkcionalnostjo.",
    stat: "6",
    statLabel: "tiskarskih tehnik",
    position: "right-top",
  },
  {
    id: 3,
    show: 0.38,
    hide: 0.56,
    label: "03 — Natančnost",
    title: "Kristalna jasnost",
    desc: "Tehnologija UV, offset in digitalnega tiska za brezhibno reprodukcijo barv.",
    stat: "99.7%",
    statLabel: "barvna natančnost",
    position: "left-bottom",
  },
  {
    id: 4,
    show: 0.54,
    hide: 0.72,
    label: "04 — Tradicija",
    title: "40 let mojstrstva",
    desc: "Družinsko podjetje z dušo. Iz generacije v generacijo prenašamo znanje in strast.",
    stat: "40+",
    statLabel: "let izkušenj",
    position: "right-bottom",
  },
  {
    id: 5,
    show: 0.72,
    hide: 0.94,
    label: "05 — Identiteta",
    title: "Vaša blagovna znamka",
    desc: "Končni izdelek, ki govori vaš jezik. Embalaža, nalepke, tiskovine — vse pod eno streho.",
    stat: "1000+",
    statLabel: "zadovoljnih strank",
    position: "center-bottom",
  },
];

const SNAP_ZONES = ANNOTATIONS.map((a) => a.show);
const SNAP_TOLERANCE = 0.018;
const HOLD_DURATION = 550;

export const HeroScroll = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const framesRef = useRef([]);
  const currentFrameRef = useRef(-1);
  const isSnappingRef = useRef(false);
  const lastSnapRef = useRef(-1);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [heroProgress, setHeroProgress] = useState(0); // 0 = fully visible, 1 = gone

  // Load frames
  useEffect(() => {
    const imgs = [];
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      imgs[i] = img;
    }
    framesRef.current = imgs;
  }, []);

  // Canvas resize
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    if (currentFrameRef.current >= 0) {
      drawFrame(currentFrameRef.current);
    }
  }, []);

  const drawFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const img = framesRef.current[index];
    if (!img || !img.complete || !img.naturalWidth) return;

    currentFrameRef.current = index;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const cw = canvas.width / dpr;
    const ch = canvas.height / dpr;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    ctx.clearRect(0, 0, cw, ch);

    const isMobile = window.innerWidth < 768;
    let drawW, drawH, drawX, drawY;

    if (isMobile) {
      const scale = (cw / iw) * 1.3;
      drawW = iw * scale;
      drawH = ih * scale;
      drawX = (cw - drawW) / 2;
      drawY = (ch - drawH) / 2;
    } else {
      const scale = Math.max(cw / iw, ch / ih);
      drawW = iw * scale;
      drawH = ih * scale;
      drawX = (cw - drawW) / 2;
      drawY = (ch - drawH) / 2;
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  // Scroll handler
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          ticking = false;
          const section = sectionRef.current;
          if (!section) return;

          const scrollTop = window.scrollY;
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight - window.innerHeight;

          // Hero text fade: starts fading immediately, gone by 0.5 viewport scroll
          const heroFade = Math.max(0, Math.min(1, scrollTop / (window.innerHeight * 0.4)));
          setHeroProgress(heroFade);

          // Frame animation progress (starts after hero area)
          const animProgress = Math.max(
            0,
            Math.min(1, (scrollTop - sectionTop) / sectionHeight)
          );

          // Draw frame
          const frameIndex = Math.min(
            TOTAL_FRAMES - 1,
            Math.floor(animProgress * (TOTAL_FRAMES - 1))
          );
          if (frameIndex !== currentFrameRef.current) {
            drawFrame(frameIndex);
          }

          // Annotation cards
          const newVisible = new Set();
          ANNOTATIONS.forEach((a) => {
            if (animProgress >= a.show && animProgress <= a.hide) {
              newVisible.add(a.id);
            }
          });
          setVisibleCards(newVisible);
        });
        ticking = true;
      }
    };

    // Snap-stop
    const checkSnap = () => {
      if (isSnappingRef.current) return;
      const section = sectionRef.current;
      if (!section) return;

      const scrollTop = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight - window.innerHeight;
      const progress = (scrollTop - sectionTop) / sectionHeight;

      for (let i = 0; i < SNAP_ZONES.length; i++) {
        if (
          Math.abs(progress - SNAP_ZONES[i]) < SNAP_TOLERANCE &&
          lastSnapRef.current !== i
        ) {
          lastSnapRef.current = i;
          isSnappingRef.current = true;
          const target = sectionTop + SNAP_ZONES[i] * sectionHeight;
          window.scrollTo({ top: target, behavior: "instant" });
          document.body.style.overflow = "hidden";
          setTimeout(() => {
            document.body.style.overflow = "";
            isSnappingRef.current = false;
          }, HOLD_DURATION);
          break;
        }
      }

      const inAny = SNAP_ZONES.some(
        (z) => Math.abs(progress - z) < SNAP_TOLERANCE * 2
      );
      if (!inAny) lastSnapRef.current = -1;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", checkSnap, { passive: true });
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Draw first frame
    setTimeout(() => drawFrame(0), 100);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", checkSnap);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [drawFrame, resizeCanvas]);

  const heroStyle = {
    opacity: 1 - heroProgress,
    transform: `translateY(-${heroProgress * 60}px)`,
    pointerEvents: heroProgress > 0.8 ? "none" : "auto",
  };

  return (
    <section className="ts-scroll-combined" ref={sectionRef}>
      <div className="ts-scroll-combined__sticky">
        {/* Canvas behind everything */}
        <canvas ref={canvasRef} className="ts-scroll-animation__canvas" />

        {/* Hero text overlay — scrolls up and fades */}
        <div className="ts-hero-overlay" style={heroStyle}>
          <div className="ts-hero-overlay__bg" />
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8">
                <div className="ts-hero-content">
                  <div className="ts-hero-badge">40+ let tradicije</div>
                  <h1 className="ts-hero-title">
                    <span className="ts-hero-title__line">ČISTA tehnologija.</span>
                    <span className="ts-hero-title__line">ČISTI odnosi.</span>
                    <span className="ts-hero-title__line ts-hero-title__line--accent">
                      ČISTO zadovoljstvo.
                    </span>
                  </h1>
                </div>
              </div>
              <div className="col-lg-4 d-none d-lg-block">
                <div className="ts-hero-cta">
                  <p className="ts-hero-cta__text">
                    Celoten spekter tiskarskih in grafičnih storitev — od ideje do
                    končnega izdelka.
                  </p>
                  <Link to="/contact" className="ts-hero-cta__btn">
                    <span>Povpraševanje</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="ts-scroll-hint">
            <div className="ts-scroll-hint__mouse">
              <div className="ts-scroll-hint__dot" />
            </div>
            <span>Scroll</span>
          </div>
        </div>

        {/* Annotation cards */}
        {ANNOTATIONS.map((card) => (
          <div
            key={card.id}
            className={`ts-annotation ts-annotation--${card.position}${
              visibleCards.has(card.id) ? " ts-annotation--visible" : ""
            }`}
          >
            <div className="ts-annotation__inner">
              <div className="ts-annotation__label">{card.label}</div>
              <div className="ts-annotation__title">{card.title}</div>
              <p className="ts-annotation__desc">{card.desc}</p>
              <div className="ts-annotation__stat">
                <span className="ts-annotation__num">{card.stat}</span>
                <span className="ts-annotation__stat-label">
                  {card.statLabel}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
