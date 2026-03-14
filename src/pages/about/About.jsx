import React from "react";
import { Layout } from "../../layouts/Layout";
import { AboutFive } from "../../components/about/AboutFive";
import { HistoryOne } from "../../components/history/HistoryOne";
import { TeamFour } from "../../components/teams/TeamFour";
import { BrandTwo } from "../../components/brands/BrandTwo";

export const About = () => {
  return (
    <Layout breadcrumbTitle={"O nas"} breadcrumbSubtitle={"O nas"}>
      {/* about */}
      <AboutFive />

      {/* history */}
      <HistoryOne />

      {/* team */}
      <TeamFour />

      {/* brand */}
      <BrandTwo />
    </Layout>
  );
};
