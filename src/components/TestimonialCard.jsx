import { Star } from "lucide-react";
import React from "react";

const TestimonialCard = ({
  image,
  name,
  rating,
  reviewDate,
  summary,
  review,
}) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front flex flex-row justify-start items-center p-4 bg-themeColor h-40 w-72 md:gap-5 rounded-lg shadow-md">
          <img
            src={image}
            alt={name}
            className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 rounded-full object-cover"
          />
          <div>
            <h3 className="text-base md:text-lg text-white font-semibold md:mb-3">
              {name}
            </h3>
            <div className="mt-1">
              <p className="flex items-center">
                {Array(rating)
                  .fill()
                  .map((_, index) => (
                    <svg
                      key={index}
                      className="w-3 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431 8.208 1.192-5.937 5.784 1.402 8.185L12 18.902l-7.341 3.877 1.402-8.185L.123 9.21l8.208-1.192L12 .587z" />
                    </svg>
                  ))}
              </p>
              <p className="text-xs md:text-sm text-gray-400">{reviewDate}</p>
            </div>
            <p className="text-sm md:text-base text-white mt-1">{summary}</p>
          </div>
        </div>
        <div className="flip-card-back flex flex-col justify-center items-center p-4 h-40 w-72 gap-5 bg-themeColor rounded-lg shadow-md relative">
          <p className="italic text-gray-100">
            <span className="text-4xl">"</span>
            {review}
            <span className="text-4xl absolute bottom-7">"</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
