import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import bg1 from "../../assets/img/service/bg.jpg";
import bg2 from "../../assets/img/service/bg2.jpg";
import bg3 from "../../assets/img/service/bg3.jpg";
import bg4 from "../../assets/img/service/bg4.jpg";
import bg5 from "../../assets/img/service/bg5.jpg";
import { useCmsContent } from "../../hooks/useCmsContent";

const bgImages = [bg1, bg2, bg3, bg4, bg5];

const DEFAULT_SERVICES = [
  {
    category: "Tisk",
    number: "01",
    title: "Digitalni & Offset tisk",
    description:
      "Katalogi, brošure, letaki, vizitke, plakati in druge tiskovine vrhunske kakovosti.",
    link: "/service-details",
  },
  {
    category: "Nalepke",
    number: "02",
    title: "Nalepke in folije",
    description:
      "Samolepilne nalepke, etikete, talne in stenske nalepke, tapete ter dekorativne folije.",
    link: "/service-details",
  },
  {
    category: "Reklama",
    number: "03",
    title: "Reklamni izdelki",
    description:
      "Transparenti, zastave, roll-up stojala, pop-up stene in druga reklamna oprema.",
    link: "/service-details",
  },
  {
    category: "3D napisi",
    number: "04",
    title: "Napisi in table",
    description:
      "3D napisi, table iz pleksi stekla, reklamne table, CNC izrez in laserski razrez.",
    link: "/service-details",
  },
  {
    category: "Embalaža",
    number: "05",
    title: "Embalaža in pakiranje",
    description:
      "Kartonska embalaža, blistri, večslojne etikete, darilne vrečke in promocijska darila.",
    link: "/service-details",
  },
];

export const ServiceAreaOne = () => {
  const { content } = useCmsContent("home");
  const serviceItems = (content?.services?.items || DEFAULT_SERVICES).map((item, i) => ({
    ...item,
    bgClass: `service-img-${i + 1}`,
  }));

  useEffect(() => {
    $(".service__item-8").on("mouseenter", function () {
      $(this).addClass("active").siblings().removeClass("active");
      $("#service-bg-img").removeClass().addClass($(this).attr("rel"));
    });
  }, []);

  return (
    <div className="td-service-area fix bg-position mb-130 p-relative">
      <div className="container-fluid g-0">
        {/* bg images */}
        <div className="service__slider-8">
          <div id="service-bg-img" className="service-img-2">
            {bgImages.map((bg, index) => (
              <div
                key={index}
                className={`service-bg service-img-${index + 1}`}
                style={{ backgroundImage: `url(${bg})` }}
                data-editable={`service-${index}-bg`}
                data-editable-type="bg-image"
                data-dimensions="1920x1280"
              ></div>
            ))}
          </div>
        </div>

        {/* service items */}
        <div className="row gx-0 row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">
          {serviceItems.map((item, index) => (
            <div
              key={index}
              className="col td-service-border service__item-8"
              rel={item.bgClass}
            >
              <div className="td-service-wrap p-relative">
                <span
                  className={`td-service-cetagory td-service-cetagory-${
                    index + 1
                  }`}
                >
                  {item.category}
                </span>
                <h2 className="td-service-number">{item.number}</h2>
                <div className="td-service-content">
                  <h4 className="td-service-title" data-editable={`service-${index}-title`}>
                    <Link to={item.link}>{item.title}</Link>
                  </h4>
                  <div className="td-service-content-inner">
                    <p className="td-service-content-para mb-45" data-editable={`service-${index}-desc`}>
                      {item.description}
                    </p>
                    <div className="td-service-btn">
                      <Link
                        className="td-btn td-btn-2 td-left-right"
                        to={item.link}
                      >
                        Več
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
