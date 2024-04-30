import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/Hero/headphone.png";
import Image2 from "../../assets/Category/Fashion.png";
import Image3 from "../../assets/Category/women2.png";
import Button from "../Shared/Button";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
    category: "electronics",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Big Deals",
    title: "On Top",
    title2: "Fashion",
    category: "men",
  },
  {
    id: 1,
    img: Image3,
    subtitle: "Lovely ",
    title: "Looks",
    title2: "For_her",
    category: "women",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    // autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  // shuffling the herodata array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledArray = shuffleArray(HeroData);
  // console.log(shuffledArray);

  return (
    <div className="container ">
      <div className=" w-full rounded-3xl min-h-[550px] sm:min-h-[650px] bg-gray-200 dark:bg-gray-800 flex items-center justify-center   ">
        {/* hero section */}
        <div className=" container pb-8 sm:pb-0">
          <Slider {...settings}>
            {shuffledArray.map((data) => (
              <div key={data.id}>
                <div className=" grid grid-cols-1 sm:grid-cols-2">
                  {/* text-context section */}
                  <div className="flex flex-col justify-center gap-3 sm:pl-3 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className=" font-bold text-3xl md:text-5xl
                      lg:text-2xl "
                    >
                      {data.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-4xl sm:text-6xl lg:text-7xl font-bold "
                    >
                      {data.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl uppercase text-white font-bold sm:text-[70px] md:text-[90px] lg:text-[130px] dark:text-white/5"
                    >
                      {data.title2}
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      <Button
                        category={data.category}
                        bgColor="bg-primary"
                        textColor="text-white"
                      />
                    </div>
                  </div>
                  {/* Img section */}
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.img}
                        className="w-[280px] h-[280px] sm:h-[530px] pt-4 sm:w-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40 "
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
