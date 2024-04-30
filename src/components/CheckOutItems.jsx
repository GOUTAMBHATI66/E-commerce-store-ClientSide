import React from "react";
import { IoClose } from "react-icons/io5";

const CheckOutItems = ({ item }) => {
  const subtotal = item.quantity * item.price;
  // console.log(item);

  return (
    <div className="flex gap-4 p-3 bg-gray-200/60 ">
      <div>
        <img src={`${item.imgURL}`} className="w-[90px] " />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="font-semibold text-lg flex items-center justify-between gap-2">
          <p className=" line-clamp-1 text-base">{item.title}</p>
        </div>

        <div className="flex items-center gap-1 text-sm">
          <span>{item.quantity}</span>
          <IoClose />
          <span className=" text-[#8e2de2] font-semibold">
            &#x20B9;{item.price}
          </span>
        </div>
      </div>

      <div className="font-semibold text-base"> &#x20B9;{subtotal}</div>
    </div>
  );
};

export default CheckOutItems;
