import React from "react";
import { Link } from "react-router-dom";
import thumb from "../../assets/img/portfolio/portfolio5/thumb.jpg";
import thumb2 from "../../assets/img/portfolio/portfolio5/thumb2.jpg";
import thumb3 from "../../assets/img/portfolio/portfolio5/thumb3.jpg";
import thumb4 from "../../assets/img/portfolio/portfolio5/thumb4.jpg";
import thumb5 from "../../assets/img/portfolio/portfolio5/thumb5.jpg";
import thumb6 from "../../assets/img/portfolio/portfolio5/thumb6.jpg";

export const PortfolioFour = () => {
  return (
    <div className="td-portfolio-area td-grey-bg pt-140 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="td-portfolio-5-title-wrap mb-75 wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <span className="td-section-title-pre mb-10">Our Portfolio</span>
              <h2 className="td-section-title">
                Explore our diverse range of solutions
              </h2>
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay=".4s"
            data-wow-duration="1s"
          >
            <div className="td-portfolio-5-tab-content pt-50 mb-75">
              <p className="mb-30">
                Our successful endeavors in providing personalized insurance
                solutions to our valued clients, discover how we provided
                comprehensive insurance.
              </p>
              <div
                className="nav td-portfolio-tab-btn-list td-portfolio-5-tab-list"
                id="v-pill-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="td-portfolio-tab-btn nav-link active"
                  id="v-pills-portfolio-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-portfolio"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-portfolio"
                  aria-selected="true"
                >
                  Life Insurance
                </button>
                <button
                  className="td-portfolio-tab-btn nav-link"
                  id="v-pills-portfolio2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-portfolio2"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-portfolio2"
                  aria-selected="false"
                >
                  Business Insurance
                </button>
                <button
                  className="td-portfolio-tab-btn nav-link"
                  id="v-pills-portfolio3-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-portfolio3"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-portfolio3"
                  aria-selected="false"
                >
                  Family Insurance
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="td-portfolio-5-tab-wrap">
              <div
                className="td-banking-img-wrapper tab-content"
                id="v-pill-tabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="v-pills-portfolio"
                  role="tabpanel"
                  aria-labelledby="v-pills-portfolio-tab"
                >
                  <div className="row">
                    <div
                      className="col-lg-6 mb-30 wow fadeInUp"
                      data-wow-delay=".5s"
                      data-wow-duration="1s"
                    >
                      <div className="td-portfolio-5-item p-relative">
                        <div className="td-portfolio-5-thumb">
                          <img src={thumb} alt="" />
                          <span></span>
                        </div>
                        <div className="td-portfolio-5-content">
                          <span className="td-portfolio-5-title-pre">
                            Insurance, Consultancy
                          </span>
                          <h3 className="td-portfolio-5-title">
                            <Link to="/portfolio-details">
                              Algo Family - Growth Insurance
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 mb-30 wow fadeInUp"
                      data-wow-delay=".6s"
                      data-wow-duration="1s"
                    >
                      <div className="td-portfolio-5-item p-relative">
                        <div className="td-portfolio-5-thumb">
                          <img src={thumb2} alt="" />
                          <span></span>
                        </div>
                        <div className="td-portfolio-5-content">
                          <span className="td-portfolio-5-title-pre">
                            Finances, Analysis
                          </span>
                          <h3 className="td-portfolio-5-title">
                            <Link to="/portfolio-details">
                              Business Performance
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-portfolio2"
                  role="tabpanel"
                  aria-labelledby="v-pills-portfolio2-tab"
                >
                  <div className="row">
                    <div className="col-lg-6 mb-30">
                      <div className="td-portfolio-5-item p-relative">
                        <div className="td-portfolio-5-thumb">
                          <img src={thumb3} alt="" />
                          <span></span>
                        </div>
                        <div className="td-portfolio-5-content">
                          <span className="td-portfolio-5-title-pre">
                            Economy, Investment
                          </span>
                          <h3 className="td-portfolio-5-title">
                            <Link to="/portfolio-details">
                              Vision & Direction
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-30">
                      <div className="td-portfolio-5-item p-relative">
                        <div className="td-portfolio-5-thumb">
                          <img src={thumb4} alt="" />
                          <span></span>
                        </div>
                        <div className="td-portfolio-5-content">
                          <span className="td-portfolio-5-title-pre">
                            Insurance, Consultancy
                          </span>
                          <h3 className="td-portfolio-5-title">
                            <Link to="/portfolio-details">
                              Business Performance
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-portfolio3"
                  role="tabpanel"
                  aria-labelledby="v-pills-portfolio3-tab"
                >
                  <div className="row">
                    <div className="col-lg-6 mb-30">
                      <div className="td-portfolio-5-item p-relative">
                        <div className="td-portfolio-5-thumb">
                          <img src={thumb5} alt="" />
                          <span></span>
                        </div>
                        <div className="td-portfolio-5-content">
                          <span className="td-portfolio-5-title-pre">
                            Insurance, Consultancy
                          </span>
                          <h3 className="td-portfolio-5-title">
                            <Link to="/portfolio-details">
                              Algo Family - Growth Insurance
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-30">
                      <div className="td-portfolio-5-item p-relative">
                        <div className="td-portfolio-5-thumb">
                          <img src={thumb6} alt="" />
                          <span></span>
                        </div>
                        <div className="td-portfolio-5-content">
                          <span className="td-portfolio-5-title-pre">
                            Insurance, Consultancy
                          </span>
                          <h3 className="td-portfolio-5-title">
                            <Link to="/portfolio-details">
                              Business Performance
                            </Link>
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
      </div>
    </div>
  );
};
