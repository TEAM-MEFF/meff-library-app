import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonies = () => {
  const testimonials = [
    {
      image: "/boyReading.jpg",
      name: "Samuel Owusu",
      rating: 5,
      summary: "Amazing service!",
      reviewDate: "4 days ago...",
      review:
        "The website is incredibly easy to use, and the book selection is fantastic. Highly recommended!",
    },
    {
      image: "/girlReading.jpg",
      name: "Janet Akosua Mansah",
      rating: 4,
      summary: "Great selection",
      reviewDate: "2 weeks ago...",
      review:
        "I found all the books I needed for my project in one place, thanks to this great platform!",
    },
    {
      image: "guyReading.jpg",
      name: "Isaac Kofi",
      rating: 3,
      summary: "Amazing service!",
      reviewDate: "3 months ago...",
      review:
        "The website is incredibly easy to use, and the book selection is fantastic. Highly recommended!",
    },
    {
      image: "/manReading.jpg",
      name: "Matthew K. Asamoah",
      rating: 4,
      summary: "Amazing service!",
      reviewDate: "4 days ago...",
      review:
        "The website is incredibly easy to use, and the book selection is fantastic. Highly recommended!",
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="2xl:max-w-7xl mx-auto">
      <h1 className="text-3xl text-themeColor font-bold pl-4 md:pl-8 pt-14">
        What Our Users Are Saying
      </h1>
      {/* flex mx-auto justify-around my-auto p-8 gap-5 2xl:gap-16 h-1 flex-wrap bg-yellow-300 */}
      <div className="p-8 flex flex-wrap gap-5 justify-around  mx-auto">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            rating={testimonial.rating}
            reviewDate={testimonial.reviewDate}
            summary={testimonial.summary}
            review={testimonial.review}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonies;
