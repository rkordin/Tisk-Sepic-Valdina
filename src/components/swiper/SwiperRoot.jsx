import React from "react";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
} from "swiper/core";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/bundle";
// import 'swiper/swiper.min.css';
import "../../assets/css/swiper-gl.min.css";

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs]);

export { Swiper, SwiperSlide };
