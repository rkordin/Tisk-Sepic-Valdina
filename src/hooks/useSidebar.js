import { useEffect } from "react";
import $ from "jquery";
import { useLocation } from "react-router-dom";

export const useSidebar = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    $(".td-menu-bar").on("click", function () {
      $(".tdoffcanvas").addClass("opened");
      $(".body-overlay").addClass("apply");
    });

    $(".close-btn, .body-overlay").on("click", function () {
      $(".tdoffcanvas").removeClass("opened");
      $(".body-overlay").removeClass("apply");
    });

    return () => {
      $(".td-menu-bar, .close-btn, .body-overlay").off("click");
    };
  }, [pathname]);
};
