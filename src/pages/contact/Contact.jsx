import React from "react";
import { Layout } from "../../layouts/Layout";
import { ContactMap } from "../../components/contact/ContactMap";
import { ContactFour } from "../../components/contact/ContactFour";

export const Contact = () => {
  return (
    <Layout breadcrumbTitle={"Get In Touch"} breadcrumbSubtitle={"Contact"}>
      {/* map */}
      <ContactMap />

      {/* contact form */}
      <ContactFour />
    </Layout>
  );
};
