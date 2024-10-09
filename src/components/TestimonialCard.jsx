import React from 'react';

const TestimonialCard = ({ image, name, rating, reviewDate, summary, review }) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front flex flex-col md:flex-row justify-center items-center p-4 bg-[#0E345A] h-40 w-72 gap-5 rounded-lg shadow-lg">
                    <img src={image} alt={name} className="w-28 h-28 rounded-full object-cover" />
                    <div>
                        <h3 className="text-lg text-white font-semibold mb-3">{name}</h3>
                        <p className="flex items-center">
                            {Array(rating).fill().map((_, index) => (
                                <svg key={index} className="w-3 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 .587l3.668 7.431 8.208 1.192-5.937 5.784 1.402 8.185L12 18.902l-7.341 3.877 1.402-8.185L.123 9.21l8.208-1.192L12 .587z" />
                                </svg>
                            ))}
                        </p>
                        <p className="text-sm text-gray-400 ">{reviewDate}</p>
                        <p className="text-sm text-white mt-2">{summary}</p>
                    </div>
                </div>
                <div className="flip-card-back flex flex-col justify-center items-center p-4 h-40 w-72 gap-5 bg-[#0E345A] rounded-lg shadow-md">
                    <p className="italic text-gray-100"><span className='text-4xl'>"</span>{review}"</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;