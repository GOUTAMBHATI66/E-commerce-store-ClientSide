import React from "react";
import Button from "../../Shared/Button";

const Card = ({
  gradient,
  flexItem1,
  flexItem2,
  textColor,
  title,
  title2,
  title3,
  img,
  imgSize,
  opacity,
  btnBg,
  btnTextColor,
  imgPosi1,
  imgPosi2,
  colSpan,
  category,
  width,
  height,
  widthM,
}) => {
  return (
    <div
      className={`${colSpan} ${gradient} overflow-hidden text-white rounded-3xl relative h-[320px] flex ${flexItem1} ${flexItem2} py-8 pl-5`}
    >
      <div className="z-20  mb-6">
        <div className=" flex flex-col mb-4 gap-1">
          <p className={`${textColor}`}>{title}</p>
          <p className="font-semibold text-3xl ">{title2}</p>
          <p className={`text-4xl lg:text-5xl mb-5 ${opacity} font-bold`}>
            {title3}
          </p>
          <Button
            category={category}
            bgColor={`${btnBg}`}
            textColor={`${btnTextColor}`}
          />
        </div>
      </div>
      <img
        src={img}
        className={`${imgSize} ${imgPosi1} ${imgPosi2} absolute ${width} ${height} max-[400px]:${widthM}`}
      />
    </div>
  );
};

export default Card;
