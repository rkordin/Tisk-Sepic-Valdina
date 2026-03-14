import React from "react";
import bgImage from "../../assets/img/expreance/bg2.jpg";
import thumbImage1 from "../../assets/img/expreance/01.jpg";
import thumbImage2 from "../../assets/img/expreance/02.jpg";
import thumbImage3 from "../../assets/img/expreance/03.jpg";
import thumbImage4 from "../../assets/img/expreance/04.jpg";

export const ExperienceOne = () => {
  return (
    <div className="td-expreance-area">
      <div className="td-expreance-top">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="td-expreance-big-title-wrap p-relative">
                <span className="td-expreance-big-title">
                  <svg
                    width="642"
                    height="512"
                    viewBox="0 0 642 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.15"
                      d="M608.713 86.4H381.913V206.1C391.713 193.967 405.713 184.167 423.913 176.7C442.113 168.767 461.48 164.8 482.013 164.8C519.346 164.8 549.913 172.967 573.713 189.3C597.513 205.633 614.78 226.633 625.513 252.3C636.246 277.5 641.613 304.567 641.613 333.5C641.613 387.167 626.213 430.333 595.413 463C565.08 495.667 521.68 512 465.213 512C412.013 512 369.546 498.7 337.813 472.1C306.08 445.5 288.113 410.733 283.913 367.8H379.113C383.313 386.467 392.646 401.4 407.113 412.6C422.046 423.8 440.946 429.4 463.813 429.4C491.346 429.4 512.113 420.767 526.113 403.5C540.113 386.233 547.113 363.367 547.113 334.9C547.113 305.967 539.88 284.033 525.413 269.1C511.413 253.7 490.646 246 463.113 246C443.513 246 427.18 250.9 414.113 260.7C401.046 270.5 391.713 283.567 386.113 299.9H292.313V0.300049H608.713V86.4Z"
                      fill="url(#paint0_linear_335_2111)"
                      fillOpacity="0.5"
                    />
                    <path
                      opacity="0.15"
                      d="M0.200195 92V1.69995H168.9V512H68.1002V92H0.200195Z"
                      fill="url(#paint1_linear_335_2111)"
                      fillOpacity="0.5"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_335_2111"
                        x1="327.5"
                        y1="512"
                        x2="327.5"
                        y2="-4.49992"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" offset="1" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_335_2111"
                        x1="327.5"
                        y1="512"
                        x2="327.5"
                        y2="-4.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" offset="1" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span>
                  Years of <br />
                  Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="td-expreance-main bg-position z-index-11 pt-135 pb-140"
        data-background={bgImage}
      >
        <div className="container">
          <div className="row mb-35">
            <div className="col-lg-6 mb-30">
              <div
                className="td-expreance-tile-wrap wow fadeInUp"
                data-wow-delay=".3s"
                data-wow-duration="1s"
              >
                <h2 className="td-expreance-main-title">
                  Recent works and success stories
                </h2>
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div
                className="td-expreance-main-title-pre wow fadeInUp"
                data-wow-delay=".4s"
                data-wow-duration="1s"
              >
                <p>
                  We are constantly rethinking the future by creating the next
                  generation of products, brands and services from a hybrid
                  perspective. The <b>unthinkable</b> today becomes inevitable.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="col-lg-12 wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <div className="td-expreance-content-wrap p-relative">
                <div className="td-expreance-thumb">
                  <img className="w-100" src={thumbImage2} alt="thumb" />
                </div>
                <div className="td-expreance-item">
                  <div className="row">
                    <div className="col-lg-6 mb-30">
                      <div className="td-expreance-content">
                        <p className="td-expreance-title-pre">
                          Business, Finance <span>/</span> June 21, 2024
                        </p>
                        <h3 className="td-expreance-title">
                          <span>01</span>Startup investment
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-30">
                      <div className="td-expreance-btn-wrap">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknow.
                        </p>
                        <div className="td-expreance-btn">
                          <a href="#">
                            <svg
                              width="50"
                              height="50"
                              viewBox="0 0 50 50"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M25 50C38.8235 50 50 38.8235 50 25C50 11.1765 38.8235 0 25 0C11.1765 0 0 11.1765 0 25C0 38.8235 11.1765 50 25 50ZM25 2.94118C37.2059 2.94118 47.0588 12.7941 47.0588 25C47.0588 37.2059 37.2059 47.0588 25 47.0588C12.7941 47.0588 2.94118 37.2059 2.94118 25C2.94118 12.7941 12.7941 2.94118 25 2.94118Z"
                                fill="currentColor"
                              />
                              <path
                                d="M24.5585 39.2638L38.8232 24.9991L24.5585 10.7344L22.4997 12.7932L34.7056 24.9991L22.4997 37.205L24.5585 39.2638Z"
                                fill="currentColor"
                              />
                              <path
                                d="M36.7646 23.5293H11.7646V26.4705H36.7646V23.5293Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-12 wow fadeInUp"
              data-wow-delay=".4s"
              data-wow-duration="1s"
            >
              <div className="td-expreance-content-wrap p-relative">
                <div className="td-expreance-thumb">
                  <img className="w-100" src={thumbImage1} alt="thumb" />
                </div>
                <div className="td-expreance-item">
                  <div className="row">
                    <div className="col-lg-6 mb-30">
                      <div className="td-expreance-content">
                        <p className="td-expreance-title-pre">
                          Business, Finance <span>/</span> June 21, 2024
                        </p>
                        <h3 className="td-expreance-title">
                          <span>02</span>Cryptocurrency investment
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-30">
                      <div className="td-expreance-btn-wrap">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknow.
                        </p>
                        <div className="td-expreance-btn">
                          <a href="#">
                            <svg
                              width="50"
                              height="50"
                              viewBox="0 0 50 50"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M25 50C38.8235 50 50 38.8235 50 25C50 11.1765 38.8235 0 25 0C11.1765 0 0 11.1765 0 25C0 38.8235 11.1765 50 25 50ZM25 2.94118C37.2059 2.94118 47.0588 12.7941 47.0588 25C47.0588 37.2059 37.2059 47.0588 25 47.0588C12.7941 47.0588 2.94118 37.2059 2.94118 25C2.94118 12.7941 12.7941 2.94118 25 2.94118Z"
                                fill="currentColor"
                              />
                              <path
                                d="M24.5585 39.2638L38.8232 24.9991L24.5585 10.7344L22.4997 12.7932L34.7056 24.9991L22.4997 37.205L24.5585 39.2638Z"
                                fill="currentColor"
                              />
                              <path
                                d="M36.7646 23.5293H11.7646V26.4705H36.7646V23.5293Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-12 wow fadeInUp"
              data-wow-delay=".5s"
              data-wow-duration="1s"
            >
              <div className="td-expreance-content-wrap p-relative">
                <div className="td-expreance-thumb">
                  <img className="w-100" src={thumbImage3} alt="thumb" />
                </div>
                <div className="td-expreance-item">
                  <div className="row">
                    <div className="col-lg-6 mb-30">
                      <div className="td-expreance-content">
                        <p className="td-expreance-title-pre">
                          Business, Finance <span>/</span> June 21, 2024
                        </p>
                        <h3 className="td-expreance-title">
                          <span>03</span>Business development
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-30">
                      <div className="td-expreance-btn-wrap">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknow.
                        </p>
                        <div className="td-expreance-btn">
                          <a href="#">
                            <svg
                              width="50"
                              height="50"
                              viewBox="0 0 50 50"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M25 50C38.8235 50 50 38.8235 50 25C50 11.1765 38.8235 0 25 0C11.1765 0 0 11.1765 0 25C0 38.8235 11.1765 50 25 50ZM25 2.94118C37.2059 2.94118 47.0588 12.7941 47.0588 25C47.0588 37.2059 37.2059 47.0588 25 47.0588C12.7941 47.0588 2.94118 37.2059 2.94118 25C2.94118 12.7941 12.7941 2.94118 25 2.94118Z"
                                fill="currentColor"
                              />
                              <path
                                d="M24.5585 39.2638L38.8232 24.9991L24.5585 10.7344L22.4997 12.7932L34.7056 24.9991L22.4997 37.205L24.5585 39.2638Z"
                                fill="currentColor"
                              />
                              <path
                                d="M36.7646 23.5293H11.7646V26.4705H36.7646V23.5293Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-12 wow fadeInUp"
              data-wow-delay=".6s"
              data-wow-duration="1s"
            >
              <div className="td-expreance-content-wrap p-relative">
                <div className="td-expreance-thumb">
                  <img className="w-100" src={thumbImage2} alt="thumb" />
                </div>
                <div className="td-expreance-item">
                  <div className="row">
                    <div className="col-lg-6 mb-30">
                      <div className="td-expreance-content">
                        <p className="td-expreance-title-pre">
                          Business, Finance <span>/</span> June 21, 2024
                        </p>
                        <h3 className="td-expreance-title">
                          <span>04</span>Market compliance
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-30">
                      <div className="td-expreance-btn-wrap">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknow.
                        </p>
                        <div className="td-expreance-btn">
                          <a href="#">
                            <svg
                              width="50"
                              height="50"
                              viewBox="0 0 50 50"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M25 50C38.8235 50 50 38.8235 50 25C50 11.1765 38.8235 0 25 0C11.1765 0 0 11.1765 0 25C0 38.8235 11.1765 50 25 50ZM25 2.94118C37.2059 2.94118 47.0588 12.7941 47.0588 25C47.0588 37.2059 37.2059 47.0588 25 47.0588C12.7941 47.0588 2.94118 37.2059 2.94118 25C2.94118 12.7941 12.7941 2.94118 25 2.94118Z"
                                fill="currentColor"
                              />
                              <path
                                d="M24.5585 39.2638L38.8232 24.9991L24.5585 10.7344L22.4997 12.7932L34.7056 24.9991L22.4997 37.205L24.5585 39.2638Z"
                                fill="currentColor"
                              />
                              <path
                                d="M36.7646 23.5293H11.7646V26.4705H36.7646V23.5293Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-12 wow fadeInUp"
              data-wow-delay=".7s"
              data-wow-duration="1s"
            >
              <div className="td-expreance-content-wrap p-relative">
                <div className="td-expreance-thumb">
                  <img className="w-100" src={thumbImage4} alt="thumb" />
                </div>
                <div className="td-expreance-item">
                  <div className="row">
                    <div className="col-lg-6 mb-30">
                      <div className="td-expreance-content">
                        <p className="td-expreance-title-pre">
                          Business, Finance <span>/</span> June 21, 2024
                        </p>
                        <h3 className="td-expreance-title">
                          <span>05</span>Business transformation
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-30">
                      <div className="td-expreance-btn-wrap">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknow.
                        </p>
                        <div className="td-expreance-btn">
                          <a href="#">
                            <svg
                              width="50"
                              height="50"
                              viewBox="0 0 50 50"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M25 50C38.8235 50 50 38.8235 50 25C50 11.1765 38.8235 0 25 0C11.1765 0 0 11.1765 0 25C0 38.8235 11.1765 50 25 50ZM25 2.94118C37.2059 2.94118 47.0588 12.7941 47.0588 25C47.0588 37.2059 37.2059 47.0588 25 47.0588C12.7941 47.0588 2.94118 37.2059 2.94118 25C2.94118 12.7941 12.7941 2.94118 25 2.94118Z"
                                fill="currentColor"
                              />
                              <path
                                d="M24.5585 39.2638L38.8232 24.9991L24.5585 10.7344L22.4997 12.7932L34.7056 24.9991L22.4997 37.205L24.5585 39.2638Z"
                                fill="currentColor"
                              />
                              <path
                                d="M36.7646 23.5293H11.7646V26.4705H36.7646V23.5293Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
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
