import React, { useContext, useEffect, useState } from "react";
import Headings from "./Shared/Headings";
import ProductCard from "./Home/Products/ProductCard";
import { Context } from "../utils/context";
import CategorySkeleton from "./Skeletons/CategorySkeleton";

const Kids = () => {
  const { kidsProducts } = useContext(Context);
  const [KidsProducts, getKidsProducts] = useState([]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledArray = shuffleArray(KidsProducts);

  useEffect(() => {
    getkidsProducts();
  }, []);

  const getkidsProducts = () => {
    kidsProducts().then((res) => {
      // console.log(res.data.data);
      getKidsProducts(res.data.data);
    });
  };

  return (
    <div className=" py-10 ">
      <Headings title={"Top Products for Kids"} />
      <div className="container ">
        {KidsProducts.length === 0 ? (
          <CategorySkeleton />
        ) : (
          <ProductCard Products={shuffledArray} />
        )}
      </div>
    </div>
  );
};

export default Kids;
