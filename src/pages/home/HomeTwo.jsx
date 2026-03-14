import React from "react";
import { Layout } from "../../layouts/Layout";
import { HeroTwo } from "../../components/hero_sections/HeroTwo";
import { AboutTwo } from "../../components/about/AboutTwo";
import { ServiceAreaTwo } from "../../components/service/ServiceAreaTwo";
import { AboutWorkOne } from "../../components/about/AboutWorkOne";
import { PortfolioTwo } from "../../components/portfolio/PortfolioTwo";
import { ImpressionOne } from "../../components/impressions/ImpressionOne";
import { BrandTwo } from "../../components/brands/BrandTwo";
import { TestimonialTwo } from "../../components/testimonials/TestimonialTwo";
import { ContactOne } from "../../components/contact/ContactOne";
import { BlogTwo } from "../../components/blogs/BlogTwo";

export const HomeTwo = () => {
  return (
    <Layout header={2} footer={2}>
      {/* hero */}
      <HeroTwo />

      {/* about */}
      <AboutTwo />

      {/* services */}
      <ServiceAreaTwo />

      {/* about work */}
      <AboutWorkOne />

      {/* portfolio */}
      <PortfolioTwo />

      {/* impression */}
      <ImpressionOne />

      {/* brand */}
      <BrandTwo />

      {/* testimonial */}
      <TestimonialTwo />

      {/* contact */}
      <ContactOne />

      {/* blog */}
      <BlogTwo />
    </Layout>
  );
};
