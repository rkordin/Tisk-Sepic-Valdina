import React from "react";
import { Link } from "react-router-dom";
import serviceThumb from "../../assets/img/service/service2/thumb.png";
import roundImg from "../../assets/img/service/service2/round.png";
import logoImg from "../../assets/img/service/service2/logo.png";

export const ServiceAreaTwo = () => {
  const serviceItems = [
    {
      delay: 0.3,
      href: "/service-details",
      title: (
        <>
          Investments / <span>Online Business</span>
        </>
      ),
      imgSrc: serviceThumb,
    },
    {
      delay: 0.5,
      href: "/service-details",
      title: "Cryptocurrency / Economy / HR /",
      imgSrc: serviceThumb,
    },
    {
      delay: 0.7,
      href: "/service-details",
      title: "Researches / Marketing",
      imgSrc: serviceThumb,
    },
  ];

  return (
    <div className="td-service-area td-service-2-spacing fix td-grey-bg pt-140">
      <div className="container">
        <div className="row">
          {serviceItems.map((item, index) => (
            <div key={item.title} className="col-lg-12">
              <div
                className="td-service-2-content td-service-2-border scene p-relative wow fadeInUp"
                data-wow-delay={`${item.delay}s`}
                data-wow-duration="1s"
              >
                <h2 className="td-service-2-title">
                  <Link to={item.href}>{item.title}</Link>
                </h2>
                <div className="td-service-2-thumb">
                  <img
                    className="layer"
                    data-depth=".3"
                    src={item.imgSrc}
                    alt="service"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* circular logo */}
          <div className="col-lg-12">
            <div className="td-service-2-transparent text-center p-relative">
              <h2 className="td-transparent-title" data-text="Services">
                Services
              </h2>
              <div className="td-service-2-sercile p-relative">
                <img
                  className="td-testimonial-qoute"
                  src={roundImg}
                  alt="logo"
                />
                <img
                  className="td-testimonial-qoute-2"
                  src={logoImg}
                  alt="quote"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
