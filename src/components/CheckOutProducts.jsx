import React from "react";
import CheckOutItems from "./CheckOutItems";

const CheckOutProducts = ({ items }) => {
  return (
    <div className="flex flex-co h-[63%] w-full  relative">
      <div className="flex flex-col h-full gap-2 w-full overflow-y-scroll custome-slidebar scroll-smooth">
        {/* first item of cart */}
        {items.map((item) => (
          <CheckOutItems key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CheckOutProducts;
