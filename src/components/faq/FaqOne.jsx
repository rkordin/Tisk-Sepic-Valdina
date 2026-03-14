import React, { useEffect } from "react";
import $ from "jquery";
import patternImg from "../../assets/img/faq/pattern.png";
import shapeImg from "../../assets/img/about/about3/shape.png";
import bgImg from "../../assets/img/faq/bg.jpg";
import logoImg from "../../assets/img/testimonial/logo.png";
import quoteImg from "../../assets/img/testimonial/qoute.png";

export const FaqOne = () => {
  useEffect(() => {
    $(".td-faq-wrapper .accordion-item").on("click", function () {
      $(this).addClass("td-faq-active").siblings().removeClass("td-faq-active");
    });

    return () => {
      $(".td-faq-wrapper .accordion-item").off("click");
    };
  }, []);

  return (
    <div className="td-faq-area pt-140 pb-100 p-relative fix">
      <img className="td-faq-bg-pattern tpupdown" src={patternImg} alt="" />

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="td-faq-title-wrap text-center mb-80 wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <span className="td-section-title-pre mb-5">Faq</span>
              <h2 className="td-section-title">Get your all answer</h2>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div
            className="col-xl-7 col-lg-6 mb-40 wow fadeInRight"
            data-wow-delay=".3s"
            data-wow-duration="1s"
          >
            <div className="td-faq-thumb p-relative mr-70">
              <img
                className="td-faq-shape d-none d-lg-block"
                src={shapeImg}
                alt="shape"
              />
              <img className="w-100" src={bgImg} alt="thumb" />
              <div className="td-faq-badge">
                <div className="td-testimonial-qoute-thumb p-relative">
                  <img
                    className="td-testimonial-qoute"
                    src={logoImg}
                    alt="badge"
                  />
                  <img
                    className="td-testimonial-qoute-2"
                    src={quoteImg}
                    alt="badge"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* faq */}
          <div
            className="col-xl-5 col-lg-6 mb-40 wow fadeInLeft"
            data-wow-delay=".3s"
            data-wow-duration="1s"
          >
            <div className="td-faq-wrapper">
              <div className="accordion" id="return_faqaccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="digital_one">
                    <button
                      className="accordion-button td-faq-btn-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#digital__collapse_one"
                      aria-expanded="true"
                      aria-controls="digital__collapse_one"
                    >
                      What is the difference between a stock and a bond?
                      <span className="accordion-btn"></span>
                    </button>
                  </h2>
                  <div
                    id="digital__collapse_one"
                    className="accordion-collapse collapse"
                    aria-labelledby="digital_one"
                    data-bs-parent="#return_faqaccordion"
                  >
                    <div className="accordion-body td-faq-para">
                      <p>
                        Our focus is on delivering superior value to our clients
                        for company modification. Providing sustainable
                        strategies that will upgrade their business.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item td-faq-active">
                  <h2 className="accordion-header" id="digital_two">
                    <button
                      className="accordion-button collapsed td-faq-btn-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#digital__collapse_two"
                      aria-expanded="false"
                      aria-controls="digital__collapse_two"
                    >
                      What is ROI and how is it calculated?
                      <span className="accordion-btn"></span>
                    </button>
                  </h2>
                  <div
                    id="digital__collapse_two"
                    className="accordion-collapse collapse show"
                    aria-labelledby="digital_two"
                    data-bs-parent="#return_faqaccordion"
                  >
                    <div className="accordion-body td-faq-para">
                      <p>
                        Our focus is on delivering superior value to our clients
                        for company modification. Providing sustainable
                        strategies that will upgrade their business.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="digital_three">
                    <button
                      className="accordion-button collapsed td-faq-btn-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#digital__collapse_three"
                      aria-expanded="false"
                      aria-controls="digital__collapse_three"
                    >
                      What are the key components of a business plan?
                      <span className="accordion-btn"></span>
                    </button>
                  </h2>
                  <div
                    id="digital__collapse_three"
                    className="accordion-collapse collapse"
                    aria-labelledby="digital_three"
                    data-bs-parent="#return_faqaccordion"
                  >
                    <div className="accordion-body td-faq-para">
                      <p>
                        Our focus is on delivering superior value to our clients
                        for company modification. Providing sustainable
                        strategies that will upgrade their business.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="digital_four">
                    <button
                      className="accordion-button collapsed td-faq-btn-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#digital__collapse_four"
                      aria-expanded="false"
                      aria-controls="digital__collapse_four"
                    >
                      What is diversification in investment portfolios?
                      <span className="accordion-btn"></span>
                    </button>
                  </h2>
                  <div
                    id="digital__collapse_four"
                    className="accordion-collapse collapse"
                    aria-labelledby="digital_four"
                    data-bs-parent="#return_faqaccordion"
                  >
                    <div className="accordion-body td-faq-para">
                      <p>
                        Our focus is on delivering superior value to our clients
                        for company modification. Providing sustainable
                        strategies that will upgrade their business.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="digital_five">
                    <button
                      className="accordion-button collapsed td-faq-btn-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#digital__collapse_five"
                      aria-expanded="false"
                      aria-controls="digital__collapse_five"
                    >
                      What is liquidity in finance?
                      <span className="accordion-btn"></span>
                    </button>
                  </h2>
                  <div
                    id="digital__collapse_five"
                    className="accordion-collapse collapse"
                    aria-labelledby="digital_five"
                    data-bs-parent="#return_faqaccordion"
                  >
                    <div className="accordion-body td-faq-para">
                      <p>
                        Our focus is on delivering superior value to our clients
                        for company modification. Providing sustainable
                        strategies that will upgrade their business.
                      </p>
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
