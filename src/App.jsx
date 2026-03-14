import { useEffect } from "react";
import { useWow } from "./hooks/useWow";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HomeOne } from "./pages/home/HomeOne";
import { useMobileMenu } from "./hooks/useMobileMenu";
import { useSidebar } from "./hooks/useSidebar";
import { usePureCounter } from "./hooks/usePureCounter";
import { About } from "./pages/about/About";
import { Portfolio } from "./pages/portfolio/Portfolio";
import { PortfolioDetails } from "./pages/portfolio/PortfolioDetails";
import { Team } from "./pages/team/Team";
import { TeamDetails } from "./pages/team/TeamDetails";
import { Faq } from "./pages/faq/Faq";
import { ErrorPage } from "./pages/error/ErrorPage";
import { Blog } from "./pages/blog/Blog";
import { BlogDetails } from "./pages/blog/BlogDetails";
import { Service } from "./pages/service/Service";
import { ServiceDetails } from "./pages/service/ServiceDetails";
import { Contact } from "./pages/contact/Contact";

function App() {
  useWow();
  useMobileMenu();
  useSidebar();
  usePureCounter();

  // on route change to top of the page
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeOne />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-details" element={<TeamDetails />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
