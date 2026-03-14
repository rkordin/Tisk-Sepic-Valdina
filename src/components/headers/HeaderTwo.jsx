import React from "react";
import LOGO from "../../assets/img/logo/logo-2.png";
import { useHeaderLang, useHeaderSticky } from "./useHeader";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

export const HeaderTwo = () => {
  useHeaderLang();
  useHeaderSticky();

  return (
    <header>
      <div className="td-header-area">
        {/* top */}
        <div className="td-header-top td-header-bottom-2 border-bottom d-none d-lg-block">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="row align-items-center">
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="td-header-top-left">
                      <div className="td-header-top-social">
                        <ul>
                          <li>
                            <a href="mailto:info@tisksepic.si">
                              <i className="fa-regular fa-envelope-open"></i>
                              info@tisksepic.si
                            </a>
                          </li>
                          <li>
                            <a href="tel:+(123)45678900">
                              <i className="fa-regular fa-phone-flip"></i>{" "}
                              +(123) 456 789 00
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 d-none d-xl-block">
                    <div className="td-header-endeavos text-center">
                      <p>
                        Adina - for All <a href="#"> your business</a> endeavors
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="td-header-right d-flex align-items-center justify-content-end">
                      <div className="td-header-lang p-relative">
                        <span
                          className="td-header-lang-toggle"
                          id="td-header-lang-toggle"
                        >
                          <i className="fa-light fa-globe"></i> English
                        </span>
                        <ul className="td-header-lang-list td-lang-list">
                          <li>Spanish</li>
                          <li>English</li>
                          <li>Canada</li>
                        </ul>
                      </div>
                      <div className="td-header-time td-header-right-border">
                        <span>
                          <i className="fa-sharp fa-light fa-clock"></i> 10:00am
                          - 06:00pm
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* below */}
        <div className="td-header-bottom td-header-2-space" id="header-sticky">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="td-header-mobile-space">
                  <div className="row align-items-center">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-7">
                      <div className="td-header-logo d-flex align-items-center">
                        <Link className="mr-30" to="/">
                          <img src={LOGO} alt="logo" />
                        </Link>
                        <div className="td-header-btn d-none d-xl-block">
                          <a className="td-btn-4" href="#">
                            We're hearing!
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-xxl-9 col-xl-9 col-lg-9 col-5">
                      <div className="td-header-right d-flex align-items-center justify-content-end">
                        <div className="td-main-menu td-main-menu-2 d-none d-lg-block">
                          <Navbar />
                        </div>

                        <div className="td-header-right-2-btn ml-50 d-none d-lg-block">
                          <a
                            className="td-btn td-btn-3 td-btn-5 td-left-right"
                            href="#"
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
                          </a>
                        </div>
                      </div>

                      {/* mobile icon */}
                      <div className="td-header-bar d-block d-lg-none text-right">
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
