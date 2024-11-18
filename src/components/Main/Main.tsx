import React from "react";
import CarAnimation from "../CarAnimation";
import shippingImage from "../../assets/photos/shipping.jpg";
import { services } from "../../core/constants/services";
import { steps } from "../../core/constants/steps";
import { auctions } from "../../core/constants/auctions";
import { UIRoutes } from "../../core/types/RouterTypes";
import { useNavigate } from "react-router";

const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="mt-[17px] bg-cover bg-center h-[70vh] bg-fixed"
        style={{ backgroundImage: `url(${shippingImage})` }}
      ></div>
      <section id="services" className="px-[5vw] mt-[50px]">
        <h1 className="first-letter:text-general-text text-white text-[40px] font-semibold">
          Послуги
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[30px]">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#FFF] shadow-lg rounded-lg p-6 flex flex-col transition-transform transform hover:scale-105 group cursor-pointer"
            >
              <h3 className="text-2xl font-semibold text-[#00FF91] mb-4 group-hover:text-[#00e680]">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-6 ">{service.description}</p>
              <div className="bg-[#00FF91] text-white py-2 px-4 rounded group-hover:bg-[#00e680] mt-auto"></div>
            </div>
          ))}
        </div>
      </section>
      <section id="process" className="pr-4 md:pr-[5vw] mt-[30px] md:mt-[50px]">
        <h1 className="first-letter:text-general-text text-white text-2xl md:text-[40px] font-semibold text-center">
          Процес
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <CarAnimation />
          <div className="relative my-8 md:my-[40px] w-full md:w-auto">
            <div
              className="absolute left-4 top-0 h-full border-l-2 border-[#00FF91] hidden md:block"
              aria-hidden="true"
            ></div>
            <ul className="space-y-4 md:space-y-8 pl-6 md:pl-12">
              {steps.map((step, index) => (
                <li
                  key={index}
                  className="relative flex items-center space-x-4"
                >
                  <span className="bg-[#00FF91] w-3 h-3 md:w-4 md:h-4 rounded-full"></span>
                  <span className="text-white text-base md:text-lg font-medium">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section id="about" className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#00FF91] mb-4">Про нас</h2>
            <p className="text-gray-700 mb-4">
              Наша компанія спеціалізується на доставці та продажі автомобілів
              із США, Канади, Кореї та Європи, допомагаючи купити бажане авто
              для себе або інвестиції. Ми допоможемо доставити або ж підбрати і
              доставити авто, розмитнити, та при потребі зремонтувати та пройти
              сертифікацію.
            </p>
            <p className="text-gray-700 mb-6">
              Головна мета — забезпечити, щоб кожен залишався справді
              задоволеним, отримавши автомобіль, який відповідає всім його
              очікуванням.
            </p>
            <button className="bg-[#00FF91] text-white py-2 px-6 rounded hover:bg-[#00e680] transition">
              Дізнатися більше
            </button>
          </div>

          <div className="flex justify-center">
            <img
              src="/path/to/your-image.jpg"
              alt="Наша команда"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="mt-[50px] mb-[110px]">
        <h1 className="first-letter:text-general-text text-white text-[40px] font-semibold text-center">
          Ми працюємо <span className="text-general-text">з</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-[5vw] mt-[30px]">
          {auctions.map((auction, index) => (
            <div
              key={index}
              className="bg-[#FFF] border border-[#00FF91] rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <img
                src={auction.logo}
                alt={auction.name}
                className={`${
                  index === 2 ? "w-[45px]" : "w-20"
                } h-24 object-contain mb-4`}
              />
              <h3 className="text-xl font-semibold text-[#00FF91] text-center">
                {auction.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <div className="fixed bottom-10 right-5 focus:outline-none transform transition duration-100 ease-in-out animate-pulse hover:scale-400">
        <button
          onClick={() => navigate(`/${UIRoutes.FEEDBACK_FORM}`)}
          className="px-[20px] py-[8px] bg-general-text"
        >
          Залишити заявку
        </button>
      </div>
    </>
  );
};

export default Main;
