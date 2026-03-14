import { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";
import { useLocation } from "react-router-dom";

export const usePureCounter = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    new PureCounter();
    new PureCounter({
      filesizing: true,
      selector: ".filesizecount",
      pulse: 2,
    });
  }, [pathname]);
};
