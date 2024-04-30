import React from "react";

const Headings = ({ title, subtitle }) => {
  return (
    <div className=" text-center mb-10 mx-auto space-y-2 max-w-[600px]">
      <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>
      <p className=" text-sm text-gray-400">{subtitle}</p>
    </div>
  );
};

export default Headings;
