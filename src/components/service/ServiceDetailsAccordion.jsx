import React from "react";

export const ServiceDetailsAccordion = () => {
  return (
    <div className="col-xl-9 col-lg-8 col-md-9">
      <div
        className="accordion td-service-details-accordion"
        id="faqaccordion_image"
      >
        <div className="accordion-item td-service-details-accordion-item">
          <h2 className="accordion-header" id="cancel">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsecancel"
              aria-expanded="true"
              aria-controls="collapsecancel"
            >
              What challenges do businesses face during change?
              <span className="accordion-btn"></span>
            </button>
          </h2>
          <div
            id="collapsecancel"
            className="accordion-collapse collapse show"
            aria-labelledby="cancel"
            data-bs-parent="#faqaccordion_image"
          >
            <div className="accordion-body">
              <p>
                Consultants employ a variety of problem-solving methods tailored
                to client needs and the nature of the issue. These include root
                cause analysis to address under -lying problems, SWOT analysis
                for identifying strengths, weaknesses, opportunities, and
                threats, benchmarking.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item td-service-details-accordion-item">
          <h2 className="accordion-header" id="happen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsehappen"
              aria-expanded="false"
              aria-controls="collapsehappen"
            >
              How do consultants stay updated on trends?
              <span className="accordion-btn"></span>
            </button>
          </h2>
          <div
            id="collapsehappen"
            className="accordion-collapse collapse"
            aria-labelledby="happen"
            data-bs-parent="#faqaccordion_image"
          >
            <div className="accordion-body">
              <p>
                Consultants employ a variety of problem-solving methods tailored
                to client needs and the nature of the issue. These include root
                cause analysis to address under -lying problems, SWOT analysis
                for identifying strengths, weaknesses, opportunities, and
                threats, benchmarking.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item td-service-details-accordion-item">
          <h2 className="accordion-header" id="have">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsehave"
              aria-expanded="false"
              aria-controls="collapsehave"
            >
              What ethical rules do they follow?
              <span className="accordion-btn"></span>
            </button>
          </h2>
          <div
            id="collapsehave"
            className="accordion-collapse collapse"
            aria-labelledby="have"
            data-bs-parent="#faqaccordion_image"
          >
            <div className="accordion-body">
              <p>
                Consultants employ a variety of problem-solving methods tailored
                to client needs and the nature of the issue. These include root
                cause analysis to address under -lying problems, SWOT analysis
                for identifying strengths, weaknesses, opportunities, and
                threats, benchmarking.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item td-service-details-accordion-item">
          <h2 className="accordion-header" id="four">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse4"
              aria-expanded="false"
              aria-controls="collapse4"
            >
              What are the risks of using consultancy services?
              <span className="accordion-btn"></span>
            </button>
          </h2>
          <div
            id="collapse4"
            className="accordion-collapse collapse"
            aria-labelledby="four"
            data-bs-parent="#faqaccordion_image"
          >
            <div className="accordion-body">
              <p>
                Consultants employ a variety of problem-solving methods tailored
                to client needs and the nature of the issue. These include root
                cause analysis to address under -lying problems, SWOT analysis
                for identifying strengths, weaknesses, opportunities, and
                threats, benchmarking.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item td-service-details-accordion-item">
          <h2 className="accordion-header" id="five">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsefive"
              aria-expanded="false"
              aria-controls="collapsefive"
            >
              Can you share a recent successful project?
              <span className="accordion-btn"></span>
            </button>
          </h2>
          <div
            id="collapsefive"
            className="accordion-collapse collapse"
            aria-labelledby="five"
            data-bs-parent="#faqaccordion_image"
          >
            <div className="accordion-body">
              <p>
                Consultants employ a variety of problem-solving methods tailored
                to client needs and the nature of the issue. These include root
                cause analysis to address under -lying problems, SWOT analysis
                for identifying strengths, weaknesses, opportunities, and
                threats, benchmarking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
