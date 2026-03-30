import React, { useState } from "react";
import { ScrollToTopButton } from "../components/scroll_to_top_btn/ScrollToTopButton";
import { Preloader } from "../components/preloader/Preloader";
import { ScrollProgress } from "../components/scroll_progress/ScrollProgress";
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
import { ThemeSwitcher } from "../components/theme_switcher/ThemeSwitcher";

export const Layout = ({
  children,
  header = 1,
  footer = 1,
  breadcrumbTitle,
  breadcrumbSubtitle,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Preloader */}
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Skip to content (accessibility) */}
      <a className="skip-to-content" href="#main-content">Preskoči na vsebino</a>

      {/* Theme switcher */}
      <ThemeSwitcher />

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
      <main id="main-content">{children}</main>

      {/* footers */}
      {footer === 1 && <FooterOne />}
      {footer === 2 && <FooterTwo />}
      {footer === 3 && <FooterThree />}
      {footer === 4 && <FooterFour />}
      {footer === 5 && <FooterFive />}
    </>
  );
};
