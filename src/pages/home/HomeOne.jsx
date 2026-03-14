import React from "react";
import { Layout } from "../../layouts/Layout";
import { HeroOne } from "../../components/hero_sections/HeroOne";
import { ServiceAreaOne } from "../../components/service/ServiceAreaOne";
import { AboutOne } from "../../components/about/AboutOne";
import { AwardsOne } from "../../components/awards/AwardsOne";
import { PortfolioOne } from "../../components/portfolio/PortfolioOne";
import { TestimonialOne } from "../../components/testimonials/TestimonialOne";
import { BrandOne } from "../../components/brands/BrandOne";
import { VideoAreaOne } from "../../components/video_areas/VideoAreaOne";
import { CounterAreaOne } from "../../components/counter_areas/CounterAreaOne";
import { TeamOne } from "../../components/teams/TeamOne";
import { BlogOne } from "../../components/blogs/BlogOne";

export const HomeOne = () => {
  return (
    <Layout header={1} footer={1}>
      {/* hero section */}
      <HeroOne />

      {/* about section */}
      <AboutOne />

      {/* service area section */}
      <ServiceAreaOne />

      {/* awards section */}
      <AwardsOne />

      {/* portfolio section */}
      <PortfolioOne />

      {/* testimonial section */}
      <TestimonialOne />

      {/* brands section */}
      <BrandOne />

      {/* video section */}
      <VideoAreaOne />

      {/* counter section */}
      <CounterAreaOne />

      {/* team section */}
      <TeamOne />

      {/* blog section */}
      <BlogOne />
    </Layout>
  );
};
