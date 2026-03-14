import React from "react";
import { ScrollToTopButton } from "../components/scroll_to_top_btn/ScrollToTopButton";
import { HeaderOne } from "../components/headers/HeaderOne";
import { MobileNavbar } from "../components/headers/MobileNavbar";
import { FooterOne } from "../components/footers/FooterOne";
import { HeaderTwo } from "../components/headers/HeaderTwo";
import { FooterTwo } from "../components/footers/FooterTwo";
import { HeaderThree } from "../components/headers/HeaderThree";
import { FooterThree } from "../components/footers/FooterThree";
import { HeaderFour } from "../components/headers/HeaderFour";
import { FooterFour } from "../components/footers/FooterFour";
import { HeaderFive } from "../components/headers/HeaderFive";
import { FooterFive } from "../components/footers/FooterFive";
import { Breadcrumb } from "../components/breadcrumb/Breadcrumb";

export const Layout = ({
  children,
  header = 3,
  footer = 3,
  breadcrumbTitle,
  breadcrumbSubtitle,
}) => {
  return (
    <>
      {/* Scroll-top  */}
      <ScrollToTopButton />

      {/* headers */}
      {header === 1 && <HeaderOne />}
      {header === 2 && <HeaderTwo />}
      {header === 3 && <HeaderThree />}
      {header === 4 && <HeaderFour />}
      {header === 5 && <HeaderFive />}

      {/* mobile navbar */}
      {[1, 2, 3, 4].includes(header) && <MobileNavbar />}

      {/* breadcrumb */}
      {breadcrumbTitle && breadcrumbSubtitle && (
        <Breadcrumb title={breadcrumbTitle} subtitle={breadcrumbSubtitle} />
      )}

      {/* children */}
      <main>{children}</main>

      {/* footers */}
      {footer === 1 && <FooterOne />}
      {footer === 2 && <FooterTwo />}
      {footer === 3 && <FooterThree />}
      {footer === 4 && <FooterFour />}
      {footer === 5 && <FooterFive />}
    </>
  );
};
