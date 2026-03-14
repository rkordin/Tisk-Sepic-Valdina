import React, { useEffect } from "react";
import $ from "jquery";

export const HistoryOne = () => {
  const historyItems = [
    { id: "1", year: "1972", title: "Journey Was Started" },
    { id: "2", year: "2000", title: "100+ worldwide base" },
    { id: "3", year: "2022", title: "500+ projects done" },
    { id: "4", year: "2024", title: "archive 1000+ awards" },
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
                Started From 1972
              </span>
              <h2 className="td-section-title">
                Our business is taking care of your business.
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
                    We are constantly rethinking the future by creating the next
                    generation of products, brands and services from a hybrid
                    perspective.
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
