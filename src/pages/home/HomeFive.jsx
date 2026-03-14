import React from "react";
import { Layout } from "../../layouts/Layout";
import { HeroFive } from "../../components/hero_sections/HeroFive";
import { ServiceAreaFive } from "../../components/service/ServiceAreaFive";
import { VideoAreaFour } from "../../components/video_areas/VideoAreaFour";
import { CtaOne } from "../../components/cta/CtaOne";
import { TeamThree } from "../../components/teams/TeamThree";
import { PortfolioFour } from "../../components/portfolio/PortfolioFour";
import { TestimonialFive } from "../../components/testimonials/TestimonialFive";
import { FaqThree } from "../../components/faq/FaqThree";
import { BlogThree } from "../../components/blogs/BlogThree";
import { SubscribeTwo } from "../../components/subscribe/SubscribeTwo";

export const HomeFive = () => {
  return (
    <Layout header={5} footer={5}>
      {/* hero */}
      <HeroFive />

      {/* service */}
      <ServiceAreaFive />

      {/* video */}
      <VideoAreaFour />

      {/* cta area */}
      <CtaOne />

      {/* team */}
      <TeamThree />

      {/* portfolio */}
      <PortfolioFour />

      {/* testimonial */}
      <TestimonialFive />

      {/* faq */}
      <FaqThree />

      {/* blog */}
      <BlogThree />

      {/* subscribe */}
      <SubscribeTwo />
    </Layout>
  );
};
