import React from "react";

export const ServiceSidebar = () => {
  return (
    <>
      <div className="td-service-details-right ml-50">
        {/* our services */}
        <div className="td-service-widget-item mb-30">
          <h3 className="td-service-widget-title">Our Services</h3>
          <ul>
            <li>
              <a href="#">
                Investments
                <i className="fa-regular fa-arrow-right-long"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Online Business
                <i className="fa-regular fa-arrow-right-long"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Tax & Declaration
                <i className="fa-regular fa-arrow-right-long"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Customer Strategy
                <i className="fa-regular fa-arrow-right-long"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Private Equality
                <i className="fa-regular fa-arrow-right-long"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Corporate Solution
                <i className="fa-regular fa-arrow-right-long"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* links */}
        <div className="td-service-widget-pdf mb-30">
          <ul>
            <li>
              <a href="#">
                <i className="fa-sharp fa-solid fa-file-lines"></i>
                Investments
              </a>
              <span>
                <i className="fa-regular fa-arrow-right-long"></i>
              </span>
            </li>
            <li>
              <a href="#">
                <i className="fa-sharp fa-solid fa-file"></i>
                Online Business
              </a>
              <span>
                <i className="fa-regular fa-arrow-right-long"></i>
              </span>
            </li>
          </ul>
        </div>

        {/* contact form */}
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
              <input type="email" id="email" placeholder="Email address" />
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
    </>
  );
};
