import React from "react";
import { Swiper, SwiperSlide } from "../swiper/SwiperRoot";

export const TextSliderOne = () => {
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
    <div className="td-text-slider fix">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <div
              className="swiper-container pb-185 td-hero-text-slider-active td-hero-4-text-slider"
             
            >
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
      </div>
    </div>
  );
};
