import React from "react";
import { Link } from "react-router-dom";
import awardImage from "../../assets/img/awards/01.png";

const awardsList = [
  {
    year: "2024",
    title: "ISO 14001 — Okoljski certifikat",
    location: "Novo Mesto, Slovenija",
    delay: ".3s",
  },
  {
    year: "2022",
    title: "ISO 15378 — Farmacevtska embalaža",
    location: "Novo Mesto, Slovenija",
    delay: ".4s",
  },
  {
    year: "2021",
    title: "FSC Certifikat (FSC-C172697)",
    location: "Trajnostno upravljanje",
    delay: ".5s",
  },
  {
    year: "2012",
    title: "ISO 9001 — Sistem vodenja kakovosti",
    location: "Novo Mesto, Slovenija",
    delay: ".6s",
  },
  {
    year: "2001",
    title: "Ustanovitev TISK ŠEPIC d.o.o.",
    location: "Novo Mesto, Slovenija",
    delay: ".7s",
  },
  {
    year: "1980",
    title: "Začetek zgodbe — Žare Šepic",
    location: "Novo Mesto, Slovenija",
    delay: ".8s",
  },
];

export const AwardsOne = () => {
  return (
    <div className="td-awards-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="td-awards-title-wrap mb-60 text-center wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <span className="td-section-title-pre mb-10">Naša pot</span>
              <h2 className="td-section-title">Certifikati in mejniki</h2>
            </div>
          </div>

          <div className="col-12">
            <div className="row">
              {awardsList.map((award, index) => (
                <div className="col-lg-12" key={index}>
                  <div
                    className="td-awards-wrapper p-relative wow fadeInUp"
                    data-wow-delay={award.delay}
                    data-wow-duration="1s"
                  >
                    <div className="td-awards-thumb">
                      <Link to="/awards-details">
                        <img
                          className="layer w-100"
                          src={awardImage}
                          alt="awards"
                        />
                      </Link>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-lg-8 col-md-8 mb-20">
                        <div className="td-awards-content d-flex align-items-center">
                          <span>{award.year}</span>
                          <h4 className="td-awards-title">
                            <Link to="#">{award.title}</Link>
                          </h4>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 mb-20">
                        <div className="td-awards-meta d-flex justify-content-between">
                          <span>
                            <i className="fa-sharp fa-regular fa-location-dot"></i>
                            {award.location}
                          </span>
                          <Link className="td-awards-btn" to="#">
                            {/* SVG content */}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
