import React from "react";
import BG from "../../assets/img/video/video3/bg.jpg";
import CONTACT from "../../assets/img/video/video3/contact.jpg";
import PHONE from "../../assets/img/video/video3/phone.png";
import { Swiper, SwiperSlide } from "../swiper/SwiperRoot";

export const VideoAreaTwo = () => {
  const swiper_settings = {
    loop: true,
    speed: 400000,
    allowTouchMove: false,
    slidesPerView: "auto",
    slidesPerGroup: 10,
    spaceBetween: 0,
    autoplay: { delay: 0, disableOnInteraction: false },
  };

  return (
    <div className="td-video-area fix pb-150 p-relative">
      <div className="td-video-text-slide-wrap pb-70">
        <div className="container-fluid g-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="td-video-text-slider">
                <div className="swiper-container td-hero-text-slider-active">
                  <div className="swiper-wrapper slide-transtion">
                    <Swiper {...swiper_settings}>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="td-hero-text-slider-content td-video-3-slider-content text-center">
                            <h4 className="td-testimonial-slider-title-tr">
                              Hire us for your next project
                            </h4>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="td-hero-text-slider-content td-video-3-slider-content text-center">
                            <h4 className="td-testimonial-slider-title-tr">
                              Hire us for your next project
                            </h4>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="td-video-2-bottom">
        <div className="container container-1730">
          <div className="row">
            <div className="col-12">
              <div className="td-video-2-wrap">
                <div className="td-video-2-thumb">
                  <img className="w-100" src={BG} alt="video" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="td-video-3-contact td-black-bg-2">
        <div
          className="td-video-3-contact-header bg-position"
          style={{ backgroundImage: `url(${CONTACT})` }}
        >
          <h4 className="td-video-3-contact-title">Personalized Advice</h4>
          <img src={PHONE} alt="phone" />
        </div>
        <div className="td-video-3-contact-content">
          <div className="td-video-3-contact-item mb-45">
            <span className="td-video-3-contact-icon">
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M24 2.5C24 1.125 22.92 0 21.6 0H2.4C1.08 0 0 1.125 0 2.5V17.5C0 18.875 1.08 20 2.4 20H21.6C22.92 20 24 18.875 24 17.5V2.5ZM21.6 2.5L12 8.75L2.4 2.5H21.6ZM21.6 17.5H2.4V5L12 11.25L21.6 5V17.5Z"
                    fill="white"
                  />
                </g>
              </svg>
            </span>
            <a href="mailto:info@tisksepic.si">info@tisksepic.si</a>
          </div>
          <div className="td-video-3-contact-item mb-45">
            <span className="td-video-3-contact-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M17.0336 0L18.1268 0.29529C19.4636 0.656969 20.6823 1.36274 21.6612 2.34223C22.6401 3.32171 23.3451 4.54066 23.7058 5.87752L24 6.9693L21.8159 7.55875L21.5206 6.46697C21.2628 5.51205 20.7592 4.64139 20.0598 3.94181C19.3605 3.24223 18.4899 2.7382 17.5349 2.47999L16.4429 2.18356L17.0336 0ZM2.67757e-05 0.240984H9.70956L11.3923 7.80992L9.28746 9.91429C10.5245 11.8404 12.1622 13.4773 14.089 14.7136L16.1939 12.6104L23.7646 14.2927V24H22.633C18.2766 24.0068 14.0117 22.7508 10.3546 20.3841C7.65818 18.6394 5.36187 16.3436 3.61677 13.6478C1.24959 9.9916 -0.00668777 5.7277 2.67757e-05 1.37236V0.240984ZM2.29388 2.50375C2.48425 6.03361 3.5958 9.45212 5.51794 12.4192C7.08908 14.8459 9.15628 16.9126 11.5836 18.4834C14.5513 20.4051 17.9706 21.5164 21.5013 21.7067V16.1075L16.9148 15.0892L14.4546 17.55L13.7043 17.1234C10.8556 15.5048 8.49718 13.1469 6.87818 10.299L6.45155 9.54885L8.91288 7.08923L7.8944 2.50375H2.29388ZM15.9993 3.8218L17.0924 4.11709C17.7609 4.29793 18.3702 4.65082 18.8597 5.14056C19.3491 5.6303 19.7016 6.23978 19.8819 6.90821L20.1762 7.99999L17.9921 8.58944L17.6967 7.49766C17.6193 7.21117 17.4682 6.94998 17.2583 6.74015C17.0484 6.53031 16.7871 6.37916 16.5006 6.30179L15.4085 6.0065L15.9993 3.8218Z"
                    fill="white"
                  />
                </g>
              </svg>
            </span>
            <a href="tel:+1(800)123456789">+1 (800) 123 456 789</a>
          </div>
          <div className="td-video-3-contact-item">
            <span className="td-video-3-contact-icon"> Office Address</span>
            <a
              href="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z"
              target="_blank"
            >
              27 Division St, New York, NY 10002, USA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
