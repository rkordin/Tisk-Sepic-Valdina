import React, { useEffect, useState, useCallback } from "react";
import $ from "jquery";
import About1 from "../../assets/img/about/01.jpg";
import About2 from "../../assets/img/about/02.jpg";
import About3 from "../../assets/img/about/03.jpg";
import Slide01 from "../../assets/img/about/slideshow/slide-01.jpg";
import Slide02 from "../../assets/img/about/slideshow/slide-02.jpg";
import Slide03 from "../../assets/img/about/slideshow/slide-03.jpg";
import Slide04 from "../../assets/img/about/slideshow/slide-04.jpg";
import Slide05 from "../../assets/img/about/slideshow/slide-05.jpg";
import Slide06 from "../../assets/img/about/slideshow/slide-06.jpg";
import Slide07 from "../../assets/img/about/slideshow/slide-07.jpg";
import Slide08 from "../../assets/img/about/slideshow/slide-08.jpg";
import { Link } from "react-router-dom";
import { useCmsContent } from "../../hooks/useCmsContent";

const PANEL_IMAGES = [About1, About2, About3];
const CHILD_CLASSES = ["child-one", "child-two", "child-three"];

const SLIDESHOW_IMAGES = [
  { src: Slide01, alt: "Sodobna tiskarska linija v čistem prostoru" },
  { src: Slide04, alt: "Ročna priprava tipografskega tiska" },
  { src: Slide03, alt: "Kontrola kakovosti z lupo" },
  { src: Slide05, alt: "Detajl zgodovinskega tiskarskega stroja" },
  { src: Slide06, alt: "Pantone barvni vzorčnik" },
  { src: Slide02, alt: "Heidelberg Cylinder — naša dediščina" },
  { src: Slide07, alt: "Moderna tiskarska oprema" },
  { src: Slide08, alt: "Tiskar pri delu" },
];

const DEFAULT_ABOUT = {
  section_label: "O nas",
  heading: "Družinsko podjetje z več kot 40-letno tradicijo",
  paragraph:
    "V podjetju Tisk Šepic rastemo in se učimo že več kot 40 let. Z visokimi standardi kakovosti želimo zadovoljiti potrebe vsakega kupca. Naša tiskarna ponuja celoten spekter tiskarskih in grafičnih storitev na enem mestu.",
  panels: [
    { id: "01", title: "Tradicija", link_title: "Več kot 40 let izkušenj v tiskarski industriji.", description: "Družinsko podjetje, ki raste in se uči že od leta 1980." },
    { id: "02", title: "Tehnologija", link_title: "Sodobna oprema za najzahtevnejše projekte.", description: "Clean Room, CNC, laser in najsodobnejša tiskarska tehnologija." },
    { id: "03", title: "Kakovost", link_title: "Certificirana kakovost na vsakem koraku.", description: "ISO 9001, ISO 15378, FSC in ISO 14001 certificirani procesi." },
  ],
};

const AboutSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 900);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
      setTimeout(() => setIsTransitioning(false), 900);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="about-slideshow-container">
      <style>{`
        .about-slideshow-container {
          position: relative;
          width: 100%;
          height: 760px;
          overflow: hidden;
          border-radius: 0;
        }
        @media (max-width: 991px) {
          .about-slideshow-container {
            height: 500px;
          }
        }
        @media (max-width: 575px) {
          .about-slideshow-container {
            height: 400px;
          }
        }
        .about-slideshow-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 6s cubic-bezier(0.4, 0, 0.2, 1);
          transform: scale(1.08);
          will-change: opacity, transform;
        }
        .about-slideshow-slide.active {
          opacity: 1;
          transform: scale(1);
          z-index: 2;
        }
        .about-slideshow-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .about-slideshow-progress {
          position: absolute;
          bottom: 24px;
          left: 24px;
          display: flex;
          gap: 6px;
          z-index: 10;
        }
        .about-slideshow-dot {
          width: 32px;
          height: 3px;
          background: rgba(255, 255, 255, 0.35);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: background 0.3s ease, width 0.3s ease;
          border-radius: 2px;
        }
        .about-slideshow-dot.active {
          background: #fff;
          width: 48px;
        }
        .about-slideshow-dot:hover {
          background: rgba(255, 255, 255, 0.7);
        }
        .about-slideshow-counter {
          position: absolute;
          bottom: 24px;
          right: 24px;
          z-index: 10;
          font-family: inherit;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.7);
        }
        .about-slideshow-counter .current-num {
          color: #fff;
          font-size: 15px;
          font-weight: 600;
        }
        .about-slideshow-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 50%,
            rgba(0, 0, 0, 0.35) 100%
          );
          z-index: 5;
          pointer-events: none;
        }
      `}</style>

      {SLIDESHOW_IMAGES.map((slide, i) => (
        <div
          key={i}
          className={`about-slideshow-slide ${i === currentIndex ? "active" : ""}`}
        >
          <img src={slide.src} alt={slide.alt} loading={i < 2 ? "eager" : "lazy"} />
        </div>
      ))}

      <div className="about-slideshow-overlay" />

      <div className="about-slideshow-progress">
        {SLIDESHOW_IMAGES.map((_, i) => (
          <button
            key={i}
            className={`about-slideshow-dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="about-slideshow-counter">
        <span className="current-num">
          {String(currentIndex + 1).padStart(2, "0")}
        </span>
        {" / "}
        {String(SLIDESHOW_IMAGES.length).padStart(2, "0")}
      </div>
    </div>
  );
};

export const AboutOne = () => {
  const { content } = useCmsContent("home");
  const about = content?.about || DEFAULT_ABOUT;

  const panelData = (about.panels || DEFAULT_ABOUT.panels).map((p, i) => ({
    id: p.id,
    title: p.title,
    image: PANEL_IMAGES[i] || PANEL_IMAGES[0],
    linkTitle: p.link_title,
    description: p.description,
    childClass: CHILD_CLASSES[i] || "child-one",
  }));

  useEffect(() => {
    function mediaSize() {
      if (window.matchMedia("(min-width: 768px)").matches) {
        $(".col-custom").on("click", function () {
          $(".col-custom").removeClass("active");
          $(this).addClass("active");
        });
      } else {
        $(".col-custom").addClass("active");
      }
    }

    mediaSize();
    $(window).on("resize", mediaSize);

    // Cleanup function
    return () => {
      $(window).off("resize", mediaSize);
      $(".col-custom").off("click");
    };
  }, []);

  return (
    <div className="td-about-area fix pt-145 pb-120">
      <div className="container">
        <div className="row">
          {/* left side */}
          <div className="col-xl-6 col-lg-7 col-md-12 mb-30">
            <div
              className="row-custom-wrapper wow fadeInLeft"
              data-wow-delay=".4s"
              data-wow-duration="1s"
            >
              <div className="row-custom">
                {panelData.map((x, i, arr) => {
                  const lastItem = i === arr.length - 1;

                  return (
                    <div
                      key={x.id}
                      className={`col-custom ${lastItem ? "active" : ""}`}
                    >
                      <div className="td-panel-item">
                        <div className="td-panel-content">
                          <span>{x.id}.</span>
                          <h4 className={`td-panel-title ${x.childClass}`}>
                            {x.title}
                          </h4>
                        </div>
                      </div>
                      <div className="td-panel-item-2">
                        <div className="td-panel-content-2">
                          <div className="td-panel-thumb">
                            <img className="w-100" src={x.image} alt={x.title || "About panel"} loading="lazy" />
                          </div>
                          <div className="td-panel-content-inner fix p-relative">
                            <span className="td-panel-shape">{x.id}</span>
                            <h4 className="td-panel-title-2 mb-10">
                              <Link to="/about">{x.linkTitle}</Link>
                            </h4>
                            <p className="mb-160">{x.description}</p>
                            <div className="td-panel-btn">
                              <Link
                                className="td-btn td-left-right"
                                to="/about"
                              >
                                Več o nas
                                <span className="td-arrow-angle ml-10">
                                  <svg
                                    className="td-arrow-svg-top-right"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10.00 10.00"
                                  >
                                    <path d="M1.018 10.009 0 8.991l7.569-7.582H1.723L1.737 0h8.26v8.274H8.574l.013-5.847Z" />
                                    <path d="M1.018 10.009 0 8.991l7.569-7.582H1.723L1.737 0h8.26v8.274H8.574l.013-5.847Z" />
                                  </svg>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="col-xl-6 col-lg-5 mb-30">
            <div
              className="td-about-content-wrap p-relative ml-45 wow fadeInRight"
              data-wow-delay=".4s"
              data-wow-duration="1s"
            >
              <span className="td-section-title-pre mb-10">
                {about.section_label || "O nas"}
              </span>
              <h2 className="td-section-title td-about-right-space">
                {about.heading}
              </h2>
              <AboutSlideshow />
              <p className="td-about-para pr-10" style={{ marginTop: 30 }}>
                {about.paragraph}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
