import { useLocation, useNavigate } from "react-router-dom";
import { UIRoutes } from "../types/RouterTypes";

export const useScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const scrollToId = (id: string) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (location.pathname === `/${UIRoutes.HOME}`) {
      setTimeout(() => {
        scrollToId(sectionId);
      }, 150);
    } else {
      navigate(UIRoutes.HOME);
      setTimeout(() => {
        scrollToId(sectionId);
      }, 1600);
    }
  };

  return scrollToSection;
};
