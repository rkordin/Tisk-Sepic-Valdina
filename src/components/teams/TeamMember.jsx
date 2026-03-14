import React from "react";
import { Link } from "react-router-dom";

export const TeamMember = ({ delay, src, href, title, designation }) => {
  return (
    <div
      className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
      data-wow-delay={`${delay}s`}
      data-wow-duration="1s"
    >
      <div className="td-team-5-wrap mb-75">
        <div className="td-team-5-thumb mb-40">
          <img className="w-100" src={src} alt="team" />
        </div>
        <div className="td-team-5-content">
          <h3 className="td-team-5-title">
            <Link to={href}>{title}</Link>
          </h3>
          <span className="td-team-5-position">{designation}</span>
        </div>
        <div className="td-team-5-social">
          <span></span>
          <ul>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
