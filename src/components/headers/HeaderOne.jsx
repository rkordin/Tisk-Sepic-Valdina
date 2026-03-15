import React from "react";
import LOGO from "../../assets/img/logo/logo.png";
import { useHeaderLang, useHeaderSticky } from "./useHeader";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

export const HeaderOne = () => {
  useHeaderLang();
  useHeaderSticky();

  return (
    <>
      <header>
        <div className="td-header-area td-transparent">
          {/* top */}
          <div className="td-header-top d-none d-md-block">
            <div className="container container-1750">
              <div className="row">
                <div className="col-12">
                  <div className="border-bottom">
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-6">
                        <div className="td-header-top-left">
                          <div className="td-header-top-menu">
                            <ul>
                              <li>
                                <Link to="/about">O nas</Link>
                              </li>
                              <li>
                                <Link to="/blog">Novosti</Link>
                              </li>
                              <li>
                                <Link to="/portfolio">Reference</Link>
                              </li>
                              <li>
                                <Link to="/faq">Pogosta vprašanja</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="td-header-right d-flex align-items-center justify-content-end">
                          <div className="td-header-time td-header-right-border">
                            <span>
                              <i className="fa-sharp fa-light fa-clock"></i>{" "}
                              Pon–Pet: 07:00 – 15:00
                            </span>
                          </div>
                          <div className="td-header-time td-header-right-border">
                            <span>
                              <i className="fa-light fa-phone"></i>{" "}
                              +386 7 393 7100
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* bottom */}
          <div className="td-header-bottom" id="header-sticky">
            <div className="container container-1750">
              <div className="row">
                <div className="col-12">
                  <div className="border-bottom-2 td-header-mobile-space">
                    <div className="row align-items-center">
                      <div className="col-xxl-4 col-xl-4 col-lg-3">
                        <div className="td-header-search d-none d-lg-block">
                          <form action="#">
                            <div className="td-header-input p-relative">
                              <input
                                type="email"
                                placeholder="Iskanje..."
                              />
                              <button
                                className="td-header-search-btn"
                                type="button"
                                aria-label="Iskanje"
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.1172 0C12.593 0 16.2344 3.64136 16.2344 8.11718C16.2344 10.1445 15.4873 12.0007 14.254 13.4247L19.8284 18.9997C20.0572 19.2286 20.0572 19.5996 19.8284 19.8284C19.5995 20.0572 19.2286 20.0572 18.9997 19.8284L13.4254 14.2534C12.0012 15.4871 10.1448 16.2344 8.1172 16.2344C3.64139 16.2344 2.28882e-05 12.593 2.28882e-05 8.11718C2.28882e-05 3.64136 3.64139 0 8.1172 0ZM8.1172 15.0625C11.9469 15.0625 15.0625 11.9468 15.0625 8.11718C15.0625 4.28753 11.9468 1.17187 8.1172 1.17187C4.28756 1.17187 1.1719 4.28753 1.1719 8.11718C1.1719 11.9468 4.28756 15.0625 8.1172 15.0625Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-xl-2 col-lg-2 col-7">
                        <div className="td-header-logo text-end mr-90">
                          <Link to="/">
                            <img src={LOGO} alt="logo" />
                          </Link>
                        </div>
                      </div>
                      <div className="col-xxl-5 col-xl-6 col-lg-7 col-5">
                        <div className="td-main-menu td-main-menu-01 d-none d-lg-block">
                          <Navbar />
                        </div>

                        {/* mobile icon */}
                        <div className="td-header-bar d-block d-lg-none text-right">
                          <button className="td-offcanvas-open-btn td-menu-bar" aria-label="Odpri meni">
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
    </>
  );
};
