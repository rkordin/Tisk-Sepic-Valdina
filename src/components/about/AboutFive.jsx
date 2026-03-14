import React from "react";
import logoImg from "../../assets/img/testimonial/logo.png";
import aboutImg from "../../assets/img/about/about4/a.png";
import thumb1 from "../../assets/img/about/about5/thumb.jpg";
import thumb2 from "../../assets/img/about/about5/thumb2.jpg";
import thumb3 from "../../assets/img/about/about5/thumb3.jpg";
import { Swiper, SwiperSlide } from "../swiper/SwiperRoot";

export const AboutFive = () => {
  const swiper_settings = {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 80,
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

  const slideData = [
    { delay: "0.3s", imgSrc: thumb1 },
    { delay: "0.5s", imgSrc: thumb2 },
    { delay: "0.7s", imgSrc: thumb3 },
    { delay: "0.9s", imgSrc: thumb2 },
  ];

  return (
    <div className="td-about-area fix p-relative pt-140 pb-110">
      <div className="td-about-5-position">
        <div
          className="td-testimonial-qoute-thumb z-index-11 p-relative"
          data-parallax='{"x": -100, "smoothness": 10}'
        >
          <img className="td-testimonial-qoute" src={logoImg} alt="badge" />
          <img className="td-testimonial-qoute-2" src={aboutImg} alt="badge" />
        </div>
      </div>

      <div className="container-fluid p-0">
        <div className="row td-gx-80">
          <div className="td-about-slider-active swiper-container">
            <div className="swiper-wrapper">
              <Swiper {...swiper_settings}>
                {slideData.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="swiper-slide wow slideInDown"
                      data-wow-delay={slide.delay}
                      data-wow-duration="1s"
                    >
                      <div className="td-portfolio-wrap">
                        <div className="td-poerfolio-thumb mb-30">
                          <img
                            className="w-100"
                            src={slide.imgSrc}
                            alt="thumb"
                          />
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
