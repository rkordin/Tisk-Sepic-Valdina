import React, { useState } from "react";
import badgeImg from "../../assets/img/hero/hero4/badge.png";
import bgImg from "../../assets/img/hero/hero4/bg.jpg";
import bg2Img from "../../assets/img/hero/hero4/bg2.jpg";
import bg3Img from "../../assets/img/hero/hero4/bg3.jpg";
import smBgImg from "../../assets/img/hero/hero4/sm-bg.jpg";
import smBg2Img from "../../assets/img/hero/hero4/sm-bg2.jpg";
import smBg3Img from "../../assets/img/hero/hero4/sm-bg3.jpg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "../swiper/SwiperRoot";

export const HeroFour = () => {
  const swiper_settings_big = {
    slidesPerView: 1,
    slidesPerColumn: 1,
    // paginationClickable: true,
    loop: true,
    effect: "fade",
    pagination: {
      el: ".main-slider-dot, .td-hero-4-dot",
      clickable: true,
      renderBullet: function (index, className) {
        const bulletNumber = index < 9 ? `0${index + 1}` : `${index + 1}`;
        return `
          <span class="${className}">
            <button>${bulletNumber}</button>
          </span>
        `;
      },
    },
    navigation: {
      prevEl: ".td-hero-4-navigation-next, .slider-button-8-next",
      nextEl: ".td-hero-4-navigation-prev, .slider-button-8-prev",
    },
    a11y: false,
    // thumbs: { swiper: slidernav },
  };

  const swiper_settings_small = {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    freeMode: false,
    watchSlidesProgress: true,
    effect: "fade",
    allowTouchMove: false,
    navigation: {
      nextEl: ".slider-8-button-next",
      prevEl: ".slider-8-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="td-hero-4-area fix p-relative">
      {/* slider */}
      <div className="swiper-container td-hero-4-slider-active">
        <div className="swiper-wrapper">
          <Swiper {...swiper_settings_big} thumbs={{ swiper: thumbsSwiper }}>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="td-hero-4-singles pt-175 pb-165">
                  <div
                    className="td-hero-4-bg-home bg-position"
                    style={{ backgroundImage: `url(${bgImg})` }}
                  ></div>
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-3 d-none d-lg-block">
                        <div className="td-hero-4-big-text p-relative">
                          <img
                            className="td-hero-4-badge"
                            src={badgeImg}
                            alt="badge"
                          />
                          <h2>A</h2>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="td-hero-4-content mt-60">
                          <h3 className="td-hero-4-title mb-55">
                            Make your
                            <br />
                            business
                            <span>
                              boom <br />
                              with
                            </span>
                            <a href="#">Adina</a>
                          </h3>
                          <div className="td-hero-4-btn">
                            <Link
                              className="td-btn td-btn-7 td-left-right"
                              to="/contact"
                            >
                              Our Services
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
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide">
                <div className="td-hero-4-singles pt-175 pb-165">
                  <div
                    className="td-hero-4-bg-home bg-position"
                    style={{ backgroundImage: `url(${bg3Img})` }}
                  ></div>
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-3 d-none d-lg-block">
                        <div className="td-hero-4-big-text p-relative">
                          <img
                            className="td-hero-4-badge"
                            src={badgeImg}
                            alt="badge"
                          />
                          <h2>A</h2>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="td-hero-4-content mt-60">
                          <h3 className="td-hero-4-title mb-55">
                            Make your
                            <br />
                            business
                            <span>
                              boom <br />
                              with
                            </span>
                            <a href="#">Adina</a>
                          </h3>
                          <div className="td-hero-4-btn">
                            <Link
                              className="td-btn td-btn-7 td-left-right"
                              to="/contact"
                            >
                              Our Services
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
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide">
                <div className="td-hero-4-singles pt-175 pb-165">
                  <div
                    className="td-hero-4-bg-home bg-position"
                    style={{ backgroundImage: `url(${bg2Img})` }}
                  ></div>
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-3 d-none d-lg-block">
                        <div className="td-hero-4-big-text p-relative">
                          <img
                            className="td-hero-4-badge"
                            src={badgeImg}
                            alt="badge"
                          />
                          <h2>A</h2>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="td-hero-4-content mt-60">
                          <h3 className="td-hero-4-title mb-55">
                            Make your
                            <br />
                            business
                            <span>
                              boom <br />
                              with
                            </span>
                            <a href="#">Adina</a>
                          </h3>
                          <div className="td-hero-4-btn">
                            <Link
                              className="td-btn td-btn-7 td-left-right"
                              to="/contact"
                            >
                              Our Services
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
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="td-hero-4-dot d-sm-flex"></div>

      <div className="td-hero-4-nav-slider">
        <div className="td-hero-4-nav-slider-inner p-relative">
          {/* slider */}
          <div className="td-hero-4-nav-active swiper-container">
            <div className="swiper-wrapper">
              <Swiper
                {...swiper_settings_small}
                watchSlidesProgress
                onSwiper={setThumbsSwiper}
              >
                <SwiperSlide>
                  <div className="td-hero-4-nav-item d-flex align-items-center swiper-slide">
                    <div className="td-hero-4-nav-content">
                      <span>01.</span>
                      <h3 className="td-hero-4-nav-title">
                        Make your business boom with Adina
                      </h3>
                    </div>
                    <div className="td-hero-4-nav-thumb">
                      <img src={smBgImg} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="td-hero-4-nav-item d-flex align-items-center swiper-slide">
                    <div className="td-hero-4-nav-content">
                      <span>02.</span>
                      <h3 className="td-hero-4-nav-title">
                        Make your business boom with Adina
                      </h3>
                    </div>
                    <div className="td-hero-4-nav-thumb">
                      <img src={smBg3Img} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="td-hero-4-nav-item d-flex align-items-center swiper-slide">
                    <div className="td-hero-4-nav-content">
                      <span>03.</span>
                      <h3 className="td-hero-4-nav-title">
                        Make your business boom with Adina
                      </h3>
                    </div>
                    <div className="td-hero-4-nav-thumb">
                      <img src={smBg2Img} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* buttons */}
          <div className="td-hero-4-navigation-wrapper d-flex justify-content-between">
            <button
              className="td-hero-4-navigation-next"
              // onClick={() => {
              //   toPrevSmall();
              //   toPrevBig();
              // }}
            >
              <i className="fa-light fa-arrow-left-long"></i>
            </button>
            <button
              className="td-hero-4-navigation-prev"
              // onClick={() => {
              //   toNextSmall();
              //   toNextBig();
              // }}
            >
              <i className="fa-light fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="td-hero-4-social d-none d-lg-block">
        <ul>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-behance"></i>
            </a>
          </li>
        </ul>
        <span>Follow Us:</span>
      </div>
    </div>
  );
};
