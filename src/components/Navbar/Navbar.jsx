import React, { useContext, useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import DarkMode from "./DarkMode";
import Cart from "../Home/Cart/Cart";
import TopCategory from "../Home/TopCategory";
import { Context } from "../../utils/context";
import { RiUserLine } from "react-icons/ri";
import { PiSignOut } from "react-icons/pi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

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

const Navbar = () => {
  const {
    showCart,
    setShowCart,
    showMenuItems,
    setShowMenuItems,
    cartItems,
    theme,
    selected,
    setSelected,
  } = useContext(Context);

  const isSingIn = localStorage.getItem("jwt") ? true : false;
  const userObj = JSON.parse(localStorage.getItem("user"));

  // console.log(userObj);

  // handling sign out button
  const navigate = useNavigate();
  const onSingOut = () => {
    localStorage.clear();
    navigate("/");
    setSelected(null);
    toast("You sign out just now");
  };

  return (
    <>
      <div className=" relative z-40 mb-4 shadow-lg  dark:shadow-slate-800  ">
        <div className="py-4">
          <div className="container flex justify-between items-center ">
            {/* Logo and Links section */}
            <div className="flex items-center gap-4 ">
              <div className="flex gap-4 items-center">
                <HiMiniBars3CenterLeft
                  onClick={() => setShowMenuItems(true)}
                  className=" md:hidden text-2xl text-gray-600 dark:text-gray-400 hover:scale-110 hover:text-black hover:dark:text-gray-300 cursor-pointer"
                />
                <Link
                  onClick={() => {
                    setSelected(null);
                  }}
                  to="/"
                  className="text-primary font-semibold text-2xl uppercase sm:text-3xl tracking-widest"
                >
                  e-shop
                </Link>
              </div>

              {/* Menu items */}
              <div className="hidden md:block">
                <ul className="flex items-center gap-4 lg:gap-2">
                  {NavLinks.map((data) => (
                    <li
                      key={data.id}
                      onClick={() => {
                        setSelected(data.title);
                      }}
                    >
                      <Link
                        to={data.link}
                        className={`inline-block px-1 lg:px-4 font-semibold text-gray-500 hover:text-black/80 dark:hover:text-white duration-200 ${
                          theme === "light" && data.title === selected
                            ? " text-gray-950 text-xl "
                            : ""
                        } ${
                          theme === "dark" && data.title === selected
                            ? " text-slate-100 text-xl"
                            : ""
                        }  `}
                      >
                        {data.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Navbar Right section */}
            <div className="flex items-center justify-between gap-2 max-[450px]:gap-0">
              {/* Search Bar section */}
              <div className="relative group cursor-pointer">
                <input
                  type="text"
                  placeholder="Search For Products"
                  className="search-bar placeholder:font-normal pr-10 hidden lg:block"
                />
                <IoMdSearch className="text-xl max-[450px]:text-lg text-gray-600 dark:text-gray-400 absolute top-1/2 right-0 lg:right-2 -translate-y-1/2 group-hover:text-primary duration-200" />
              </div>

              {/* Cart-button section */}
              <button
                className="relative p-3"
                onClick={() => {
                  setShowCart(true);
                }}
              >
                <HiOutlineShoppingBag className="text-xl max-[450px]:text-lg text-gray-600 dark:text-gray-400 hover:scale-110 hover:text-black hover:dark:text-gray-300" />
                {cartItems.length ? (
                  <div className="absolute top-1 right-1 bg-red-500 text-white rounded-full flex items-center justify-center text-xs h-4 w-4">
                    {cartItems.length}
                  </div>
                ) : (
                  false
                )}
              </button>

              {/* Dark Mode section */}
              <DarkMode />

              {/* Authentication */}
              {isSingIn ? (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <RiUserLine className="text-xl ml-2 max-[450px]:text-lg text-gray-600 dark:text-gray-400 hover:scale-110 hover:text-black hover:dark:text-gray-300" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>{userObj.username}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Orders</DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => onSingOut()}
                      className=" bg-gray-200 dark:bg-gray-600 my-1 font-semibold"
                    >
                      <button className="flex gap-1 items-center">
                        {" "}
                        <PiSignOut className=" text-base" /> Sign Out
                      </button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link to={"/sign-in"}>
                  <button className="py-1 px-3 ml-2 bg-black/70 text-white/95 rounded-md font-semibold dark:bg-gray-700 hover:bg-black/90 dark:hover:bg-gray-600">
                    Sign In
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {showCart && <Cart />}
      {showMenuItems && <TopCategory />}
    </>
  );
};

export default Navbar;
