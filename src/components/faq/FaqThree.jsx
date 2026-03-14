import React from "react";
import backgroundImage from "../../assets/img/faq/faq5/background.jpg";
import faqImage from "../../assets/img/faq/faq5/bg.jpg";

export const FaqThree = () => {
  return (
    <div
      className="td-faq-area p-relative bg-position pt-140"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-7">
            <div
              className="td-faq-5-title-wrap mb-75 wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <span className="td-section-title-pre mb-10">Our FAQ</span>
              <h2 className="td-section-title">
                Got questions? We have answers
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div
              className="td-faq-5-thumb wow fadeInRight"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <img src={faqImage} alt="" />
            </div>
          </div>
          <div
            className="col-lg-7 wow fadeInLeft"
            data-wow-delay=".3s"
            data-wow-duration="1s"
          >
            <div className="td-faq-wrapper td-faq-5-wrapper mb-140">
              <div
                className="accordion td-faq-4-accordion td-faq-5-accordion"
                id="return_faqaccordion"
              >
                <div className="accordion-item td-faq-active td-faq-4-item td-faq-5-item">
                  <h2 className="accordion-header" id="digital_one">
                    <button
                      className="accordion-button td-faq-btn-2 td-faq-4-btn td-faq-5-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#digital__collapse_one"
                      aria-expanded="true"
                      aria-controls="digital__collapse_one"
                    >
                      What types of insurance do you offer?
                      <span className="accordion-btn">
                        <b className="td-btn-group p-relative">
                          <i className="fa-solid fa-arrow-up-long fa-fw td-up"></i>
                          <i className="fa-solid fa-arrow-down-long fa-fw td-down"></i>
                        </b>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="digital__collapse_one"
                    className="accordion-collapse collapse show"
                    aria-labelledby="digital_one"
                    data-bs-parent="#return_faqaccordion"
                  >
                    <div className="accordion-body td-faq-para">
                      <p>
                        Several factors influence your insurance premium, such
                        as your age, driving record, location, coverage type,
                        and the value of the insured property. Discover
                        thousands of easy to customize themes, templates & CMS
                        products, made by world-class developers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item td-faq-4-item td-faq-5-item">
                  <h2 className="accordion-header" id="digital_two">
                    <button
                      className="accordion-button collapsed td-faq-btn-2 td-faq-4-btn td-faq-5-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#digital__collapse_two"
                      aria-expanded="false"
                      aria-controls="digital__collapse_two"
                    >
                      How can I get a quote for insurance?
                      <span className="accordion-btn">
                        <b className="td-btn-group p-relative">
                          <i className="fa-solid fa-arrow-up-long fa-fw td-up"></i>
                          <i className="fa-solid fa-arrow-down-long fa-fw td-down"></i>
                        </b>
                      </span>
                    </button>
                  </h2>
                  <div
                    id="digital__collapse_two"
                    className="accordion-collapse collapse"
                    aria-labelledby="digital_two"
                    data-bs-parent="#return_faqaccordion"
                  >
                    <div className="accordion-body td-faq-para">
                      <p>
                        Several factors influence your insurance premium, such
                        as your age, driving record, location, coverage type,
                        and the value of the insured property. Discover
                        thousands of easy to customize themes, templates & CMS
                        products, made by world-class developers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item td-faq-4-item td-faq-5-item">
                  <h2 className="accordion-header" id="digital_three">
                    <button
                      className="accordion-button collapsed td-faq-btn-2 td-faq-4-btn td-faq-5-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#digital__collapse_three"
                      aria-expanded="false"
                      aria-controls="digital__collapse_three"
                    >
                      What factors affect my insurance premium?
                      <span className="accordion-btn">
                        <b className="td-btn-group p-relative">
                          <i className="fa-solid fa-arrow-up-long fa-fw td-up"></i>
                          <i className="fa-solid fa-arrow-down-long fa-fw td-down"></i>
                        </b>
                      </span>
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
                        Several factors influence your insurance premium, such
                        as your age, driving record, location, coverage type,
                        and the value of the insured property. Discover
                        thousands of easy to customize themes, templates & CMS
                        products, made by world-class developers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item td-faq-4-item td-faq-5-item">
                  <h2 className="accordion-header" id="digital_four">
                    <button
                      className="accordion-button collapsed td-faq-btn-2 td-faq-4-btn td-faq-5-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#digital__collapse_four"
                      aria-expanded="false"
                      aria-controls="digital__collapse_four"
                    >
                      How do I file a claim?
                      <span className="accordion-btn">
                        <b className="td-btn-group p-relative">
                          <i className="fa-solid fa-arrow-up-long fa-fw td-up"></i>
                          <i className="fa-solid fa-arrow-down-long fa-fw td-down"></i>
                        </b>
                      </span>
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
                        Several factors influence your insurance premium, such
                        as your age, driving record, location, coverage type,
                        and the value of the insured property. Discover
                        thousands of easy to customize themes, templates & CMS
                        products, made by world-class developers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item td-faq-4-item td-faq-5-item">
                  <h2 className="accordion-header" id="digital_five">
                    <button
                      className="accordion-button collapsed td-faq-btn-2 td-faq-4-btn td-faq-5-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#digital__collapse_five"
                      aria-expanded="false"
                      aria-controls="digital__collapse_five"
                    >
                      Can I customize my insurance policy?
                      <span className="accordion-btn">
                        <b className="td-btn-group p-relative">
                          <i className="fa-solid fa-arrow-up-long fa-fw td-up"></i>
                          <i className="fa-solid fa-arrow-down-long fa-fw td-down"></i>
                        </b>
                      </span>
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
                        Several factors influence your insurance premium, such
                        as your age, driving record, location, coverage type,
                        and the value of the insured property. Discover
                        thousands of easy to customize themes, templates & CMS
                        products, made by world-class developers.
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
