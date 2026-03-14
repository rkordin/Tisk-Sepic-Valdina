import React from "react";
import { Link } from "react-router-dom";
import sidebarImage1 from "../../assets/img/blog/blogsidebar/11.jpg";
import sidebarImage2 from "../../assets/img/blog/blogsidebar/12.jpg";
import sidebarImage3 from "../../assets/img/blog/blogsidebar/13.jpg";
import sidebarImage4 from "../../assets/img/blog/blogsidebar/14.jpg";

const recentPosts = [
  {
    image: sidebarImage2,
    date: "October 21, 2024",
    title: "These methods are often integrated",
  },
  {
    image: sidebarImage3,
    date: "October 21, 2024",
    title: "Customized to provide comprehensive",
  },
  {
    image: sidebarImage4,
    date: "October 21, 2024",
    title: "Solutions to business challenges.",
  },
];

const keywords = [
  { name: "Consultancy", count: 12 },
  { name: "Finance", count: 5 },
  { name: "ROI Growth", count: 25 },
  { name: "Business", count: 7 },
  { name: "Investment", count: 19 },
  { name: "Online Service", count: 2 },
  { name: "Support", count: 18 },
];

export const BlogSidebar = () => {
  return (
    <>
      <div className="col-xl-3 col-lg-3">
        <div className="td-blog-sidebar-wrapper ml-20">
          {/* search */}
          <div className="td-blog-sidebar-widget mb-50">
            <div className="td-blog-sidebar-widget-content">
              <h3 className="td-blog-sidebar-title mb-30">Search Here</h3>
              <div className="td-blog-sidebar-search">
                <form action="#">
                  <div className="td-blog-sidebar-input">
                    <input type="email" placeholder="Keywords" />
                    <button type="button">
                      <i className="fa-sharp fa-regular fa-magnifying-glass"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* recent post */}
          <div className="td-blog-sidebar-widget mb-50">
            <div className="td-blog-sidebar-widget-content">
              <h3 className="td-blog-sidebar-title mb-30">Recent Post</h3>
              {recentPosts.map((post, index) => (
                <div key={index} className="td-blog-post mb-25">
                  <div className="td-blog-post-thumb">
                    <Link to="/blog-details">
                      <img src={post.image} alt="" />
                    </Link>
                  </div>
                  <div className="td-blog-post-content">
                    <div className="td-blog-post-meta">
                      <span>
                        <i className="fa-light fa-calendar-days"></i>{" "}
                        {post.date}
                      </span>
                    </div>
                    <h5 className="td-blog-post-title">
                      <Link to="/blog-details">{post.title}</Link>
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* popular keyword */}
          <div className="td-blog-sidebar-widget mb-50">
            <div className="td-blog-sidebar-widget-content">
              <h3 className="td-blog-sidebar-title mb-15">Popular Keyword</h3>
              <ul>
                {keywords.map((keyword, index) => (
                  <li key={index}>
                    <a href="#">
                      {keyword.name} <span>({keyword.count})</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ads banner */}
          <div className="td-blog-sidebar-widget">
            <div className="td-blog-sidebar-ads">
              <div className="td-blog-sidebar-ads-thumb p-relative">
                <img className="w-100" src={sidebarImage1} alt="thumb" />
                <h4 className="td-blog-sidebar-ads-title">Ads Banner</h4>
                <h2 className="td-blog-sidebar-ads-transparent">Tisk Šepic</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
