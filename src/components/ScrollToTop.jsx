// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // This will scroll to the top on every page change
  }, [location]);

  return null;
};

export default ScrollToTop;
