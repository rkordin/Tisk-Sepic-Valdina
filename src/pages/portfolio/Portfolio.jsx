import React from "react";
import { Layout } from "../../layouts/Layout";
import { Link } from "react-router-dom";
import img12 from "../../assets/img/portfolio/12.jpg";
import img13 from "../../assets/img/portfolio/13.jpg";
import img14 from "../../assets/img/portfolio/14.jpg";
import img05 from "../../assets/img/portfolio/05.jpg";
import img06 from "../../assets/img/portfolio/06.jpg";
import img07 from "../../assets/img/portfolio/07.jpg";
import img08 from "../../assets/img/portfolio/08.jpg";
import img09 from "../../assets/img/portfolio/09.jpg";
import img10 from "../../assets/img/portfolio/10.jpg";
import img11 from "../../assets/img/portfolio/11.jpg";

export const Portfolio = () => {
  const tabButtons = [
    { id: "home", label: "Tisk", isActive: true },
    { id: "profile", label: "Embalaža", isActive: false },
    { id: "messages", label: "Nalepke", isActive: false },
    { id: "settings", label: "Reklama", isActive: false },
    { id: "settings2", label: "3D & CNC", isActive: false },
  ];

  return (
    <Layout breadcrumbTitle={"Reference"} breadcrumbSubtitle={"Naši izdelki"}>
      <div className="td-portfolio-area td-portfolio-space fix pt-140 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 pb-45">
              <div
                className="nav td-portfolio-tab-btn-list d-flex justify-content-center"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {tabButtons.map((button) => (
                  <button
                    key={button.id}
                    className={`td-portfolio-tab-btn nav-link mb-10 ${
                      button.isActive ? "active" : ""
                    }`}
                    id={`v-pills-${button.id}-tab`}
                    data-bs-toggle="pill"
                    data-bs-target={`#v-pills-${button.id}`}
                    type="button"
                    role="tab"
                    aria-controls={`v-pills-${button.id}`}
                    aria-selected={button.isActive}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
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
                  <div className="row">
                    <div className="col-lg-6 col-md-6 mb-70">
                      <div className="td-portfolio-wrap mr-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img12} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Digitalni tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Offset</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">
                            Katalogi in brošure
                          </Link>
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-70">
                      <div className="td-portfolio-wrap ml-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img13} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Flekso</Link>
                          </span>
                          <span>
                            <Link to="#">Embalaža</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">
                            Farmacevtska embalaža
                          </Link>
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-70">
                      <div className="td-portfolio-wrap mr-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img14} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Grafika</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">
                            Promocijski materiali
                          </Link>
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-70">
                      <div className="td-portfolio-wrap ml-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img05} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Grafika</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">Samolepilne nalepke</Link>
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-70">
                      <div className="td-portfolio-wrap mr-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img06} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Grafika</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">
                            Polepitev vozil
                          </Link>
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-70">
                      <div className="td-portfolio-wrap ml-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img07} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Grafika</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">
                            Reklamna stojala
                          </Link>
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-70">
                      <div className="td-portfolio-wrap mr-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img08} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Grafika</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">3D napisi in črke</Link>
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-70">
                      <div className="td-portfolio-wrap ml-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img09} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Grafika</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">Zastave in transparenti</Link>
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-70">
                      <div className="td-portfolio-wrap mr-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img10} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Grafika</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">
                            Kartonska embalaža
                          </Link>
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-70">
                      <div className="td-portfolio-wrap ml-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img11} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Grafika</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">
                            Darilne vrečke
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div className="row">
                    <div className="col-lg-6 mb-70">
                      <div className="td-portfolio-wrap mr-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img08} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Grafika</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">3D napisi in črke</Link>
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-70">
                      <div className="td-portfolio-wrap ml-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img09} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Grafika</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">Zastave in transparenti</Link>
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-70">
                      <div className="td-portfolio-wrap mr-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img10} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Grafika</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">
                            Kartonska embalaža
                          </Link>
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-70">
                      <div className="td-portfolio-wrap ml-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img11} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Grafika</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">
                            Darilne vrečke
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <div className="row">
                    <div className="col-lg-6 mb-70">
                      <div className="td-portfolio-wrap mr-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img14} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Grafika</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">
                            Promocijski materiali
                          </Link>
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-70">
                      <div className="td-portfolio-wrap ml-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img05} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Grafika</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">Samolepilne nalepke</Link>
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-70">
                      <div className="td-portfolio-wrap mr-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img06} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Grafika</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">
                            Polepitev vozil
                          </Link>
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-70">
                      <div className="td-portfolio-wrap ml-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img07} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Grafika</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">
                            Reklamna stojala
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  <div className="row">
                    <div className="col-lg-6 mb-70">
                      <div className="td-portfolio-wrap mr-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img12} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Digitalni tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Offset</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">
                            Katalogi in brošure
                          </Link>
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-70">
                      <div className="td-portfolio-wrap ml-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img13} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Flekso</Link>
                          </span>
                          <span>
                            <Link to="#">Embalaža</Link>
                          </span>
                          <span>
                            <Link to="#">Industrija</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">
                            Farmacevtska embalaža
                          </Link>
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-70">
                      <div className="td-portfolio-wrap mr-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img14} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Grafika</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">
                            Promocijski materiali
                          </Link>
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-70">
                      <div className="td-portfolio-wrap ml-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img05} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Grafika</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">Samolepilne nalepke</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings2"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings2-tab"
                >
                  <div className="row">
                    <div className="col-lg-6 mb-70">
                      <div className="td-portfolio-wrap mr-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img06} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Grafika</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">
                            Polepitev vozil
                          </Link>
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-70">
                      <div className="td-portfolio-wrap ml-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img07} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Grafika</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">
                            Reklamna stojala
                          </Link>
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-70">
                      <div className="td-portfolio-wrap mr-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img08} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Grafika</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">3D napisi in črke</Link>
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-70">
                      <div className="td-portfolio-wrap ml-30">
                        <div className="td-poerfolio-thumb mb-30">
                          <img className="w-100" src={img09} alt="Portfolio project" loading="lazy" />
                        </div>
                        <div className="td-portfolio-cetagory mb-20">
                          <span>
                            <Link to="#">Tisk</Link>
                          </span>
                          <span>
                            <Link to="#">Grafika</Link>
                          </span>
                        </div>
                        <h3 className="td-portfolio-title">
                          <Link to="/portfolio-details">Zastave in transparenti</Link>
                        </h3>
                      </div>
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
