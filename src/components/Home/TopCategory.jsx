import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Context } from "../../utils/context";

const NavLinks = [
  {
    id: 1,
    link: "/men",
    title: "Men",
  },
  {
    id: 2,
    link: "/women",
    title: "Women",
  },
  {
    id: 3,
    link: "/kids",
    title: "Kids",
  },
  {
    id: 4,
    link: "/electronics",
    title: "Electronics",
  },
];

const TopCategory = () => {
  const { setShowMenuItems } = useContext(Context);

  return (
    <div className=" z-40 fixed w-full h-full top-0 left-0 bg-black/60 flex ">
      <div className=" absolute border top-0 left-0 min-[500px]:w-2/5 sm:w-1/2 md:w-2/5 lg:w-1/3 max-[500px]:w-4/5 h-full bg-white dark:text-white dark:bg-gray-950  slideAnimationleft -translate-x-full flex flex-col gap-2  ">
        {/* Header */}
        <div className="flex justify-between items-center py-4 px-6 border-b dark:border-gray-500">
          <h1 className="font-bold text-2xl">Top Links</h1>
          <IoClose
            className="text-2xl font-bold rounded-full hover:bg-black/20 dark:hover:bg-slate-600 cursor-pointer"
            onClick={() => setShowMenuItems(false)}
          />
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-4 py-4 mx-6">
          {NavLinks.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              onClick={() => setShowMenuItems(false)}
              className="text-2xl border-b py-2 px-8 font-light hover:bg-gray-200 rounded-full dark:border-gray-500 dark:hover:bg-gray-900/60"
            >
              {item.title}
            </Link>
          ))}
        </ul>
      </div>

      <div
        onClick={() => setShowMenuItems(false)}
        className="h-full w-full"
      ></div>
    </div>
  );
};

export default TopCategory;
