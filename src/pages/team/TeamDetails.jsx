import React from "react";
import { Layout } from "../../layouts/Layout";
import { Link } from "react-router-dom";
import teamDetailsImage from "../../assets/img/team/team5/details.jpg";

export const TeamDetails = () => {
  return (
    <Layout
      breadcrumbTitle={"Single Team"}
      breadcrumbSubtitle={"Miranda H. Halim"}
    >
      <div className="td-team-details-area pt-140 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="td-team-details-thumb mb-40 mr-20">
                <img className="w-100" src={teamDetailsImage} alt="thumb" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="td-team-details-content mb-40">
                <h3 className="td-team-details-title">Miranda H. Halim</h3>
                <span className="td-team-details-subtitle mb-35">Founder</span>
                <div className="td-team-details-social mb-35">
                  <span className="mb-10">
                    <a href="mailto:info@tisksepic.si">
                      <i className="fa-solid fa-envelope-open"></i>
                      info@tisksepic.si
                    </a>
                  </span>
                  <span className="mb-10">
                    <a href="tel:+(123)45678900">
                      <i className="fa-solid fa-phone-flip"></i> +(123) 456 789
                      00
                    </a>
                  </span>
                  <ul className="float-right mb-10">
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-behance"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="td-team-details-biography mb-45">
                  <h3 className="td-team-details-biography-title mb-20">
                    Biography
                  </h3>
                  <p>
                    A consultant is a professional who provides expert advice
                    and guidance to individuals or organizations in a particular
                    field or industry. Consultants are typically hired to solve
                    problems, improve performance, or provide specialized
                    knowledge that the client lacks internally. Consultants can
                    work independently or as part of consulting firms. They may
                    specialize in various areas such as management, finance,
                    technology, human resources, marketing, or specific
                    industries like healthcare, IT, or manufacturing.
                  </p>
                </div>
                <div className="td-team-details-education mb-50">
                  <h3 className="td-team-details-biography-title mb-15">
                    Education
                  </h3>
                  <ul>
                    <li>
                      Bachelor of Science in Civil Engineering - University of
                      Alberta
                    </li>
                    <li>
                      Ivey Executive Program - University of Western Ontario
                    </li>
                    <li>CCA Gold-Seal certified project manager</li>
                  </ul>
                </div>
                <div className="td-team-details-skill">
                  <h3 className="td-team-details-biography-title mb-15">
                    Skillset
                  </h3>
                  <ul>
                    <li>
                      <Link to="#">Business Consultancy</Link>
                      <span>/</span>
                    </li>
                    <li>
                      <Link to="#">ROI Development</Link> <span>/</span>
                    </li>
                    <li>
                      <Link to="#">Business Growth</Link> <span>/</span>
                    </li>
                    <li>
                      <Link to="#">UX Design</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
