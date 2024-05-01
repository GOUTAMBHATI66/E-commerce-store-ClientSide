import React from "react";
import { Skeleton } from "../ui/skeleton";

const CategoryCartSkeleton = () => {
  return (
    <>
      <Skeleton className=" bg-gray-200/80 dark:bg-gray-800/80 h-[250px] w-[240px] md:w-[200px] xl:w-[250px] rounded-md" />
      <Skeleton className=" w-40 h-5 bg-gray-200/80 dark:bg-gray-800/80 rounded-md" />
      <Skeleton className=" w-40 h-5 bg-gray-200/80 dark:bg-gray-800/80 rounded-md" />
    </>
  );
};

export default CategoryCartSkeleton;
