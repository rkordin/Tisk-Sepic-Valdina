import React from "react";
import { Layout } from "../../layouts/Layout";
import { HeroThree } from "../../components/hero_sections/HeroThree";
import { ServiceAreaThree } from "../../components/service/ServiceAreaThree";
import { AboutThree } from "../../components/about/AboutThree";
import { VideoAreaTwo } from "../../components/video_areas/VideoAreaTwo";
import { ExperienceOne } from "../../components/experience/ExperienceOne";
import { FaqOne } from "../../components/faq/FaqOne";
import { TestimonialThree } from "../../components/testimonials/TestimonialThree";
import { PricingOne } from "../../components/pricing/PricingOne";
import { BusinessOne } from "../../components/business/BusinessOne";
import { ContactTwo } from "../../components/contact/ContactTwo";

export const HomeThree = () => {
  return (
    <Layout header={3} footer={3}>
      {/* hero */}
      <HeroThree />

      {/* service area */}
      <ServiceAreaThree />

      {/* about */}
      <AboutThree />

      {/* video */}
      <VideoAreaTwo />

      {/* experience */}
      <ExperienceOne />

      {/* faq */}
      <FaqOne />

      {/* testimonial */}
      <TestimonialThree />

      {/* pricing */}
      <PricingOne />

      {/* business */}
      <BusinessOne />

      {/* contact */}
      <ContactTwo />
    </Layout>
  );
};
