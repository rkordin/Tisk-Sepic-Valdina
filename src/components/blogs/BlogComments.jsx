import React from "react";
import { Link } from "react-router-dom";
import thumb4 from "../../assets/img/blog/details/thumb4.jpg";
import thumb5 from "../../assets/img/blog/details/thumb5.jpg";
import thumb6 from "../../assets/img/blog/details/thumb6.jpg";

export const BlogComments = () => {
  return (
    <div className="td-postbox-comment mb-60">
      <h3 className="td-postbox-comment-title pb-10">
        <span>User</span> Feedbacks (06)
      </h3>
      <ul>
        <li>
          <div className="td-postbox-comment-box d-flex mb-55">
            <div className="td-postbox-comment-avatar mr-30">
              <img src={thumb4} alt="" />
            </div>
            <div className="td-postbox-comment-text">
              <div className="td-postbox-comment-name mb-10 d-flex align-items-center">
                <h5>
                  <Link to="#">Tromas H. Hendson </Link>
                </h5>
                <span className="post-meta"> June 9, 2024</span>
              </div>
              <p>
                Variations in the floor plan, window location, and interstitial
                outdoor spaces enhance this material homogeneity. The goal was
                to produce a unified whole using a modern design language, where
                attention to materiality and detail is evident. All flats have
                two sides and are in close proximity to the outside world.
              </p>
              <div className="td-postbox-comment-reply">
                <Link to="#">
                  <span>
                    <i className="fa-sharp fa-solid fa-reply"></i>
                  </span>
                  <span>Reply</span>
                </Link>
              </div>
            </div>
          </div>
          <ul className="children mb-55">
            <li>
              <div className="td-postbox-comment-box d-flex">
                <div className="td-postbox-comment-avatar mr-30">
                  <img src={thumb5} alt="" />
                </div>
                <div className="td-postbox-comment-text">
                  <div className="td-postbox-comment-name mb-10 d-flex align-items-center">
                    <h5>
                      <Link to="#">Rosalina D.</Link>
                    </h5>
                    <span className="post-meta"> June 9, 2024</span>
                  </div>
                  <p>
                    Variations in the floor plan, window location, and
                    interstitial outdoor spaces enhance this material
                    homogeneity. The goal was to produce a unified whole using a
                    modern design language, where attention to materiality and
                    detail is evident.
                  </p>
                  <div className="td-postbox-comment-reply">
                    <Link to="#">
                      <span>
                        <i className="fa-sharp fa-solid fa-reply"></i>
                      </span>
                      <span>Reply</span>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <div className="td-postbox-comment-box d-flex">
            <div className="td-postbox-comment-avatar mr-30">
              <img src={thumb6} alt="" />
            </div>
            <div className="td-postbox-comment-text">
              <div className="td-postbox-comment-name mb-10 d-flex align-items-center">
                <h5>
                  <Link to="#">Miranda H. Halim</Link>
                </h5>
                <span className="post-meta"> June 9, 2024</span>
              </div>
              <p>
                Variations in the floor plan, window location, and interstitial
                outdoor spaces enhance this material homogeneity. The goal was
                to produce a unified whole using a modern design language, where
                attention to materiality and detail is evident. All flats have
                two sides and are in close proximity to the outside world.
              </p>
              <div className="td-postbox-comment-reply">
                <Link to="#">
                  <span>
                    <i className="fa-sharp fa-solid fa-reply"></i>
                  </span>
                  <span>Reply</span>
                </Link>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
