import React, { useEffect, useRef, useState } from "react";
import logoImage from "../../assets/img/logo/logo-icon.svg";
import authorImage01 from "../../assets/img/testimonial/01.png";
import authorImage02 from "../../assets/img/testimonial/02.png";
import authorImage03 from "../../assets/img/testimonial/03.png";
import authorImage04 from "../../assets/img/testimonial/04.png";
import authorImage05 from "../../assets/img/testimonial/05.png";
import authorImage06 from "../../assets/img/testimonial/06.png";
import authorImage07 from "../../assets/img/testimonial/07.png";
import { SlickSlider } from "../slick_slider/SlickSlider";
import { useCmsContent } from "../../hooks/useCmsContent";

const DEFAULT_TESTIMONIALS = [
  {
    name: "Marko Kovač",
    designation: "Direktor, Adria Mobil",
    content:
      "S Tisk Šepic sodelujemo že vrsto let. Njihova zanesljivost in kakovost tiska sta izjemni. Vedno znova nas presenetijo s hitrostjo in natančnostjo izvedbe, tudi pri najzahtevnejših projektih embalaže in katalogov.",
  },
  {
    name: "Ana Novak",
    designation: "Vodja marketinga, Krka d.d.",
    content:
      "Za farmacevtsko embalažo potrebujemo najvišje standarde kakovosti. Clean Room certificirana proizvodnja pri Tisk Šepic nam zagotavlja skladnost z vsemi regulatornimi zahtevami. Odlično partnerstvo.",
  },
  {
    name: "Peter Zupančič",
    designation: "Lastnik, Zupančič Gradnje",
    content:
      "Od vizitk do velikoformatnih plakatov — pri Tisk Šepic dobimo vse na enem mestu. Kakovost je vedno vrhunska, roki so kratki, ekipa pa izjemno odzivna. Priporočam brez zadržkov.",
  },
  {
    name: "Maja Horvat",
    designation: "Kreativna direktorica, Studio MH",
    content:
      "Kot oblikovalska agencija potrebujemo tiskarskega partnerja, ki razume naše zahteve. Tisk Šepic to odlično obvladuje — od posebnih UV efektov do slepega tiska. Rezultati so vedno nad pričakovanji.",
  },
  {
    name: "Tomaž Dolenc",
    designation: "Direktor prodaje, TPV Group",
    content:
      "Polepitve naših vozil in reklamne table so vedno brezhibne. Profesionalen pristop, korektni odnosi in zanesljiva dobava. Tisk Šepic je naš dolgoletni partner in to z razlogom.",
  },
];

export const TestimonialOne = () => {
  const { content } = useCmsContent("home");
  const cmsItems = content?.testimonials?.items || DEFAULT_TESTIMONIALS;
  // Duplicate to fill the slider (needs 8 items for the author thumbnails)
  const testimonials = [...cmsItems, ...cmsItems.slice(0, 3)];

  const authorImages = [
    { src: authorImage01, offset: false },
    { src: authorImage02, offset: true },
    { src: authorImage03, offset: false },
    { src: authorImage04, offset: true },
    { src: authorImage05, offset: false },
    { src: authorImage06, offset: true },
    { src: authorImage07, offset: false },
    { src: authorImage02, offset: true },
  ];

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const slickSettingsForTexts = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    centerMode: false,
    cssEase: "linear",
    asNavFor: nav2,
    // asNavFor: ".testimonial__slider-nav-9",
  };

  const slickSettingsForAuthors = {
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: nav1,
    // asNavFor: ".testimonial__slider-active-9",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    autoplay: false,
    speed: 100,
    autoplaySpeed: 8000,
    cssEase: "linear",
    loop: true,
    appendArrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="td-testimonial-area td-grey-bg pb-140 p-relative">
      {/* logo icon */}
      <div className="td-testimonial-qoute-wrap">
        <div className="td-testimonial-qoute-thumb p-relative">
          <img className="td-testimonial-qoute" src={logoImage} alt="Company logo" loading="lazy" />
        </div>
      </div>

      {/* header */}
      <div className="container-fluid d-none d-md-block">
        <div className="col-12">
          <div className="td-testimonial-bg-text text-center">
            <h2>Mnenja</h2>
          </div>
        </div>
      </div>

      {/* container */}
      <div className="td-testimonial-main td-testimonial-transparet">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-12">
              <div className="testimonial__slider-9 p-relative">
                <div className="row justify-content-center">
                  <div className="col-xxl-6 col-xl-7 col-lg-7">
                    <div className="testimonial__slider-active-9">
                      <SlickSlider
                        settings={slickSettingsForTexts}
                        ref={(slider) => (sliderRef1 = slider)}
                      >
                        {testimonials.map((testimonial, index) => (
                          <TestimonialItem
                            key={index}
                            index={index}
                            name={testimonial.name}
                            designation={testimonial.designation}
                            content={testimonial.content}
                          />
                        ))}
                      </SlickSlider>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col-xxl-7 col-xl-6 col-lg-7 col-md-10 col-sm-10">
                    <div className="testimonial__slider-nav-9 ml-15 mr-15 pt-30">
                      {/* authors images */}
                      <SlickSlider
                        settings={slickSettingsForAuthors}
                        ref={(slider) => (sliderRef2 = slider)}
                      >
                        {authorImages.map((image, index) => (
                          <AuthorThumbnail
                            key={index}
                            index={index}
                            imageSrc={image.src}
                            isOffset={image.offset}
                          />
                        ))}
                      </SlickSlider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialItem = ({ name, designation, content, index }) => (
  <div className="testimonial__item-9">
    <div className="td-testimonial-content text-center">
      <div className="td-testimonial-avatar mb-35">
        <h4 className="td-testimonial-avatar-title m-0" data-editable={`testimonial-${index}-name`}>{name}</h4>
        <span className="td-testimonial-avatar-designation" data-editable={`testimonial-${index}-role`}>{designation}</span>
      </div>
      <p data-editable={`testimonial-${index}-content`}>{content}</p>
    </div>
  </div>
);

const AuthorThumbnail = ({ imageSrc, isOffset, index }) => (
  <div className={`testimonial__slider-9-thumb-nav${isOffset ? " mt-35" : ""}`}>
    <div className="tp-border-loader">
      <svg
        width="116"
        height="116"
        viewBox="0 0 116 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="58" cy="58" r="56.5" strokeWidth="0"></circle>
        <circle
          cx="58"
          cy="58"
          r="56.5"
          strokeWidth="3"
          strokeLinecap="round"
          style={{
            strokeDashoffset: "-356px",
            strokeDasharray: "0px, 366px",
          }}
        ></circle>
      </svg>
    </div>
    <img src={imageSrc} alt="Testimonial author" loading="lazy" data-editable={`testimonial-author-${index}-img`} data-editable-type="image" data-dimensions="800x1198" />
  </div>
);
