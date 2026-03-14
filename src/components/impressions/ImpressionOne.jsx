import React from "react";
import { Link } from "react-router-dom";
import SHAPE from "../../assets/img/impressions/shape.png";
import CHART from "../../assets/img/impressions/chart.png";
import A from "../../assets/img/about/a.png";

export const ImpressionOne = () => {
  return (
    <div className="td-impressions-area fix td-grey-bg pt-160 pb-140 p-relative">
      <img
        className="td-impressions-shape tpleftright d-none d-lg-block"
        src={SHAPE}
        alt="shape"
      />
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div
              className="td-impressions-thumb mt-20 mb-40 wow fadeInRight"
              data-wow-delay=".4s"
              data-wow-duration="1s"
            >
              <img className="w-100" src={CHART} alt="chart" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mb-40">
            <div
              className="td-about-content-wrap p-relative z-index-1 ml-70 wow fadeInLeft"
              data-wow-delay=".4s"
              data-wow-duration="1s"
            >
              <img
                className="td-about-text-big td-about-text-big-2 d-none d-xl-block"
                src={A}
                alt="a"
              />
              <span className="td-section-title-pre mb-10">
                Our Business Thrives
              </span>
              <h2 className="td-section-title mb-30">
                Accurate business progress results
              </h2>
              <p className="td-about-para pr-10">
                Our focus is on delivering superior value to our clients for
                company modification. Providing sustainable strategies that will
                upgrade their business. From strategy to delivery.
              </p>
              <div className="td-impressions-btn pt-50">
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
