import React from "react";
import mustangImage from "../../assets/photos/must.png";

const CarAnimation = () => {
  return (
    <div className="relative w-full md:w-[65%] h-40 md:h-72 overflow-hidden flex items-center justify-center mt-8 md:mt-[110px]">
      <img
        src={mustangImage}
        alt="Ford Mustang"
        className="absolute left-[-300px] top-1/2 transform -translate-y-1/2 animate-moveCar sm:animate-moveCarSmall w-[250px] md:w-[600px] z-10"
      />
    </div>
  );
};

export default CarAnimation;
