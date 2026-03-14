import React, { useEffect } from "react";
import $ from "jquery";
import userIcon from "../../assets/img/contact/user.png";
import envelopeIcon from "../../assets/img/contact/envelope-open.png";
import penIcon from "../../assets/img/contact/pen.png";


export const ContactTwo = () => {
  useEffect(() => {
    $(".td-btn-rounded").on("mouseenter", function (e) {
      var x = e.pageX - $(this).offset().left;
      var y = e.pageY - $(this).offset().top;

      $(this).find(".td-btn-circle-dot").css({ top: y, left: x });
    });

    return () => {
      $(".td-btn-rounded").off("mouseenter");
    };
  }, []);

  return (
    <div className="td-contact-3-area pt-140 pb-100">
      <form action="#">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-8 mb-40">
              <div className="td-contact-3-content mb-60">
                <h2 className="td-section-title mb-20">Contact us</h2>
                <p>
                  Our focus is on delivering superior value to our clients for
                  company modification.
                  <br />
                  Providing sustainable strategies that will upgrade.
                </p>
              </div>
              <div className="td-contact-3-form-wrap">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="td-contact-form td-contact-3-input">
                      <input type="text" placeholder="Your name" />
                      <img src={userIcon} alt="user" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="td-contact-form td-contact-3-input">
                      <input type="email" placeholder="Your email" />
                      <img src={envelopeIcon} alt="envelope" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="td-contact-form td-contact-3-input">
                      <textarea placeholder="Message"></textarea>
                      <img className="envelope" src={penIcon} alt="pen" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-40">
              <div className="td-contact-3-btn">
                <button className="td-btn-rounded" type="button">
                  Send Messages
                  <i className="td-btn-circle-dot"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
