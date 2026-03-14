import React from "react";
import { Layout } from "../../layouts/Layout";
import { Link } from "react-router-dom";
import thumbImg from "../../assets/img/faq/details/thumb.jpg";
import thumb2Img from "../../assets/img/faq/details/thumb2.jpg";
import thumb3Img from "../../assets/img/faq/details/thumb3.jpg";
import thumb4Img from "../../assets/img/faq/details/thumb4.jpg";
import thumb5Img from "../../assets/img/faq/details/thumb5.jpg";
import thumb6Img from "../../assets/img/faq/details/thumb6.jpg";

export const Faq = () => {
  const faqItems = [
    {
      question: "Kakšna je razlika med digitalnim in offset tiskom?",
      images: [thumbImg, thumb2Img],
      answer:
        "Digitalni tisk je najugodnejši za manjše naklade (do 500 kosov), saj odpade čas in strošek priprave. Offset tisk pa omogoča izdelavo najzahtevnejših tiskovin s kristalno jasnim motivom in je cenovno ugodnejši pri večjih nakladah (več kot 500 kosov). Pri nas vam svetujemo najprimernejšo tehniko glede na vaše potrebe.",
    },
    {
      question: "Kakšne materiale lahko potiskate?",
      images: [thumb3Img, thumb4Img],
      answer:
        "Tiskamo na širok spekter materialov: papir, karton, samolepilne folije, PVC transparente, ceradna platna, aluminij, steklo, les, blago, pleksi, akrilne plošče, dibond, forex, kappa plošče in mnoge druge. Z različnimi tiskarskimi tehnikami pokrijemo praktično vse zahteve.",
    },
    {
      question: "Ali ponujate tudi grafično oblikovanje?",
      images: [thumb5Img, thumb6Img],
      answer:
        "Da, v naš sklop storitev smo dodali tudi grafično oblikovanje. V primeru, da želite tiskovine in še nimate grafične oblike ali potrebujete nasvet, vam bo na pomoč priskočila naša ekipa. Nudimo oblikovanje vseh vrst marketinških materialov od letakov, brošur, oglasov, panojev, promocijskih daril do sejemske opreme.",
    },
    {
      question: "Kaj je Clean Room in zakaj je pomemben?",
      images: [thumbImg, thumb2Img],
      answer:
        "Clean Room je t.i. čisti prostor, ki zahteva vzdrževanje izjemno natančnih mikro-klimatskih pogojev. Nadzor tlaka, pretok zraka, temperatura in relativna zračna vlaga so v celoti računalniško krmiljena. S certifikatom ISO 15378 naš prostor za tisk v celoti ustreza najvišjim standardom za farmacevtsko, kemično, kozmetično in prehrambeno industrijo.",
    },
    {
      question: "Kakšne certifikate imate?",
      images: [thumb3Img, thumb4Img],
      answer:
        "Pridobili smo certifikat ISO 9001 za sistem vodenja kakovosti, certifikat ISO 15378 za primarne embalažne materiale za zdravila, certifikat FSC (FSC-C172697) za odgovorno upravljanje z gozdovi ter ISO 14001 za okoljsko upravljanje. Ti certifikati dokazujejo našo zavezanost h kakovosti in varovanju okolja.",
    },
    {
      question: "Kakšni so roki izdelave?",
      images: [thumb5Img, thumb6Img],
      answer:
        "Roki izdelave so odvisni od obsežnosti naročila, vrste tiska in dodelave. Pri digitalnem tisku je čas izdelave krajši, saj odpade priprava tiskarskih plošč. Za natančnejše informacije o rokih vas vabimo, da nas kontaktirate z opisom vašega projekta, da vam lahko podamo konkretno oceno.",
    },
    {
      question: "Ali izvajate tudi dodelavo tiskovin?",
      images: [thumbImg, thumb2Img],
      answer:
        "Da, ponujamo širok spekter dodelav: plastifikacijo (mat, sijaj, soft touch, antiscratch), lakiranje, toplotni tisk s široko paleto barv, slepi tisk, več vrst vezave, zgibanje, izsekovanje, lepljenje in še mnogo več. Skupaj z vami poiščemo optimalno rešitev za vaš končni izdelek.",
    },
    {
      question: "Kakšne so možnosti za tisk embalaže?",
      images: [thumb3Img, thumb4Img],
      answer:
        "Ponujamo tisk primarne in sekundarne embalaže: blisterje, sasheje, kartonsko embalažo, darilne vrečke, večslojne etikete in samolepilne nalepke. S certifikatom ISO 15378 in Clean Room-om smo posebej usposobljeni za farmacevtsko, prehrambeno in kozmetično embalažo.",
    },
    {
      question: "Ali lahko potiskate tudi vozila?",
      images: [thumb5Img, thumb6Img],
      answer:
        "Da, polepitev vozil je ena izmed naših storitev. S kvalitetnimi PVC samolepilnimi folijami lahko vaše vozilo opremimo z logotipi, napisi ali celostno grafično podobo. Polepitev vozil je učinkovita oblika mobilnega oglaševanja, ki doseže široko publiko.",
    },
    {
      question: "Kako lahko pošljem povpraševanje?",
      images: [thumbImg, thumb2Img],
      answer:
        "Povpraševanje nam lahko pošljete preko kontaktnega obrazca na naši spletni strani, po elektronski pošti na info@tisksepic.si ali nas pokličete na telefonsko številko +386 7 393 92 00. Z veseljem vam bomo svetovali in pripravili ponudbo za vaš projekt.",
    },
  ];

  const services = [
    { name: "Digitalni tisk", link: "/service-details" },
    { name: "Offset tisk", link: "/service-details" },
    { name: "Flekso tisk", link: "/service-details" },
    { name: "UV tisk", link: "/service-details" },
    { name: "Sitotisk", link: "/service-details" },
    { name: "Embalaža", link: "/service-details" },
  ];

  return (
    <Layout breadcrumbTitle={"Pogosta vprašanja"} breadcrumbSubtitle={"FAQ"}>
      <div className="td-faq-area pt-140 pb-80">
        <div className="container">
          <div className="row">
            {/* accordion */}
            <div className="col-lg-8 mb-60">
              <div
                className="accordion td-service-details-accordion"
                id="faqaccordion_image"
              >
                {faqItems.map((item, index) => (
                  <div
                    className="accordion-item td-service-details-accordion-item"
                    key={index}
                  >
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className={`accordion-button ${
                          index !== 0 ? "collapsed" : ""
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={`collapse${index}`}
                      >
                        {item.question}
                        <span className="accordion-btn"></span>
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse collapse ${
                        index === 0 ? "show" : ""
                      }`}
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#faqaccordion_image"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          {item.images.map((img, imgIndex) => (
                            <div
                              className={`col-lg-6 col-md-6 col-sm-6`}
                              key={imgIndex}
                            >
                              <div className="td-faq-thumb mb-30">
                                <img
                                  className="w-100"
                                  src={img}
                                  alt={`faq-${imgIndex + 1}`}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4 mb-20">
              <div className="td-service-details-right ml-50">
                {/* our services */}
                <div className="td-service-widget-item mb-30">
                  <h3 className="td-service-widget-title">Naše storitve</h3>
                  <ul>
                    {services.map((service, index) => (
                      <li key={index}>
                        <Link to={service.link}>
                          {service.name}
                          <i className="fa-regular fa-arrow-right-long"></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* links */}
                <div className="td-service-widget-pdf mb-30">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fa-sharp fa-solid fa-file-lines"></i>
                        Cenik storitev
                      </Link>
                      <span>
                        <i className="fa-regular fa-arrow-right-long"></i>
                      </span>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-sharp fa-solid fa-file"></i>
                        Katalog izdelkov
                      </Link>
                      <span>
                        <i className="fa-regular fa-arrow-right-long"></i>
                      </span>
                    </li>
                  </ul>
                </div>

                {/* form */}
                <div className="td-service-widget-item mb-30">
                  <h3 className="td-service-widget-title td-service-widget-title-2">
                    Kako vam lahko pomagamo?
                  </h3>
                  <form action="#">
                    <div className="td-service-widget-input mb-15">
                      <input type="text" id="name" placeholder="Vaše ime" />
                      <label htmlFor="name">
                        <i className="fa-regular fa-user"></i>
                      </label>
                    </div>
                    <div className="td-service-widget-input mb-15">
                      <input
                        type="email"
                        id="email"
                        placeholder="E-poštni naslov"
                      />
                      <label htmlFor="email">
                        <i className="fa-regular fa-envelope-open"></i>
                      </label>
                    </div>
                    <div className="td-service-widget-textarea mb-15">
                      <textarea id="textarea" placeholder="Sporočilo"></textarea>
                      <label htmlFor="textarea">
                        <i className="fa-sharp fa-light fa-pen"></i>
                      </label>
                    </div>
                    <div className="td-service-widget-form-btn">
                      <button type="button" className="td-btn td-left-right">
                        Pošlji
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
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
