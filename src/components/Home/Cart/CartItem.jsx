import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Context } from "../../../utils/context";
import { IoClose } from "react-icons/io5";

const CartItem = ({ item }) => {
  // console.log(item);

  const { handleCartItemQuantity, handleRemoveItem } = useContext(Context);

  return (
    <div className="flex gap-4 p-3 bg-gray-200/60 dark:bg-gray-800/60">
      <div>
        <img src={`${item.imgURL}`} className="w-[130px] " />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="font-semibold text-lg flex items-center justify-between gap-2">
          <p className=" line-clamp-1 text-base">{item.title}</p>
          <MdDelete
            onClick={() => handleRemoveItem(item)}
            className=" text-xl cursor-pointer rounded-full text-red-500 hover:scale-110"
          />
        </div>

        <div className="flex">
          <button
            onClick={() => handleCartItemQuantity("decrease", item)}
            className="border border-gray-400 dark:border-gray-600 px-2 text-xl hover:bg-black/90 dark:hover:bg-gray-700 hover:text-white"
          >
            -
          </button>
          <span className=" border-y border-gray-400 dark:border-gray-600 px-3 text-xl">
            {item.quantity}
          </span>
          <button
            onClick={() => handleCartItemQuantity("increase", item)}
            className="border border-gray-400 dark:border-gray-600 px-2 text-xl hover:bg-black/90 dark:hover:bg-gray-700 hover:text-white"
          >
            +
          </button>
        </div>

        <div className="flex items-center gap-1 text-sm">
          <span>{item.quantity}</span>
          <IoClose />
          <span className=" text-[#8e2de2] dark:text-gray-400 font-semibold">
            &#x20B9;{item.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
