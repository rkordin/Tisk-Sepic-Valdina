import React from "react";
import { Link } from "react-router-dom";
// Tisk (print products)
import portfolioImage01 from "../../assets/img/portfolio/01.jpg";
import portfolioImage03 from "../../assets/img/portfolio/03.jpg";
import portfolioImage05 from "../../assets/img/portfolio/05.jpg";
import portfolioImage06 from "../../assets/img/portfolio/06.jpg";
// Embalaža (packaging)
import portfolioImage09 from "../../assets/img/portfolio/09.jpg";
import portfolioImage10 from "../../assets/img/portfolio/10.jpg";
import portfolioImage11 from "../../assets/img/portfolio/11.jpg";
import portfolioImage12 from "../../assets/img/portfolio/12.jpg";
// Nalepke (stickers/foils)
import portfolioImage02 from "../../assets/img/portfolio/02.jpg";
import portfolioImage07 from "../../assets/img/portfolio/07.jpg";
import portfolioImage13 from "../../assets/img/portfolio/13.jpg";
import portfolioImage14 from "../../assets/img/portfolio/14.jpg";
// Reklama (promotional)
import portfolioImage16 from "../../assets/img/portfolio/16.jpg";
import portfolioImage17 from "../../assets/img/portfolio/17.jpg";
import portfolioImage18 from "../../assets/img/portfolio/18.jpg";
import portfolioImage19 from "../../assets/img/portfolio/19.jpg";
// 3D & CNC
import portfolioImage04 from "../../assets/img/portfolio/04.jpg";
import portfolioImage15 from "../../assets/img/portfolio/15.jpg";
import portfolioImage08 from "../../assets/img/portfolio/08.jpg";
import portfolioImage20 from "../../assets/img/portfolio/20.jpg";
import { Swiper, SwiperSlide } from "../swiper/SwiperRoot";
import { PortfolioOneItem } from "./PortfolioOneItem";

export const PortfolioOne = () => {
  const filterButtons = [
    { id: "home", label: "Tisk", isActive: true },
    { id: "profile", label: "Embalaža", isActive: false },
    { id: "messages", label: "Nalepke", isActive: false },
    { id: "settings", label: "Reklama", isActive: false },
    { id: "settings2", label: "3D & CNC", isActive: false },
  ];

  const portfolioItems = {
    home: [
      {
        image: portfolioImage01,
        categories: ["Digitalni tisk", "Offset"],
        title: "Katalogi in brošure",
        delay: 0.3,
      },
      {
        image: portfolioImage03,
        categories: ["Plakati", "Posterji"],
        title: "Plakati in posterji",
        delay: 0.5,
      },
      {
        image: portfolioImage05,
        categories: ["Zloženke", "Letaki"],
        title: "Zloženke in letaki",
        delay: 0.7,
      },
      {
        image: portfolioImage06,
        categories: ["Digitalni tisk", "Personalizacija"],
        title: "Letaki in flyerji",
        delay: 0.9,
      },
    ],
    profile: [
      {
        image: portfolioImage09,
        categories: ["Kartonska", "Embalaža"],
        title: "Kartonska embalaža",
        delay: 0.3,
      },
      {
        image: portfolioImage10,
        categories: ["Blisterji", "Farmacija"],
        title: "Blisterji in sasheji",
        delay: 0.5,
      },
      {
        image: portfolioImage11,
        categories: ["Večslojne", "Etikete"],
        title: "Večslojne etikete",
        delay: 0.7,
      },
      {
        image: portfolioImage12,
        categories: ["Vrečke", "Pakiranje"],
        title: "Vrečke in pakiranje",
        delay: 0.9,
      },
    ],
    messages: [
      {
        image: portfolioImage07,
        categories: ["Samolepilne", "Nalepke"],
        title: "Samolepilne nalepke",
        delay: 0.3,
      },
      {
        image: portfolioImage14,
        categories: ["Stenske", "Folije"],
        title: "Stenske in talne folije",
        delay: 0.5,
      },
      {
        image: portfolioImage02,
        categories: ["Vozila", "Polepitev"],
        title: "Polepitev vozil",
        delay: 0.7,
      },
      {
        image: portfolioImage13,
        categories: ["Steklo", "Folije"],
        title: "Folije za steklene površine",
        delay: 0.9,
      },
    ],
    settings: [
      {
        image: portfolioImage16,
        categories: ["Roll-up", "Stojala"],
        title: "Reklamna stojala",
        delay: 0.3,
      },
      {
        image: portfolioImage17,
        categories: ["Transparenti", "Zastave"],
        title: "Zastave in transparenti",
        delay: 0.5,
      },
      {
        image: portfolioImage18,
        categories: ["Zastave", "Reklamni"],
        title: "Reklamne zastave",
        delay: 0.7,
      },
      {
        image: portfolioImage19,
        categories: ["Promocija", "Pulti"],
        title: "Promocijski pultovi",
        delay: 0.9,
      },
    ],
    settings2: [
      {
        image: portfolioImage04,
        categories: ["3D", "Črke"],
        title: "3D napisi in logotipi",
        delay: 0.3,
      },
      {
        image: portfolioImage20,
        categories: ["CNC", "Laser"],
        title: "CNC in laserski izrez",
        delay: 0.5,
      },
      {
        image: portfolioImage15,
        categories: ["Stenske", "Grafike"],
        title: "Stenske grafike",
        delay: 0.7,
      },
      {
        image: portfolioImage08,
        categories: ["Jedilniki", "Ceniki"],
        title: "Jedilniki in ceniki",
        delay: 0.9,
      },
    ],
  };

  const swiper_settings = {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 60,
    loop: true,
    freeMode: true,
    observer: true,
    observeParents: true,
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  };

  return (
    <div className="td-portfolio-area td-portfolio-space fix pt-135 pb-200">
      <div className="container">
        {/* header */}
        <div className="row">
          <div className="col-lg-12">
            <div
              className="td-portfolio-title-wrap mb-75 wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <span className="td-section-title-pre mb-10">Naši izdelki</span>
              <h2 className="td-section-title">Izbor naših del in projektov</h2>
            </div>
          </div>
        </div>

        {/* filter btns */}
        <div className="row align-items-center pb-10">
          <div className="col-lg-8 pb-30">
            <div
              className="nav td-portfolio-tab-btn-list"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {filterButtons.map((x) => (
                <button
                  key={x.id}
                  className={`td-portfolio-tab-btn nav-link ${
                    x.isActive ? "active" : ""
                  }`}
                  id={`v-pills-${x.id}-tab`}
                  data-bs-toggle="pill"
                  data-bs-target={`#v-pills-${x.id}`}
                  type="button"
                  role="tab"
                  aria-controls={`v-pills-${x.id}`}
                  aria-selected={x.isActive ? "true" : "false"}
                >
                  {x.label}
                </button>
              ))}
            </div>
          </div>

          <div className="col-lg-4 pb-30">
            <div className="td-portfolio-right-btn text-right">
              <Link to="/portfolio" className="td-btn td-btn-3 td-left-right">
                Vsi izdelki
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

        {/* items container */}
        <div className="row">
          <div className="col-12">
            <div
              className="td-banking-img-wrapper tab-content"
              id="v-pills-tabContent"
            >
              {Object.entries(portfolioItems).map(([key, items]) => (
                <div
                  key={key}
                  className={`tab-pane fade ${
                    key === "home" ? "show active" : ""
                  }`}
                  id={`v-pills-${key}`}
                  role="tabpanel"
                  aria-labelledby={`v-pills-${key}-tab`}
                >
                  <div className="td-portfolio-slider-active swiper-container">
                    <div className="swiper-wrapper">
                      <Swiper {...swiper_settings}>
                        {items.map((item, index) => (
                          <SwiperSlide key={index}>
                            <PortfolioOneItem
                              imageSrc={item.image}
                              categories={item.categories}
                              title={item.title}
                              delay={item.delay}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
