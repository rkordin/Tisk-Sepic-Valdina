import React, { useEffect } from "react";
import $ from "jquery";
import AboutA from "../../assets/img/about/a.png";
import About1 from "../../assets/img/about/01.jpg";
import About2 from "../../assets/img/about/02.jpg";
import About3 from "../../assets/img/about/03.jpg";
import { Link } from "react-router-dom";

export const AboutOne = () => {
  const panelData = [
    {
      id: "01",
      title: "Tradicija",
      image: About1,
      linkTitle: "Več kot 40 let izkušenj v tiskarski industriji.",
      description:
        "Družinsko podjetje, ki raste in se uči že od leta 1980.",
      childClass: "child-one",
    },
    {
      id: "02",
      title: "Tehnologija",
      image: About2,
      linkTitle: "Sodobna oprema za najzahtevnejše projekte.",
      description:
        "Clean Room, CNC, laser in najsodobnejša tiskarska tehnologija.",
      childClass: "child-two",
    },
    {
      id: "03",
      title: "Kakovost",
      image: About3,
      linkTitle: "Certificirana kakovost na vsakem koraku.",
      description:
        "ISO 9001, ISO 15378, FSC in ISO 14001 certificirani procesi.",
      childClass: "child-three",
      isActive: true,
    },
  ];

  useEffect(() => {
    function mediaSize() {
      if (window.matchMedia("(min-width: 768px)").matches) {
        $(".col-custom").on("click", function () {
          $(".col-custom").removeClass("active");
          $(this).addClass("active");
        });
      } else {
        $(".col-custom").addClass("active");
      }
    }

    mediaSize();
    $(window).on("resize", mediaSize);

    // Cleanup function
    return () => {
      $(window).off("resize", mediaSize);
      $(".col-custom").off("click");
    };
  }, []);

  return (
    <div className="td-about-area fix pt-145 pb-120">
      <div className="container">
        <div className="row">
          {/* left side */}
          <div className="col-xl-6 col-lg-7 col-md-12 mb-30">
            <div
              className="row-custom-wrapper wow fadeInLeft"
              data-wow-delay=".4s"
              data-wow-duration="1s"
            >
              <div className="row-custom">
                {panelData.map((x, i, arr) => {
                  const lastItem = i === arr.length - 1;

                  return (
                    <div
                      key={x.id}
                      className={`col-custom ${lastItem ? "active" : ""}`}
                    >
                      <div className="td-panel-item">
                        <div className="td-panel-content">
                          <span>{x.id}.</span>
                          <h4 className={`td-panel-title ${x.childClass}`}>
                            {x.title}
                          </h4>
                        </div>
                      </div>
                      <div className="td-panel-item-2">
                        <div className="td-panel-content-2">
                          <div className="td-panel-thumb">
                            <img className="w-100" src={x.image} alt="thumb" />
                          </div>
                          <div className="td-panel-content-inner fix p-relative">
                            <span className="td-panel-shape">{x.id}</span>
                            <h4 className="td-panel-title-2 mb-10">
                              <Link to="/about">{x.linkTitle}</Link>
                            </h4>
                            <p className="mb-160">{x.description}</p>
                            <div className="td-panel-btn">
                              <Link
                                className="td-btn td-left-right"
                                to="/about"
                              >
                                Več o nas
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
                  );
                })}
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="col-xl-6 col-lg-5 mb-30">
            <div
              className="td-about-content-wrap p-relative ml-45 wow fadeInRight"
              data-wow-delay=".4s"
              data-wow-duration="1s"
            >
              <img
                className="td-about-text-big d-none d-xl-block"
                src={AboutA}
                alt="a"
              />
              <span className="td-section-title-pre mb-10">O nas</span>
              <h2 className="td-section-title td-about-right-space">
                Družinsko podjetje z več kot 40-letno tradicijo
              </h2>
              <p className="td-about-para pr-10">
                V podjetju Tisk Šepic rastemo in se učimo že več kot 40 let.
                Z visokimi standardi kakovosti želimo zadovoljiti potrebe
                vsakega kupca. Naša tiskarna ponuja celoten spekter tiskarskih
                in grafičnih storitev na enem mestu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
