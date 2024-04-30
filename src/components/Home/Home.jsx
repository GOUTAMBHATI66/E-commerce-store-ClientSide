import React from "react";
import Hero from "./Hero";
import Category from "./Category/Category";
import Service from "./Service";
import Banner from "./Banner";
import TShirt from "../../assets/Products/p-8.png";
import SmartWatch from "../../assets/Category/smartwatch2.png";
import Blogs from "./Blogs";
import Partners from "./Partners";

const BannerData = {
  discount: "50% OFF",
  title: "Fine Smile",
  date: "21 Apr to 28 Apr",
  image: TShirt,
  title2: "Air Solo Bass",
  title3: "Summer Sale",
  title4: "Beat the Heat with Hot Deals!",
  bgColor: "bg-primary",
  textColor: "text-primary",
  subtitle: "T-shirts",
  category: "men",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "15 Apr to 18 Apr",
  image: SmartWatch,
  title2: "Limited-time Offers",
  title3: "Flash Discount",
  title4: "Bag Big Savings with Every Purchase!",
  bgColor: "bg-brandGreen",
  textColor: "text-brandGreen",
  subtitle: "SmartWatchs",
  category: "electronics",
};

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Service />
      <Banner data={BannerData} />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
    </div>
  );
};

export default Home;
