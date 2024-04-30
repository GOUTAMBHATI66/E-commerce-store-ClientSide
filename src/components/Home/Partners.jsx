import React from "react";
import brand1 from "../../assets/Brands/br-1.png";
import brand2 from "../../assets/Brands/br-2.png";
import brand3 from "../../assets/Brands/br-3.png";
import brand4 from "../../assets/Brands/br-4.png";
import brand5 from "../../assets/Brands/br-5.png";

const Partners = () => {
  return (
    <div className=" mt-20 py-8 bg-gray-200 dark:bg-white/10 hidden md:block">
      <div className="container">
        <div className="grid grid-cols-5 place-items-center opacity-50 gap-2">
          <img src={brand1} className=" w-[80px] dark:invert" />
          <img src={brand2} className=" w-[80px] dark:invert" />
          <img src={brand3} className=" w-[80px] dark:invert" />
          <img src={brand4} className=" w-[80px] dark:invert" />
          <img src={brand5} className=" w-[80px] dark:invert" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
