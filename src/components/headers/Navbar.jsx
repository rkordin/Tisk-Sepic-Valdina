import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ hidePortfolio = false }) => {
  return (
    <nav className="td-main-menu-content">
      <ul>
        <li>
          <Link to="/">Domov</Link>
        </li>

        <li className="has-dropdown">
          <Link to="/service">Storitve</Link>
          <ul className="td-submenu submenu">
            <li>
              <Link to="/service">Vse storitve</Link>
            </li>
            <li>
              <Link to="/service-details">Digitalni tisk</Link>
            </li>
            <li>
              <Link to="/service-details">Offset tisk</Link>
            </li>
            <li>
              <Link to="/service-details">Flekso tisk</Link>
            </li>
            <li>
              <Link to="/service-details">UV tisk</Link>
            </li>
            <li>
              <Link to="/service-details">Sitotisk</Link>
            </li>
          </ul>
        </li>

        <li className="has-dropdown">
          <a href="#">Izdelki</a>
          <ul className="td-submenu submenu">
            <li>
              <Link to="/service-details">Nalepke in folije</Link>
            </li>
            <li>
              <Link to="/service-details">Embalaža</Link>
            </li>
            <li>
              <Link to="/service-details">Reklamni izdelki</Link>
            </li>
            <li>
              <Link to="/service-details">3D napisi in table</Link>
            </li>
            <li>
              <Link to="/service-details">Polepitev vozil</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/about">O nas</Link>
        </li>

        {hidePortfolio ? null : (
          <li>
            <Link to="/portfolio">Reference</Link>
          </li>
        )}

        <li>
          <Link to="/contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};
