import React from "react";
import QOUTE from "../../assets/img/testimonial/tes/qoute.png";
import QOUTE2 from "../../assets/img/testimonial/tes/qoute2.png";
import THUMB from "../../assets/img/testimonial/tes/thumb.jpg";
import USER1 from "../../assets/img/testimonial/tes/user.png";
import USER2 from "../../assets/img/testimonial/tes/user2.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Iframe from "react-iframe";
import { Swiper, SwiperSlide } from "../swiper/SwiperRoot";

export const TestimonialTwo = () => {
  const swiper_settings = {
    loop: true,
    speed: 400000,
    allowTouchMove: false,
    slidesPerView: "auto",
    slidesPerGroup: 10,
    spaceBetween: 0,
    autoplay: { delay: 0, disableOnInteraction: false },
  };

  const swiper_testimonial_settings = {
    spaceBetween: 60,
    loop: true,
    slidesPerView: "auto",
    autoplay: { delay: 4000 },
  };

  const testimonials = [
    {
      description:
        "Our focus is on delivering superior value to our clients for company modification. Providing sustainable strategies that will upgrade their business. From strategy to delivery, we are here to make sure.",
      imgSrc: USER1,
      title: "Monica Regan",
      designation: "CEO, Monica Co.",
    },
    {
      description:
        "Our focus is on delivering superior value to our clients for company modification. Providing sustainable strategies that will upgrade their business. From strategy to delivery, we are here to make sure.",
      imgSrc: USER2,
      title: "Cody Fisher",
      designation: "CEO, Monica Co.",
    },
  ];

  return (
    <div className="td-testimonial-area fix">
      <div className="container-fluid g-0">
        <div className="row">
          {/* text slider */}
          <div className="col-lg-12">
            <div className="td-testimonial-text-slider">
              <div className="swiper-container td-hero-text-slider-active">
                <div className="swiper-wrapper slide-transtion">
                  <Swiper {...swiper_settings}>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="td-hero-text-slider-content text-center">
                          <h4 className="td-testimonial-slider-title-tr">
                            Amazing Experience /
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="td-hero-text-slider-content text-center">
                          <h4 className="td-testimonial-slider-title">
                            Amazing Design
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="td-testimonial-2-bottom td-black-bg">
              <img className="td-testimonial-2-qoute" src={QOUTE} alt="qoute" />

              <div className="row">
                {/* slider */}
                <div className="col-lg-6">
                  <div className="td-testimonial-2-content td-testimonial-2-space">
                    <div className="td-testimonial-title-wrap p-relative mb-75">
                      <span className="td-section-title-pre td-gray mb-10">
                        Testimonials
                      </span>
                      <h2 className="td-section-title td-white mb-30">
                        Our client says
                      </h2>
                    </div>

                    <div className="td-testimonial-2-slider-wrap p-relative">
                      <img
                        className="td-testimonial-2-qoute-2 d-none d-sm-block"
                        src={QOUTE2}
                        alt="qoute"
                      />
                      <div className="swiper-container td-testimonial-2-slide-active">
                        <div className="swiper-wrapper">
                          <Swiper {...swiper_testimonial_settings}>
                            {testimonials.map((testimonial, index) => (
                              <SwiperSlide key={index}>
                                <div className="td-testimonial-2-slider">
                                  <p>"{testimonial.description}"</p>
                                  <div className="td-testimonial-2-avater d-flex align-items-center">
                                    <div className="td-testimonial-2-avater-thumb">
                                      <img
                                        src={testimonial.imgSrc}
                                        alt="user"
                                      />
                                    </div>
                                    <div className="td-testimonial-2-avater-info">
                                      <h3 className="td-testimonial-2-avater-title">
                                        {testimonial.title}
                                      </h3>
                                      <span className="td-testimonial-2-avater-designation">
                                        {testimonial.designation}
                                      </span>
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

                {/* video */}
                <div className="col-lg-6">
                  <div className="td-testimonial-2-thumb p-relative">
                    <img className="w-100" src={THUMB} alt="" />
                    <div className="td-testimonial-video">
                      <Popup
                        trigger={
                          <a
                            className="td-video-play popup-video td-pulse-border"
                            href="#vid"
                          >
                            <span className="p-relative z-index-11">
                              <svg
                                width="14"
                                height="20"
                                viewBox="0 0 14 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14 10L0 20V0L14 10Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </a>
                        }
                        position=""
                        modal={true}
                        contentStyle={{ width: "80%", maxWidth: 1920 }}
                        lockScroll
                      >
                        <Iframe
                          url={"https://www.youtube.com/embed/6mkoGSqTqFI"}
                          width="100%"
                          height="400px"
                          id=""
                          className=""
                          display="block"
                          position="relative"
                        />
                      </Popup>
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
