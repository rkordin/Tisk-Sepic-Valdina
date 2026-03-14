import React from "react";
import { Link } from "react-router-dom";
import BG from "../../assets/img/breadcrumb/bg.jpg";

export const Breadcrumb = ({ title, subtitle, bottomText }) => {
  return (
    <div
      className="td-breadcrumb-area td-breadcrumb-spacing fix bg-position"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="td-breadcrumb-title-wrap mb-20">
              <h3 className="td-breadcrumb-title">{title}</h3>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="td-breadcrumb-list float-right mb-20">
              <span>
                <Link to="/">Domov</Link>
              </span>
              <span className="dvdr">/</span>
              <span className="page">{subtitle}</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="td-breadcrumb-big-text pt-60"
        data-parallax='{"x": -100, "smoothness": 10}'
      >
        <h2>{bottomText || "Tisk.Šepic"}</h2>
      </div>
    </div>
  );
};
