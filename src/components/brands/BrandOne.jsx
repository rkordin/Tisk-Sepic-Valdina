import React from "react";
import brand1 from "../../assets/img/brands/01.png";
import brand2 from "../../assets/img/brands/02.png";
import brand3 from "../../assets/img/brands/03.png";
import brand4 from "../../assets/img/brands/04.png";
import brand5 from "../../assets/img/brands/05.png";
import { Swiper, SwiperSlide } from "../swiper/SwiperRoot";

const brandList = [
  { id: 1, link: "#", imageSrc: brand1, alt: "Brand 1" },
  { id: 2, link: "#", imageSrc: brand2, alt: "Brand 2" },
  { id: 3, link: "#", imageSrc: brand3, alt: "Brand 3" },
  { id: 4, link: "#", imageSrc: brand4, alt: "Brand 4" },
  { id: 5, link: "#", imageSrc: brand5, alt: "Brand 5" },
  { id: 6, link: "#", imageSrc: brand2, alt: "Brand 6" },
  { id: 7, link: "#", imageSrc: brand3, alt: "Brand 7" },
];

export const BrandOne = ({ className = "" }) => {
  const swiper_settings = {
    spaceBetween: 60,
    loop: true,
    freeMode: true,
    slidesPerView: "auto",
    autoplay: { delay: 4000 },
    breakpoints: {
      768: {
        spaceBetween: 30,
      },
      576: {
        spaceBetween: 20,
      },
      0: {
        spaceBetween: 20,
      },
    },
  };

  return (
    <div className={`td-brands-area td-grey-bg pb-50 ${className}`}>
      <div className="container-fluid">
        <div className="row gx-0">
          <div className="col-12">
            <div className="td-brands-wrap company-logo-slider-full">
              <div className="swiper-container td-brand-slide">
                <div className="swiper-wrapper">
                  <Swiper {...swiper_settings}>
                    {brandList.map((brand) => (
                      <SwiperSlide key={brand.id}>
                        <div className="td-brand-single-logo text-center">
                          <a href={brand.link}>
                            <img src={brand.imageSrc} alt={brand.alt} />
                          </a>
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
  );
};
