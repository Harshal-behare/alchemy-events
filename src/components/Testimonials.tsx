import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Testimonials: React.FC = () => {
  const testimonials = [
    { name: 'John Doe', company: 'Tech Corp', text: 'Alchemy Events transformed our company retreat into an unforgettable experience. Their attention to detail and creativity is unmatched.' },
    { name: 'Jane Smith', company: 'Marketing Inc', text: 'Working with Alchemy Events was a game-changer for our product launch. They brought our vision to life in ways we never imagined.' },
    { name: 'Mike Johnson', company: 'Startup Hub', text: 'The team at Alchemy Events goes above and beyond. They turned our conference into a trending topic and exceeded all expectations.' },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Client Testimonials</h2>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          transitionTime={500}
          swipeable={true}
          emulateTouch={true}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg mx-4 mb-8">
              <p className="text-xl mb-6 italic text-gray-600">"{testimonial.text}"</p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  {testimonial.name[0]}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;

