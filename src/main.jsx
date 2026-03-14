import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// necessary css
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/slick.css";
import "./assets/css/swiper-gl.min.css";
import "./assets/css/font-awesome-pro.css";
import "./assets/css/ion.rangeSlider.min.css";
import "./assets/css/spacing.css";
import "./assets/css/animate.css";
import "./assets/css/main.css";

// necessary js
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/js/nice-select.js";
import "./assets/js/parallax-scroll.js";
import "./assets/js/onpage-menu.js";
import "./assets/js/jquery-knob.js";
import "./assets/js/jquery-appear.js";
import "./assets/js/ajax-form.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
