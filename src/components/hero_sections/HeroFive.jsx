import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import thumbImg from "../../assets/img/hero/hero5/thumb.png";
import shapeImg from "../../assets/img/hero/hero5/shape.png";
import $ from "jquery";

export const HeroFive = () => {
  useEffect(() => {
    $("select").niceSelect();

    return () => $("select").niceSelect("destroy");
  }, []);

  return (
    <>
      <div className="td-hero-area td-hero-5-spacing td-grey-bg-2 p-relative z-index-1">
        <div className="td-hero-5-bigtext-wrap">
          <h3 className="td-hero-5-bigtext" data-text="Insurance">
            Insurance
          </h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="td-hero-5-content-wrap">
                <span className="td-section-title-pre mb-10">
                  Life your Dream
                </span>
                <h2 className="td-hero-5-title mb-60">
                  Secure your future family
                </h2>
                <div className="td-hero-5-btn">
                  <Link to="/contact" className="td-btn mr-20 td-left-right">
                    View insurance plan
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
                  <Link to="/contact" className="td-btn td-btn-3 td-left-right">
                    Schedule a call
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
            <div className="col-xl-7 col-lg-6">
              <div className="td-hero-5-thumb pt-55 p-relative">
                <img className="w-100" src={thumbImg} alt="thumb" />
                <img className="td-hero-5-shape" src={shapeImg} alt="shape" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="td-hero-5-form-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="td-hero-5-form-inner">
                <div className="td-hero-5-form-tab">
                  <div
                    className="nav td-hero-5-tab-btn-list td-portfolio-tab-btn-list justify-content-center"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      className="td-hero-5-tab-btn mb-20 td-portfolio-tab-btn nav-link active"
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-home"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <i className="fa-sharp fa-solid fa-heart"></i> Life
                      Insurance
                    </button>
                    <button
                      className="td-hero-5-tab-btn mb-20 td-portfolio-tab-btn nav-link"
                      id="v-pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      <i className="fa-solid fa-briefcase"></i> Business
                      Insurance
                    </button>
                    <button
                      className="td-hero-5-tab-btn mb-20 td-portfolio-tab-btn nav-link"
                      id="v-pills-messages-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-messages"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      <i className="fa-solid fa-house-chimney-window"></i>{" "}
                      Family Insurance
                    </button>
                  </div>
                  <div
                    className="td-hero-5-tab-content d-flex justify-content-center tab-content"
                    id="v-pills-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <div className="td-hero-5-form">
                        <form action="#">
                          <div className="td-hero-5-form-inner d-flex align-items-center">
                            <div className="td-hero-5-form-input mr-20 mb-20">
                              <input type="text" placeholder="Enter Email" />
                            </div>
                            <div className="td-hero-5-form-input mr-20 mb-20">
                              <select defaultValue="">
                                <option value="">Select</option>
                                <option value="1">Some option</option>
                                <option value="2">Another option</option>
                                <option value="3" disabled>
                                  A disabled option
                                </option>
                                <option value="4">Potato</option>
                              </select>
                            </div>
                            <div className="td-hero-5-form-button mb-20">
                              <button
                                type="button"
                                className="td-btn td-left-right"
                              >
                                Get a quote
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
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <div className="td-hero-5-form">
                        <form action="#">
                          <div className="td-hero-5-form-inner d-flex align-items-center">
                            <div className="td-hero-5-form-input mr-20 mb-20">
                              <input type="text" placeholder="Enter Email" />
                            </div>
                            <div className="td-hero-5-form-input mr-20 mb-20">
                              <select defaultValue="">
                                <option value="" disabled>
                                  Select
                                </option>
                                <option value="1">Some option</option>
                                <option value="2">Another option</option>
                                <option value="3" disabled>
                                  A disabled option
                                </option>
                                <option value="4">Potato</option>
                              </select>
                            </div>
                            <div className="td-hero-5-form-button mb-20">
                              <button
                                type="button"
                                className="td-btn td-left-right"
                              >
                                Get a quote
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
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      <div className="td-hero-5-form">
                        <form action="#">
                          <div className="td-hero-5-form-inner d-flex align-items-center">
                            <div className="td-hero-5-form-input mr-20 mb-20">
                              <input type="text" placeholder="Enter Email" />
                            </div>
                            <div className="td-hero-5-form-input mr-20 mb-20">
                              <select defaultValue="">
                                <option value="" disabled>
                                  Select
                                </option>
                                <option value="1">Some option</option>
                                <option value="2">Another option</option>
                                <option value="3" disabled>
                                  A disabled option
                                </option>
                                <option value="4">Potato</option>
                              </select>
                            </div>
                            <div className="td-hero-5-form-button mb-20">
                              <button
                                type="button"
                                className="td-btn td-left-right"
                              >
                                Get a quote
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
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="td-hero-5-tab-para">
                  <p>
                    Get a amazing solution with us.
                    <Link to="/contact"> Get In Touch</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
