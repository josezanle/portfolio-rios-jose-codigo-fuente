import { useEffect } from "react";
import { useLocation } from "react-router-dom";


// con este componente , hacemos Scroll haci el principio de la pagina.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}