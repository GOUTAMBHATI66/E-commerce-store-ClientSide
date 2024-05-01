import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaMobileAlt,
  FaLocationArrow,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { Context } from "@/utils/context";

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

const Footer = () => {
  const { setSelected } = useContext(Context);

  // console.log(getNavLinks);

  return (
    <div className=" border-t dark:border-none dark:bg-gray-950 ">
      <div className="container ">
        <div className="grid md:grid-cols-3 pb-12 pt-5 ">
          {/* company details */}
          <div className="py-9 px-4 flex flex-col gap-3">
            <Link
              onClick={() => setSelected(null)}
              to="/"
              className="text-primary font-semibold text-2xl uppercase sm:text-3xl tracking-widest"
            >
              e-shop
            </Link>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24">
              We do not ask for your bank account or card details verbally and
              telephonically.
            </p>
          </div>

          {/* footer links */}
          <div className=" col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div
              className="py-9 px-4 flex flex-col gap-3
            "
            >
              <h1 className="font-bold text-xl">Important Links</h1>
              <ul className=" space-y-3">
                {NavLinks.map((item) => (
                  <li key={item.id}>
                    <Link
                      onClick={() => setSelected(item.title)}
                      to={item.link}
                      className=" text-gray-400 hover:text-black dark:hover:text-white hover:font-semibold duration-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="py-9 px-4 flex flex-col gap-3
            "
            >
              <h1 className="font-bold text-xl">Quick Links</h1>
              <ul className=" space-y-3">
                {NavLinks.map((item) => (
                  <li key={item.id}>
                    <Link
                      onClick={() => setSelected(item.title)}
                      to={item.link}
                      className=" text-gray-400 hover:text-black dark:hover:text-white hover:font-semibold duration-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-9 px-4 col-span-2 sm:col-auto">
              <h1 className="font-bold text-xl mb-3">Address</h1>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <FaLocationArrow size={14} />
                  Jaipur, Rajasthan
                </div>

                <div className="flex items-center gap-4">
                  <FaMobileAlt size={16} />
                  +91 1234567890
                </div>

                <div className="flex gap-3">
                  <FaInstagram
                    size={28}
                    className=" hover:cursor-pointer hover:text-primary duration-300"
                  />
                  <FaFacebook
                    size={28}
                    className=" hover:cursor-pointer hover:text-primary duration-300"
                  />
                  <FaLinkedin
                    size={28}
                    className=" hover:cursor-pointer hover:text-primary duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center pb-10 text-sm font-sans">
          {" "}
          &#169; 2024 E-shop All Rights Reversed.
        </p>
      </div>
    </div>
  );
};

export default Footer;
