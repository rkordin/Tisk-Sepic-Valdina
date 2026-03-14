import React from "react";
import { Layout } from "../../layouts/Layout";
import { HeroFour } from "../../components/hero_sections/HeroFour";
import { AboutFour } from "../../components/about/AboutFour";
import { ServiceAreaFour } from "../../components/service/ServiceAreaFour";
import { TeamTwo } from "../../components/teams/TeamTwo";
import { TestimonialFour } from "../../components/testimonials/TestimonialFour";
import { VideoAreaThree } from "../../components/video_areas/VideoAreaThree";
import { TextSliderOne } from "../../components/text_slider/TextSliderOne";
import { PortfolioThree } from "../../components/portfolio/PortfolioThree";
import { SubscribeOne } from "../../components/subscribe/SubscribeOne";
import { ChooseOne } from "../../components/choose/ChooseOne";
import { FaqTwo } from "../../components/faq/FaqTwo";
import { MapOne } from "../../components/map/MapOne";
import { ContactThree } from "../../components/contact/ContactThree";

export const HomeFour = () => {
  return (
    <Layout header={4} footer={4}>
      {/* hero */}
      <HeroFour />

      {/* about */}
      <AboutFour />

      {/* service */}
      <ServiceAreaFour />

      {/* team */}
      <TeamTwo />

      {/* testimonial */}
      <TestimonialFour />

      {/* video */}
      <VideoAreaThree />

      {/* slider */}
      <TextSliderOne />

      {/* portfolio */}
      <PortfolioThree />

      {/* subscribe */}
      <SubscribeOne />

      {/* choose */}
      <ChooseOne />

      {/* faq */}
      <FaqTwo />

      {/* map */}
      <MapOne />

      {/* contact */}
      <ContactThree />
    </Layout>
  );
};
