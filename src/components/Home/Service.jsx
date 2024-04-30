import React from "react";
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "Free Shipping on All Order",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Safe Money",
    description: "30 Days Money Back",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    description: "All Payment Secure",
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "Online Support 24/7",
    description: "Technical Support 24/7",
  },
];

const Service = () => {
  return (
    <div className="container max-md:py-10 md:py-8 lg:py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 gap-y-8">
        {ServiceData.map((data) => (
          <div key={data.id} className="flex flex-col sm:flex-row gap-4">
            {data.icon}
            <div>
              <p className=" font-bold text-xl">{data.title}</p>
              <p className="text-sm text-gray-500">{data.description}</p>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
