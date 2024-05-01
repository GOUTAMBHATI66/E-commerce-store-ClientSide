import React from "react";
import CategoryCartSkeleton from "./CategoryCartSkeleton";

const CategorySkeleton = () => {
  const array = Array.from({ length: 8 }, (_, index) => index + 1);
  // console.log(array);

  return (
    <div className="grid grid-cols-1 min-[500px]:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
      {array.map((item) => (
        <div key={item} className="flex flex-col gap-2">
          <CategoryCartSkeleton />
        </div>
      ))}
    </div>
  );
};

export default CategorySkeleton;
