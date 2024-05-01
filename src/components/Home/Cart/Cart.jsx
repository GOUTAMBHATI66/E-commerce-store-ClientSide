import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../../utils/context";

const Cart = () => {
  const { cartItems, totalAmount, setShowCart, setSelected, setClicked } =
    useContext(Context);

  const navigate = useNavigate();

  const isJWT = localStorage.getItem("jwt") ? true : false;
  const handleClickToBuy = () => {
    setClicked("ClickToBuy");
    if (isJWT) {
      navigate("/checkout");
    } else {
      navigate("/sign-in");
    }
  };

  return (
    <div
      className="z-40 w-full h-full top-0 left-0 fixed 
      bg-black/40
       "
    >
      <div
        className="min-[501px]:w-2/5 sm:w-1/2 md:w-3/5 lg:w-2/3 max-[500px]:w-1/5 "
        onClick={() => {
          console.log("Kya hua");
          setShowCart(false);
        }}
      ></div>
      <div
        className={`h-full flex flex-col gap-2 absolute top-0 right-0 bg-white dark:text-white min-[500px]:w-3/5 sm:w-1/2 dark:bg-gray-950 md:w-2/5 lg:w-1/3 max-[500px]:w-4/5 translate-x-full 
           slideAnimationIn
         `}
      >
        {/* Heading of Cart */}
        <div className="flex justify-between items-center py-4 mx-6 border-b dark:border-gray-500">
          <h1 className="font-bold text-2xl">Cart</h1>
          <IoClose
            className="text-2xl font-bold cursor-pointer rounded-full hover:bg-black/20 dark:hover:bg-slate-600"
            onClick={() => {
              setShowCart(false);
            }}
          />
        </div>

        {cartItems.length ? (
          <div className="flex flex-col justify-between h-full overflow-y-scroll custome-slidebar scroll-smooth w-full ">
            <div className="flex flex-col h-[77%] w-full gap-2 overflow-y-scroll custome-slidebar scroll-smooth">
              {/* first item of cart */}
              {cartItems.map((item) => (
                <CartItem key={item.title} item={item} />
              ))}
            </div>

            {/* footer of Cart */}
            <div className="flex w-full h-[20%] flex-col gap-6 border-t dark:border-gray-500 px-6 py-8 lg:py-5">
              <div className="flex justify-between items-center">
                <span className=" uppercase text-lg font-semibold">
                  Subtotal:
                </span>
                <span className="text-lg text-[#8e2de2] dark:text-gray-500 font-semibold">
                  &#x20B9; {totalAmount}
                </span>
              </div>

              <button
                onClick={() => {
                  setShowCart(false);
                  handleClickToBuy();
                }}
                className="bg-black rounded-full hover:bg-black/90 dark:bg-gray-800 hover:dark:bg-gray-700 uppercase text-white py-2 text-lg text-center"
              >
                Click to buy
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-1 justify-center items-center max-[450px]:px-3  ">
            <BsCartX size={72} className=" text-gray-400 mb-4" />
            <h1 className=" font-bold text-lg ">Hey, it feels so light!</h1>
            <p className="text-sm max-[450px]:text-xs">
              There is nothing in your bag, Let's add some items.
            </p>
            <Link
              to={"/"}
              onClick={() => {
                setSelected(null);
                setShowCart(false);
              }}
            >
              <button className=" uppercase rounded-full text-white py-2 px-4 mt-4 hover:scale-95 duration-200 bg-primary">
                Return to Shop
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
