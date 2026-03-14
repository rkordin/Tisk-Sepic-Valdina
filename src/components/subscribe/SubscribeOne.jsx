import React from "react";
import bgImage from "../../assets/img/subscribe/bg.jpg";
import thumbImage from "../../assets/img/subscribe/thumb.jpg";
import shapeImage from "../../assets/img/subscribe/symbol.png";

export const SubscribeOne = () => {
  return (
    <div
      className="td-subscribe-area pt-140 pb-110 bg-position"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay=".3s"
            data-wow-duration="1s"
          >
            <div className="td-subscribe-4-thumb p-relative mb-30 mr-65">
              <img
                className="w-100 p-relative z-index-11"
                src={thumbImage}
                alt="thumb"
              />
              <img
                className="td-subscribe-shape"
                src={shapeImage}
                alt="shape"
              />
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay=".5s"
            data-wow-duration="1s"
          >
            <div className="td-subscribe-form-wrap pt-30">
              <div className="td-subscribe-title mb-60">
                Let's work <br />
                <span>together.</span>
              </div>
              <div className="td-subscribe-form">
                <form action="#">
                  <input type="email" placeholder="Send us a message" />
                  <button type="button">
                    <i className="fa-regular fa-arrow-right-long"></i> Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
