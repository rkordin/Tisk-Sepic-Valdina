import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/testimonial/logo.png";
import aboutA from "../../assets/img/about/about4/a.png";
import aboutBg2 from "../../assets/img/about/about4/bg2.jpg";
import aboutBg from "../../assets/img/about/about4/bg.jpg";
import aboutPattern from "../../assets/img/about/about4/pattern.png";

export const AboutFour = () => {
  return (
    <div className="td-about-area pt-140 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="td-about-4-thumb-wrap p-relative wow fadeInLeft"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <div className="td-about-4-thumb-rotate">
                <div className="td-testimonial-qoute-thumb p-relative">
                  <img
                    className="td-testimonial-qoute"
                    src={logo}
                    alt="badge"
                  />
                  <img
                    className="td-testimonial-qoute-2"
                    src={aboutA}
                    alt="badge"
                  />
                </div>
              </div>
              <div className="td-about-4-thumb-2">
                <img src={aboutBg2} alt="thumb" />
              </div>
              <div className="td-about-4-thumb">
                <img className="w-100" src={aboutBg} alt="thumb" />
              </div>
              <div className="td-about-4-thumb-shape">
                <img src={aboutPattern} alt="shape" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="td-about-content-wrap mt-35 td-about-4-content-wrap p-relative wow fadeInRight"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <span className="td-section-title-pre mb-10">
                Started From 1972
              </span>
              <h2 className="td-section-title mb-30">
                Our business is taking care of your business
              </h2>
              <p className="td-about-para pr-10 pb-45">
                We are constantly rethinking the future by creating the next
                generation of products, brands and services from a hybrid
                perspective. The unthinkable today becomes inevitable.
              </p>
              <div className="td-about-4-info">
                <div className="row">
                  <div className="col-lg-7 col-md-5 col-sm-6">
                    <div className="td-about-4-contact-info-wrap">
                      <span>
                        <svg
                          width="53"
                          height="52"
                          viewBox="0 0 53 52"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_335_3726)">
                            <path
                              d="M47.0215 12.1887C47.0215 12.7497 46.5668 13.2043 46.0059 13.2043C45.4449 13.2043 44.9902 12.7497 44.9902 12.1887C44.9902 11.6277 45.4449 11.1731 46.0059 11.1731C46.5668 11.1731 47.0215 11.6277 47.0215 12.1887Z"
                              fill="#9CA8AF"
                            />
                            <path
                              d="M40.9262 12.1887C40.9262 12.7497 40.4715 13.2043 39.9106 13.2043C39.3496 13.2043 38.8945 12.7497 38.8945 12.1887C38.8945 11.6277 39.3496 11.1731 39.9106 11.1731C40.4715 11.1731 40.9262 11.6277 40.9262 12.1887Z"
                              fill="#9CA8AF"
                            />
                            <path
                              d="M34.8324 12.1887C34.8324 12.7497 34.3774 13.2043 33.8164 13.2043C33.2554 13.2043 32.8008 12.7497 32.8008 12.1887C32.8008 11.6277 33.2554 11.1731 33.8164 11.1731C34.3774 11.1731 34.8324 11.6277 34.8324 12.1887Z"
                              fill="#9CA8AF"
                            />
                            <path
                              d="M39.9114 0C33.1904 0 27.7227 5.46772 27.7227 12.1887C27.7227 14.6254 28.4408 16.9629 29.8051 18.9815L27.7747 25.0717C27.645 25.4617 27.7628 25.8909 28.073 26.1603C28.3841 26.4305 28.8264 26.4844 29.1926 26.3015L35.0685 23.3634C36.6118 24.0366 38.2384 24.3774 39.9114 24.3774C46.632 24.3774 52.1001 18.9093 52.1001 12.1887C52.1001 5.46772 46.632 0 39.9114 0ZM39.9114 22.3458C38.3804 22.3458 36.8935 22.0018 35.493 21.323C35.2094 21.1857 34.8777 21.1877 34.5956 21.3285L30.4776 23.3876L31.8947 19.1366C31.9994 18.8224 31.9447 18.4772 31.7479 18.211C30.4435 16.4484 29.754 14.3659 29.754 12.1887C29.754 6.58808 34.3104 2.03165 39.9114 2.03165C45.512 2.03165 50.0685 6.58808 50.0685 12.1887C50.0685 17.7893 45.512 22.3458 39.9114 22.3458Z"
                              fill="#819099"
                            />
                            <path
                              d="M20.207 32.7059C20.207 33.2669 19.7524 33.722 19.1914 33.722C18.6304 33.722 18.1758 33.2669 18.1758 32.7059C18.1758 32.145 18.6304 31.6903 19.1914 31.6903C19.7524 31.6903 20.207 32.145 20.207 32.7059Z"
                              fill="#9CA8AF"
                            />
                            <path
                              d="M35.3354 32.0549C34.9391 31.6582 34.2956 31.6586 33.8989 32.0549L29.0302 36.9228C28.3391 37.6143 27.2723 37.7551 26.4939 37.258C25.3756 36.5435 24.2826 35.7627 23.2459 34.9371C22.8071 34.588 22.168 34.6606 21.8185 35.0994C21.4694 35.5386 21.542 36.1773 21.9808 36.5268C23.0726 37.3957 24.2227 38.2177 25.4006 38.9699C26.9768 39.9764 29.108 39.7193 30.4672 38.3589L34.617 34.2095L44.1555 43.7469L40.3973 47.5039C37.9717 49.9303 34.3234 50.648 31.319 49.2904C15.3431 42.0707 7.03003 29.8304 2.86954 20.8334C1.44092 17.7441 2.12686 14.0228 4.57666 11.5734L8.27854 7.87071L17.8171 17.4085L13.6669 21.5582C12.3065 22.9186 12.0502 25.0499 13.0571 26.6253C13.7752 27.7496 14.558 28.8505 15.3832 29.8975C15.7303 30.3383 16.369 30.414 16.8094 30.0665C17.2502 29.7194 17.3259 29.0806 16.9784 28.6403C16.1945 27.6457 15.451 26.5995 14.7686 25.5315C14.2711 24.7531 14.412 23.6863 15.1035 22.9948L19.9717 18.1265C20.3681 17.7298 20.3685 17.0867 19.9717 16.69L8.99702 5.71607C8.60029 5.31974 7.95719 5.31974 7.56046 5.71607L3.14011 10.1368C0.0908512 13.1857 -0.758545 17.8274 1.02594 21.6864C6.9495 34.496 16.9883 45.0434 30.4827 51.1415C34.2746 52.8554 38.833 51.9425 41.8339 48.9405L46.3102 44.4654C46.7065 44.0686 46.7069 43.4251 46.3102 43.0288L35.3354 32.0549Z"
                              fill="#1a1a1a"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_335_3726">
                              <rect width="52.4062" height="52" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <div className="td-about-4-contact-info">
                        <span>Get In Touch</span>
                        <a href="tel:+51174705812">+51 174 705 812</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-7 col-sm-6">
                    <div className="td-about-btn">
                      <Link to="/about" className="td-btn td-left-right">
                        More About Us
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
