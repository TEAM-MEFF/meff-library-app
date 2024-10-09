import React, { useState, useEffect } from 'react';

const images = [
    {
        src: 'src/assets/images/books-bg.png',
        text: 'Welcome to MEFF Library, your premium go to, for all your literacy needs!'
    },
    {
        src: 'src/assets/images/libraryImage1.jpg',
        text: 'Discover a world of knowledge with our extensive collection of books and resources!"',
    },
    {
        src: 'src/assets/images/libraryImage2.jpg',
        text: 'Empowering minds, one page at a time. Explore, learn, and grow with MEFF Library!',
    },
    {
        src: 'src/assets/images/libraryImage3.jpg',
        text: 'Connecting you to the information you need, anytime, anywhere!',
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
        <div className="relative w-full max-w-[800px] mx-auto">
            {/* Image and Overlay */}
            <div
                className="relative w-full h-[400px] bg-center bg-cover duration-500 transition-all ease-in-out"
                style={{ backgroundImage: `url(${images[currentIndex].src})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    {/* Text on Image */}
                    <h2 className="text-white text-2xl md:text-4xl font-semibold text-center mt-56">
                        {images[currentIndex].text}
                    </h2>
                </div>
            </div>

            {/* Left Arrow */}
            <div
                className="absolute top-[50%] left-5 text-white cursor-pointer text-5xl bg-[#0e345aa4] px-2 rounded-md"
                onClick={prevSlide}
            >
                &#8249;
            </div>

            {/* Right Arrow */}
            <div
                className="absolute top-[50%] right-5 text-white cursor-pointer text-5xl bg-[#0e345aa4]  px-2 rounded-md"
                onClick={nextSlide}
            >
                &#8250;
            </div>

            {/* Dots (for navigation) */}
            <div className="flex justify-center py-2 bg-[#0e345aa4] w-fit ml-[44%] mt-2 p-2 rounded-lg text-center">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`cursor-pointer w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-[#0E345A]' : 'bg-slate-200'
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
