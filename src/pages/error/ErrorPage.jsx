import React from "react";
import { Link } from "react-router-dom";
import { HeaderThree } from "../../components/headers/HeaderThree";
import errorImage from "../../assets/img/error/error.jpg";

export const ErrorPage = () => {
  return (
    <>
      <HeaderThree />

      <div
        className="td-error-area td-error-spacing fix bg-position"
        style={{ backgroundImage: `url(${errorImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="td-error-content text-center">
                <h2 className="td-error-title mb-5">404</h2>
                <h5 className="td-error-text mb-50">
                  Looks like this website broken
                </h5>
                <div className="td-error-btn td-hero-4-btn">
                  <Link to="/" className="td-btn td-btn-7 td-left-right">
                    <span className="td-arrow-angle mr-10">
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
                    Go Back Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
