import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../../assets/img/footer/bg.jpg";

export const FooterFive = () => {
  return (
    <footer>
      <div className="td-footer-area">
        <div className="td-footer-5-top td-black-bg-2 td-footer-5-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="td-footer-5-widget mb-45">
                  <h2 className="td-footer-5-widget-title mb-45">
                    Sedež podjetja
                  </h2>
                  <div className="td-footer-5-widget-content">
                    <ul>
                      <li>
                        <a href="mailto:info@tisksepic.si">
                          info@tisksepic.si
                        </a>
                      </li>
                      <li className="mb-20">
                        <a href="tel:+38673939200">+386 7 393 92 00</a>
                      </li>
                      <li>
                        <a
                          href="https://www.google.com/maps/place/Livada+14,+8000+Novo+mesto,+Slovenia"
                          target="_blank"
                        >
                          Livada 14
                          <br />
                          8000 Novo mesto, Slovenija
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="td-footer-5-widget mb-45 ml-20">
                  <h2 className="td-footer-5-widget-title mb-45">Komerciala</h2>
                  <div className="td-footer-5-widget-content">
                    <ul>
                      <li>
                        <a href="mailto:komerciala@tisksepic.si">
                          komerciala@tisksepic.si
                        </a>
                      </li>
                      <li className="mb-20">
                        <a href="tel:+38673939200">+386 7 393 92 00</a>
                      </li>
                      <li>
                        <a
                          href="https://www.google.com/maps/place/Livada+14,+8000+Novo+mesto,+Slovenia"
                          target="_blank"
                        >
                          Livada 14
                          <br />
                          8000 Novo mesto, Slovenija
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="td-footer-5-widget mb-45 ml-40">
                  <h2 className="td-footer-5-widget-title mb-45">Osnovno</h2>
                  <div className="td-footer-5-widget-content td-footer-5-widget-content-link">
                    <ul>
                      <li>
                        <Link to="/about">O nas</Link>
                      </li>
                      <li>
                        <Link to="/service">Storitve</Link>
                      </li>
                      <li>
                        <Link to="/team">Naša ekipa</Link>
                      </li>
                      <li>
                        <Link to="/contact">Kontakt</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="td-footer-5-widget mb-45 ml-50">
                  <h2 className="td-footer-5-widget-title mb-45">Strani</h2>
                  <div className="td-footer-5-widget-content td-footer-5-widget-content-link">
                    <ul>
                      <li>
                        <a href="/portfolio">Reference</a>
                      </li>
                      <li>
                        <a href="/blog">Blog</a>
                      </li>
                      <li>
                        <a href="/faq">Pogosta vprašanja</a>
                      </li>
                      <li>
                        <a href="/service">Storitve</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="td-footer-5-widget mb-45 ml-65">
                  <h2 className="td-footer-5-widget-title mb-45">Sledite nam</h2>
                  <div className="td-footer-5-widget-content td-footer-5-widget-content-link">
                    <ul>
                      <li>
                        <a href="#">Facebook</a>
                      </li>
                      <li>
                        <a href="#">LinkedIn</a>
                      </li>
                      <li>
                        <a href="#">Twitter</a>
                      </li>
                      <li>
                        <a href="#">YouTube</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="td-footer-5-bottom bg-position"
          style={{ backgroundImage: `url(${footerBg})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="td-footer-5-bottom-content text-center">
                  <p>
                    © 2024 <Link to="/">Tisk Šepic d.o.o.</Link> Vse pravice pridržane.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
