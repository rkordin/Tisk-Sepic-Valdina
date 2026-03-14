import { useEffect } from "react";
import $ from "jquery";
import { useLocation } from "react-router-dom";

export const useMobileMenu = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ($(".td-main-menu-content").length && $(".td-main-menu-mobile").length) {
      let navContent = document.querySelector(
        ".td-main-menu-content"
      ).outerHTML;
      let mobileNavContainer = document.querySelector(".td-main-menu-mobile");
      mobileNavContainer.innerHTML = navContent;

      let arrow = $(".td-main-menu-mobile .has-dropdown > a");

      arrow.each(function () {
        let self = $(this);
        let arrowBtn = document.createElement("BUTTON");
        arrowBtn.classList.add("dropdown-toggle-btn");
        arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";

        self.append(function () {
          return arrowBtn;
        });

        self.find("button").on("click", function (e) {
          e.preventDefault();
          let self = $(this);
          self.toggleClass("dropdown-opened");
          self.parent().toggleClass("expanded");
          self
            .parent()
            .parent()
            .addClass("dropdown-opened")
            .siblings()
            .removeClass("dropdown-opened");
          self.parent().parent().children(".td-submenu").slideToggle();
        });
      });
    }
  }, [pathname]);
};
