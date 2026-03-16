import { useState, useEffect, useCallback } from "react";
import logoImg from "../../assets/img/logo/logo-vertical.svg";

const TOTAL_FRAMES = 192;

export const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [hiding, setHiding] = useState(false);

  const handleProgress = useCallback((pct) => {
    setProgress(pct);
    if (pct >= 100) {
      setTimeout(() => {
        setHiding(true);
        setTimeout(() => {
          onComplete?.();
        }, 700);
      }, 300);
    }
  }, [onComplete]);

  useEffect(() => {
    // Preload all scroll animation frames
    let loaded = 0;
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.onload = img.onerror = () => {
        loaded++;
        handleProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
      };
      img.src = `/frames/frame_${String(i).padStart(4, "0")}.jpg`;
    }
  }, [handleProgress]);

  return (
    <div className={`ts-preloader${hiding ? " ts-preloader--hide" : ""}`}>
      <div className="ts-preloader__inner">
        <div className="ts-preloader__logo-wrap">
          <img src={logoImg} alt="Tisk Šepic" className="ts-preloader__logo" />
          <div className="ts-preloader__glow" />
        </div>
        <div className="ts-preloader__text">Nalagam</div>
        <div className="ts-preloader__bar">
          <div
            className="ts-preloader__bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="ts-preloader__pct">{progress}%</div>
      </div>
    </div>
  );
};
