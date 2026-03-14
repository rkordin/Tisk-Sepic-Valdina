import React from "react";
import { Link } from "react-router-dom";

export const PortfolioOneItem = ({
  imageSrc,
  categories,
  title,
  wowDelay = ".3s",
}) => {
  return (
    <div
      className="swiper-slide wow slideInDown"
      data-wow-delay={wowDelay}
      data-wow-duration="1s"
    >
      <div className="td-portfolio-wrap">
        <div className="td-poerfolio-thumb mb-30">
          <img className="w-100" src={imageSrc} alt={title} />
        </div>

        <div className="td-portfolio-cetagory mb-20">
          {categories.map((category, index) => (
            <span key={index}>
              <a href="#">{category}</a>
            </span>
          ))}
        </div>
        <h3 className="td-portfolio-title">
          <Link to={"/portfolio-details"}>{title}</Link>
        </h3>
      </div>
    </div>
  );
};
