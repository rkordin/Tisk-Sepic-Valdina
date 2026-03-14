import React from "react";
import { Link } from "react-router-dom";
import blog01 from "../../assets/img/blog/01.jpg";
import blog02 from "../../assets/img/blog/02.jpg";
import blog03 from "../../assets/img/blog/03.jpg";

export const BlogOne = () => {
  return (
    <div className="td-blog-area pt-140 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="td-blog-title-wrap mb-75 wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <span className="td-section-title-pre mb-10">Insights</span>
              <h2 className="td-section-title">Latest news coming</h2>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-40">
            <div
              className="td-blog-wrapper wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <div className="td-blog-qoute-wrap mb-30 td-blog-qoute-bg p-relative">
                <span className="td-blog-qoute-meta">
                  June 4, 2024 / Finances
                </span>
                <h3 className="td-blog-qoute-title m-0">
                  <Link to="/blog-details">
                    There is nothing new with your old posting
                  </Link>
                </h3>
                <div className="td-blog-qoute">
                  <svg
                    width="60"
                    height="50"
                    viewBox="0 0 60 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.2032 22.6597C17.7255 22.2351 16.2477 22.0197 14.8102 22.0197C12.5904 22.0197 10.7382 22.5259 9.30195 23.1458C10.6866 18.0877 14.0128 9.36005 20.6388 8.37719C21.2525 8.28613 21.7554 7.84337 21.9228 7.24738L23.371 2.07875C23.493 1.64165 23.4207 1.17377 23.1708 0.794448C22.9209 0.415123 22.5194 0.16203 22.0694 0.100483C21.5804 0.0339131 21.0819 0 20.5879 0C12.6345 0 4.75788 8.28361 1.43416 20.1444C-0.516892 27.1029 -1.08899 37.5645 3.7169 44.1493C6.40621 47.8339 10.3297 49.8015 15.3785 49.9981C15.3993 49.9987 15.4195 49.9994 15.4402 49.9994C21.6698 49.9994 27.1938 45.813 28.8742 39.8198C29.878 36.2369 29.4243 32.4794 27.5953 29.237C25.7859 26.0309 22.8058 23.694 19.2032 22.6597Z"
                      fill="currentColor"
                    />
                    <path
                      d="M58.1982 29.2376C56.3888 26.0309 53.4087 23.694 49.8062 22.6597C48.3284 22.2351 46.8507 22.0197 45.4138 22.0197C43.194 22.0197 41.3411 22.5259 39.9049 23.1458C41.2895 18.0877 44.6158 9.36005 51.2424 8.37719C51.8561 8.28613 52.3583 7.84337 52.5263 7.24738L53.9745 2.07875C54.0966 1.64165 54.0243 1.17377 53.7744 0.794448C53.5252 0.415123 53.1236 0.16203 52.673 0.100483C52.1846 0.0339131 51.6861 0 51.1914 0C43.2381 0 35.3615 8.28361 32.0371 20.1444C30.0867 27.1029 29.5146 37.5645 34.3211 44.1506C37.0098 47.8346 40.9339 49.8028 45.9821 49.9987C46.0029 49.9994 46.023 50 46.0444 50C52.2733 50 57.798 45.8136 59.4784 39.8204C60.481 36.2375 60.0266 32.4794 58.1982 29.2376Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="td-blog-content">
                <div className="td-blog-thumb mb-30">
                  <img className="w-100" src={blog01} alt="blog" />
                </div>
                <span className="td-blog-meta">June 4, 2024 / Economy</span>
                <h3 className="td-blog-title mb-65">
                  <Link to="/blog-details">
                    Day to day work made our life simple and easy
                  </Link>
                </h3>
                <div className="td-blog-btn-wrap">
                  <Link className="td-blog-btn" to="/blog-details">
                    <svg
                      width="18"
                      height="15"
                      viewBox="0 0 18 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.3832 6.08007L11.2205 0.196711C10.9462 -0.06514 10.501 -0.0656087 10.2261 0.195539C9.95117 0.45672 9.9506 0.880717 10.2249 1.14253L16.3881 7.02653C16.6622 7.28761 16.6622 7.71244 16.3875 7.97409L10.2249 13.8575C9.95064 14.1193 9.95117 14.5433 10.2261 14.8045C10.3633 14.9348 10.5431 15 10.7227 15C10.9029 15 11.0832 14.9344 11.2206 14.8033L17.3826 8.92052C18.205 8.13724 18.205 6.86274 17.3832 6.08007Z"
                        fill="currentColor"
                      />
                      <path
                        d="M13.4655 6.83008H0.703159C0.314789 6.83008 0 7.1299 0 7.49972C0 7.86955 0.314789 8.16936 0.703159 8.16936H13.4655C13.8539 8.16936 14.1687 7.86958 14.1687 7.49972C14.1687 7.12986 13.8539 6.83008 13.4655 6.83008Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-40">
            <div
              className="td-blog-wrapper wow fadeInUp"
              data-wow-delay=".4s"
              data-wow-duration="1s"
            >
              <div className="td-blog-content mb-30">
                <div className="td-blog-thumb mb-30">
                  <img className="w-100" src={blog02} alt="blog" />
                </div>
                <span className="td-blog-meta">June 4, 2024 / Investment</span>
                <h3 className="td-blog-title mb-65">
                  <Link to="/blog-details">
                    The essential steps for business success
                  </Link>
                </h3>
                <div className="td-blog-btn-wrap">
                  <Link className="td-blog-btn" to="/blog-details">
                    <svg
                      width="18"
                      height="15"
                      viewBox="0 0 18 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.3832 6.08007L11.2205 0.196711C10.9462 -0.06514 10.501 -0.0656087 10.2261 0.195539C9.95117 0.45672 9.9506 0.880717 10.2249 1.14253L16.3881 7.02653C16.6622 7.28761 16.6622 7.71244 16.3875 7.97409L10.2249 13.8575C9.95064 14.1193 9.95117 14.5433 10.2261 14.8045C10.3633 14.9348 10.5431 15 10.7227 15C10.9029 15 11.0832 14.9344 11.2206 14.8033L17.3826 8.92052C18.205 8.13724 18.205 6.86274 17.3832 6.08007Z"
                        fill="currentColor"
                      />
                      <path
                        d="M13.4655 6.83008H0.703159C0.314789 6.83008 0 7.1299 0 7.49972C0 7.86955 0.314789 8.16936 0.703159 8.16936H13.4655C13.8539 8.16936 14.1687 7.86958 14.1687 7.49972C14.1687 7.12986 13.8539 6.83008 13.4655 6.83008Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="td-blog-qoute-wrap td-blog-qoute-bg-2 p-relative">
                <span className="td-blog-qoute-meta td-blog-qoute-meta-2">
                  June 4, 2024 / Corporate
                </span>
                <h3 className="td-blog-qoute-title td-blog-qoute-title-2 m-0">
                  <Link to="/blog-details">
                    The new way to keep track of all the projects
                  </Link>
                </h3>
                <div className="td-blog-qoute td-blog-qoute-2">
                  <svg
                    width="112"
                    height="93"
                    viewBox="0 0 112 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36.1184 42.147C33.3698 41.3573 30.6211 40.9567 27.9474 40.9567C23.8186 40.9567 20.3734 41.8982 17.702 43.0511C20.2774 33.6431 26.4642 17.4097 38.7886 15.5816C39.93 15.4122 40.8653 14.5887 41.1767 13.4801L43.8704 3.86648C44.0975 3.05347 43.9628 2.18322 43.4981 1.47767C43.0334 0.772129 42.2865 0.301375 41.4495 0.186899C40.5399 0.0630784 39.6128 0 38.6938 0C23.9005 0 9.25005 15.4075 3.06794 37.4687C-0.561028 50.4114 -1.62513 69.87 7.31382 82.1178C12.3159 88.9711 19.6137 92.6309 29.0045 92.9965C29.0431 92.9977 29.0806 92.9988 29.1192 92.9988C40.7061 92.9988 50.9808 85.2121 54.1064 74.0648C55.9735 67.4006 55.1295 60.4117 51.7277 54.3807C48.3621 48.4175 42.8191 44.0709 36.1184 42.147Z"
                      fill="currentColor"
                    />
                    <path
                      d="M108.649 54.3819C105.284 48.4175 99.7409 44.0709 93.0402 42.147C90.2916 41.3573 87.5429 40.9567 84.8704 40.9567C80.7415 40.9567 77.2952 41.8982 74.6238 43.0511C77.1992 33.6431 83.386 17.4097 95.7116 15.5816C96.853 15.4122 97.7871 14.5887 98.0997 13.4801L100.793 3.86648C101.02 3.05347 100.886 2.18322 100.421 1.47767C99.9575 0.772129 99.2106 0.301375 98.3725 0.186899C97.4641 0.0630784 96.5369 0 95.6168 0C80.8235 0 66.173 15.4075 59.9897 37.4687C56.3619 50.4114 55.2978 69.87 64.238 82.1201C69.2389 88.9723 76.5378 92.6332 85.9275 92.9977C85.9661 92.9988 86.0036 93 86.0434 93C97.6291 93 107.905 85.2133 111.031 74.0659C112.895 67.4018 112.05 60.4117 108.649 54.3819Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-40">
            <div
              className="td-blog-wrapper wow fadeInUp"
              data-wow-delay=".5s"
              data-wow-duration="1s"
            >
              <div className="td-blog-qoute-wrap mb-30 td-blog-qoute-bg p-relative">
                <span className="td-blog-qoute-meta">
                  June 4, 2024 / Analysis
                </span>
                <h3 className="td-blog-qoute-title m-0">
                  <Link to="/blog-details">
                    Make your business boom with us
                  </Link>
                </h3>
                <div className="td-blog-qoute">
                  <svg
                    width="60"
                    height="50"
                    viewBox="0 0 60 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.2032 22.6597C17.7255 22.2351 16.2477 22.0197 14.8102 22.0197C12.5904 22.0197 10.7382 22.5259 9.30195 23.1458C10.6866 18.0877 14.0128 9.36005 20.6388 8.37719C21.2525 8.28613 21.7554 7.84337 21.9228 7.24738L23.371 2.07875C23.493 1.64165 23.4207 1.17377 23.1708 0.794448C22.9209 0.415123 22.5194 0.16203 22.0694 0.100483C21.5804 0.0339131 21.0819 0 20.5879 0C12.6345 0 4.75788 8.28361 1.43416 20.1444C-0.516892 27.1029 -1.08899 37.5645 3.7169 44.1493C6.40621 47.8339 10.3297 49.8015 15.3785 49.9981C15.3993 49.9987 15.4195 49.9994 15.4402 49.9994C21.6698 49.9994 27.1938 45.813 28.8742 39.8198C29.878 36.2369 29.4243 32.4794 27.5953 29.237C25.7859 26.0309 22.8058 23.694 19.2032 22.6597Z"
                      fill="currentColor"
                    />
                    <path
                      d="M58.1982 29.2376C56.3888 26.0309 53.4087 23.694 49.8062 22.6597C48.3284 22.2351 46.8507 22.0197 45.4138 22.0197C43.194 22.0197 41.3411 22.5259 39.9049 23.1458C41.2895 18.0877 44.6158 9.36005 51.2424 8.37719C51.8561 8.28613 52.3583 7.84337 52.5263 7.24738L53.9745 2.07875C54.0966 1.64165 54.0243 1.17377 53.7744 0.794448C53.5252 0.415123 53.1236 0.16203 52.673 0.100483C52.1846 0.0339131 51.6861 0 51.1914 0C43.2381 0 35.3615 8.28361 32.0371 20.1444C30.0867 27.1029 29.5146 37.5645 34.3211 44.1506C37.0098 47.8346 40.9339 49.8028 45.9821 49.9987C46.0029 49.9994 46.023 50 46.0444 50C52.2733 50 57.798 45.8136 59.4784 39.8204C60.481 36.2375 60.0266 32.4794 58.1982 29.2376Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="td-blog-content">
                <div className="td-blog-thumb mb-30">
                  <img className="w-100" src={blog03} alt="blog" />
                </div>
                <span className="td-blog-meta">June 4, 2024 / Research</span>
                <h3 className="td-blog-title mb-65">
                  <Link to="/blog-details">
                    Business management for all future successful projects
                  </Link>
                </h3>
                <div className="td-blog-btn-wrap">
                  <Link className="td-blog-btn" to="/blog-details">
                    <svg
                      width="18"
                      height="15"
                      viewBox="0 0 18 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.3832 6.08007L11.2205 0.196711C10.9462 -0.06514 10.501 -0.0656087 10.2261 0.195539C9.95117 0.45672 9.9506 0.880717 10.2249 1.14253L16.3881 7.02653C16.6622 7.28761 16.6622 7.71244 16.3875 7.97409L10.2249 13.8575C9.95064 14.1193 9.95117 14.5433 10.2261 14.8045C10.3633 14.9348 10.5431 15 10.7227 15C10.9029 15 11.0832 14.9344 11.2206 14.8033L17.3826 8.92052C18.205 8.13724 18.205 6.86274 17.3832 6.08007Z"
                        fill="currentColor"
                      />
                      <path
                        d="M13.4655 6.83008H0.703159C0.314789 6.83008 0 7.1299 0 7.49972C0 7.86955 0.314789 8.16936 0.703159 8.16936H13.4655C13.8539 8.16936 14.1687 7.86958 14.1687 7.49972C14.1687 7.12986 13.8539 6.83008 13.4655 6.83008Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
