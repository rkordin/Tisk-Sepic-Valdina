import React from "react";
import { Link } from "react-router-dom";
import LOGO_WHITE from "../../assets/img/logo/logo-white.png";

export const FooterThree = () => {
  return (
    <footer>
      <div className="td-footer-area td-black-bg-2 pt-120">
        <div className="td-footer-3-top pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-50">
                <div className="td-footer-3-logo">
                  <Link to="/">
                    <img src={LOGO_WHITE} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 mb-50">
                <div className="td-footer-3-top-content">
                  <p>
                    Iščete zanesljivega tiskarskega partnerja? Pišite nam na
                    <a href="mailto:info@tisksepic.si">info@tisksepic.si</a> —
                    z veseljem vam svetujemo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="td-footer-3-wrap pb-65">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="td-footer-3-widget mt-45 mb-50">
                  <h2 className="td-footer-3-widget-big-title">
                    Sodelujmo <span>skupaj</span>
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-xl-6 col-lg-5 col-md-6 col-sm-5 mb-40">
                    <div className="td-footer-3-widget">
                      <h2 className="td-footer-3-widget-title mb-20">Meni</h2>
                      <ul>
                        <li>
                          <a href="/about">O nas</a>
                          <a href="/service">Storitve</a>
                          <a href="/portfolio">Reference</a>
                          <a href="/blog">Blog</a>
                          <a href="/contact">Kontakt</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-7 col-md-6 col-sm-7 mb-40">
                    <div className="td-footer-3-widget mb-40">
                      <h2 className="td-footer-3-widget-title mb-20">
                        Kontakt
                      </h2>
                      <div className="td-footer-3-link">
                        <a href="mailto:info@tisksepic.si">
                          info@tisksepic.si
                        </a>
                        <a href="tel:+38673939200">+386 7 393 92 00</a>
                      </div>
                    </div>
                    <div className="td-footer-3-widget">
                      <h2 className="td-footer-3-widget-title mb-20">
                        Naš naslov
                      </h2>
                      <div className="td-footer-3-link">
                        <a
                          href="https://www.google.com/maps/place/Livada+14,+8000+Novo+mesto,+Slovenia"
                          target="_blank"
                        >
                          Livada 14
                          <br />
                          8000 Novo mesto, Slovenija
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="td-footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="td-footer-3-bottom-border td-footer-3-bottom-spacing">
                  <div className="row">
                    <div className="col-lg-6 mb-15">
                      <div className="td-footer-3-bottom-copyright">
                        <p>
                          © 2024 <a href="/">Tisk Šepic d.o.o.</a> Vse pravice pridržane.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-15">
                      <div className="td-footer-3-bottom-social text-right">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-youtube"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-behance"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
