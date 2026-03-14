import React from "react";
import PATTERN from "../../assets/img/about/about2/pattern.png";
import THUMB_1 from "../../assets/img/about/about2/02.png";
import THUMB_2 from "../../assets/img/about/about2/03.jpg";
import THUMB_3 from "../../assets/img/about/about2/01.jpg";
import { Link } from "react-router-dom";

export const AboutTwo = () => {
  return (
    <div
      className="td-about-area bg-position p-relative pb-100 pt-140 fix"
      style={{ backgroundImage: `url(${PATTERN})` }}
    >
      <span className="td-about-2-shape-2 d-none d-lg-block"></span>
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-xl-6 col-lg-6 pb-40">
            <div
              className="td-about-2-left p-relative wow fadeInRight"
              data-wow-delay=".4s"
              data-wow-duration="1s"
            >
              <span className="td-about-2-shape d-none d-sm-block"></span>
              <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-7 col-7">
                  <div className="td-about-2-thumb">
                    <img
                      className="td-about-thumb-1 w-100"
                      src={THUMB_1}
                      alt="thumb"
                    />
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                  <div className="td-about-2-thumb">
                    <img
                      className="td-about-thumb-2 w-100"
                      src={THUMB_2}
                      alt="thumb"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="td-about-2-thumb">
                    <img
                      className="td-about-thumb-3 w-100"
                      src={THUMB_3}
                      alt="thumb"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6 col-lg-6 pb-40">
            <div
              className="td-about-content-wrap p-relative wow fadeInLeft"
              data-wow-delay=".4s"
              data-wow-duration="1s"
            >
              <span className="td-section-title-pre mb-10">
                Brand since 1972
              </span>
              <h2 className="td-section-title mb-30">
                Best solution for your business
              </h2>
              <p className="td-about-para pr-10 pb-45">
                Our focus is on delivering superior value to our clients for
                company modification. Providing sustainable strategies that will
                upgrade their business.
              </p>
              <div className="td-counter-count-wrap td-counter-count-wrap-2 mb-35 d-flex">
                <div className="td-counter-single mr-60">
                  <h2 className="td-counter-count fs-36">
                    <span
                      data-purecounter-duration="1"
                      data-purecounter-end="85"
                      className="purecounter"
                    >
                      0
                    </span>
                    K+
                  </h2>
                  <span className="td-counter-count-para">
                    Companies analyzed
                  </span>
                </div>
                <div className="td-counter-single">
                  <h2 className="td-counter-count fs-36">
                    <span
                      data-purecounter-duration="1"
                      data-purecounter-end="135"
                      className="purecounter"
                    >
                      0
                    </span>
                    M
                  </h2>
                  <span className="td-counter-count-para">
                    Satisfied clients
                  </span>
                </div>
              </div>
              <div className="td-about-btn">
                <Link className="td-btn td-btn-6 td-left-right" to="/about">
                  View More
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
  );
};
