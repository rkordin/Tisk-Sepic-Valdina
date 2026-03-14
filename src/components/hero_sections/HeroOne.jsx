import React from "react";
import BG_IMG from "../../assets/img/hero/bg.jpg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "../swiper/SwiperRoot";

export const HeroOne = () => {
  return (
    <>
      <div
        className="td-hero-area td-hero-spacing bg-position"
        style={{ backgroundImage: `url(${BG_IMG})` }}
      >
        {/* slider */}
        <div className="td-hero-text-slider mb-70">
          <TextSlider />
        </div>

        {/* bottom */}
        <div className="td-hero-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 mb-30">
                <div
                  className="td-hero-achive wow fadeInLeft"
                  data-wow-delay=".4s"
                  data-wow-duration="1s"
                >
                  <h3 className="td-hero-achive-title">
                    ČISTA tehnologija.
                    <br />
                    <Link className="td-left-right" to="/contact">
                      <span className="td-arrow-angle">
                        <svg
                          className="td-arrow-svg-top-right td-bg-none"
                          width="34"
                          height="34"
                          viewBox="0 0 34 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.57921 1.97755L33.1403 1.558L32.7208 27.1191M1.71022 32.9818L33.1372 1.55486"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.57921 1.97755L33.1403 1.558L32.7208 27.1191M1.71022 32.9818L33.1372 1.55486"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                    ČISTI odnosi.
                    <br />
                    <span className="td-title-border">ČISTO zadovoljstvo.</span>
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 d-flex justify-content-end align-items-end mb-50">
                <div
                  className="td-hero-expertise d-flex align-items-center wow fadeInRight"
                  data-wow-delay=".4s"
                  data-wow-duration="1s"
                >
                  <i className="fa-sharp fa-light fa-print"></i>
                  <h5>
                    Celoten spekter tiskarskih
                    <br />
                    in grafičnih storitev
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TextSlider = () => {
  const LIST_OF_TEXT_SLIDES = [
    "Tisk",
    "Grafika",
    "Embalaža",
    "Inovacija",
    "Tisk",
    "Grafika",
  ];

  const swiper_settings = {
    loop: true,
    speed: 400000,
    allowTouchMove: false,
    slidesPerView: "auto",
    slidesPerGroup: 10,
    spaceBetween: 80,
    autoplay: { delay: 0, disableOnInteraction: false },
  };

  return (
    <div className="swiper-container td-hero-text-slider-active">
      <div className="swiper-wrapper slide-transtion">
        <Swiper {...swiper_settings}>
          {LIST_OF_TEXT_SLIDES.map((text, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide">
                <div className="td-hero-text-slider-content text-center">
                  <h4 className="td-hero-text-slider-title">{text}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
