import { useEffect } from "react";
import { initGA, logPageView } from "../analytics";

export const useAnalytics = () => {
  useEffect(() => {
    initGA();
    logPageView(window.location.pathname + window.location.search);
  }, []);
};
