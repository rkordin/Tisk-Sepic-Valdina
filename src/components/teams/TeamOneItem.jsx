import React from "react";
import { Link } from "react-router-dom";

export const TeamOneItem = ({ delay, src, title, designation }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 mb-35">
      <div
        className="td-team-wrapper wow fadeInUp"
        data-wow-delay={delay}
        data-wow-duration="1s"
      >
        <div className="td-team-thumb mb-35 p-relative">
          <img className="w-100" src={src} alt="thumb" />

          {/* icons */}
          <div className="td-team-social">
            <ul>
              <li>
                <a href="#">
                  <i className="fa-sharp fa-regular fa-globe"></i>
                </a>
              </li>
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

        <div className="td-team-content text-center">
          <h3 className="td-team-title">
            <Link to="/team-details">{title}</Link>
          </h3>
          <span className="td-team-designation">{designation}</span>
        </div>
      </div>
    </div>
  );
};
