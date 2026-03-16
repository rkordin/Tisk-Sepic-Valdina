import React from "react";
import { Layout } from "../../layouts/Layout";
import { Link } from "react-router-dom";
import teamDetailsImage from "../../assets/img/team/team5/details.jpg";

export const TeamDetails = () => {
  return (
    <Layout
      breadcrumbTitle={"Naša ekipa"}
      breadcrumbSubtitle={"Tjaša Šepic"}
    >
      <div className="td-team-details-area pt-140 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="td-team-details-thumb mb-40 mr-20">
                <img className="w-100" src={teamDetailsImage} alt="Team member" loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="td-team-details-content mb-40">
                <h3 className="td-team-details-title">Tjaša Šepic</h3>
                <span className="td-team-details-subtitle mb-35">Direktorica</span>
                <div className="td-team-details-social mb-35">
                  <span className="mb-10">
                    <a href="mailto:info@tisksepic.si">
                      <i className="fa-solid fa-envelope-open"></i>
                      info@tisksepic.si
                    </a>
                  </span>
                  <span className="mb-10">
                    <a href="tel:+38673939200">
                      <i className="fa-solid fa-phone-flip"></i> +386 7 393 92 00
                    </a>
                  </span>
                  <ul className="float-right mb-10">
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-behance"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="td-team-details-biography mb-45">
                  <h3 className="td-team-details-biography-title mb-20">
                    Biografija
                  </h3>
                  <p>
                    Tjaša Šepic vodi podjetje TISK ŠEPIC d.o.o. in nadaljuje
                    družinsko tradicijo, ki sega v leto 1980. Pod njenim
                    vodstvom se je podjetje razvilo v sodobno tiskarno z več kot
                    30 zaposlenimi, proizvodnjo na 3000 m² in certifikati ISO
                    9001, ISO 15378, FSC ter ISO 14001. Njena vizija združuje
                    tehnološko inovativnost s trajnostnim pristopom.
                  </p>
                </div>
                <div className="td-team-details-education mb-50">
                  <h3 className="td-team-details-biography-title mb-15">
                    Izkušnje
                  </h3>
                  <ul>
                    <li>
                      Vodenje tiskarskega podjetja z več kot 40-letno tradicijo
                    </li>
                    <li>
                      Uvedba sistema kakovosti ISO 9001 in ISO 15378
                    </li>
                    <li>Pridobitev FSC certifikata za trajnostno gospodarjenje</li>
                  </ul>
                </div>
                <div className="td-team-details-skill">
                  <h3 className="td-team-details-biography-title mb-15">
                    Področja
                  </h3>
                  <ul>
                    <li>
                      <Link to="#">Vodenje proizvodnje</Link>
                      <span>/</span>
                    </li>
                    <li>
                      <Link to="#">Nadzor kakovosti</Link> <span>/</span>
                    </li>
                    <li>
                      <Link to="#">Strateško načrtovanje</Link> <span>/</span>
                    </li>
                    <li>
                      <Link to="#">Odnosi s strankami</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
