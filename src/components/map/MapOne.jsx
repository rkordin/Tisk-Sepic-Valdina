import React from "react";
import mapImage from "../../assets/img/map/map.png";

export const MapOne = () => {
  return (
    <div className="td-map-area pt-140">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="td-map-count">
              <h2 className="td-map-count-title">
                <span
                  data-purecounter-duration="1"
                  data-purecounter-end="54"
                  className="purecounter"
                >
                  0
                </span>
                ,000
              </h2>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="td-map-para">
              <p>
                Our focus is on delivering superior value to our clients for
                company modification. Providing sustainable strategies that will
                upgrade their business. From strategy to delivery, we are here
                to make sure your business succeeds. Thinking, writing and
                planning with brand for more than 50 years.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="td-map-thumb p-relative">
              <img className="w-100" src={mapImage} alt="map" />
              <span className="td-map-lucation-dot one td-pulse-border"></span>
              <span className="td-map-lucation-dot two td-pulse-border"></span>
              <span className="td-map-lucation-dot three td-pulse-border"></span>
              <span className="td-map-lucation-dot four td-pulse-border"></span>
              <span className="td-map-lucation-dot five td-pulse-border"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
