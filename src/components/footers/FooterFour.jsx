import React from "react";
import { Link } from "react-router-dom";
import logoWhite from "../../assets/img/logo/logo-white.png";

export const FooterFour = () => {
  return (
    <footer>
      <div className="td-footer-area td-black-bg-2 pt-120">
        <div className="td-footer-3-top pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 mb-50">
                <div className="td-footer-3-logo mb-50">
                  <Link className="mb-30 d-block" to="/">
                    <img src={logoWhite} alt="logo" />
                  </Link>
                  <p className="td-footer-4-para">
                    From strategy to delivery, we are here to make
                    <br />
                    sure your business succeeds.
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="td-footer-3-widget td-footer-4-widget ml-65 mb-50">
                  <h2 className="td-footer-3-widget-title mb-40">Menu</h2>
                  <ul>
                    <li>
                      <Link to="/company">Company</Link>
                      <Link to="/careers">Careers</Link>
                      <Link to="/press">Press Media</Link>
                      <Link to="/blog">Our Blog</Link>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="td-footer-4-widget ml-70 mb-50">
                  <h2 className="td-footer-3-widget-title mb-40">Find us</h2>
                  <div className="td-footer-4-link">
                    <a href="mailto:info@tisksepic.si">
                      <i className="fa-sharp fa-regular fa-location-dot"></i>71
                      South Los Carneros Road, California
                    </a>
                    <a href="mailto:info@tisksepic.si">
                      <i className="fa-regular fa-envelope"></i>info@tisksepic.si
                    </a>
                    <a href="tel:+51174705812">
                      <span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.4">
                            <path
                              d="M14.1947 0L15.1056 0.246075C16.2197 0.547474 17.2353 1.13562 18.051 1.95186C18.8668 2.76809 19.4542 3.78389 19.7548 4.89793L20 5.80775L18.1799 6.29896L17.9338 5.38914C17.719 4.59338 17.2993 3.86782 16.7165 3.28484C16.1337 2.70186 15.4082 2.28183 14.6124 2.06666L13.7024 1.81964L14.1947 0ZM2.2313e-05 0.20082H8.0913L9.4936 6.50827L7.73955 8.26191C8.77042 9.86697 10.1352 11.2311 11.7409 12.2613L13.4949 10.5086L19.8038 11.9106V20H18.8608C15.2305 20.0056 11.6764 18.959 8.62883 16.9867C6.38182 15.5328 4.46823 13.6197 3.01398 11.3732C1.04133 8.32633 -0.00557315 4.77308 2.2313e-05 1.14364V0.20082ZM1.91156 2.08645C2.07021 5.02801 2.9965 7.87677 4.59828 10.3493C5.90757 12.3716 7.63023 14.0938 9.65297 15.4028C12.1261 17.0043 14.9755 17.9304 17.9178 18.0889V13.4229L14.0956 12.5744L12.0455 14.625L11.4202 14.2695C9.04634 12.9207 7.08098 10.9558 5.73182 8.58246L5.37629 7.95738L7.4274 5.90769L6.57866 2.08645H1.91156ZM13.3327 3.18484L14.2437 3.43091C14.8007 3.58161 15.3085 3.87568 15.7164 4.2838C16.1243 4.69192 16.418 5.19982 16.5683 5.75684L16.8135 6.66666L14.9934 7.15787L14.7473 6.24805C14.6828 6.00931 14.5568 5.79165 14.3819 5.61679C14.207 5.44193 13.9893 5.31597 13.7505 5.25149L12.8404 5.00542L13.3327 3.18484Z"
                              fill="#E6E6E6"
                            />
                          </g>
                        </svg>
                      </span>
                      +51 174 705 812
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="td-footer-3-widget td-footer-4-widget ml-50 mb-50">
                  <h2 className="td-footer-3-widget-title mb-25">Newsletter</h2>
                  <div className="td-footer-4-form mb-30">
                    <form action="#">
                      <div className="td-footer-4-form-input p-relative mb-15">
                        <input type="email" placeholder="Business email" />
                        <button
                          className="td-footer-4-form-button"
                          type="button"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.8139 0.18487C19.902 0.273161 19.9623 0.385405 19.9872 0.50766C20.0121 0.629914 20.0005 0.756791 19.9539 0.872531L12.5438 19.3973C12.4785 19.5605 12.3694 19.7024 12.2286 19.8076C12.0878 19.9128 11.9208 19.977 11.7458 19.9934C11.5708 20.0097 11.3948 19.9774 11.2369 19.9001C11.0791 19.8228 10.9457 19.7035 10.8513 19.5552L6.80434 13.1944L0.443482 9.14738C0.294894 9.05312 0.175233 8.91965 0.0977035 8.76169C0.020174 8.60372 -0.0122101 8.42741 0.00412456 8.25221C0.0204592 8.07701 0.0848777 7.90973 0.190272 7.76882C0.295666 7.62791 0.437938 7.51886 0.601389 7.45369L19.1262 0.0460646C19.2419 -0.000527888 19.3688 -0.0120904 19.4911 0.0128133C19.6133 0.037717 19.7256 0.0979895 19.8139 0.186144V0.18487ZM8.07524 12.8225L11.5912 18.3467L17.6184 3.27934L8.07524 12.8225ZM16.7181 2.37902L1.65071 8.40623L7.17619 11.9209L16.7181 2.37902Z"
                              fill="white"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="td-footer-4-form-check">
                        <input type="checkbox" id="check" />
                        <label htmlFor="check">
                          I agree to all terms and policies
                        </label>
                      </div>
                    </form>
                  </div>
                  <div className="td-footer-4-social td-footer-3-bottom-social">
                    <ul>
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
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-behance"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="td-footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="td-footer-3-bottom-border td-footer-4-bottom-spacing">
                  <div className="row">
                    <div className="col-lg-6 col-md-5">
                      <div className="td-footer-3-bottom-copyright mb-10">
                        <p>
                          © 2024 <Link to="/">Example</Link>, All rights
                          reserved.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-7">
                      <div className="td-footer-4-bottom-condition text-right mb-10">
                        <ul>
                          <li>
                            <Link to="/privacy-policy">Privacy Policy</Link>
                          </li>
                          <li>
                            <Link to="/terms-and-conditions">
                              Terms and conditions
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
