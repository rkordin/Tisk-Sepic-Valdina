import React from "react";
import BG from "../../assets/img/hero/bg-2.jpg";
import { Link } from "react-router-dom";

export const HeroTwo = () => {
  return (
    <div
      className="td-hero-area bg-position"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="td-hero-2-spacing">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="td-hero-2-content">
                <h2 className="td-hero-2-title mb-65">
                  Expertise advice for
                  <br />
                  your <span>business</span> plans with
                  <br />
                  guaranteed <span>success.</span>
                </h2>
                <div className="td-hero-2-btn">
                  <Link className="td-left-right" to="/contact">
                    <span className="td-arrow-angle ml-10">
                      <svg
                        className="td-arrow-svg-top-right td-bg-none"
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.57921 1.97755L33.1403 1.558L32.7208 27.1191M1.71022 32.9818L33.1372 1.55486"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.57921 1.97755L33.1403 1.558L32.7208 27.1191M1.71022 32.9818L33.1372 1.55486"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="td-hero-2-navebar">
        <div className="container">
          <div className="row gx-0">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="td-hero-2-navebar-single">
                <span>Our Mission</span>
                <a href="#">
                  <i className="fa-regular fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="td-hero-2-navebar-single">
                <span>Our Vision</span>
                <a href="#">
                  <i className="fa-regular fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="td-hero-2-navebar-single">
                <span>Approch</span>
                <a href="#">
                  <i className="fa-regular fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="td-hero-2-navebar-single last">
                <span>Our Team</span>
                <a href="#">
                  <i className="fa-regular fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
