import React from "react";
import HeroCarousel from "./HeroCarousel";
import topRated from "../assets/images/topRated.png";
import sixtyYears from "../assets/images/sixtyYears.png";
import bestSeller from "../assets/images/bestSeller.png";
import yearsOfWork from "../assets/images/yearsOfWork.png";

const qualitities = [
  {
    id: 1,
    images: sixtyYears,
    title: "Ghana's Largest Online BookShop!",
  },
  {
    id: 2,
    images: bestSeller,
    title: "Internationally Recognized Seller!",
  },
  {
    id: 3,
    images: yearsOfWork,
    title: "Your number 1 book Selling Space!",
  },
  {
    id: 4,
    images: topRated,
    title: "Feel free to Rent and Return Anytime!",
  },
];

const Hero = () => {
  return (
    <div>
      <HeroCarousel />
      <div className="grid  flex-wrap gap-3 sm:grid-cols-2 lg:grid-cols-4 justify-around items-center text-center py-12 px-2 bg-themeColor">
        {qualitities.map((qualitity) => (
          <div className="border-2 border-white px-2 md:px-5 py-2 rounded-lg flex w-[100%] h-full md:w-full lg:min-h-full 2xl:max-w-[380px] my-auto mx-auto items-center gap-3">
            <img
              src={qualitity.images}
              alt={qualitity.title}
              className="w-[50px] sm:w-[70px] md:w-[80px]"
            />
            <h2 className="text-base sm:text-lg md:text-xl md:font-semibold text-left text-white font-semibold">
              {qualitity.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
