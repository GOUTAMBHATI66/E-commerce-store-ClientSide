import React, { useContext, useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useNavigate, useParams } from "react-router";
import { Context } from "../utils/context";

const SingleProduct = () => {
  const navigate = useNavigate();

  const {
    singleMenProduct,
    singleWomenProduct,
    singleKidProduct,
    singleElectronicProduct,
    handleAddToBeg,
    setShowCart,
    singleProduct,
    setSingleProduct,
    setClicked,
    setSelected,
  } = useContext(Context);

  const [quantity, setQuantity] = useState(1);

  const { id, category } = useParams();
  // console.log(category);

  useEffect(() => {
    if (category === "men") getMenSingleProduct(id);
    else if (category === "women") getWomenSingleProduct(id);
    else if (category === "kids") getKidSingleProduct(id);
    else if (category === "electronics") getElectronicSingleProduct(id);
  }, []);

  const getMenSingleProduct = (id) => {
    singleMenProduct(id).then((res) => {
      setSingleProduct(res.data.data);
    });
  };

  const getWomenSingleProduct = (id) => {
    singleWomenProduct(id).then((res) => {
      setSingleProduct(res.data.data);
    });
  };

  const getKidSingleProduct = (id) => {
    singleKidProduct(id).then((res) => {
      setSingleProduct(res.data.data);
    });
  };

  const getElectronicSingleProduct = (id) => {
    singleElectronicProduct(id).then((res) => {
      setSingleProduct(res.data.data);
    });
  };

  const decreament = () => {
    setQuantity((prevQuat) => {
      if (prevQuat === 1) return 1;
      return prevQuat - 1;
    });
  };

  const increament = () => {
    setQuantity((prevQuat) => prevQuat + 1);
  };

  // singleProduct.quantity = quantity;
  // console.log(singleProduct);

  // handling click on buy now button
  const isJWT = localStorage.getItem("jwt") ? true : false;
  const handleBuyNow = () => {
    singleProduct.quantity = quantity;
    setSingleProduct(singleProduct);
    setClicked("BuyNow");
    // console.log(singleProduct);
    if (isJWT) {
      navigate("/checkout");
    } else {
      navigate("/sign-in");
    }
  };

  return (
    <>
      <div className=" py-10 ">
        <div className="container">
          <div className="flex flex-col gap-8 md:flex-row place-items-center sm:items-start sm:justify-center  ">
            <div>
              <img
                src={`${singleProduct.attributes?.img?.data[0]?.attributes?.url}`}
                className="w-[400px] rounded-md"
              />
            </div>
            <div className=" md:w-[350px] lg:w-[450px] flex flex-col gap-2">
              <p className="font-bold text-xl">
                {singleProduct?.attributes?.title}
              </p>
              <p className="font-semibold text-lg">
                &#x20B9; {singleProduct?.attributes?.Price}
              </p>
              <p className="text-sm text-gray-500 pb-3">
                {singleProduct?.attributes?.desc}
              </p>

              <div className="flex pb-4">
                <button
                  onClick={decreament}
                  className="border border-gray-400 px-4 text-2xl hover:bg-black/90 dark:hover:bg-gray-700 hover:text-white"
                >
                  -
                </button>
                <span className=" border-y border-gray-400 px-7 py-2 text-xl">
                  {quantity}
                </span>
                <button
                  onClick={increament}
                  className="border border-gray-400 px-4 text-xl hover:bg-black/90 dark:hover:bg-gray-700 hover:text-white"
                >
                  +
                </button>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    handleAddToBeg(singleProduct, quantity);
                    setShowCart(true);
                    setQuantity(1);
                  }}
                  className="flex gap-2 items-center bg-primary hover:opacity-90 text-white py-3 w-[200px] max-[450px]:w-[130px]   max-[450px]:text-sm justify-center text-lg uppercase"
                >
                  <HiOutlineShoppingBag />
                  Add to Beg
                </button>

                <button
                  onClick={() => {
                    handleBuyNow();
                    setSelected(null);
                  }}
                  className="flex gap-2 items-center bg-black hover:opacity-90 max-[450px]:w-[130px]   max-[450px]:text-sm text-white justify-center py-3 w-[200px] text-lg uppercase"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
