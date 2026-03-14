import React from "react";
import { Layout } from "../../layouts/Layout";
import { ServiceLayout } from "../../layouts/ServiceLayout";
import thumb from "../../assets/img/service/details/thumb.jpg";
import { ServiceDetailsAccordion } from "../../components/service/ServiceDetailsAccordion";
import { ServiceDetailsCircularProgress } from "../../components/service/ServiceDetailsCircularProgress";

export const ServiceDetails = () => {
  return (
    <Layout
      breadcrumbTitle={"Tax & Declaration"}
      breadcrumbSubtitle={"Single Service"}
    >
      <ServiceLayout>
        <div className="td-service-details-wrap">
          <div className="td-service-details-thumb mb-60">
            <img className="w-100" src={thumb} alt="details" />
          </div>

          <div className="td-service-details-content mb-60">
            <h3 className="td-service-details-title mb-25">Intro Details</h3>

            <p>
              A consultant is a professional who provides expert advice and
              guidance to individuals or organizations in a particular field or
              industry. Consultants are typically hired to solve problems,
              improve performance, or provide specialized knowledge that the
              client lacks internally. Consultants can work independently or as
              part of consulting firms. They may specialize in various areas
              such as management, finance, technology, human resources,
              marketing, or specific industries like healthcare, IT, or
              manufacturing.
            </p>
            <p>
              With 22 years of experience and a proven track record, we have
              become a trusted partner for startups and high-potential companies
              seeking to disrupt industries and create lasting impact. As a
              venture capital agency, we specialise in partnering with companies
              at various stages of their growth journey.
            </p>
            <p>
              As a venture capital agency, we specialise in partnering with
              companies at various stages of their growth journey. From seed
              funding to growth-stage investments, we offer tailored solutions
              that address the unique needs and challenges of each portfolio
              company.Our track record speaks for itself. We have successfully
              invested in and nurtured the growth of over 40 companies across
              diverse industries, positioning our portfolio companies as market
              leaders. Lorem ipsum dolor sit amet consectetur adipiscing diam
              tortor sit feugiat dictum eu diam euismod ultrices convallis eget
              vel velit posuere mi consequat leo egestas sed odio molestie non
              imperdiet malesuada. We are a leading venture capital firm
              committed to supporting visionary entrepreneurs and fueling the
              growth of transformative businesses.
            </p>
          </div>

          <div className="td-service-details-pogress-wrap mb-45">
            <div className="row">
              {/* circular progress */}
              <ServiceDetailsCircularProgress />

              {/* accordion */}
              <ServiceDetailsAccordion />
            </div>
          </div>

          {/* content */}
          <div className="td-service-details-content">
            <p>
              With 22 years of experience and a proven track record, we have
              become a trusted partner for startups and high-potential companies
              seeking to disrupt industries and create lasting impact. As a
              venture capital agency, we specialise in partnering with companies
              at various stages of their growth journey.
            </p>
            <p>
              A consultant is a professional who provides expert advice and
              guidance to individuals or organizations in a particular field or
              industry. Consultants are typically hired to solve problems,
              improve performance, or provide specialized knowledge that the
              client lacks internally. Consultants can work independently or as
              part of consulting firms. They may specialize in various areas
              such as management, finance, technology, human resources,
              marketing, or specific industries like healthcare, IT, or
              manufacturing.
            </p>
          </div>
        </div>
      </ServiceLayout>
    </Layout>
  );
};
