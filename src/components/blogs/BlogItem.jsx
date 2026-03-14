import React from "react";
import { Link } from "react-router-dom";

export const BlogItem = ({
  src,
  tag,
  href,
  title,
  description,
  userImage,
  userName,
  date,
  likes,
  shares,
}) => {
  return (
    <article className="td-postbox-item mb-60">
      <div className="td-postbox-thumb p-relative mb-40">
        <img className="w-100" src={src} alt="thumb" />
        <span className="td-postbox-badge">{tag}</span>
      </div>
      <div className="td-postbox-content">
        <h2 className="td-postbox-title mb-25">
          <Link to={href}>{title}</Link>
        </h2>

        <div className="td-postbox-text mb-20 pb-15">
          <p>{description}</p>
        </div>

        <div className="td-postbox-meta">
          <div className="td-postbox-user">
            <a href="#">
              <img src={userImage} alt="uder" />
              By <span>{userName}</span>
            </a>
          </div>

          <div className="td-postbox-meta-here">
            <span>
              <i className="fa-light fa-calendar-days"></i>
              {date}
            </span>

            <span>
              <a href="#">
                <i className="fa-regular fa-thumbs-up"></i>
              </a>
              <a href="#">
                <i className="fa-sharp fa-regular fa-thumbs-down"></i>
              </a>
              {likes} Likes
            </span>

            <span>
              <a href="#">
                <i className="fa-solid fa-share"></i>
                {shares} Share
              </a>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
