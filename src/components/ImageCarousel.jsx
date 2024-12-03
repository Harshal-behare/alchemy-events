import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from 'framer-motion';

// Import images correctly
import carousel1 from '../assets/img1.jpg';
import carousel2 from '../assets/img2.jpg';
import carousel3 from '../assets/img3.jpg';

const ImageCarousel = () => {
  const carouselItems = [
    {
      image: carousel1,
      title: "Creating Magical Moments",
      subtitle: "Your Vision, Our Expertise"
    },
    {
      image: carousel2,
      title: "Unforgettable Experiences",
      subtitle: "Every Detail Matters"
    },
    {
      image: carousel3,
      title: "Professional Excellence",
      subtitle: "Your Vision, Our Expertise"
    }
  ];

  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={5000}
        transitionTime={500}
        swipeable={true}
        emulateTouch={true}
        className="overflow-hidden carousel-container"
      >
        {carouselItems.map((item, index) => (
          <div key={index} className="relative h-[600px] md:h-[800px]">
            <img 
              src={item.image} 
              alt={item.title}
              className="object-cover w-full h-full brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6 px-4 text-center leading-tight"
              >
                {item.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-primary-dark font-semibold"
              >
                {item.subtitle}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8 px-8 py-3 bg-primary-dark text-white rounded-full
                  hover:bg-primary transition-all duration-300 font-semibold"
              >
                Plan Your Event
              </motion.button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel; 