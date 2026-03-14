import React from "react";
import { Link } from "react-router-dom";
import bgImg from "../../assets/img/team/team4/bg.jpg";
import bg2Img from "../../assets/img/team/team4/bg2.jpg";
import bg3Img from "../../assets/img/team/team4/bg3.jpg";
import bg4Img from "../../assets/img/team/team4/bg4.jpg";
import bg5Img from "../../assets/img/team/team4/bg5.jpg";
import bg6Img from "../../assets/img/team/team4/bg6.jpg";

export const TeamTwo = () => {
  return (
    <div className="td-team-area fix">
      <div className="container-fluid p-0">
        <div className="row gx-0 align-items-center">
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
            data-wow-delay=".3s"
            data-wow-duration="1s"
          >
            <div className="td-team-4-item p-relative">
              <div className="td-team-4-thumb p-relative">
                <img
                  className="w-100"
                  src={bgImg}
                  alt="thumb"
                />
                <span></span>
              </div>
              <div className="td-team-4-content">
                <span>Founder</span>
                <h4 className="td-team-4-title">
                  <Link to="/team-details">Miranda H. Halim</Link>
                </h4>
              </div>
              <div className="td-team-4-social">
                <span>
                  <i className="fa-sharp fa-regular fa-plus fa-fw"></i>
                </span>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-behance"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
            data-wow-delay=".4s"
            data-wow-duration="1s"
          >
            <div className="td-team-4-item p-relative">
              <div className="td-team-4-thumb p-relative">
                <img
                  className="w-100"
                  src={bg2Img}
                  alt="thumb"
                />
                <span></span>
              </div>
              <div className="td-team-4-content">
                <span>Founder</span>
                <h4 className="td-team-4-title">
                  <Link to="/team-details">Miranda H. Halim</Link>
                </h4>
              </div>
              <div className="td-team-4-social">
                <span>
                  <i className="fa-sharp fa-regular fa-plus fa-fw"></i>
                </span>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-behance"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft"
            data-wow-delay=".5s"
            data-wow-duration="1s"
          >
            <div className="td-team-4-title-wrap ml-120">
              <span className="td-section-title-pre mb-10">Real Heros</span>
              <h2 className="td-section-title mb-90">Meet the advisors</h2>
              <div className="td-team-4-btn-wrap d-flex align-items-center">
                <div className="td-about-btn mr-20">
                  <Link className="td-btn td-left-right" to="/team">
                    View More
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
                <div className="td-team-4-top-social">
                  <a href="#">
                    <i className="fa-sharp fa-regular fa-globe"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
            data-wow-delay=".6s"
            data-wow-duration="1s"
          >
            <div className="td-team-4-item p-relative">
              <div className="td-team-4-thumb p-relative">
                <img
                  className="w-100"
                  src={bg3Img}
                  alt="thumb"
                />
                <span></span>
              </div>
              <div className="td-team-4-content">
                <span>Founder</span>
                <h4 className="td-team-4-title">
                  <Link to="/team-details">Miranda H. Halim</Link>
                </h4>
              </div>
              <div className="td-team-4-social">
                <span>
                  <i className="fa-sharp fa-regular fa-plus fa-fw"></i>
                </span>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-behance"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
            data-wow-delay=".7s"
            data-wow-duration="1s"
          >
            <div className="td-team-4-item p-relative">
              <div className="td-team-4-thumb p-relative">
                <img
                  className="w-100"
                  src={bg4Img}
                  alt="thumb"
                />
                <span></span>
              </div>
              <div className="td-team-4-content">
                <span>Founder</span>
                <h4 className="td-team-4-title">
                  <Link to="/team-details">Miranda H. Halim</Link>
                </h4>
              </div>
              <div className="td-team-4-social">
                <span>
                  <i className="fa-sharp fa-regular fa-plus fa-fw"></i>
                </span>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-behance"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
            data-wow-delay=".8s"
            data-wow-duration="1s"
          >
            <div className="td-team-4-item p-relative">
              <div className="td-team-4-thumb p-relative">
                <img
                  className="w-100"
                  src={bg5Img}
                  alt="thumb"
                />
                <span></span>
              </div>
              <div className="td-team-4-content">
                <span>Founder</span>
                <h4 className="td-team-4-title">
                  <Link to="/team-details">Miranda H. Halim</Link>
                </h4>
              </div>
              <div className="td-team-4-social">
                <span>
                  <i className="fa-sharp fa-regular fa-plus fa-fw"></i>
                </span>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-behance"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
            data-wow-delay=".9s"
            data-wow-duration="1s"
          >
            <div className="td-team-4-item p-relative">
              <div className="td-team-4-thumb p-relative">
                <img
                  className="w-100"
                  src={bg6Img}
                  alt="thumb"
                />
                <span></span>
              </div>
              <div className="td-team-4-content">
                <span>Founder</span>
                <h4 className="td-team-4-title">
                  <Link to="/team-details">Miranda H. Halim</Link>
                </h4>
              </div>
              <div className="td-team-4-social">
                <span>
                  <i className="fa-sharp fa-regular fa-plus fa-fw"></i>
                </span>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-behance"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
