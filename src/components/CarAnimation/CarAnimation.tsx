import React from "react";
import mustangImage from "../../assets/photos/must.png";

const CarAnimation = () => {
  return (
    <div className="relative w-[100%] h-72 overflow-hidden flex items-center justify-center mt-[110px] lg:w-[65%]">
      <img
        src={mustangImage}
        alt="Ford Mustang"
        className="absolute left-[-300px] top-1/2 transform -translate-y-1/2 animate-car w-[300px] ml-[20px]  sm:w-[450px] lg:w-[600px] z-10"
      />
    </div>
  );
};

export default CarAnimation;
