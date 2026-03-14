import React from "react";
import { Layout } from "../../layouts/Layout";
import { ServiceAreaSix } from "../../components/service/ServiceAreaSix";
import { TextSliderTwo } from "../../components/text_slider/TextSliderTwo";
import { ContactTwo } from "../../components/contact/ContactTwo";

export const Service = () => {
  return (
    <Layout breadcrumbTitle={"Storitve"} breadcrumbSubtitle={"Kaj ponujamo"}>
      {/* services */}
      <ServiceAreaSix />

      {/* text slider */}
      <TextSliderTwo />

      {/* contact */}
      <ContactTwo />
    </Layout>
  );
};
