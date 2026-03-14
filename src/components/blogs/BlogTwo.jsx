import React from "react";
import { Swiper, SwiperSlide } from "../swiper/SwiperRoot";

import img01 from "../../assets/img/blog/blog2/01.jpg";
import img02 from "../../assets/img/blog/blog2/02.jpg";
import img03 from "../../assets/img/blog/blog2/03.jpg";
import img04 from "../../assets/img/blog/blog2/04.jpg";
import img05 from "../../assets/img/blog/blog2/05.jpg";
import img06 from "../../assets/img/blog/blog2/06.jpg";
import { Link } from "react-router-dom";

export const BlogTwo = () => {
  const swiper_blog_settings = {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 60,
    loop: true,
    freeMode: true,
    breakpoints: {
      1400: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  };

  const blogPosts = [
    {
      imgSrc: img01,
      tag: "Business",
      date: "June 21, 2024",
      href: "/blog-details",
      title: "Making strategies for outstanding future results",
    },
    {
      imgSrc: img02,
      tag: "Business",
      date: "June 21, 2024",
      href: "/blog-details",
      title: "Our business thrives to contribute global initiatives",
    },
    {
      imgSrc: img03,
      tag: "Business",
      date: "June 21, 2024",
      href: "/blog-details",
      title: "Innovative ideas for small businesses",
    },
    {
      imgSrc: img04,
      tag: "Business",
      date: "June 21, 2024",
      href: "/blog-details",
      title: "Discover a better way of redefining company",
    },
    {
      imgSrc: img05,
      tag: "Business",
      date: "June 21, 2024",
      href: "/blog-details",
      title: "The new way to keep track of all the projects",
    },
    {
      imgSrc: img06,
      tag: "Business",
      date: "June 21, 2024",
      href: "/blog-details",
      title: "The essential steps for business success",
    },
  ];

  return (
    <div className="td-blog-area pt-135 pb-130 fix">
      <div className="container">
        <div className="row">
          {/* header */}
          <div className="col-12">
            <div
              className="td-blog-title-wrap mb-75 text-center wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <span className="td-section-title-pre mb-10">Insights</span>
              <h2 className="td-section-title mb-30">Latest news coming</h2>
            </div>
          </div>

          <div className="col-12">
            <div className="td-blog-slider-wrap">
              <div className="swiper-container td-blog-slider-active">
                <div className="swiper-wrapper">
                  <Swiper {...swiper_blog_settings}>
                    {blogPosts.map((post, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className="swiper-slide wow slideInDown"
                          data-wow-delay={`.${index + 3}s`}
                          data-wow-duration="1s"
                        >
                          <div className="td-blog-content">
                            <div className="td-blog-thumb mb-30">
                              <img
                                className="w-100"
                                src={post.imgSrc}
                                alt="blog"
                              />
                            </div>
                            <div className="td-blog-meta-2 mb-15">
                              <span className="td-blog-2-tag">{post.tag}</span>
                              <span className="dvdr">/</span>
                              <span>{post.date}</span>
                            </div>
                            <h3 className="td-blog-title td-blog-title-2">
                              <Link to={post.href}>{post.title}</Link>
                            </h3>
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
  );
};
