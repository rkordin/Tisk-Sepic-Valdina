import React from "react";
import LOGO from "../../assets/img/logo/logo-horizontal.svg";
import { Link } from "react-router-dom";

export const MobileNavbar = () => {
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
              <img src={LOGO} alt="logo" />
            </Link>
          </div>
          <div className="td-main-menu-mobile d-lg-none"></div>
          <div className="tdoffcanvas__contact-info">
            <div className="tdoffcanvas__contact-title">
              <h5>Kontaktirajte nas</h5>
            </div>
          </div>
          <div className="tdoffcanvas__social">
            <div className="social-icon">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="body-overlay"></div>
    </>
  );
};
