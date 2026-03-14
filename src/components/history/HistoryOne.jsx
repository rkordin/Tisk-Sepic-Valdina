import React, { useEffect } from "react";
import $ from "jquery";

export const HistoryOne = () => {
  const historyItems = [
    { id: "1", year: "1980", title: "Začetek zgodbe", description: "Ustanovitelj Žare Šepic kot samostojni podjetnik začne z izdelovanjem preprostih samolepilnih nalepk. Kmalu se jim pridružijo tudi zahtevnejše tiskovine." },
    { id: "2", year: "2001", title: "Nova tiskarna", description: "Podjetje se preoblikuje v TISK ŠEPIC d.o.o. Na območju industrijske cone Livada v Novem mestu zraste nova, sodobna tiskarna na 3000 m²." },
    { id: "3", year: "2012", title: "ISO 9001 certifikat", description: "Pridobitev certifikata za sistem vodenja kakovosti ISO 9001 — dokaz, da je kvaliteta proizvodov in zadovoljstvo strank resnično na prvem mestu." },
    { id: "4", year: "2022", title: "ISO 15378 certifikat", description: "Pridobitev certifikata ISO 15378 za primarne embalažne materiale za zdravila. Potrditev najvišjih standardov za farmacevtsko industrijo." },
  ];

  useEffect(() => {
    $("#section-time").onePageNav({
      currentClass: "current",
      scrollSpeed: 950,
    });
  }, []);

  return (
    <div className="td-history-area pb-60 pt-65">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="td-history-title-wrap mb-80">
              <span className="td-section-title-pre mb-10">
                Od leta 1980
              </span>
              <h2 className="td-section-title">
                Družinsko podjetje z več kot 40-letno tradicijo.
              </h2>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="td-history-wrapper p-relative">
              <div className="td-history-navebar d-none d-sm-block">
                <ul id="section-time">
                  {historyItems.map((item, index) => (
                    <li key={index} className={index == 0 ? "current" : ""}>
                      <span></span>
                      <a href={`#${item.id}`} title="">
                        {`0${item.id}`}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {historyItems.map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  className="td-history-item mb-80"
                >
                  <h2 className="td-history-year mb-35">{item.year}</h2>
                  <h4 className="td-history-title mb-20">{item.title}</h4>
                  <p>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
