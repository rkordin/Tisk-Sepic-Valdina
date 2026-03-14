import React from "react";
import { Layout } from "../../layouts/Layout";
import { Link } from "react-router-dom";
import thumbImg from "../../assets/img/faq/details/thumb.jpg";
import thumb2Img from "../../assets/img/faq/details/thumb2.jpg";
import thumb3Img from "../../assets/img/faq/details/thumb3.jpg";
import thumb4Img from "../../assets/img/faq/details/thumb4.jpg";
import thumb5Img from "../../assets/img/faq/details/thumb5.jpg";
import thumb6Img from "../../assets/img/faq/details/thumb6.jpg";

export const Faq = () => {
  const faqItems = [
    {
      question: "How do consultants understand client challenges?",
      images: [thumbImg, thumb2Img],
      answer:
        "Business consultants employ a variety of problem-solving methods tailored to client needs and the nature of the issue. These include root cause analysis to address underlying problems, SWOT analysis for identifying strengths, weaknesses, opportunities, and threats, benchmarking against industry standards, data analysis for uncovering patterns and trends, process optimization to enhance efficiency, change management strategies to navigate organizational transitions, innovation workshops.",
    },
    {
      question: "What methods do they use for problem-solving?",
      images: [thumb3Img, thumb4Img],
      answer:
        "Business consultants employ a variety of problem-solving methods tailored to client needs and the nature of the issue. These include root cause analysis to address underlying problems, SWOT analysis for identifying strengths, weaknesses, opportunities, and threats, benchmarking against industry standards, data analysis for uncovering patterns and trends, process optimization to enhance efficiency, change management strategies to navigate organizational transitions, innovation workshops.",
    },
    {
      question: "How do they measure project success?",
      images: [thumb5Img, thumb6Img],
      answer:
        "Business consultants employ a variety of problem-solving methods tailored to client needs and the nature of the issue. These include root cause analysis to address underlying problems, SWOT analysis for identifying strengths, weaknesses, opportunities, and threats, benchmarking against industry standards, data analysis for uncovering patterns and trends, process optimization to enhance efficiency, change management strategies to navigate organizational transitions, innovation workshops.",
    },
    {
      question: "What's the role of data analysis in their work?",
      images: [thumbImg, thumb2Img],
      answer:
        "Business consultants employ a variety of problem-solving methods tailored to client needs and the nature of the issue. These include root cause analysis to address underlying problems, SWOT analysis for identifying strengths, weaknesses, opportunities, and threats, benchmarking against industry standards, data analysis for uncovering patterns and trends, process optimization to enhance efficiency, change management strategies to navigate organizational transitions, innovation workshops.",
    },
    {
      question: "How do consultants adapt for different business sizes?",
      images: [thumb3Img, thumb4Img],
      answer:
        "Business consultants employ a variety of problem-solving methods tailored to client needs and the nature of the issue. These include root cause analysis to address underlying problems, SWOT analysis for identifying strengths, weaknesses, opportunities, and threats, benchmarking against industry standards, data analysis for uncovering patterns and trends, process optimization to enhance efficiency, change management strategies to navigate organizational transitions, innovation workshops.",
    },
    {
      question: "What challenges do businesses face during change?",
      images: [thumb5Img, thumb6Img],
      answer:
        "Business consultants employ a variety of problem-solving methods tailored to client needs and the nature of the issue. These include root cause analysis to address underlying problems, SWOT analysis for identifying strengths, weaknesses, opportunities, and threats, benchmarking against industry standards, data analysis for uncovering patterns and trends, process optimization to enhance efficiency, change management strategies to navigate organizational transitions, innovation workshops.",
    },
    {
      question: "How do consultants stay updated on trends?",
      images: [thumbImg, thumb2Img],
      answer:
        "Business consultants employ a variety of problem-solving methods tailored to client needs and the nature of the issue. These include root cause analysis to address underlying problems, SWOT analysis for identifying strengths, weaknesses, opportunities, and threats, benchmarking against industry standards, data analysis for uncovering patterns and trends, process optimization to enhance efficiency, change management strategies to navigate organizational transitions, innovation workshops.",
    },
    {
      question: "What ethical rules do they follow?",
      images: [thumb3Img, thumb4Img],
      answer:
        "Business consultants employ a variety of problem-solving methods tailored to client needs and the nature of the issue. These include root cause analysis to address underlying problems, SWOT analysis for identifying strengths, weaknesses, opportunities, and threats, benchmarking against industry standards, data analysis for uncovering patterns and trends, process optimization to enhance efficiency, change management strategies to navigate organizational transitions, innovation workshops.",
    },
    {
      question: "What are the risks of using consultancy services?",
      images: [thumb5Img, thumb6Img],
      answer:
        "Business consultants employ a variety of problem-solving methods tailored to client needs and the nature of the issue. These include root cause analysis to address underlying problems, SWOT analysis for identifying strengths, weaknesses, opportunities, and threats, benchmarking against industry standards, data analysis for uncovering patterns and trends, process optimization to enhance efficiency, change management strategies to navigate organizational transitions, innovation workshops.",
    },
    {
      question: "Can you share a recent successful project?",
      images: [thumbImg, thumb2Img],
      answer:
        "Business consultants employ a variety of problem-solving methods tailored to client needs and the nature of the issue. These include root cause analysis to address underlying problems, SWOT analysis for identifying strengths, weaknesses, opportunities, and threats, benchmarking against industry standards, data analysis for uncovering patterns and trends, process optimization to enhance efficiency, change management strategies to navigate organizational transitions, innovation workshops.",
    },
  ];

  const services = [
    { name: "Investments", link: "#" },
    { name: "Online Business", link: "#" },
    { name: "Tax & Declaration", link: "#" },
    { name: "Customer Strategy", link: "#" },
    { name: "Private Equality", link: "#" },
    { name: "Corporate Solution", link: "#" },
  ];

  return (
    <Layout breadcrumbTitle={"FAQ Page"} breadcrumbSubtitle={"FAQ"}>
      <div className="td-faq-area pt-140 pb-80">
        <div className="container">
          <div className="row">
            {/* accordion */}
            <div className="col-lg-8 mb-60">
              <div
                className="accordion td-service-details-accordion"
                id="faqaccordion_image"
              >
                {faqItems.map((item, index) => (
                  <div
                    className="accordion-item td-service-details-accordion-item"
                    key={index}
                  >
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className={`accordion-button ${
                          index !== 0 ? "collapsed" : ""
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={`collapse${index}`}
                      >
                        {item.question}
                        <span className="accordion-btn"></span>
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse collapse ${
                        index === 0 ? "show" : ""
                      }`}
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#faqaccordion_image"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          {item.images.map((img, imgIndex) => (
                            <div
                              className={`col-lg-6 col-md-6 col-sm-6`}
                              key={imgIndex}
                            >
                              <div className="td-faq-thumb mb-30">
                                <img
                                  className="w-100"
                                  src={img}
                                  alt={`faq-${imgIndex + 1}`}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4 mb-20">
              <div className="td-service-details-right ml-50">
                {/* our services */}
                <div className="td-service-widget-item mb-30">
                  <h3 className="td-service-widget-title">Our Services</h3>
                  <ul>
                    {services.map((service, index) => (
                      <li key={index}>
                        <Link to={service.link}>
                          {service.name}
                          <i className="fa-regular fa-arrow-right-long"></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* links */}
                <div className="td-service-widget-pdf mb-30">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fa-sharp fa-solid fa-file-lines"></i>
                        Investments
                      </Link>
                      <span>
                        <i className="fa-regular fa-arrow-right-long"></i>
                      </span>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-sharp fa-solid fa-file"></i>
                        Online Business
                      </Link>
                      <span>
                        <i className="fa-regular fa-arrow-right-long"></i>
                      </span>
                    </li>
                  </ul>
                </div>

                {/* form */}
                <div className="td-service-widget-item mb-30">
                  <h3 className="td-service-widget-title td-service-widget-title-2">
                    How can we help you?
                  </h3>
                  <form action="#">
                    <div className="td-service-widget-input mb-15">
                      <input type="text" id="name" placeholder="Your name" />
                      <label htmlFor="name">
                        <i className="fa-regular fa-user"></i>
                      </label>
                    </div>
                    <div className="td-service-widget-input mb-15">
                      <input
                        type="email"
                        id="email"
                        placeholder="Email address"
                      />
                      <label htmlFor="email">
                        <i className="fa-regular fa-envelope-open"></i>
                      </label>
                    </div>
                    <div className="td-service-widget-textarea mb-15">
                      <textarea id="textarea" placeholder="Message"></textarea>
                      <label htmlFor="textarea">
                        <i className="fa-sharp fa-light fa-pen"></i>
                      </label>
                    </div>
                    <div className="td-service-widget-form-btn">
                      <button type="button" className="td-btn td-left-right">
                        Get In Touch
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
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
