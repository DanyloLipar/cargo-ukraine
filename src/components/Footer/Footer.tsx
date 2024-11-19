import React from "react";
import { UIRoutes } from "../../core/types/RouterTypes";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== UIRoutes.HOME) {
      navigate(UIRoutes.HOME);
    }
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <footer
      id="contacts"
      className="bg-[#000] text-[#FFF] py-8 px-4 border-t-[2px] border-general-text"
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg sm:text-xl font-bold mb-4 font-poppins">
            Навігація
          </h4>
          <ul className="space-y-2">
            {location.pathname !== "/" && (
              <li>
                <a href="/" className="hover:text-gray-100 font-roboto">
                  Головна
                </a>
              </li>
            )}
            <li>
              <a href="/login" className="hover:text-gray-100 font-roboto">
                Особистий кабінет
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  scrollToSection("services");
                }}
                className="hover:text-gray-100 font-roboto"
              >
                Послуги
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  scrollToSection("process");
                }}
                className="hover:text-gray-100 font-roboto"
              >
                Процес
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  scrollToSection("about");
                }}
                className="hover:text-gray-100 font-roboto"
              >
                Про нас
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold mb-4 font-poppins">
            Контактна інформація
          </h4>
          <p className="mb-2 font-roboto">
            Телефон:{" "}
            <a href="tel:+380XXXXXXXXX" className="hover:text-gray-100">
              +380 XXXXXXXX
            </a>
          </p>
          <p className="mb-2 font-roboto">
            Email:{" "}
            <a
              href="mailto:cargo.ukraine@gmail.com"
              className="hover:text-gray-100"
            >
              cargo.ukraine@gmail.com
            </a>
          </p>
          <p className="font-roboto">Адреса: м. Київ, вул. Прикладна, 10</p>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold mb-4 font-poppins">
            Ми в соціальних мережах
          </h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-100 font-roboto">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-100 font-roboto">
              Instagram
            </a>
            <a href="#" className="hover:text-gray-100 font-roboto">
              Youtube
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-200 font-roboto">
        © {new Date().getFullYear()} CarGo. Усі права захищено.
      </div>
    </footer>
  );
};

export default Footer;
