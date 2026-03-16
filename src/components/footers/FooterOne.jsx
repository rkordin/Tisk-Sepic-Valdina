import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../../assets/img/logo/logo-vertical.svg";
import { useCmsContent } from "../../hooks/useCmsContent";

const DEFAULT_FOOTER = {
  tagline: "Tiskamo prihodnost.",
  subtitle: "Z vami že več kot 40 let.",
  cta_text: "Pišite nam",
  company: "Tisk Šepic d.o.o.",
  address: "Livada 14, 8000 Novo Mesto",
  phone: "+386 7 393 7100",
  email: "info@tisksepic.si",
  hours: "Pon–Pet 07:00–15:00",
};

export const FooterOne = () => {
  const { content } = useCmsContent("footer");
  const info = content?.info || DEFAULT_FOOTER;
  return (
    <>
      <footer>
        <div className="td-footer-area td-grey-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
                <div className="td-footer-widget td-footer-col pt-120 pb-100">
                  <div className="td-footer-widget-content">
                    <ul>
                      <li>
                        <Link to="/">Domov</Link>
                      </li>
                      <li>
                        <Link to="/service">Storitve</Link>
                      </li>
                      <li>
                        <Link to="/portfolio">Reference</Link>
                      </li>
                      <li>
                        <Link to="/about">O nas</Link>
                      </li>
                      <li>
                        <Link to="/contact">Kontakt</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-8 col-sm-8">
                <div className="td-footer-widget h-100 td-footer-col-2 pb-100 text-center pt-120">
                  <div className="td-footer-logo mb-45">
                    <img src={LOGO} alt="logo" />
                  </div>
                  <div className="td-footer-widget-content">
                    <p className="td-footer-widget-para mb-30">
                      {info.tagline}
                      <br />
                      {info.subtitle}
                    </p>
                    <div className="td-footer-btn">
                      <Link className="td-btn td-left-right" to="/contact">
                        {info.cta_text}
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
              <div className="col-xl-2 col-lg-3 col-md-6">
                <div className="td-footer-widget td-footer-col-3 pt-120 pb-100">
                  <h4 className="td-footer-widget-title mb-40">Pravne informacije</h4>
                  <div className="td-footer-widget-content-2">
                    <ul>
                      <li>
                        <Link to="/privacy-policy">Politika zasebnosti</Link>
                      </li>
                      <li>
                        <Link to="/terms-and-conditions">
                          Pogoji uporabe
                        </Link>
                      </li>
                      <li>
                        <Link to="/cookie-policy">Piškotki</Link>
                      </li>
                      <li>
                        <Link to="/faq">Pogosta vprašanja</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="td-footer-bottom pt-35 td-footer-bottom-border">
            <div className="container">
              <div className="row">
                <div className="col-xxl-6 col-xl-5 col-lg-4 col-md-4 mb-35">
                  <div className="td-footer-bottom-social">
                    <ul className="mb-45">
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                    <div className="td-footer-bottom-copyright">
                      <p>
                        © 2024 <Link to="/">{info.company}</Link> Vse pravice pridržane.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-8">
                  <div className="row">
                    <div className="col-lg-7 col-md-6">
                      <div className="td-footer-bottom-location pt-5 mb-35 ml-100">
                        <h5 className="td-footer-bottom-title mb-15">Slovenija</h5>
                        <a
                          href="https://www.google.com/maps/place/Livada+14,+8000+Novo+mesto"
                          target="_blank"
                        >
                          {info.address}
                        </a>
                        <span>
                          Telefon:
                          <a
                            className="td-footer-bottom-phone"
                            href={`tel:${info.phone.replace(/\s/g, "")}`}
                          >
                            {info.phone}
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                      <div className="td-footer-bottom-location mb-35 ml-20 pt-5">
                        <h5 className="td-footer-bottom-title mb-15">
                          Email
                        </h5>
                        <a
                          href={`mailto:${info.email}`}
                          target="_blank"
                        >
                          {info.email}
                        </a>
                        <span>
                          Delovni čas:
                          <span className="td-footer-bottom-phone">
                            {info.hours}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
