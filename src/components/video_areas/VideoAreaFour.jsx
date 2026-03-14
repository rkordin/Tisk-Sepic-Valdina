import React from "react";
import { Link } from "react-router-dom";
import ctaImage from "../../assets/img/video/video5/cta.png";
import ctaImage2 from "../../assets/img/video/video5/cta2.png";
import BG from "../../assets/img/video/video5/bg.jpg";
import { VideoPlayer } from "../video/VideoPlayer";

export const VideoAreaFour = () => {
  return (
    <>
      <div
        className="td-video-5-area td-video-5-space pt-160 bg-position"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="td-video-5-content text-center wow fadeInUp"
                data-wow-delay=".7s"
                data-wow-duration="1s"
              >
                <div className="td-video-5-popup mb-60">
                  <VideoPlayer
                    trigger={
                      <a
                        className="td-video-play td-video-5-play popup-video td-pulse-border"
                        href="#vid"
                      >
                        <span className="p-relative z-index-11">
                          <svg
                            width="14"
                            height="20"
                            viewBox="0 0 14 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 10L0 20V0L14 10Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </a>
                    }
                  />
                </div>
                <h2 className="td-video-5-title mb-50">
                  Are you ready for better, more
                  <br />
                  productive business?
                </h2>
                <div className="td-video-5-btn">
                  <Link
                    className="td-btn td-btn-7 mr-20 td-left-right"
                    to="/contact"
                  >
                    Find your solutions
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
      <div className="td-video-cta">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 wow fadeInRight"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <div className="td-video-cta-wrap p-relative">
                <div className="row">
                  <div className="col-lg-5 col-md-5">
                    <div className="td-video-cta-thumb">
                      <img className="w-100" src={ctaImage} alt="cta" />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-7">
                    <div className="td-video-cta-content">
                      <h3 className="td-video-cta-title mb-20">
                        Estimations & planning for business decisions
                      </h3>
                      <div className="td-video-cta-btn">
                        <Link className="mr-20 td-left-right" to="/contact">
                          Estimate Market Size
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
            <div
              className="col-lg-6 wow fadeInLeft"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <div className="td-video-cta-wrap p-relative">
                <div className="row">
                  <div className="col-lg-7 col-md-7">
                    <div className="td-video-cta-content">
                      <h3 className="td-video-cta-title mb-20">
                        Contact with our expert for quick & simple solutions
                      </h3>
                      <div className="td-video-cta-btn">
                        <Link className="mr-20 td-left-right" to="/contact">
                          Talk To An Expert
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
                  <div className="col-lg-5 col-md-6">
                    <div className="td-video-cta-thumb td-video-cta-thumb-2">
                      <img className="w-100" src={ctaImage2} alt="cta" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
