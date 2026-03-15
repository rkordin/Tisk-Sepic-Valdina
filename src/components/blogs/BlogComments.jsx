import React from "react";
import { Link } from "react-router-dom";
import thumb4 from "../../assets/img/blog/details/thumb4.jpg";
import thumb5 from "../../assets/img/blog/details/thumb5.jpg";
import thumb6 from "../../assets/img/blog/details/thumb6.jpg";

export const BlogComments = () => {
  return (
    <div className="td-postbox-comment mb-60">
      <h3 className="td-postbox-comment-title pb-10">
        <span>Komentarji</span> bralcev (06)
      </h3>
      <ul>
        <li>
          <div className="td-postbox-comment-box d-flex mb-55">
            <div className="td-postbox-comment-avatar mr-30">
              <img src={thumb4} alt="Commenter avatar" loading="lazy" />
            </div>
            <div className="td-postbox-comment-text">
              <div className="td-postbox-comment-name mb-10 d-flex align-items-center">
                <h5>
                  <Link to="#">Marko N.</Link>
                </h5>
                <span className="post-meta"> 9. junij 2024</span>
              </div>
              <p>
                Odlična kakovost tiska in hitra dobava. Naročili smo serijo
                katalogov in rezultat je presegel naša pričakovanja. Barve so
                bile natančne, papir odličen. Priporočamo!
              </p>
              <div className="td-postbox-comment-reply">
                <Link to="#">
                  <span>
                    <i className="fa-sharp fa-solid fa-reply"></i>
                  </span>
                  <span>Odgovori</span>
                </Link>
              </div>
            </div>
          </div>
          <ul className="children mb-55">
            <li>
              <div className="td-postbox-comment-box d-flex">
                <div className="td-postbox-comment-avatar mr-30">
                  <img src={thumb5} alt="Commenter avatar" loading="lazy" />
                </div>
                <div className="td-postbox-comment-text">
                  <div className="td-postbox-comment-name mb-10 d-flex align-items-center">
                    <h5>
                      <Link to="#">Ana P.</Link>
                    </h5>
                    <span className="post-meta"> 12. junij 2024</span>
                  </div>
                  <p>
                    Strinjam se! Tudi mi imamo zelo pozitivne izkušnje.
                    Profesionalen pristop in natančno izvedeni projekti. Sodelovanje
                    je res brezhibno.
                  </p>
                  <div className="td-postbox-comment-reply">
                    <Link to="#">
                      <span>
                        <i className="fa-sharp fa-solid fa-reply"></i>
                      </span>
                      <span>Odgovori</span>
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
              <img src={thumb6} alt="Commenter avatar" loading="lazy" />
            </div>
            <div className="td-postbox-comment-text">
              <div className="td-postbox-comment-name mb-10 d-flex align-items-center">
                <h5>
                  <Link to="#">Peter K.</Link>
                </h5>
                <span className="post-meta"> 15. junij 2024</span>
              </div>
              <p>
                Že leta sodelujemo s Tisk Šepic in vsakič znova smo navdušeni
                nad kakovostjo. Farmacevtska embalaža zahteva izjemno natančnost
                — in jo pri njih dobimo. Certifikati govorijo zase.
              </p>
              <div className="td-postbox-comment-reply">
                <Link to="#">
                  <span>
                    <i className="fa-sharp fa-solid fa-reply"></i>
                  </span>
                  <span>Odgovori</span>
                </Link>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
