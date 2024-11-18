import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChildRoutes, UIRoutes } from "../../core/types/RouterTypes";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

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
    <div className="flex flex-wrap items-center justify-between py-4 px-5 lg:px-[5vw]">
      <Link
        to={`${UIRoutes.HOME}`}
        className="text-general-text font-semibold text-2xl sm:text-3xl lg:text-[40px] cursor-pointer"
        onClick={() => setMenuOpen(false)}
      >
        CarGo
      </Link>

      <div
        className="lg:hidden text-white text-3xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <div
        className={` ${
          menuOpen ? "block" : "hidden"
        } lg:flex w-full lg:w-auto mt-4 lg:mt-0`}
      >
        <nav className="w-full lg:w-auto flex flex-col lg:flex-row items-center gap-5 lg:gap-[20px]">
          <ul className="flex flex-col lg:flex-row items-center gap-5 lg:gap-[20px] w-full lg:w-auto">
            <li className="text-white text-lg lg:text-[22px] hover:text-general-text cursor-pointer">
              <span
                onClick={() => {
                  scrollToSection("services");
                  setMenuOpen(false);
                }}
              >
                Послуги
              </span>
            </li>
            <li className="text-white text-lg lg:text-[22px] hover:text-general-text cursor-pointer">
              <span
                onClick={() => {
                  scrollToSection("process");
                  setMenuOpen(false);
                }}
              >
                Процес
              </span>
            </li>
            <li className="text-white text-lg lg:text-[22px] hover:text-general-text cursor-pointer">
              <span
                onClick={() => {
                  scrollToSection("about");
                  setMenuOpen(false);
                }}
              >
                Про нас
              </span>
            </li>
            <li className="text-white text-lg lg:text-[22px] hover:text-general-text cursor-pointer">
              <span
                onClick={() => {
                  scrollToSection("contacts");
                  setMenuOpen(false);
                }}
              >
                Контакти
              </span>
            </li>
          </ul>
        </nav>

        <div className="flex justify-center lg:justify-start w-full lg:w-auto mt-4 lg:mt-0">
          <button
            onClick={() => {
              navigate(`/${UIRoutes.AUTH}/${ChildRoutes.LOGIN}`);
              setMenuOpen(false);
            }}
            className="border-[2px] border-white text-white text-base lg:text-[20px] py-[4px] px-[15px] hover:text-general-text hover:border-general-text transition duration-700 ease-in-out mx-auto lg:ml-[20px]"
          >
            Увійти
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
