import React from "react";
import { useHeaderLang, useHeaderSticky } from "./useHeader";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import LOGO_WHITE from "../../assets/img/logo/logo-white.png";

export const HeaderThree = () => {
  useHeaderLang();
  useHeaderSticky();

  return (
    <header>
      <div className="td-header-area td-transparent">
        {/* top */}
        <div className="td-header-3-top td-black-bg-2">
          <div className="container container-1730">
            <div className="row">
              <div className="col-12">
                <div className="td-header-3-content">
                  <p>
                    Welcome To Our <a href="#">Adina Business</a> Consulting
                    Firm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div
          className="td-header-2-bottom td-header-sticky-black"
          id="header-sticky"
        >
          <div className="container container-1730">
            <div className="row">
              <div className="col-12">
                <div className="td-header-mobile-space">
                  <div className="row align-items-center">
                    <div className="col-xl-1 col-lg-2 col-6">
                      <div className="td-header-logo mr-90">
                        <Link to="/">
                          <img src={LOGO_WHITE} alt="logo" />
                        </Link>
                      </div>
                    </div>

                    <div className="col-xl-8 col-lg-8 col-6">
                      <div className="td-main-menu td-main-menu-3 d-none d-lg-block">
                        <Navbar hidePortfolio />
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

                    <div className="col-xl-3 col-lg-2 d-none d-lg-block">
                      <div className="td-header-3-btn text-right">
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
