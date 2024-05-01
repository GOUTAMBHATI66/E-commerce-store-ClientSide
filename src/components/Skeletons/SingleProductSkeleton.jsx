import React from "react";
import { Skeleton } from "../ui/skeleton";

const SingleProductSkeleton = () => {
  return (
    <div className="flex flex-col gap-8 md:flex-row place-items-center sm:items-start sm:justify-center  ">
      <div>
        <Skeleton className="w-[360px] max-[450px]:w-[300px] h-[400px] rounded-md bg-gray-200/80 dark:bg-gray-800/80" />
      </div>
      <div className="md:w-[350px] lg:w-[450px] flex flex-col gap-5">
        <Skeleton className=" w-[70%] h-10  bg-gray-200/80 dark:bg-gray-800/80" />
        <Skeleton className=" w-28 h-7 bg-gray-200/80 dark:bg-gray-800/80" />
        <Skeleton className=" w-[60%] max-[450px]:w-[90%] h-40  bg-gray-200/80 dark:bg-gray-800/80" />
        <div className="flex gap-4 ">
          <Skeleton className="h-16 w-[200px] max-[450px]:w-[130px] bg-gray-200/80 dark:bg-gray-800/80 " />
          <Skeleton className=" h-16 w-[200px] max-[450px]:w-[130px] bg-gray-200/80 dark:bg-gray-800/80 " />
        </div>
      </div>
    </div>
  );
};

export default SingleProductSkeleton;
