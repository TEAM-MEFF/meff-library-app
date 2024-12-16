import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

// import image1 from "../../public/books-bg.png";
// import image2 from "../../public/libraryImage1.jpg";
// import image3 from "../../public/libraryImage2.jpg";
// import image4 from "../../public/libraryImage3.jpg";

const images = [
  {
    src: "/books-bg.png",
    text: "Welcome to MEFF Library, your premium go to, for all your literacy needs!",
  },
  {
    src: "/libraryImage1.jpg",
    text: 'Discover a world of knowledge with our extensive collection of books and resources!"',
  },
  {
    src: "/libraryImage2.jpg",
    text: "Empowering minds, one page at a time. Explore, learn, and grow with MEFF Library!",
  },
  {
    src: "/libraryImage3.jpg",
    text: "Connecting you to the information you need, anytime, anywhere!",
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next image after a specific time interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  // Move to the previous image
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Move to the next image
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="">
      {/* Image and Overlay */}
      <div
        className="relative w-full h-screen bg-center bg-cover duration-1000 transition-all ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex].src})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          {/* Text on Image */}
          <h2 className="text-white text-2xl md:text-5xl font-semibold text-center my-auto w-2/3 h-6">
            {images[currentIndex].text}
          </h2>
        </div>
      </div>

      {/* Left Arrow */}
      <div
        className="absolute top-[50%] left-6 md:left-12 text-white cursor-pointer text-5xl bg-[#389cff86] p-1 rounded-full font-bold hover:bg-themeColor"
        onClick={prevSlide}
      >
        <ChevronLeft size={32} />
      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-[50%] right-6 md:right-12 text-white cursor-pointer text-5xl bg-[#389cff86] p-1 rounded-full hover:bg-themeColor"
        onClick={nextSlide}
      >
        <ChevronRight size={32} />
      </div>

      {/* Dots (for navigation) */}
      <div className="absolute bottom-12 items-center flex left-1/2 -translate-x-1/2 justify-end py-2 bg-[#389cff86] w-fit mx-auto mt-2 p-2 rounded-lg text-center">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer w-3 h-3 mx-1 rounded-full hover:bg-themeColor ${
              currentIndex === index ? "bg-themeColor" : "bg-slate-200"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
