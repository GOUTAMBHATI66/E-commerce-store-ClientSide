import React, { useContext, useEffect, useState } from "react";
import { Context } from "@/utils/context";
import CheckOutItems from "./CheckOutItems";
import CheckOutProducts from "./CheckOutProducts";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const CheckOut = () => {
  const navigate = useNavigate();
  const { singleProduct, clicked, cartItems, totalAmount } =
    useContext(Context);
  const signleProductPrice =
    singleProduct.quantity * singleProduct.attributes?.Price;
  const data = {
    title: singleProduct.attributes?.title,
    price: singleProduct.attributes?.Price,
    quantity: singleProduct.quantity,
    imgURL: singleProduct.attributes?.img?.data[0]?.attributes?.url,
  };

  useEffect(() => {
    const isJWT = localStorage.getItem("jwt") ? true : false;
    if (!isJWT) {
      navigate("/");
    }
  }, []);

  // console.log(cartItems);
  // console.log(clicked);

  // handling click on place order button
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const handlePlaceOrder = () => {
    toast("Thank you for your order! Your purchase has been confirmed.");
    navigate("/");
  };
  return (
    <div className=" fixed top-0 left-0 z-40 bg-gray-100 py-8 px-5 md:px-0 lg:px-10 h-full w-full text-black overflow-y-scroll scroll-smooth custome-slidebar">
      <p className="text-center text-5xl font-semibold font-sans mb-8  text-gray-500">
        CheckOut
      </p>
      <div className=" w-full sm:w-[90%] m-auto flex flex-col max-md:items-center md:flex-row gap-8">
        {/* Billing Details */}
        <div className=" flex flex-col gap-2 md:w-[45%] lg:w-[55%] w-full max-sm:px-5  ">
          <h2 className="pt-8 pb-3 border-b border-gray-300/80 font-semibold text-xl mb-2 ">
            Billing Details
          </h2>

          <div className="flex gap-3 min-[450px]:gap-8  w-full justify-between mb-2">
            {/* first name div */}
            <div className="w-[50%]">
              <p className="px-1 font-semibold text-sm">first name</p>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className=" outline-none border border-gray-400 py-1 px-2 w-full"
              />
            </div>

            {/* second name div */}
            <div className="w-[50%]">
              <p className="px-1 font-semibold text-sm">Last name</p>
              <input
                type="text"
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
                className=" outline-none border border-gray-400 py-1 px-2 w-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 mb-2">
            <p className=" px-1 font-semibold text-sm">Street address</p>
            <input
              className="outline-none border border-gray-400 py-1 px-2 w-full"
              placeholder="House number street number"
            />
            <input
              className="outline-none border border-gray-400 py-1 px-2 w-full"
              placeholder="Landmark"
            />
          </div>

          <div className="flex flex-col gap-1 mg-2">
            <p className=" px-1 font-semibold text-sm">City / Town</p>
            <input className="outline-none border border-gray-400 py-1 px-2 w-full" />
          </div>

          <div className="flex flex-col gap-1 mb-2">
            <p className=" px-1 font-semibold text-sm">State</p>
            <input className="outline-none border border-gray-400 py-1 px-2 w-full" />
          </div>

          <div className="flex flex-col gap-1">
            <p className=" px-1 font-semibold text-sm">Country & Region</p>
            <input
              type="Select"
              className="outline-none border border-gray-400 py-1 px-2 w-full"
              placeholder="Enter your country / region..."
            />
          </div>
        </div>

        {/* Products Details */}
        <div className=" flex flex-col gap-3 border border-gray-300 w-full md:w-[55%] lg:w-[45%] h-[90%] pb-5 px-5">
          <p className="font-semibold text-xl text-black pt-5 pb-3">
            Your Order
          </p>
          {clicked === "BuyNow" && <CheckOutItems item={data} />}
          {clicked === "BuyNow" && (
            <p className="text-xl flex justify-between font-semibold">
              Total Amount: <span>&#x20B9; {signleProductPrice}</span>
            </p>
          )}

          {clicked === "ClickToBuy" && <CheckOutProducts items={cartItems} />}
          {clicked === "ClickToBuy" && (
            <p className="text-xl flex justify-between font-semibold">
              Total Amount: <span>&#x20B9; {totalAmount}</span>
            </p>
          )}

          <p className=" font-semibold text-base">
            {" "}
            Only Cash On Delivery Available &#128578;
          </p>
          <button
            disabled={!(firstName && secondName)}
            onClick={() => handlePlaceOrder()}
            className=" bg-blue-600 hover:bg-blue-700  disabled:bg-blue-300 text-white text-center text-xl font-semibold py-2 rounded-lg "
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
