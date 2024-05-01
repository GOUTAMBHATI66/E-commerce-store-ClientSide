import React, { useContext, useEffect, useState } from "react";
import Headings from "./Shared/Headings";
import ProductCard from "./Home/Products/ProductCard";
import { Context } from "../utils/context";
import CategorySkeleton from "./Skeletons/CategorySkeleton";

const Electronic = () => {
  const { electronicProducts } = useContext(Context);
  const [ElectronicsProducts, getElectronicProducts] = useState([]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledArray = shuffleArray(ElectronicsProducts);

  useEffect(() => {
    getelectronicProd();
  }, []);

  const getelectronicProd = () => {
    electronicProducts().then((res) => {
      getElectronicProducts(res.data.data);
    });
  };

  return (
    <div className=" py-10 ">
      <Headings title={"Electronic Products"} />
      <div className="container ">
        {ElectronicsProducts.length === 0 ? (
          <CategorySkeleton />
        ) : (
          <ProductCard Products={shuffledArray} />
        )}
      </div>
    </div>
  );
};

export default Electronic;
