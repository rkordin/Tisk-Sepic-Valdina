import React from "react";
import { Link } from "react-router-dom";
import brand01 from "../../assets/img/brands/01.png";
import brand02 from "../../assets/img/brands/02.png";
import brand03 from "../../assets/img/brands/03.png";
import brand04 from "../../assets/img/brands/04.png";
import brand05 from "../../assets/img/brands/05.png";
import testimonial01 from "../../assets/img/testimonial/tes5/01.png";
import testimonial02 from "../../assets/img/testimonial/tes5/02.png";
import { Swiper, SwiperSlide } from "../swiper/SwiperRoot";

export const TestimonialFive = () => {
  const brandLogos = [brand01, brand02, brand03, brand04, brand05, brand03];

  const swiper_settings_brand = {
    spaceBetween: 100,
    loop: true,
    freeMode: true,
    slidesPerView: "auto",
    autoplay: { delay: 4000 },
    breakpoints: {
      768: {
        spaceBetween: 70,
      },
      576: {
        spaceBetween: 20,
      },
      0: {
        spaceBetween: 20,
      },
    },
  };

  const testimonials = [
    {
      image: testimonial01,
      quote:
        "Providing sustainable strategies that will upgrade their business. From strategy to delivery, we are here to make sure your business succeeds.",
      name: "Emila P. Parker",
      designation: "Founder",
    },
    {
      image: testimonial02,
      quote:
        "Providing sustainable strategies that will upgrade their business. From strategy to delivery, we are here to make sure your business succeeds.",
      name: "Alonso D. Dowson",
      designation: "CEO",
    },
    {
      image: testimonial01,
      quote:
        "Providing sustainable strategies that will upgrade their business. From strategy to delivery, we are here to make sure your business succeeds.",
      name: "Emila P. Parker",
      designation: "Founder",
    },
  ];

  const swiper_settings_testimonials = {
    spaceBetween: 30,
    loop: true,
    speed: 3000,
    autoplay: { delay: 3000 },
    breakpoints: {
      1200: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <div className="td-testimonial-area pt-140 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="td-testimonial-5-title-wrap text-center mb-75 wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <span className="td-section-title-pre mb-10">Our Experts</span>
              <h2 className="td-section-title">Meet our advisors</h2>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="swiper-container td-testimonial-5-slider-active">
              <div className="swiper-wrapper">
                <Swiper {...swiper_settings_testimonials}>
                  {testimonials.map((x, i) => (
                    <SwiperSlide key={x.image + i}>
                      <div className="swiper-slide">
                        <div className="td-testimonial-5-wrap">
                          <div className="td-testimonial-5-icon">
                            <span>
                              <svg
                                width="129"
                                height="128"
                                viewBox="0 0 129 128"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g
                                  opacity="0.06"
                                  clipPath="url(#clip0_338_12703)"
                                >
                                  <path
                                    d="M0.423828 15.25V67.75H45.2563C43.3538 88.745 25.6538 105.25 4.17383 105.25H0.423828V112.75H4.17383C29.7913 112.75 50.8588 92.885 52.7813 67.75C52.8763 66.5125 52.9238 65.2625 52.9238 64V15.25H0.423828Z"
                                    fill="#1a1a1a"
                                  />
                                  <path
                                    d="M75.9238 15.25V67.75H120.756C118.854 88.745 101.154 105.25 79.6738 105.25H75.9238V112.75H79.6738C105.291 112.75 126.359 92.885 128.281 67.75C128.376 66.5125 128.424 65.2625 128.424 64V15.25H75.9238Z"
                                    fill="#1a1a1a"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_338_127003">
                                    <rect
                                      width="128"
                                      height="128"
                                      fill="white"
                                      transform="translate(0.423828)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                          </div>
                          <div className="row">
                            <div className="col-lg-4 col-md-4">
                              <div className="td-testimonial-5-thumb mt-10">
                                <img src={x.image} alt="" />
                              </div>
                            </div>
                            <div className="col-lg-8 col-md-8">
                              <div className="td-testimonial-5-content">
                                <p>“ {x.quote} “</p>
                                <div className="td-testimonial-5-avatar">
                                  <h4 className="td-testimonial-5-avatar-title">
                                    {x.name}
                                  </h4>
                                  <span className="td-testimonial-5-avatar-designation">
                                    /{x.designation}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="td-testimonial-5-slider-para">
              <p>
                Bring them together and you overcome the ordinary.{" "}
                <Link to="/services">See what we do.</Link>
              </p>
            </div>
          </div>

          <div className="col-12">
            <div className="td-testimonial-5-brands">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="swiper-container td-testimonial-profile-slide">
                    <div className="swiper-wrapper">
                      <Swiper {...swiper_settings_brand}>
                        {brandLogos.map((logo, index) => (
                          <SwiperSlide key={index}>
                            <div className="swiper-slide">
                              <div className="td-testimonial-3-profile-logo">
                                <Link to="#">
                                  <img src={logo} alt={`Brand ${index + 1}`} />
                                </Link>
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
          </div>
        </div>
      </div>
    </div>
  );
};
