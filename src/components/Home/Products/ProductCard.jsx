import { Context } from "@/utils/context";
import React, { useContext } from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ Products }) => {
  const { setSingleProductTitle } = useContext(Context);
  const navigate = useNavigate();
  // console.log(goutam);

  return (
    <div className="grid grid-cols-1 min-[500px]:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
      {Products.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-1 cursor-pointer "
          onClick={() => {
            setSingleProductTitle(item.attributes?.title);
            navigate(
              `product/${item.id}/ ${item.attributes?.title
                .split(" ")
                .join("-")}`
            );
          }}
        >
          <div className="relative overflow-hidden rounded-md">
            <img
              src={`${item.attributes?.img?.data[0]?.attributes?.url}`}
              className=" max-sm:h-[250px] max-sm:w-[240px] lg:h-[250px] lg:w-[240px] h-[250px] w-[240px] rounded-md  object-cover hover:scale-105 overflow-hidden transition-all duration-200  "
            />
          </div>

          <p className="font-semibold text-sm">{item.attributes?.title}</p>
          <p className="font-bold text-md">&#x20B9; {item.attributes?.Price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
