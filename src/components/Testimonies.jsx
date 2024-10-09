import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonies = () => {
    const testimonials = [
        {
            image: 'https://randomuser.me/api/portraits/men/1.jpg',
            name: 'Samuel Owusu',
            rating: 5,
            summary: 'Amazing service!',
            reviewDate: '4 days ago...',
            review: 'The website is incredibly easy to use, and the book selection is fantastic. Highly recommended!',
        },
        {
            image: 'https://randomuser.me/api/portraits/women/2.jpg',
            name: 'Jane Smith',
            rating: 4,
            summary: 'Great selection',
            reviewDate: '2 weeks ago...',
            review: 'I found all the books I needed for my project in one place, thanks to this great platform!',
        },
        {
            image: 'https://randomuser.me/api/portraits/men/1.jpg',
            name: 'John Doe',
            rating: 3,
            summary: 'Amazing service!',
            reviewDate: '3 months ago...',
            review: 'The website is incredibly easy to use, and the book selection is fantastic. Highly recommended!',
        },
        {
            image: 'https://randomuser.me/api/portraits/men/1.jpg',
            name: 'John Doe',
            rating: 4,
            summary: 'Amazing service!',
            reviewDate: '4 days ago...',
            review: 'The website is incredibly easy to use, and the book selection is fantastic. Highly recommended!',
        },
        // Add more testimonials as needed
    ];

    return (
        <div className="grid p-5 grid-cols-4">
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
    );
};

export default Testimonies;
