import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useActive() {
  const [active, setActive] = useState(false);

  const {pathname} = useLocation();
  const isNotHome = pathname!=="/";

  useEffect(() => {
    function isActive() {
      if (window.scrollY > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    }

    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);



  return active || isNotHome ;
}
