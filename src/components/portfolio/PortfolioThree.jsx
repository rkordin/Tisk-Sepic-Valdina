import React from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/img/portfolio/portfolio4/bg.jpg";
import bg2 from "../../assets/img/portfolio/portfolio4/bg2.jpg";
import bg3 from "../../assets/img/portfolio/portfolio4/bg3.jpg";
import bg4 from "../../assets/img/portfolio/portfolio4/bg4.jpg";
import { Swiper, SwiperSlide } from "../swiper/SwiperRoot";

export const PortfolioThree = () => {
  const portfolioItems = [
    {
      href: "/portfolio-details",
      src: bg,
      tags: ["Consultancy", "business"],
      title: "Google Business Performance",
    },
    {
      href: "/portfolio-details",
      src: bg2,
      tags: ["Consultancy", "business"],
      title: "Business Performance",
    },
    {
      href: "/portfolio-details",
      src: bg4,
      tags: ["finance", "roi trading"],
      title: "Apple ROI Vision & Direction",
    },
    {
      href: "/portfolio-details",
      src: bg3,
      tags: ["Economy", "Investment"],
      title: "Astro Consultancy Relations",
    },
  ];

  const swiper_settings = {
    slidesPerView: 1,
    spaceBetween: 80,
    loop: true,
    speed: 3000,
    autoplay: { delay: 3000 },
    breakpoints: {
      992: {
        spaceBetween: 60,
      },
      768: {
        spaceBetween: 40,
      },
      576: {
        spaceBetween: 30,
      },
      0: {
        spaceBetween: 20,
      },
    },
  };

  return (
    <div className="td-portfolio-area td-grey-bg fix pt-140 pb-125">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="td-portfolio-title-wrap text-center mb-60">
              <span className="td-section-title-pre mb-10">Case Study</span>
              <h2 className="td-section-title">Recent works</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-7">
              <Swiper
                className="td-portfolio-4-slider-active"
                {...swiper_settings}
              >
                {portfolioItems.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="swiper-slide">
                      <div className="td-portfolio-4-item">
                        <div className="td-portfolio-4-thumb mb-40">
                          <Link to={item.href}>
                            <img className="w-100" src={item.src} alt="thumb" />
                          </Link>
                        </div>
                        <div className="td-portfolio-4-content">
                          <div className="td-portfolio-4-tag mb-20">
                            {item.tags.map((tag, tagIndex) => (
                              <Link to="#" key={tagIndex}>
                                {tag}
                              </Link>
                            ))}
                          </div>
                          <h4 className="td-portfolio-4-title">
                            <Link to={item.href}>{item.title}</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
