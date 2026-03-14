import React, { useRef } from "react";
import thumb1 from "../../assets/img/testimonial/tes-3/thumb.png";
import thumb2 from "../../assets/img/testimonial/tes-3/thumb2.png";
import brand1 from "../../assets/img/brands/01.png";
import brand2 from "../../assets/img/brands/02.png";
import brand3 from "../../assets/img/brands/03.png";
import brand4 from "../../assets/img/brands/04.png";
import brand5 from "../../assets/img/brands/05.png";
import { Swiper, SwiperSlide } from "../swiper/SwiperRoot";

export const TestimonialThree = () => {
  const brandLogos = [
    { id: 1, src: brand1 },
    { id: 2, src: brand2 },
    { id: 3, src: brand3 },
    { id: 4, src: brand4 },
    { id: 5, src: brand5 },
    { id: 6, src: brand3 },
  ];

  const swiper_settings_brands = {
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

  const swiper_settings_testimonials = {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 20,
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    a11y: false,
  };

  const swiperRef = useRef();
  const toPrev = () => swiperRef.current?.slidePrev();
  const toNext = () => swiperRef.current?.slideNext();

  const testimonials = [
    {
      id: 1,
      avatar: thumb1,
      name: "Emila Parker",
      designation: "CEO, Exbrox",
      content:
        "Providing sustainable strategies that will upgrade their business. From strategy to delivery, we are here to make sure your business succeeds. Thinking, writing and planning with brand for more than 50 years.",
    },
    {
      id: 2,
      avatar: thumb2,
      name: "Dianne Ameter",
      designation: "UI/UX Designer",
      content:
        "Providing sustainable strategies that will upgrade their business. From strategy to delivery, we are here to make sure your business succeeds. Thinking, writing and planning with brand for more than 50 years.",
    },
  ];

  return (
    <div className="td-testimonial-area td-grey-bg pt-140 pb-200">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="td-testimonial-3-title-wrap text-center mb-75 wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <span className="td-section-title-pre mb-5">Testimonials</span>
              <h2 className="td-section-title">Clients says about us</h2>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="td-testimonial-3-wrap p-relative z-index-11">
              {/* slider */}
              <div className="td-testimonial-3-slider-wrap p-relative">
                <div className="swiper-container td-testimonial-3-slider-active">
                  <div className="swiper-wrapper">
                    <Swiper
                      {...swiper_settings_testimonials}
                      onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                      }}
                    >
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="td-testimonial-3-content text-center">
                            <div className="td-testimonial-3-ratngs mb-30">
                              <span>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </span>
                              <span>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </span>
                              <span>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </span>
                              <span>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </span>
                              <span>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </span>
                              <span>1k+ good ratings</span>
                            </div>
                            <p>
                              Providing sustainable strategies that will upgrade
                              their business. From strategy to delivery, we are
                              here to make sure your business succeeds.
                              Thinking, writing and planning with brand for more
                              than 75 years.
                            </p>
                            <div className="td-testimonial-3-avater">
                              <div className="td-testimonial-3-avater-thumb">
                                <img src={thumb1} alt="" />
                              </div>
                              <div className="td-testimonial-3-avater-info">
                                <h3 className="td-testimonial-3-avater-title">
                                  Emila Parker
                                </h3>
                                <span className="td-testimonial-2-avater-designation">
                                  CEO, Exbrox
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="td-testimonial-3-content text-center">
                            <div className="td-testimonial-3-ratngs mb-30">
                              <span>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </span>
                              <span>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </span>
                              <span>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </span>
                              <span>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </span>
                              <span>
                                <i className="fa-sharp fa-solid fa-star"></i>
                              </span>
                              <span>1k+ good ratings</span>
                            </div>
                            <p>
                              Providing sustainable strategies that will upgrade
                              their business. From strategy to delivery, we are
                              here to make sure your business succeeds.
                              Thinking, writing and planning with brand for more
                              than 50 years.
                            </p>
                            <div className="td-testimonial-3-avater">
                              <div className="td-testimonial-3-avater-thumb">
                                <img src={thumb2} alt="" />
                              </div>
                              <div className="td-testimonial-3-avater-info">
                                <h3 className="td-testimonial-3-avater-title">
                                  Dianne Ameter
                                </h3>
                                <span className="td-testimonial-2-avater-designation">
                                  UI/UX Designer
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>

                {/* buttons */}
                <div className="td-testimonial-3-btn d-flex align-items-center justify-content-between">
                  <div className="td-testimonial-prev" onClick={toPrev}>
                    <i className="fa-sharp fa-regular fa-arrow-left"></i>
                  </div>
                  <div className="td-testimonial-next" onClick={toNext}>
                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                  </div>
                </div>
              </div>

              {/* brands */}
              <div className="td-testimonial-3-profile p-relative">
                <div className="swiper-container td-testimonial-profile-slide">
                  <div className="swiper-wrapper">
                    <Swiper {...swiper_settings_brands}>
                      {brandLogos.map((brand) => (
                        <SwiperSlide key={brand.id}>
                          <div className="swiper-slide">
                            <div className="td-testimonial-3-profile-logo">
                              <a href="#">
                                <img src={brand.src} alt="Brand logo" />
                              </a>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>

                {/* shapes */}
                <div className="td-testimonial-3-shape"></div>
                <div className="td-testimonial-3-shape-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
{testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                          <div className="swiper-slide">
                            <div className="td-testimonial-3-content text-center">
                              <div className="td-testimonial-3-ratngs mb-30">
                                {[...Array(5)].map((_, index) => (
                                  <span key={index}>
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                  </span>
                                ))}
                                <span>1k+ good ratings</span>
                              </div>
                              <p>{testimonial.content}</p>
                              <div className="td-testimonial-3-avater">
                                <div className="td-testimonial-3-avater-thumb">
                                  <img
                                    src={testimonial.avatar}
                                    alt="Testimonial avatar"
                                  />
                                </div>
                                <div className="td-testimonial-3-avater-info">
                                  <h3 className="td-testimonial-3-avater-title">
                                    {testimonial.name}
                                  </h3>
                                  <span className="td-testimonial-2-avater-designation">
                                    {testimonial.designation}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}

*/
