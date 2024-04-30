import { Context } from "@/utils/context";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";

const Button = ({ bgColor, textColor, category }) => {
  const navigate = useNavigate();
  const { setSelected } = useContext(Context);

  const handleNavigate = (category) => {
    if (category === "men") {
      navigate("/men");
    } else if (category === "electronics") {
      navigate("/electronics");
    } else if (category === "kids") {
      navigate("/kids");
    } else if (category === "women") {
      navigate("/women");
    }
  };

  // str.charAt(0).toUpperCase() + str.slice(1)

  return (
    <button
      className={`${bgColor} ${textColor} cursor-pointer py-2 px-5 rounded-full hover:scale-105 duration-300 relative`}
      onClick={() => {
        handleNavigate(category);
        setSelected(category.charAt(0).toUpperCase() + category.slice(1));
      }}
    >
      Shop Now
    </button>
  );
};

export default Button;
