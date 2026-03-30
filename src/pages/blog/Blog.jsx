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
      tag: "Tisk",
      href: "/blog-details",
      title: "6 prednosti tiska na steklo, ki jih morate poznati",
      description:
        "Tisk na steklo je ena izmed novejših tehnik, ki ponuja izjemne možnosti za dekoracijo in označevanje steklenih površin. Odkrijte, zakaj je ta metoda vedno bolj priljubljena.",
      userImage: userImage1,
      userName: "Tisk Šepic",
      date: "2024",
      likes: 15,
      shares: 5,
    },
    {
      src: blogImage2,
      tag: "Nasveti",
      href: "/blog-details",
      title: "12 notranjih nasvetov za izbiro prave tiskarne",
      description:
        "Izbira tiskarne je ključna odločitev, ki vpliva na kakovost vaših tiskovin. Predstavljamo vam 12 nasvetov, ki vam bodo pomagali pri izbiri zanesljivega partnerja.",
      userImage: userImage2,
      userName: "Tisk Šepic",
      date: "2024",
      likes: 28,
      shares: 12,
    },
    {
      src: blogImage3,
      tag: "Marketing",
      href: "/blog-details",
      title: "Zakaj oglaševanje ne deluje — in kako to spremeniti",
      description:
        "Mnoga podjetja vlagajo v oglaševanje, a rezultati izostanejo. Razkrijemo najpogostejše razloge, zakaj oglasi ne prinašajo pričakovanih rezultatov.",
      userImage: userImage3,
      userName: "Tisk Šepic",
      date: "2024",
      likes: 34,
      shares: 15,
    },
    {
      src: blogImage4,
      tag: "Primerjava",
      href: "/blog-details",
      title: "Digitalni ali offset tisk — kaj je prava izbira za vas?",
      description:
        "Digitalni in offset tisk imata vsak svoje prednosti. Primerjamo obe tehniki, da vam pomagamo izbrati najprimernejšo za vaš projekt in naklado.",
      userImage: userImage4,
      userName: "Tisk Šepic",
      date: "2024",
      likes: 19,
      shares: 7,
    },
    {
      src: blogImage5,
      tag: "Oglaševanje",
      href: "/blog-details",
      title: "Oglaševanje na vozilih — se resnično splača?",
      description:
        "Polepitev vozil je ena izmed najučinkovitejših oblik mobilnega oglaševanja. Preverite, kakšna je dejanska donosnost in za koga je ta oblika primerna.",
      userImage: userImage5,
      userName: "Tisk Šepic",
      date: "2024",
      likes: 22,
      shares: 9,
    },
  ];

  return (
    <Layout breadcrumbTitle={"Blog"} breadcrumbSubtitle={"Novosti in nasveti"}>
      <BlogLayout>
        {/* blogs */}
        <div className="td-postbox-wrapper td-postbox-wrapper-space">
          {blogs.map((blog, index) => (
            <BlogItem key={index} {...blog} editableId={`blog-list-${index}-img`} />
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
