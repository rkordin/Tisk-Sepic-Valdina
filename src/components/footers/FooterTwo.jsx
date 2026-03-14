import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../../assets/img/logo/logo.png";
import facebookIcon from "../../assets/img/footer/social-icon/facebook.png";
import twitterIcon from "../../assets/img/footer/social-icon/twitter.png";
import behanceIcon from "../../assets/img/footer/social-icon/behance.png";
import linkedinIcon from "../../assets/img/footer/social-icon/linkedin.png";
import youtubeIcon from "../../assets/img/footer/social-icon/youtube.png";

export const FooterTwo = () => {
  const socialIcons = [
    {
      name: "facebook",
      url: "#",
      imgSrc: facebookIcon,
    },
    {
      name: "twitter",
      url: "#",
      imgSrc: twitterIcon,
    },
    {
      name: "behance",
      url: "#",
      imgSrc: behanceIcon,
    },
    {
      name: "linkedin",
      url: "#",
      imgSrc: linkedinIcon,
    },
    {
      name: "youtube",
      url: "#",
      imgSrc: youtubeIcon,
    },
  ];

  return (
    <footer>
      <div className="td-footer-area">
        <div className="td-footer-big-text td-footer-top-border pt-115">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="td-footer-2-big-text text-center">
                  <h2
                    className="td-footer-2-big-title"
                    data-parallax='{"x": -100, "smoothness": 10}'
                  >
                    Pogovorimo se
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="td-footer-2-bg pb-50 pt-120">
          <div className="td-footer-social mb-120">
            <div className="container">
              <div className="row gx-0 row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">
                {socialIcons.map((icon) => (
                  <div key={icon.name} className="col td-footer-social-border">
                    <div className="td-footer-social-img">
                      <a href={icon.url}>
                        <img src={icon.imgSrc} alt={icon.name} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="td-footer-2-main">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6 mb-50">
                  <div className="td-footer-2-widget td-footer-2-widget-space">
                    <div className="td-footer-2-logo mb-50">
                      <Link to="/">
                        <img src={LOGO} alt="logo" />
                      </Link>
                    </div>
                    <div className="td-footer-2-form">
                      <h5 className="td-footer-2-form-title mb-15">
                        Ostanite v stiku
                      </h5>
                      <form action="#" className="mb-20">
                        <div className="td-footer-2-input p-relative">
                          <input
                            type="email"
                            name="email"
                            placeholder="E-poštni naslov"
                          />
                          <button type="button">Pošlji</button>
                        </div>
                      </form>
                      <div className="td-footer-2-info">
                        <a className="mr-30" href="tel:+38673939200">
                          +386 7 393 92 00
                        </a>
                        <a href="mailto:info@tisksepic.si">info@tisksepic.si</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50">
                  <div className="td-footer-2-widget mr-80">
                    <h4 className="td-footer-2-widget-title mb-50">Lokacija</h4>
                    <div className="td-footer-2-location">
                      <a
                        className="mb-20"
                        href="https://www.google.com/maps/place/Livada+14,+8000+Novo+mesto,+Slovenia"
                        target="_blank"
                      >
                        Livada 14, 8000 Novo mesto, Slovenija
                      </a>
                      <a
                        href="mailto:info@tisksepic.si"
                        target="_blank"
                      >
                        info@tisksepic.si
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 mb-50">
                      <div className="td-footer-2-widget ml-15">
                        <h4 className="td-footer-2-widget-title mb-50">Info</h4>
                        <div className="td-footer-2-location">
                          <a className="mb-15" href="/about">
                            O nas
                          </a>
                          <a className="mb-15" href="/service">
                            Storitve
                          </a>
                          <a className="mb-15" href="/team">
                            Naša ekipa
                          </a>
                          <a className="mb-15" href="/contact">
                            Kontakt
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 mb-50">
                      <div className="td-footer-2-widget ml-30">
                        <h4 className="td-footer-2-widget-title mb-50">
                          Povezave
                        </h4>
                        <div className="td-footer-2-location">
                          <a className="mb-15" href="/portfolio">
                            Reference
                          </a>
                          <a className="mb-15" href="/blog">
                            Blog
                          </a>
                          <a className="mb-15" href="/faq">
                            Pogosta vprašanja
                          </a>
                          <a className="mb-15" href="/service">
                            Storitve
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

        <div className="td-footer-2-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-5">
                <div className="td-footer-bottom-copyright mb-20">
                  <p>
                    © 2024 <a href="/">Tisk Šepic d.o.o.</a> Vse pravice pridržane.
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="td-footer-2-bottom-menu mb-20">
                  <ul>
                    <li>
                      <a href="/about">O nas.</a>
                    </li>
                    <li>
                      <a href="/service">Storitve.</a>
                    </li>
                    <li>
                      <a href="/contact">Kontakt.</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
