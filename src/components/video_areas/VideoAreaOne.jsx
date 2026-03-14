import React from "react";
import { Link } from "react-router-dom";
import IMG from "../../assets/img/video/bg.jpg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Iframe from "react-iframe";

export const VideoAreaOne = () => {
  return (
    <div className="td-video-area pb-140 pt-150 fix">
      <div className="container-fluid g-0">
        <div className="row gx-0">
          <div className="col-12">
            <div className="td-video-wrapper p-relative">
              <h2 className="td-video-title">
                <span
                  className="td-video-title-spacing wow fadeInRight"
                  data-wow-delay=".4s"
                  data-wow-duration="1s"
                >
                  Get amazing
                </span>
                <br />
                <b
                  className="wow fadeInLeft"
                  data-wow-delay=".4s"
                  data-wow-duration="1s"
                >
                  <span className="td-video-title-border">experience</span>
                  <span>with us</span>
                </b>
              </h2>

              <div className="td-video-thumb p-relative">
                <img className="w-100" src={IMG} alt="video" />

                <div className="td-video-popup">
                  <Popup
                    trigger={
                      <a
                        className="td-video-play popup-video td-pulse-border"
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
                    position=""
                    modal={true}
                    contentStyle={{ width: "80%", maxWidth: 1920 }}
                    lockScroll
                  >
                    <Iframe
                      url={"https://www.youtube.com/embed/6mkoGSqTqFI"}
                      width="100%"
                      height="400px"
                      id=""
                      className=""
                      display="block"
                      position="relative"
                    />
                  </Popup>
                </div>
              </div>
              <div className="td-video-page-icon">
                <Link className="td-left-right" to="/contact">
                  <span className="td-arrow-angle">
                    <svg
                      className="td-arrow-svg-top-right td-bg-none"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.57921 1.97755L33.1403 1.558L32.7208 27.1191M1.71022 32.9818L33.1372 1.55486"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.57921 1.97755L33.1403 1.558L32.7208 27.1191M1.71022 32.9818L33.1372 1.55486"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
