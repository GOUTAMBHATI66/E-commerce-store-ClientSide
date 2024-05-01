import React, { useContext, useEffect, useState } from "react";
import Headings from "./Shared/Headings";
import ProductCard from "./Home/Products/ProductCard";
import { Context } from "../utils/context";
import CategorySkeleton from "./Skeletons/CategorySkeleton";

const Men = () => {
  const { menProducts } = useContext(Context);
  const [MenProducts, getMenProducts] = useState([]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledArray = shuffleArray(MenProducts);
  // console.log(shuffledArray);

  useEffect(() => {
    getmenProducts();
  }, []);

  const getmenProducts = () => {
    menProducts().then((res) => {
      getMenProducts(res.data.data);
    });
  };

  return (
    <div className=" py-10 ">
      <Headings title={"Top Products for Men"} />

      <div className="container ">
        {MenProducts.length === 0 ? (
          <CategorySkeleton />
        ) : (
          <ProductCard Products={shuffledArray} />
        )}
      </div>
    </div>
  );
};

export default Men;
