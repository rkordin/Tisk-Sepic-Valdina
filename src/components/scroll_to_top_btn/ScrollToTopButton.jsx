import React, { useEffect } from "react";
import $ from "jquery";

export const ScrollToTopButton = () => {
  useEffect(() => {
    const $btn = $("#back_to_top");
    const $btnWrapper = $(".back-to-top-wrapper");

    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 300) {
        $btnWrapper.addClass("back-to-top-btn-show");
      } else {
        $btnWrapper.removeClass("back-to-top-btn-show");
      }
    });

    $btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "300");
    });

    if ($(".td-header-height").length > 0) {
      const $headerHeight = $(".td-header-height");
      $headerHeight.each(function () {
        $(this).css({
          height: $(this).height(),
        });
      });
    }

    // Cleanup function
    return () => {
      $(window).off("scroll");
      $btn.off("click");
    };
  }, []);

  return (
    <div className="back-to-top-wrapper">
      <button id="back_to_top" type="button" className="back-to-top-btn">
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 6L6 1L1 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
