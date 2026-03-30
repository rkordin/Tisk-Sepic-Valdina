import React from "react";
import { Layout } from "../../layouts/Layout";
import { Link } from "react-router-dom";
import portfolioDetailsBg from "../../assets/img/portfolio/portfolio-details/bg.jpg";
import portfolioDetailsChart from "../../assets/img/portfolio/portfolio-details/chart.png";

export const PortfolioDetails = () => {
  return (
    <Layout
      breadcrumbTitle={"Referenca"}
      breadcrumbSubtitle={"Podrobnosti projekta"}
    >
      <div className="td-portfolio-details-area pt-140">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="td-portfolio-details-content-wrap mb-40">
                <div className="td-portfolio-details-thumb mb-80">
                  <img className="w-100" src={portfolioDetailsBg} alt="Portfolio project" loading="lazy" data-editable="portfolio-detail-bg" data-editable-type="image" data-dimensions="1920x1277" />
                </div>

                {/* title */}
                <h2 className="td-portfolio-details-title mb-35">
                  Farmacevtska embalaža za vodilno slovensko podjetje
                </h2>

                <div className="row">
                  <div className="col-lg-8 mb-40">
                    <div className="td-portfolio-details-text mb-75 mr-20">
                      <p>
                        Projekt je zajemal celotno zasnovo in izvedbo embalaže
                        za linijo farmacevtskih izdelkov. Zahteve stranke so
                        vključevale tisk v čistem prostoru (Clean Room), uporabo
                        materialov, ki ustrezajo standardu ISO 15378, ter
                        natančno barvno reprodukcijo po Pantone barvni lestvici.
                      </p>
                      <p>
                        Skupaj s stranko smo razvili embalažo, ki izpolnjuje
                        vse regulatorne zahteve, hkrati pa ohranja prepoznavnost
                        blagovne znamke. Proizvodni proces je potekal na naših
                        offset in flekso tiskarskih strojih z doslednim nadzorom
                        kakovosti v vsakem koraku.
                      </p>
                      <p>
                        Končni izdelek — serija škatel in navodil za uporabo —
                        je bil dobavljen v dogovorjenem roku. Stranka je
                        pohvalila natančnost tiska, kakovost materialov in
                        brezhibno komunikacijo skozi celoten projekt. Sodelovanje
                        se nadaljuje z novimi linijami izdelkov.
                      </p>
                    </div>

                    {/* tabs */}
                    <div className="td-portfolio-details-tab">
                      <div
                        className="nav td-portfolio-tab-btn-list"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <button
                          className="td-portfolio-tab-btn nav-link mb-10 active"
                          id="v-pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-home"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-home"
                          aria-selected="true"
                        >
                          Izziv
                        </button>
                        <button
                          className="td-portfolio-tab-btn nav-link mb-10"
                          id="v-pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="false"
                        >
                          Postopek
                        </button>
                        <button
                          className="td-portfolio-tab-btn nav-link mb-10"
                          id="v-pills-messages-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-messages"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-messages"
                          aria-selected="false"
                        >
                          Rezultat
                        </button>
                      </div>
                      <div
                        className="td-banking-img-wrapper tab-content"
                        id="v-pills-tabContent"
                      >
                        <div
                          className="tab-pane fade show active"
                          id="v-pills-home"
                          role="tabpanel"
                          aria-labelledby="v-pills-home-tab"
                        >
                          <div className="td-portfolio-details-tab-content">
                            <p>
                              Stranka je potrebovala embalažo za novo linijo
                              farmacevtskih izdelkov, ki mora ustrezati strogim
                              regulatornim zahtevam. Izziv je bil zagotoviti
                              brezhibno kakovost tiska v čistem prostoru, natančno
                              barvno ujemanje ter skladnost z ISO 15378 standardom
                              za primarno embalažo zdravil.
                            </p>
                            <div className="td-portfolio-details-tab-chart">
                              <img
                                className="w-100"
                                src={portfolioDetailsChart}
                                alt="Portfolio project chart"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-profile"
                          role="tabpanel"
                          aria-labelledby="v-pills-profile-tab"
                        >
                          <div className="td-portfolio-details-tab-content">
                            <p>
                              Začeli smo s posvetom o materialih in tiskarskih
                              tehnikah. Po odobritvi prototipov smo zagnali
                              proizvodnjo na offset stroju z doslednim nadzorom
                              barv prek spektrofotometra. Vsaka serija je bila
                              preverjena v našem laboratoriju za kakovost pred
                              dobavo.
                            </p>
                            <div className="td-portfolio-details-tab-chart">
                              <img
                                className="w-100"
                                src={portfolioDetailsChart}
                                alt="Portfolio project chart"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-messages"
                          role="tabpanel"
                          aria-labelledby="v-pills-messages-tab"
                        >
                          <div className="td-portfolio-details-tab-content">
                            <p>
                              Dobavljenih je bilo 500.000 enot embalaže v
                              dogovorjenem roku. Stranka je potrdila 100%
                              skladnost z regulatornimi zahtevami. Barvna
                              odstopanja so bila pod 1 deltaE, kar presega
                              industrijski standard. Projekt je odprl vrata
                              za dolgoročno sodelovanje.
                            </p>
                            <div className="td-portfolio-details-tab-chart">
                              <img
                                className="w-100"
                                src={portfolioDetailsChart}
                                alt="Portfolio project chart"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* case details */}
                  <div className="col-lg-4 mb-40">
                    <div className="td-portfolio-case-details-wrap">
                      <h3 className="td-portfolio-case-title mb-25">
                        Podrobnosti projekta
                      </h3>
                      <div className="td-portfolio-case-list">
                        <div className="td-portfolio-case-list-item">
                          <div className="row align-items-center">
                            <div className="col-4">
                              <div className="td-portfolio-case-info">
                                <span>Stranka</span>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="td-portfolio-case-location">
                                <span>Farmacevtsko podjetje</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="td-portfolio-case-list-item">
                          <div className="row align-items-center">
                            <div className="col-4">
                              <div className="td-portfolio-case-info">
                                <span>Lokacija</span>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="td-portfolio-case-location">
                                <span>
                                  <Link to="#">Slovenija</Link>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="td-portfolio-case-list-item">
                          <div className="row align-items-center">
                            <div className="col-4">
                              <div className="td-portfolio-case-info">
                                <span>Kategorija</span>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="td-portfolio-case-location">
                                <span>Embalaža, Farmacija</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="td-portfolio-case-list-item">
                          <div className="row align-items-center">
                            <div className="col-4">
                              <div className="td-portfolio-case-info">
                                <span>Datum</span>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="td-portfolio-case-location">
                                <span>Junij 2024</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="td-portfolio-case-list-item">
                          <div className="row align-items-center">
                            <div className="col-4">
                              <div className="td-portfolio-case-info">
                                <span>Deli</span>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="td-portfolio-case-social">
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

              {/* navigation */}
              <div className="td-portfolio-navigation pb-110">
                <div className="row align-items-center">
                  <div className="col-sm-5 mb-30">
                    <div className="td-portfolio-more-left">
                      <Link to="#">
                        <div className="td-portfolio-more-icon">
                          <i className="fa-solid fa-arrow-left-long"></i>
                        </div>
                        <span className="td-portfolio-more-content ml-20">
                          Prejšnja
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-2 mb-30">
                    <div className="td-portfolio-more-menu text-center">
                      <Link to="#">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_360_766)">
                            <path
                              d="M3.59989 0.268433C1.66541 0.268433 0.0917969 1.84215 0.0917969 3.77653C0.0917969 5.7109 1.66476 7.28451 3.59989 7.28451C5.53503 7.28451 7.10799 5.7109 7.10799 3.77653C7.10799 1.84215 5.53427 0.268433 3.59989 0.268433Z"
                              fill="#1a1a1a"
                            />
                            <path
                              d="M14.9534 0.268433C13.019 0.268433 11.4453 1.84215 11.4453 3.77653C11.4453 5.7109 13.019 7.28451 14.9534 7.28451C16.8879 7.28451 18.4618 5.7109 18.4618 3.77653C18.4618 1.84215 16.8885 0.268433 14.9534 0.268433Z"
                              fill="#1a1a1a"
                            />
                            <path
                              d="M26.4925 7.28462C28.4265 7.28462 30.0006 5.71101 30.0006 3.77664C30.0006 1.84226 28.4278 0.268433 26.4925 0.268433C24.5571 0.268433 22.9844 1.84215 22.9844 3.77653C22.9844 5.7109 24.5583 7.28462 26.4925 7.28462Z"
                              fill="#1a1a1a"
                            />
                            <path
                              d="M3.50875 18.5257C5.44312 18.5257 7.01717 16.9524 7.01717 15.0177C7.01717 13.0829 5.44312 11.5093 3.50875 11.5093C1.57437 11.5093 0 13.083 0 15.0177C0 16.9524 1.57437 18.5257 3.50875 18.5257Z"
                              fill="#1a1a1a"
                            />
                            <path
                              d="M14.8636 18.5257C16.7976 18.5257 18.3717 16.9524 18.3717 15.0177C18.3717 13.0829 16.7989 11.5093 14.8636 11.5093C12.9285 11.5093 11.3555 13.0829 11.3555 15.0177C11.3555 16.9524 12.9292 18.5257 14.8636 18.5257Z"
                              fill="#1a1a1a"
                            />
                            <path
                              d="M26.402 18.5257C28.3368 18.5257 29.9101 16.9524 29.9101 15.0177C29.9101 13.0829 28.3368 11.5093 26.402 11.5093C24.4672 11.5093 22.8926 13.0829 22.8926 15.0177C22.8926 16.9524 24.4666 18.5257 26.402 18.5257Z"
                              fill="#1a1a1a"
                            />
                            <path
                              d="M3.58882 22.7155C1.65445 22.7155 0.0800781 24.2887 0.0800781 26.2235C0.0800781 28.1576 1.65445 29.7315 3.58882 29.7315C5.5232 29.7315 7.09681 28.1584 7.09681 26.2235C7.09681 24.2887 5.5232 22.7155 3.58882 22.7155Z"
                              fill="#1a1a1a"
                            />
                            <path
                              d="M14.9443 22.7155C13.0098 22.7155 11.4355 24.2887 11.4355 26.2235C11.4355 28.1576 13.0093 29.7315 14.9443 29.7315C16.8783 29.7315 18.4523 28.1584 18.4523 26.2235C18.4523 24.2887 16.8783 22.7155 14.9443 22.7155Z"
                              fill="#1a1a1a"
                            />
                            <path
                              d="M26.4808 22.7155C24.5467 22.7155 22.9727 24.2887 22.9727 26.2235C22.9727 28.1576 24.5467 29.7315 26.4808 29.7315C28.4156 29.7315 29.9888 28.1584 29.9888 26.2235C29.9888 24.2887 28.4148 22.7155 26.4808 22.7155Z"
                              fill="#1a1a1a"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_360_766">
                              <rect width="30" height="30" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-5 mb-30">
                    <div className="td-portfolio-more-left text-right">
                      <Link to="#">
                        <span className="td-portfolio-more-content mr-20">
                          Naslednja
                        </span>
                        <div className="td-portfolio-more-icon">
                          <i className="fa-regular fa-arrow-right-long"></i>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
