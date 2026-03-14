import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo/logo.png";
import sidebar01 from "../../assets/img/sidebar/01.jpg";
import sidebar02 from "../../assets/img/sidebar/02.jpg";
import sidebar03 from "../../assets/img/sidebar/03.jpg";
import sidebar04 from "../../assets/img/sidebar/04.jpg";
import sidebar05 from "../../assets/img/sidebar/05.jpg";
import sidebar06 from "../../assets/img/sidebar/06.jpg";
import sidebar07 from "../../assets/img/sidebar/07.jpg";
import sidebar08 from "../../assets/img/sidebar/08.jpg";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const NavImgGallery = () => {
  const [index, setIndex] = useState(-1);

  const images = [
    { src: sidebar01 },
    { src: sidebar02 },
    { src: sidebar03 },
    { src: sidebar04 },
    { src: sidebar05 },
    { src: sidebar06 },
    { src: sidebar07 },
    { src: sidebar08 },
  ];

  return (
    <>
      <div className="tdoffcanvas-area">
        <div className="tdoffcanvas">
          <div className="tdoffcanvas__close-btn">
            <button className="close-btn">
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="tdoffcanvas__logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="td-main-menu-mobile d-lg-none"></div>

          <div className="td-offcanvas-content d-none d-lg-block mb-50">
            <h2 className="tp-offcanvas-title">Hello There!</h2>
            <p>
              Business management for all future successful projects, The new
              way to keep track of all the projects, Day to day work made our
              life simple and easy
            </p>
          </div>

          <div className="d-none d-lg-block">
            <div className="td-offcanvas-gallery mb-50">
              {images.map((x, i, arr) => (
                <button
                  key={x.src}
                  className="popup-image"
                  onClick={() => setIndex(arr.findIndex((a) => a.src == x.src))}
                >
                  <img className="m-img" src={x.src} alt="" />
                </button>
              ))}
            </div>

            <Lightbox
              index={index}
              slides={images}
              open={index >= 0}
              close={() => setIndex(-1)}
            />
          </div>

          <div className="tdoffcanvas__contact-info">
            <div className="tdoffcanvas__contact-title">
              <h5>Contact us</h5>
            </div>
          </div>

          <div className="tdoffcanvas__social">
            <div className="social-icon">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="body-overlay"></div>
    </>
  );
};
