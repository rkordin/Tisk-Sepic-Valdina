import { useEffect } from "react";
import $ from "jquery";

export const useHeaderLang = () => {
  useEffect(() => {
    if ($("#td-header-lang-toggle").length > 0) {
      const handleClick = (e) => {
        if (
          document.getElementById("td-header-lang-toggle").contains(e.target)
        ) {
          $(".td-lang-list").toggleClass("td-lang-list-open");
        } else {
          $(".td-lang-list").removeClass("td-lang-list-open");
        }
      };

      window.addEventListener("click", handleClick);

      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener("click", handleClick);
      };
    }
  }, []);
};

export const useHeaderSticky = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const headerSticky = document.getElementById("header-sticky");

      if (headerSticky) {
        if (scroll < 100) {
          headerSticky.classList.remove("td-header-sticky");
        } else {
          headerSticky.classList.add("td-header-sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};
