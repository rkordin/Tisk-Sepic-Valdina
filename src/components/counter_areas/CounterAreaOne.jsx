import React from "react";
import IMG from "../../assets/img/counter/map.png";
import IMG2 from "../../assets/img/counter/bg.jpg";
import { Link } from "react-router-dom";

export const CounterAreaOne = () => {
  return (
    <div className="td-counter-area fix p-relative">
      <img className="td-counter-map" src={IMG} alt="map" />
      <div className="container-fluid g-0">
        <div className="row gx-0">
          <div className="col-xl-4 col-lg-6">
            <div className="td-counter-thumb p-relative">
              <img className="w-100" src={IMG2} alt="thumb" />
              <div className="td-counter-logo d-none d-sm-block td-pulse-border">
                <h3>TŠ</h3>
              </div>
            </div>
          </div>

          <div className="col-xl-5 col-lg-6 mb-40">
            <div className="td-counter-content ml-110 mr-150">
              <p className="mb-45">
                Naš fokus je na zagotavljanju vrhunske vrednosti za naše
                stranke. Ponujamo trajnostne <span>rešitve</span>, ki
                nadgrajujejo vaše poslovanje. Od strategije do izvedbe smo
                tukaj, da zagotovimo <span>uspeh</span> vašega projekta.
                Z izkušnjami že več kot <span>40 let.</span>
              </p>
              <p className="mb-35">
                Nenehno premikamo meje z najsodobnejšo tehnologijo in
                inovativnimi pristopi. <span>Nemogoče</span> danes postane
                samoumevno jutri.
              </p>

              <div className="td-counter-btn">
                <Link className="td-btn td-btn-3 td-left-right" to="/contact">
                  Kontaktirajte nas
                  <span className="td-arrow-angle ml-10">
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
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6 mb-40">
            <div className="td-counter-count-wrap">
              <div className="td-counter-single td-counter-single-border mb-35">
                <h2 className="td-counter-count">
                  <span
                    data-purecounter-duration="1"
                    data-purecounter-end="40"
                    className="purecounter"
                  >
                    0
                  </span>
                  +
                </h2>
                <span className="td-counter-count-para">
                  Let izkušenj v <br />
                  tiskarski industriji
                </span>
              </div>

              <div className="td-counter-single">
                <h2 className="td-counter-count">
                  <span
                    data-purecounter-duration="1"
                    data-purecounter-end="37"
                    className="purecounter"
                  >
                    0
                  </span>

                </h2>
                <span className="td-counter-count-para">Zaposlenih</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
