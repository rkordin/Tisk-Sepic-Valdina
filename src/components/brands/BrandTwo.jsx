import React from "react";
import mapImg from "../../assets/img/brands/map.png";
import brand01Img from "../../assets/img/brands/01.png";
import brand02Img from "../../assets/img/brands/02.png";
import brand03Img from "../../assets/img/brands/03.png";
import brand04Img from "../../assets/img/brands/04.png";
import brand05Img from "../../assets/img/brands/05.png";

export const BrandTwo = () => {
  return (
    <div className="td-brand-area fix pt-135 pb-160">
      <div className="container">
        <div className="row gx-0">
          <div className="col-lg-6">
            <div className="td-brand-title-wrap p-relative">
              <span className="td-section-title-pre mb-10">
                Meet our clients
              </span>
              <h2 className="td-section-title mb-30">
                All around
                <br />
                the world
              </h2>
              <img
                className="td-brand-map d-none d-lg-block"
                src={mapImg}
                alt="map"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row gx-0">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="td-brand-logo-wrap-2 td-brand-logo-border p-relative text-center">
                  <a href="#">
                    <img
                      className="td-brand-logo-2"
                      src={brand01Img}
                      alt="brand"
                    />
                  </a>
                  <span className="td-brand-shape td-brand-shape-position">
                    <i className="fa-sharp fa-regular fa-plus fa-fw"></i>
                  </span>
                  <span className="td-brand-shape td-brand-shape-position-2">
                    <i className="fa-sharp fa-regular fa-plus fa-fw"></i>
                  </span>
                  <span className="td-brand-shape td-brand-shape-position-3">
                    <i className="fa-sharp fa-regular fa-plus fa-fw"></i>
                  </span>
                  <span className="td-brand-shape td-brand-shape-position-4">
                    <i className="fa-sharp fa-regular fa-plus fa-fw"></i>
                  </span>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="td-brand-logo-wrap-2 td-brand-logo-border p-relative text-center">
                  <a href="#">
                    <img
                      className="td-brand-logo-2"
                      src={brand02Img}
                      alt="brand"
                    />
                  </a>
                  <span className="td-brand-shape td-brand-shape-position-2">
                    <i className="fa-sharp fa-regular fa-plus fa-fw"></i>
                  </span>
                  <span className="td-brand-shape td-brand-shape-position-3">
                    <i className="fa-sharp fa-regular fa-plus fa-fw"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="row gx-0">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="td-brand-logo-wrap-2 td-brand-logo-border p-relative text-center">
                  <a href="#">
                    <img
                      className="td-brand-logo-2"
                      src={brand03Img}
                      alt="brand"
                    />
                  </a>
                  <span className="td-brand-shape td-brand-shape-position">
                    <i className="fa-sharp fa-regular fa-plus fa-fw"></i>
                  </span>
                  <span className="td-brand-shape td-brand-shape-position-2">
                    <i className="fa-sharp fa-regular fa-plus fa-fw"></i>
                  </span>
                  <span className="td-brand-shape td-brand-shape-position-3">
                    <i className="fa-sharp fa-regular fa-plus fa-fw"></i>
                  </span>
                  <span className="td-brand-shape td-brand-shape-position-4">
                    <i className="fa-sharp fa-regular fa-plus fa-fw"></i>
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="td-brand-logo-wrap-2 td-brand-logo-border p-relative text-center">
                  <a href="#">
                    <img
                      className="td-brand-logo-2"
                      src={brand04Img}
                      alt="brand"
                    />
                  </a>
                  <span className="td-brand-shape td-brand-shape-position-3">
                    <i className="fa-sharp fa-regular fa-plus fa-fw"></i>
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="td-brand-logo-wrap-2 td-brand-logo-border p-relative text-center">
                  <a href="#">
                    <img
                      className="td-brand-logo-2"
                      src={brand05Img}
                      alt="brand"
                    />
                  </a>
                  <span className="td-brand-shape td-brand-shape-position-2">
                    <i className="fa-sharp fa-regular fa-plus fa-fw"></i>
                  </span>
                  <span className="td-brand-shape td-brand-shape-position-3">
                    <i className="fa-sharp fa-regular fa-plus fa-fw"></i>
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="td-brand-logo-wrap-2 td-brand-logo-wrap-space td-brand-logo-border p-relative text-center">
                  <div className="td-brand-counter">
                    <h2 className="td-brand-counter-title">
                      <span
                        data-purecounter-duration="1"
                        data-purecounter-end="100"
                        className="purecounter"
                      >
                        0
                      </span>
                      k
                    </h2>
                    <span className="td-brand-counter-pre">
                      Satisfied Clients
                    </span>
                  </div>
                  <span className="td-brand-shape td-brand-shape-position-2">
                    <i className="fa-sharp fa-regular fa-plus fa-fw"></i>
                  </span>
                  <span className="td-brand-shape td-brand-shape-position-3">
                    <i className="fa-sharp fa-regular fa-plus fa-fw"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
