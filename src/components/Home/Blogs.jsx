import React from "react";
import Headings from "../Shared/Headings";
import img1 from "../../assets/Blog/blog-1.jpg";
import img2 from "../../assets/Blog/blog-2.jpg";
import img3 from "../../assets/Blog/blog-3.jpg";

const BlogData = [
  {
    id: 1,
    title: "How to choose perfect smartwatch?",
    subtitle:
      "considering compatibility, features, design, battery life, fitness and health monitoring capabilities, app ecosystem, price, reviews, and trying it out if possible",
    published: "Apr 15, 2024 by Avnesh",
    image: img1,
  },
  {
    id: 2,
    title: "Is VR headset is helpful?",
    subtitle:
      "Virtual reality (VR) headsets can be incredibly helpful for various purposes, depending on your needs and interests. They offer immersive experiences in gaming, entertainment, education, training, and even therapy",
    published: "Apr 10, 2024 by Yashaswi",
    image: img3,
  },
  {
    id: 3,
    title: "Pick the perfect gadget!",
    subtitle:
      " Whether you're looking for a smartphone, tablet, laptop, or smart home device, consider factors like performance, features, design",
    published: "Mar 29, 2024 by Manav",
    image: img2,
  },
];

const Blogs = () => {
  return (
    <div className=" max-md:py-10 lg:py-6">
      {/* Heading Section */}
      <div className="container ">
        <Headings title={"Recent News"} subtitle={"Explore Our Blogs"} />

        {/* Body section, main content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-10 sm:gap-y-8 md:gap-y-6 ">
          {BlogData.map((item) => (
            <div key={item.id} className="flex flex-col gap-2 ">
              <div className=" overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  className="w-full h-[250px] object-cover hover:scale-105 duration-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-500">{item.published}</p>
                <p className="font-bold line-clamp-2">{item.title}</p>
                <p className=" text-sm text-gray-400 line-clamp-2">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
