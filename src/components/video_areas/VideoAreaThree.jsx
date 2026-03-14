import React from "react";
import videoThumb from "../../assets/img/video/video4/bg.jpg";
import { VideoPlayer } from "../video/VideoPlayer";

export const VideoAreaThree = () => {
  return (
    <div className="td-video-area pt-140 pb-135">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="td-video-team-title-wrap mb-60">
              <span className="td-section-title-pre mb-10">Our business</span>
              <h2 className="td-section-title">In the media</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="td-video-4-thumb fix p-relative">
              <img className="w-100" src={videoThumb} alt="thumb" />
              <div className="td-video-4-popup">
                <VideoPlayer
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
                          <path d="M14 10L0 20V0L14 10Z" fill="currentColor" />
                        </svg>
                      </span>
                    </a>
                  }
                />
              </div>
              <h3 className="td-video-4-big-title d-none d-md-block">
                Take a tour
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
