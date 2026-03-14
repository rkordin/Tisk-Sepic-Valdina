import React from "react";

export const ContactMap = () => {
  return (
    <div className="td-map-area fix">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-lg-12">
            <div className="td-contact-map-box p-relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2790.123!2d15.1667!3d45.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLivada%2014%2C%208000%20Novo%20mesto%2C%20Slovenia!5e0!3m2!1ssl!2ssi"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="td-contact-map-logo">
                <h3>Tisk Šepic</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
