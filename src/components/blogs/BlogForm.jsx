import React from "react";

export const BlogForm = () => {
  return (
    <div className="td-postbox-comment-form">
      <div className="td-postbox-comment-form-content mb-40 d-flex align-items-center justify-content-between">
        <h3 className="td-postbox-comment-form-title">
          Dodajte komentar
        </h3>
      </div>
      <form action="#">
        <div className="row">
          <div className="col-lg-4 col-md-4 mb-20">
            <div className="td-postbox-comment-input">
              <input type="text" placeholder="Vaše ime" />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 mb-20">
            <div className="td-postbox-comment-input">
              <input type="email" placeholder="Vaš e-mail" />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 mb-20">
            <div className="td-postbox-comment-input">
              <input type="text" placeholder="Spletna stran" />
            </div>
          </div>
          <div className="col-12 mb-20">
            <div className="td-postbox-comment-textarea">
              <textarea placeholder="Sporočilo"></textarea>
            </div>
          </div>
          <div className="col-12">
            <div className="td-postbox-comment-btn">
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
          </div>
        </div>
      </form>
    </div>
  );
};
