import React, { useEffect } from "react";
import $ from 'jquery';
import workThumb from "../../assets/img/work/thumb.jpg";

export const AboutWorkOne = () => {
  useEffect(() => {
    $("[data-width]").each(function () {
      $(this).css("width", $(this).attr("data-width"));
    });
  }, []);

  return (
    <div className="td-work-area td-work-area-border pt-120 pb-90 td-grey-bg">
      <div className="container container-1670">
        <div className="row">
          <div className="col-lg-6 pb-30">
            <div
              className="td-work-thumb h-100 pr-105 wow fadeInRight"
              data-wow-delay=".4s"
              data-wow-duration="1s"
            >
              <img className="w-100" src={workThumb} alt="work" />
            </div>
          </div>

          <div className="col-lg-6 pb-30">
            <div
              className="td-work-content pl-105 wow fadeInLeft"
              data-wow-delay=".4s"
              data-wow-duration="1s"
            >
              <div className="td-work-title-wrap mb-200">
                <span className="td-section-title-pre mb-10">
                  Right Direction
                </span>
                <h2 className="td-section-title">
                  Real digital experience like no others
                </h2>
              </div>

              <div className="td-work-progress pt-5 fix">
                <div className="td-work-hidden-progress mb-35">
                  <h6 className="td-work-progress-title">Human Resources</h6>
                  <div className="td-work-progress-inner">
                    <div
                      className="td-work-progress-bar wow slideInLeft"
                      data-wow-duration="1s"
                      data-wow-delay=".4s"
                      role="progressbar"
                      data-width="45%"
                      aria-valuenow="67"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <h6 className="td-work-progress-counter">
                        <span
                          data-purecounter-duration="1"
                          data-purecounter-end="45"
                          className="purecounter"
                        >
                          0
                        </span>
                        %
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="td-work-hidden-progress mb-35">
                  <h6 className="td-work-progress-title">Investment</h6>
                  <div className="td-work-progress-inner">
                    <div
                      className="td-work-progress-bar wow slideInLeft"
                      data-wow-duration="1s"
                      data-wow-delay=".4s"
                      role="progressbar"
                      data-width="90%"
                      aria-valuenow="67"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <h6 className="td-work-progress-counter">
                        <span
                          data-purecounter-duration="1"
                          data-purecounter-end="90"
                          className="purecounter"
                        >
                          0
                        </span>
                        %
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="td-work-hidden-progress">
                  <h6 className="td-work-progress-title">New Technologies</h6>
                  <div className="td-work-progress-inner">
                    <div
                      className="td-work-progress-bar wow slideInLeft"
                      data-wow-duration="1s"
                      data-wow-delay=".4s"
                      role="progressbar"
                      data-width="60%"
                      aria-valuenow="67"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <h6 className="td-work-progress-counter">
                        <span
                          data-purecounter-duration="1"
                          data-purecounter-end="60"
                          className="purecounter"
                        >
                          0
                        </span>
                        %
                      </h6>
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
