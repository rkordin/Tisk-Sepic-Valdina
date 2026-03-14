import React from "react";
import { Swiper, SwiperSlide } from "../swiper/SwiperRoot";

export const TextSliderTwo = () => {
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
            <div className="swiper-container pb-130 td-hero-text-slider-active td-hero-4-text-slider">
              <div className="swiper-wrapper slide-transtion">
                <Swiper {...swiper_settings}>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="td-hero-text-slider-content text-center">
                        <h4 className="td-testimonial-slider-title-tr">
                          Hire Us For Project /
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="td-hero-text-slider-content text-center">
                        <h4 className="td-testimonial-slider-title">
                          Hire us For projects
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
