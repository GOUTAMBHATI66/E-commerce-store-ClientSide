import React from "react";
import Button from "../Shared/Button";

const Banner = ({ data }) => {
  return (
    <div className="min-h-[550px] py-7 lg:py-10 flex items-center justify-center">
      <div className="container">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 rounded-3xl items-center text-white ${data.bgColor}`}
        >
          {/* first section */}
          <div className="p-6 sm:p-8">
            <p className="text-sm">{data.discount}</p>
            <h1 className=" uppercase font-bold text-4xl md:text-5xl lg:7xl">
              {data.title}
            </h1>
            <p className=" text-sm">{data.date}</p>
          </div>
          {/* seconde section */}
          <div className="h-full flex items-center">
            <img
              src={data.image}
              className="w-[250px] md:w-[300px] mx-auto scale-125 drop-shadow-2xl object-cover"
            />
          </div>
          {/* third section */}
          <div className="flex flex-col justify-center gap-3 p-4 sm:p-6">
            <p className=" text-xl font-semibold mt-4 ">{data.title2}</p>
            <p className=" uppercase text-3xl md:text-4xl lg:text-5xl  font-bold">
              {data.title3}
            </p>
            <p className="text-sm leading-3  tracking-wide">{data.title4}</p>
            <div>
              <Button
                bgColor={"bg-white"}
                textColor={data.textColor}
                category={data.category}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
