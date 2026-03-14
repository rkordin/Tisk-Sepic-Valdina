import React from "react";
import { ServiceNavigation } from "../components/service/ServiceNavigation";
import { ServiceSidebar } from "../components/service/ServiceSidebar";

export const ServiceLayout = ({ children }) => {
  return (
    <div className="td-seervice-details-area pt-140">
      <div className="container">
        <div className="row">
          {/* left */}
          <div className="col-lg-8 mb-60">{children}</div>

          {/* sidebar */}
          <div className="col-lg-4">
            <ServiceSidebar />
          </div>
        </div>

        {/*  navigation */}
        <ServiceNavigation />
      </div>
    </div>
  );
};
