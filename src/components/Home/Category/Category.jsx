import React from "react";
import Image1 from "../../../assets/Products/p-5.png";
import Image2 from "../../../assets/Category/women2.png";
import Image3 from "../../../assets/Category/Fashion.png";
import Image4 from "../../../assets/Category/gaming.png";
import Image5 from "../../../assets/Category/kid.png";
import Image6 from "../../../assets/Category/speaker.png";
import Card from "./Card";

const Category = () => {
  return (
    <div className="py-8 ">
      <div className=" container flex flex-col gap-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* first col */}
          <Card
            gradient={"bg-black/80"}
            flexItem1={"items-end"}
            textColor={"text-gray-400"}
            opacity={"opacity-20"}
            img={Image1}
            imgSize={"w-[320px]"}
            title={"Enjoy"}
            title2={"With Mordern"}
            title3={"Trend"}
            btnBg={"bg-primary"}
            btnTextColor={"text-white"}
            imgPosi1={"bottom-0"}
            imgPosi2={"right-4"}
            category={"men"}
            width={"w-[70%]"}
            height={"h-[90%]"}
            widthM={"w-[90%]"}
          />

          {/* second col */}
          <Card
            gradient={"bg-brandYellow"}
            flexItem1={"items-end"}
            textColor={"text-white"}
            opacity={"opacity-40"}
            title={"Fashion"}
            title2={"For "}
            title3={"Women"}
            img={Image2}
            imgSize={"w-[320px]"}
            btnBg={"bg-white"}
            btnTextColor={"text-brandYellow"}
            imgPosi1={"-right-7"}
            imgPosi2={"top-10"}
            category={"women"}
          />

          {/* third col */}
          <Card
            gradient={"bg-primary"}
            flexItem1={"items-end"}
            textColor={"text-white"}
            opacity={"opacity-70"}
            title={"Explore"}
            title2={"the"}
            title3={"Fashion"}
            img={Image3}
            imgSize={"w-[230px]"}
            btnBg={"bg-white"}
            btnTextColor={"text-primary"}
            imgPosi1={"-right-2 "}
            imgPosi2={"top-6"}
            colSpan={"sm:col-span-2"}
            category="men"
            width={"w-[70%]"}
            height={"w-[90%]"}
            widthM={"w-[90%]"}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* first col */}
          <Card
            gradient={"bg-gray-300"}
            flexItem1={"items-end"}
            textColor={"text-white"}
            title={"Things which"}
            title2={"Are"}
            title3={"Smart"}
            img={Image4}
            imgSize={"w-[250px]"}
            btnBg={"bg-primary"}
            btnTextColor={"text-white"}
            imgPosi1={"right-0"}
            imgPosi2={"top-12"}
            colSpan={"sm:col-span-2"}
            category={"electronics"}
          />

          {/* second col */}
          <Card
            gradient={"bg-brandGreen"}
            flexItem1={"items-end"}
            flexItem2={"sm:items-start"}
            textColor={"text-white"}
            opacity={"opacity-40"}
            img={Image5}
            imgSize={"w-250px"}
            title={"Elevate Your"}
            title2={"Child"}
            title3={"Look"}
            btnBg={"bg-white"}
            btnTextColor={"text-brandGreen"}
            imgPosi1={"bottom-4"}
            imgPosi2={"-right-12"}
            category={"kids"}
            height={"h-[80%]"}
          />

          {/* third col */}
          <Card
            gradient={"bg-brandBlue"}
            flexItem1={"items-end"}
            flexItem2={"sm:items-start"}
            textColor={"text-white"}
            opacity={"opacity-40"}
            title={"Play & Enojoy"}
            title2={"With"}
            title3={"Gadget"}
            img={Image6}
            imgSize={"w-[200px]"}
            btnBg={"bg-white"}
            btnTextColor={"text-brandBlue"}
            imgPosi1={"right-0"}
            imgPosi2={"-bottom-5"}
            category={"electronics"}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
