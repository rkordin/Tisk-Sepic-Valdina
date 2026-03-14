import React from "react";
import bgImage from "../../assets/img/contact/contact4/bg.jpg";
import bg2Image from "../../assets/img/contact/contact4/bg2.jpg";

export const ContactFour = () => {
  return (
    <div className="td-contact-area pt-140 pb-105">
      <div className="container">
        <div className="row">
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
                            src={bgImage}
                            alt="London office"
                          />
                        </div>
                      </div>

                      <div className="col-xl-5 col-lg-6 col-md-6 col-sm-7">
                        <div className="td-contact-4-content">
                          <h3 className="td-contact-4-title mb-30">Sedež podjetja</h3>
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
                                href="tel:+38673939200"
                              >
                                +386 7 393 92 00
                              </a>
                            </li>
                            <li>
                              <a
                                className="td-contact-4-addres"
                                href="https://www.google.com/maps/place/Livada+14,+8000+Novo+mesto,+Slovenia"
                                target="_blank"
                              >
                                Livada 14, 8000 Novo mesto, Slovenija
                              </a>
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
                            src={bg2Image}
                            alt="New York office"
                          />
                        </div>
                      </div>

                      <div className="col-xl-5 col-lg-6 col-md-6 col-sm-7">
                        <div className="td-contact-4-content">
                          <h3 className="td-contact-4-title mb-30">Komerciala</h3>
                          <ul>
                            <li>
                              <a
                                className="td-contact-4-email"
                                href="mailto:komerciala@tisksepic.si"
                              >
                                komerciala@tisksepic.si
                              </a>
                            </li>
                            <li className="mb-10">
                              <a
                                className="td-contact-4-phone"
                                href="tel:+38673939200"
                              >
                                +386 7 393 92 00
                              </a>
                            </li>
                            <li>
                              <a
                                className="td-contact-4-addres"
                                href="https://www.google.com/maps/place/Livada+14,+8000+Novo+mesto,+Slovenia"
                                target="_blank"
                              >
                                Livada 14, 8000 Novo mesto, Slovenija
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
                    <span className="td-section-title-pre mb-10">Kontakt</span>
                    <h2 className="td-section-title">Pošljite povpraševanje.</h2>
                  </div>

                  {/* contact form */}
                  <div className="td-contact-form-wrap-2">
                    <div className="td-contact-form">
                      <form
                        id="contact-form"
                        action="assets/mail.php"
                        method="POST"
                      >
                        <input
                          className="mb-10"
                          type="text"
                          name="name"
                          placeholder="Vaše ime"
                          required
                        />
                        <input
                          className="mb-10"
                          type="email"
                          name="email"
                          placeholder="Vaš e-mail"
                          required
                        />
                        <textarea
                          className="mb-30"
                          name="message"
                          placeholder="Vaše sporočilo"
                        ></textarea>
                        <button type="submit">Pošlji sporočilo</button>
                        <p className="ajax-response pt-20"></p>
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
