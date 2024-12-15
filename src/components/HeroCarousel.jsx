import React, { useState, useEffect } from "react";

// import image1 from "../../public/books-bg.png";
// import image2 from "../../public/libraryImage1.jpg";
// import image3 from "../../public/libraryImage2.jpg";
// import image4 from "../../public/libraryImage3.jpg";

const images = [
  {
    src: "public/books-bg.png",
    text: "Welcome to MEFF Library, your premium go to, for all your literacy needs!",
  },
  {
    src: "public/libraryImage1.jpg",
    text: 'Discover a world of knowledge with our extensive collection of books and resources!"',
  },
  {
    src: "public/libraryImage2.jpg",
    text: "Empowering minds, one page at a time. Explore, learn, and grow with MEFF Library!",
  },
  {
    src: "public/libraryImage3.jpg",
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
    <div className="relative w-full mx-auto">
      {/* Image and Overlay */}
      <div
        className="relative w-full h-[450px] bg-center bg-cover duration-500 transition-all ease-in-out"
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
        className="absolute top-[50%] left-5 text-white cursor-pointer text-5xl bg-[#0e345aa4] pb-3 px-3 rounded-full"
        onClick={prevSlide}
      >
        &#8249;
      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-[50%] right-5 text-white cursor-pointer text-5xl bg-[#0e345aa4] pb-3 px-3 rounded-full"
        onClick={nextSlide}
      >
        &#8250;
      </div>

      {/* Dots (for navigation) */}
      <div className="flex justify-center py-2 bg-[#0e345aa4] w-fit mx-auto mt-2 p-2 rounded-lg text-center">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer w-3 h-3 mx-1 rounded-full ${
              currentIndex === index ? "bg-themeColor" : "bg-slate-200"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
