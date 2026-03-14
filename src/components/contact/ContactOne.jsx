import React from "react";
import IMG_A from "../../assets/img/about/a.png";

export const ContactOne = () => {
  return (
    <div className="td-contact-area td-grey-bg pt-140 pb-110 z-index-1 p-relative">
      <img
        className="td-contact-shape d-none d-md-block"
        src={IMG_A}
        alt="transparent"
      />

      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 mb-30 wow fadeInRight"
            data-wow-delay=".4s"
            data-wow-duration="1s"
          >
            <div className="row">
              <div className="col-xxl-8 col-xl-12">
                <div className="td-contact-content-wrap mb-55">
                  <h2 className="td-contact-title">Kontaktirajte nas</h2>
                  <p className="td-contact-pre">
                    Z veseljem vam pomagamo pri vašem
                    <br />
                    naslednjem tiskarskem projektu.
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-7 col-md-6 col-sm-6 mb-25">
                    <div className="td-contact-info">
                      <h4 className="td-contact-info-title">Naslov:</h4>
                      <a
                        className="td-contact-info-link"
                        href="https://www.google.com/maps/place/Livada+14,+8000+Novo+mesto"
                        target="_blank"
                      >
                        Livada 14, 8000 Novo Mesto, Slovenija
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6 col-sm-6 mb-25">
                    <div className="td-contact-info">
                      <h4 className="td-contact-info-title">Telefon:</h4>
                      <a
                        className="td-contact-info-link"
                        href="tel:+38673937100"
                      >
                        +386 7 393 7100
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6 col-sm-6 mb-25">
                    <div className="td-contact-info">
                      <h4 className="td-contact-info-title">Email:</h4>
                      <a
                        className="td-contact-info-link"
                        href="mailto:info@tisksepic.si"
                        target="_blank"
                      >
                        info@tisksepic.si
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6 col-sm-6 mb-25">
                    <div className="td-contact-info">
                      <h4 className="td-contact-info-title">Social:</h4>
                      <div className="td-contact-social-info">
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-30">
            <div
              className="td-contact-form-wrap wow fadeInLeft"
              data-wow-delay=".4s"
              data-wow-duration="1s"
            >
              <h3 className="td-contact-form-title mb-40">
                Vaše ideje uresničimo
                <br />
                z natančnostjo in <span>strastjo</span>
              </h3>
              <div className="td-contact-form">
                <form action="#">
                  <input
                    className="mb-10"
                    type="text"
                    name="name"
                    placeholder="Vaše ime"
                  />
                  <input
                    className="mb-10"
                    type="email"
                    name="email"
                    placeholder="Vaš email"
                  />
                  <textarea
                    className="mb-30"
                    name="message"
                    placeholder="Sporočilo"
                  ></textarea>
                  <button type="button">Pošlji</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
