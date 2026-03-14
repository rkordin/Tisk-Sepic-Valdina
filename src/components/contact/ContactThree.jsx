import React from "react";
import { Link } from "react-router-dom";
import londonImg from "../../assets/img/contact/contact4/bg.jpg";
import newYorkImg from "../../assets/img/contact/contact4/bg2.jpg";

export const ContactThree = () => {
  return (
    <div className="td-contact-area pt-70 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="td-contact-4-transparent ml-85">
              <h2 className="td-contact-4-transparent-title">Branches</h2>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-xl-6 col-lg-7">
                <div className="row">
                  <div className="col-12 mb-40">
                    <div className="row align-items-center">
                      <div className="col-xl-7 col-lg-6 col-md-6 col-sm-5">
                        <div className="td-contact-4-thumb">
                          <img
                            className="w-100"
                            src={londonImg}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-5 col-lg-6 col-md-6 col-sm-7">
                        <div className="td-contact-4-content">
                          <h3 className="td-contact-4-title mb-30">London</h3>
                          <ul>
                            <li>
                              <a
                                className="td-contact-4-email"
                                href="mailto:info@tisksepic.si"
                              >
                                info@tisksepic.si
                              </a>
                            </li>
                            <li className="mb-10">
                              <a
                                className="td-contact-4-phone"
                                href="tel:+(123)45678900"
                              >
                                +(123) 456 789 00
                              </a>
                            </li>
                            <li>
                              <Link
                                className="td-contact-4-addres"
                                to="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z"
                                target="_blank"
                              >
                                2938 Bingamon Branch Road Highland Park, IL 60035
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-40">
                    <div className="row align-items-center">
                      <div className="col-xl-7 col-lg-6 col-md-6 col-sm-5">
                        <div className="td-contact-4-thumb">
                          <img
                            className="w-100"
                            src={newYorkImg}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-5 col-lg-6 col-md-6 col-sm-7">
                        <div className="td-contact-4-content">
                          <h3 className="td-contact-4-title mb-30">New York</h3>
                          <ul>
                            <li>
                              <a
                                className="td-contact-4-email"
                                href="mailto:info@tisksepic.si"
                              >
                                info@tisksepic.si
                              </a>
                            </li>
                            <li className="mb-10">
                              <a
                                className="td-contact-4-phone"
                                href="tel:+(123)45678900"
                              >
                                +(123) 456 789 00
                              </a>
                            </li>
                            <li>
                              <a
                                className="td-contact-4-addres"
                                href="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z"
                                target="_blank"
                              >
                                2938 Bingamon Branch Road Highland Park, IL 60035
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5">
                <div className="td-contact-4-form ml-100">
                  <div className="td-chose-title-wrap mb-40">
                    <span className="td-section-title-pre mb-10">Contact</span>
                    <h2 className="td-section-title">Get a free quote.</h2>
                  </div>
                  <div className="td-contact-form-wrap-2">
                    <div className="td-contact-form">
                      <form action="#">
                        <input
                          className="mb-10"
                          type="text"
                          name="name"
                          placeholder="Your name"
                        />
                        <input
                          className="mb-10"
                          type="email"
                          name="email"
                          placeholder="Your email"
                        />
                        <textarea
                          className="mb-30"
                          name="message"
                          placeholder="Massage"
                        ></textarea>
                        <button type="button">Send Messages</button>
                      </form>
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
