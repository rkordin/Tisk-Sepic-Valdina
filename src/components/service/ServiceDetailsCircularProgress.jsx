import React, { useEffect } from "react";
import $ from "jquery";

export const ServiceDetailsCircularProgress = () => {
  useEffect(() => {
    if (typeof $.fn.knob != "undefined") {
      $(".knob").each(function () {
        var $this = $(this),
          knobVal = $this.attr("data-rel");
        $this.knob({
          draw: function () {
            $(this.i).val(this.cv + "%");
          },
        });

        $this.appear(
          function () {
            $({
              value: 0,
            }).animate(
              {
                value: knobVal,
              },
              {
                duration: 2000,
                easing: "swing",
                step: function () {
                  $this.val(Math.ceil(this.value)).trigger("change");
                },
              }
            );
          },
          {
            accX: 0,
            accY: -150,
          }
        );
      });
    }
  }, []);

  return (
    <div className="col-xl-3 col-lg-4 col-md-3">
      <div className="td-service-details-pogress-wrapper">
        <div className="td-service-details-pogress-quality">
          <div className="td-service-details-pogress">
            <input
              type="text"
              className="knob"
              value="0"
              data-angleoffset="180"
              data-rel="75%"
              data-linecap="round"
              data-width="150"
              data-height="150"
              data-bgcolor="#edf1f6"
              data-fgcolor="#F79C18"
              data-thickness=".10"
              data-readonly="true"
              disabled
            />
          </div>
          <h3 className="td-service-quality-title">Kakovost tiska</h3>
        </div>
        <div className="td-service-details-pogress-quality">
          <div className="td-service-details-pogress">
            <input
              type="text"
              className="knob"
              value="0"
              data-angleoffset="-50"
              data-rel="34"
              data-linecap="round"
              data-width="150"
              data-height="150"
              data-bgcolor="#edf1f6"
              data-fgcolor="#F79C18"
              data-thickness=".10"
              data-readonly="true"
              disabled
            />
          </div>
          <h3 className="td-service-quality-title">Zadovoljstvo strank</h3>
        </div>
      </div>
    </div>
  );
};
