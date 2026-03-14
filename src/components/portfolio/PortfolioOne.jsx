import React from "react";
import { Link } from "react-router-dom";
import portfolioImage01 from "../../assets/img/portfolio/01.jpg";
import portfolioImage02 from "../../assets/img/portfolio/02.jpg";
import portfolioImage03 from "../../assets/img/portfolio/03.jpg";
import portfolioImage04 from "../../assets/img/portfolio/04.jpg";
import { Swiper, SwiperSlide } from "../swiper/SwiperRoot";
import { PortfolioOneItem } from "./PortfolioOneItem";

export const PortfolioOne = () => {
  const filterButtons = [
    { id: "home", label: "Business", isActive: true },
    { id: "profile", label: "Strategy", isActive: false },
    { id: "messages", label: "Branding", isActive: false },
    { id: "settings", label: "Marketing", isActive: false },
    { id: "settings2", label: "Planning", isActive: false },
  ];

  const portfolioItems = {
    home: [
      {
        image: portfolioImage03,
        categories: ["Finances", "Analysis"],
        title: "Business Performance",
        delay: 0.3,
      },
      {
        image: portfolioImage02,
        categories: ["Economy", "Investment", "Business"],
        title: "Vision & Direction",
        delay: 0.5,
      },
      {
        image: portfolioImage01,
        categories: ["Research", "Corporate"],
        title: "Customer Relations",
        delay: 0.7,
      },
      {
        image: portfolioImage04,
        categories: ["Finances", "Analysis"],
        title: "Business Performance",
        delay: 0.9,
      },
    ],
    profile: [
      {
        image: portfolioImage01,
        categories: ["Research", "Corporate"],
        title: "Customer Relations",
        delay: 0.3,
      },
      {
        image: portfolioImage04,
        categories: ["Finances", "Analysis"],
        title: "Business Performance",
        delay: 0.5,
      },
      {
        image: portfolioImage03,
        categories: ["Finances", "Analysis"],
        title: "Business Performance",
        delay: 0.7,
      },
      {
        image: portfolioImage02,
        categories: ["Economy", "Investment", "Business"],
        title: "Vision & Direction",
        delay: 0.9,
      },
    ],
    messages: [
      {
        image: portfolioImage02,
        categories: ["Branding", "Identity"],
        title: "Brand Refresh",
        delay: 0.3,
      },
      {
        image: portfolioImage03,
        categories: ["Logo", "Design"],
        title: "Visual Identity",
        delay: 0.5,
      },
      {
        image: portfolioImage04,
        categories: ["Branding", "Strategy"],
        title: "Brand Positioning",
        delay: 0.7,
      },
      {
        image: portfolioImage01,
        categories: ["Messaging", "Communication"],
        title: "Brand Voice",
        delay: 0.9,
      },
    ],
    settings: [
      {
        image: portfolioImage04,
        categories: ["Digital", "Advertising"],
        title: "Online Campaign",
        delay: 0.3,
      },
      {
        image: portfolioImage01,
        categories: ["Content", "Strategy"],
        title: "Content Marketing",
        delay: 0.5,
      },
      {
        image: portfolioImage03,
        categories: ["Social Media", "Engagement"],
        title: "Social Media Strategy",
        delay: 0.7,
      },
      {
        image: portfolioImage02,
        categories: ["SEO", "Analytics"],
        title: "Search Optimization",
        delay: 0.9,
      },
    ],
    settings2: [
      {
        image: portfolioImage01,
        categories: ["Project", "Management"],
        title: "Agile Implementation",
        delay: 0.3,
      },
      {
        image: portfolioImage03,
        categories: ["Resource", "Allocation"],
        title: "Capacity Planning",
        delay: 0.5,
      },
      {
        image: portfolioImage02,
        categories: ["Risk", "Management"],
        title: "Risk Assessment",
        delay: 0.7,
      },
      {
        image: portfolioImage04,
        categories: ["Strategic", "Planning"],
        title: "Long-term Roadmap",
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
              <span className="td-section-title-pre mb-10">Case Studies</span>
              <h2 className="td-section-title">Our work and success stories</h2>
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
                More Works
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
