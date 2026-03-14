import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/img/blog/blog-5/bg.jpg";
import bg1Image from "../../assets/img/blog/blog-5/bg1.jpg";
import bg3Image from "../../assets/img/blog/blog-5/bg3.jpg";
import bg4Image from "../../assets/img/blog/blog-5/bg4.jpg";
import bg5Image from "../../assets/img/blog/blog-5/bg5.jpg";

export const BlogThree = () => {
  return (
    <div className="td-blog-area pt-140 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="td-faq-5-title-wrap text-center mb-75">
              <span className="td-section-title-pre mb-5">Our Blog</span>
              <h2 className="td-section-title">Company insights</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-3 wow fadeInUp"
            data-wow-delay=".3s"
            data-wow-duration="1s"
          >
            <div className="row">
              <div className="col-lg-12 col-md-6">
                <div className="td-blog-5-wrap mb-40">
                  <div className="td-blog-5-thumb mb-25">
                    <img
                      className="w-100"
                      src={bgImage}
                      alt="thumb"
                    />
                  </div>
                  <div className="td-blog-5-content text-center">
                    <div className="td-blog-5-qoute-meta mb-5">
                      <span className="designation">Business</span>
                      <span className="dvdr">|</span>
                      <span> June 21, 2024</span>
                    </div>
                    <h3 className="td-blog-5-qoute-title">
                      <Link to="/blog-details">
                        Top 10 tips for choosing the right home insurance
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6">
                <div className="td-blog-5-wrap mb-40">
                  <div className="td-blog-5-thumb mb-25">
                    <img
                      className="w-100"
                      src={bg1Image}
                      alt="thumb"
                    />
                  </div>
                  <div className="td-blog-5-content text-center">
                    <div className="td-blog-5-qoute-meta mb-5">
                      <span className="designation">Business</span>
                      <span className="dvdr">|</span>
                      <span> June 21, 2024</span>
                    </div>
                    <h3 className="td-blog-5-qoute-title">
                      <Link to="/blog-details">
                        Navigating the claims process: what to expect
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay=".4s"
            data-wow-duration="1s"
          >
            <div className="td-blog-5-wrap mb-40">
              <div className="td-blog-5-thumb mb-25">
                <img
                  className="w-100"
                  src={bg3Image}
                  alt="thumb"
                />
              </div>
              <div className="td-blog-5-content text-center">
                <div className="td-blog-5-qoute-meta mb-5">
                  <span className="designation">Business</span>
                  <span className="dvdr">|</span>
                  <span> June 21, 2024</span>
                </div>
                <h3 className="td-blog-5-qoute-title td-blog-5-qoute-title-big">
                  <Link to="/blog-details">
                    The importance of life insurance: securing
                    <br />
                    your family's future
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 wow fadeInUp"
            data-wow-delay=".5s"
            data-wow-duration="1s"
          >
            <div className="row">
              <div className="col-lg-12 col-md-6">
                <div className="td-blog-5-wrap mb-40">
                  <div className="td-blog-5-thumb mb-25">
                    <img
                      className="w-100"
                      src={bg4Image}
                      alt="thumb"
                    />
                  </div>
                  <div className="td-blog-5-content text-center">
                    <div className="td-blog-5-qoute-meta mb-5">
                      <span className="designation">Business</span>
                      <span className="dvdr">|</span>
                      <span> June 21, 2024</span>
                    </div>
                    <h3 className="td-blog-5-qoute-title">
                      <Link to="/blog-details">
                        Stay safe on the road: essential auto insurance tips
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6">
                <div className="td-blog-5-wrap mb-40">
                  <div className="td-blog-5-thumb mb-25">
                    <img
                      className="w-100"
                      src={bg5Image}
                      alt="thumb"
                    />
                  </div>
                  <div className="td-blog-5-content text-center">
                    <div className="td-blog-5-qoute-meta mb-5">
                      <span className="designation">Business</span>
                      <span className="dvdr">|</span>
                      <span> June 21, 2024</span>
                    </div>
                    <h3 className="td-blog-5-qoute-title">
                      <Link to="/blog-details">
                        Understanding health insurance: a guide
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
