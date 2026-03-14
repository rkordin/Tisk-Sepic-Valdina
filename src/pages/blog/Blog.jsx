import React from "react";
import { Layout } from "../../layouts/Layout";
import { BlogLayout } from "../../layouts/BlogLayout";
import { BlogItem } from "../../components/blogs/BlogItem";
import blogImage1 from "../../assets/img/blog/blogsidebar/01.jpg";
import blogImage2 from "../../assets/img/blog/blogsidebar/02.jpg";
import blogImage3 from "../../assets/img/blog/blogsidebar/03.jpg";
import blogImage4 from "../../assets/img/blog/blogsidebar/04.jpg";
import blogImage5 from "../../assets/img/blog/blogsidebar/05.jpg";
import userImage1 from "../../assets/img/blog/blogsidebar/06.jpg";
import userImage2 from "../../assets/img/blog/blogsidebar/07.jpg";
import userImage3 from "../../assets/img/blog/blogsidebar/08.jpg";
import userImage4 from "../../assets/img/blog/blogsidebar/09.jpg";
import userImage5 from "../../assets/img/blog/blogsidebar/10.jpg";

export const Blog = () => {
  const blogs = [
    {
      src: blogImage1,
      tag: "Finance",
      href: "/blog-details",
      title: "Spring is a passionate and determined group of monthly givers.",
      description:
        "A close-ended question is a type of survey question that restricts respondents to a set of answer-options to choose from. In other words, the researcher on it to provides options for you to choose.",
      userImage: userImage1,
      userName: "Miranda H.",
      date: "November 21, 2024",
      likes: 22,
      shares: 8,
    },
    {
      src: blogImage2,
      tag: "Business",
      href: "/blog-details",
      title: "Business consultants employ a variety of problem-solving methods",
      description:
        "A close-ended question is a type of survey question that restricts respondents to a set of answer-options to choose from. In other words, the researcher on it to provides options for you to choose.",
      userImage: userImage2,
      userName: "Miranda H.",
      date: "November 21, 2024",
      likes: 22,
      shares: 8,
    },
    {
      src: blogImage3,
      tag: "Consultancy",
      href: "/blog-details",
      title: "These include root cause analysis to address underlying problems",
      description:
        "A close-ended question is a type of survey question that restricts respondents to a set of answer-options to choose from. In other words, the researcher on it to provides options for you to choose.",
      userImage: userImage3,
      userName: "Miranda H.",
      date: "November 21, 2024",
      likes: 22,
      shares: 8,
    },
    {
      src: blogImage4,
      tag: "Investment",
      href: "/blog-details",
      title:
        "SWOT analysis for identifying strengths, weaknesses, opportunities",
      description:
        "A close-ended question is a type of survey question that restricts respondents to a set of answer-options to choose from. In other words, the researcher on it to provides options for you to choose.",
      userImage: userImage4,
      userName: "Miranda H.",
      date: "November 21, 2024",
      likes: 22,
      shares: 8,
    },
    {
      src: blogImage5,
      tag: "Insurance",
      href: "/blog-details",
      title:
        "Benchmarking against industry standards, data analysis for uncovering",
      description:
        "A close-ended question is a type of survey question that restricts respondents to a set of answer-options to choose from. In other words, the researcher on it to provides options for you to choose.",
      userImage: userImage5,
      userName: "Miranda H.",
      date: "November 21, 2024",
      likes: 22,
      shares: 8,
    },
  ];

  return (
    <Layout breadcrumbTitle={"News Insights"} breadcrumbSubtitle={"Blog"}>
      <BlogLayout>
        {/* blogs */}
        <div className="td-postbox-wrapper td-postbox-wrapper-space">
          {blogs.map((blog, index) => (
            <BlogItem key={index} {...blog} />
          ))}
        </div>

        {/* pagination */}
        <div className="td-pagenation text-center">
          <nav>
            <ul>
              <li>
                <a href="#">
                  <i className="fa-regular fa-arrow-left-long"></i>
                </a>
              </li>
              <li>
                <a className="active" href="#">
                  01
                </a>
              </li>
              <li>
                <a href="#">02</a>
              </li>
              <li>
                <a href="#">- -</a>
              </li>
              <li>
                <a href="#">05</a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-regular fa-arrow-right-long"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </BlogLayout>
    </Layout>
  );
};
