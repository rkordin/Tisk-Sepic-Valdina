import React from "react";
import IMG from "../../assets/img/counter/map.png";
import IMG2 from "../../assets/img/counter/bg.jpg";
import { Link } from "react-router-dom";
import { useCmsContent } from "../../hooks/useCmsContent";

const DEFAULT_COUNTER = {
  paragraph:
    "Naš fokus je na zagotavljanju vrhunske vrednosti za naše stranke. Ponujamo trajnostne rešitve, ki nadgrajujejo vaše poslovanje. Od strategije do izvedbe smo tukaj, da zagotovimo uspeh vašega projekta. Z izkušnjami že več kot 40 let.",
  paragraph2:
    "Nenehno premikamo meje z najsodobnejšo tehnologijo in inovativnimi pristopi. Nemogoče danes postane samoumevno jutri.",
  cta_text: "Kontaktirajte nas",
  stats: [
    { value: 40, suffix: "+", label: "Let izkušenj v\ntiskarski industriji" },
    { value: 37, suffix: "", label: "Zaposlenih" },
  ],
};

export const CounterAreaOne = () => {
  const { content } = useCmsContent("home");
  const counter = content?.counter || DEFAULT_COUNTER;
  const stats = counter.stats || DEFAULT_COUNTER.stats;

  return (
    <div className="td-counter-area fix p-relative">
      <img className="td-counter-map" src={IMG} alt="map" loading="lazy" />
      <div className="container-fluid g-0">
        <div className="row gx-0">
          <div className="col-xl-4 col-lg-6">
            <div className="td-counter-thumb p-relative">
              <img className="w-100" src={IMG2} alt="Counter section background" loading="lazy" data-editable="counter-bg-img" data-editable-type="image" data-dimensions="424x457" />
              <div className="td-counter-logo d-none d-sm-block td-pulse-border">
                <h3>TŠ</h3>
              </div>
            </div>
          </div>

          <div className="col-xl-5 col-lg-6 mb-40">
            <div className="td-counter-content ml-110 mr-150">
              <p className="mb-45" data-editable="counter-paragraph">{counter.paragraph || DEFAULT_COUNTER.paragraph}</p>
              <p className="mb-35" data-editable="counter-paragraph2">{counter.paragraph2 || DEFAULT_COUNTER.paragraph2}</p>

              <div className="td-counter-btn">
                <Link className="td-btn td-btn-3 td-left-right" to="/contact">
                  {counter.cta_text || DEFAULT_COUNTER.cta_text}
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
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`td-counter-single${i < stats.length - 1 ? " td-counter-single-border mb-35" : ""}`}
                >
                  <h2 className="td-counter-count">
                    <span
                      data-purecounter-duration="1"
                      data-purecounter-end={String(stat.value)}
                      className="purecounter"
                    >
                      0
                    </span>
                    {stat.suffix || ""}
                  </h2>
                  <span
                    className="td-counter-count-para"
                    dangerouslySetInnerHTML={{
                      __html: (stat.label || "").replace(/\n/g, "<br />"),
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
