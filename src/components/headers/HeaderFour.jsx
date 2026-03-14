import React from "react";
import { useHeaderLang, useHeaderSticky } from "./useHeader";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import LOGO_WHITE from "../../assets/img/logo/logo-white.png";

export const HeaderFour = () => {
  useHeaderLang();
  useHeaderSticky();

  return (
    <header>
      <div className="td-header-area">
        {/* top */}
        <div className="td-header-top td-black-bg-2 d-none d-md-block">
          <div className="container-fluid container-1750">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="td-header-top-left">
                  <div className="td-header-top-menu td-header-4-top-menu">
                    <ul>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Latest</a>
                      </li>
                      <li>
                        <a href="#">Trending</a>
                      </li>
                      <li>
                        <a href="#">New</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="td-header-right d-flex align-items-center justify-content-end">
                  <div className="td-header-lang td-header-4-lang p-relative">
                    <span
                      className="td-header-lang-toggle"
                      id="td-header-lang-toggle"
                    >
                      <i className="fa-light fa-globe"></i> Schedule
                    </span>
                    <ul className="td-header-lang-list td-lang-list">
                      <li>Spanish</li>
                      <li>English</li>
                      <li>Canada</li>
                    </ul>
                  </div>
                  <div className="td-header-time td-header-4-time td-header-right-border">
                    <span>
                      <i className="fa-sharp fa-light fa-clock"></i> 10:00am -
                      06:00pm
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div
          className="td-header-bottom td-black-bg td-header-sticky-black"
          id="header-sticky"
        >
          <div className="container-fluid container-1750">
            <div className="row">
              <div className="col-12">
                <div className="td-header-mobile-space">
                  <div className="row align-items-center">
                    <div className="col-xl-3 col-lg-2 col-6">
                      <div className="td-header-logo d-flex align-items-center">
                        <Link className="mr-30" to="/">
                          <img src={LOGO_WHITE} alt="logo" />
                        </Link>
                        <div className="td-header-btn td-header-4-btn d-none d-xl-block">
                          <a className="td-btn-4" href="#">
                            We're hearing!
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 d-none d-lg-block">
                      <div className="td-main-menu td-main-menu-2 td-main-menu-4 d-none d-lg-block">
                        <Navbar hidePortfolio />
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-6">
                      <div className="td-header-right d-flex align-items-center justify-content-end">
                        <div className="td-header-4-email d-none d-xl-block">
                          <a href="#">
                            <i className="fa-regular fa-envelope-open"></i>
                            info@tisksepic.si
                          </a>
                        </div>

                        <div className="td-header-right-2-btn ml-30 d-none d-lg-block">
                          <Link
                            className="td-btn td-btn-7 td-left-right"
                            to="/contact"
                          >
                            Let’s Talk
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

                      {/* mobile icon */}
                      <div className="td-header-bar td-header-bar-white d-block d-lg-none text-right">
                        <button className="td-offcanvas-open-btn td-menu-bar">
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
