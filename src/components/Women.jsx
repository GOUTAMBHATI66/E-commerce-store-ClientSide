import React, { useContext, useEffect, useState } from "react";
import Headings from "./Shared/Headings";
import ProductCard from "./Home/Products/ProductCard";
import { Context } from "../utils/context";
import CategorySkeleton from "./Skeletons/CategorySkeleton";

const Women = () => {
  const { womenProducts } = useContext(Context);
  const [WomenProducts, getWomenProducts] = useState([]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledArray = shuffleArray(WomenProducts);

  useEffect(() => {
    getwomenProducts();
  }, []);

  const getwomenProducts = () => {
    womenProducts().then((res) => {
      getWomenProducts(res.data.data);
    });
  };

  return (
    <div className=" py-10 ">
      <Headings title={"Top Products for Women"} />
      <div className="container ">
        {WomenProducts.length === 0 ? (
          <CategorySkeleton />
        ) : (
          <ProductCard Products={shuffledArray} />
        )}
      </div>
    </div>
  );
};

export default Women;
