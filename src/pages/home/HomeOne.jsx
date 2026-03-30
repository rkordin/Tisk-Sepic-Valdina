import React from "react";
import { Layout } from "../../layouts/Layout";
import { HeroScroll } from "../../components/hero_sections/HeroScroll";
import { ServiceAreaOne } from "../../components/service/ServiceAreaOne";
import { AboutOne } from "../../components/about/AboutOne";
import { AwardsOne } from "../../components/awards/AwardsOne";
import { PortfolioOne } from "../../components/portfolio/PortfolioOne";
import { CircularTestimonials } from "../../components/testimonials/CircularTestimonials";
import { BrandOne } from "../../components/brands/BrandOne";
import { VideoAreaOne } from "../../components/video_areas/VideoAreaOne";
import { CounterAreaOne } from "../../components/counter_areas/CounterAreaOne";
import { TeamOne } from "../../components/teams/TeamOne";
import { BlogOne } from "../../components/blogs/BlogOne";
import { Anniversary40 } from "../../components/anniversary/Anniversary40";

export const HomeOne = () => {
  return (
    <Layout header={1} footer={1}>
      {/* hero + scroll animation */}
      <HeroScroll />

      {/* about section */}
      <AboutOne />

      {/* 40 years anniversary */}
      <Anniversary40 />

      {/* service area section */}
      <ServiceAreaOne />

      {/* awards section */}
      <AwardsOne />

      {/* portfolio section */}
      <PortfolioOne />

      {/* testimonial section */}
      <CircularTestimonials />

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
