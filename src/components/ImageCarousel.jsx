import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';

function ImageCarousel() {
  const carouselItems = [
    {
      id: 1,
      image: {slide1},
      title: "Corporate Excellence",
      subtitle: "Where Business Meets Brilliance",
      description: "Creating memorable corporate events that inspire and connect.",
      cta: {
        primary: "Plan Your Event",
        secondary: "Learn More"
      }
    },
    {
      id: 2,
      image: {slide2},
      title: "Milestone Celebrations",
      subtitle: "Making Moments Matter",
      description: "Turning special occasions into unforgettable experiences.",
      cta: {
        primary: "Start Planning",
        secondary: "View Gallery"
      }
    },
    // ... other items
  ];

  return (
    <div className="relative">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={500}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={false}
        className="relative"
      >
        {carouselItems.map((item) => (
          <div key={item.id} className="relative h-[50vh] sm:h-[70vh] lg:h-[85vh]">
            {/* Image with proper loading and error handling */}
            <div className="absolute inset-0 bg-black/30"> {/* Overlay */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/src/assets/images/fallback.jpg'; // Fallback image
                }}
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl mx-auto backdrop-blur-sm bg-black/30 p-4 sm:p-6 md:p-8 rounded-xl"
              >
                <motion.h2 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 font-heading"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-2 sm:mb-4 font-body"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {item.subtitle}
                </motion.p>
                <motion.p
                  className="text-sm sm:text-base md:text-lg text-white/80 mb-4 sm:mb-6 md:mb-8 font-body hidden sm:block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {item.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="space-x-2 sm:space-x-4"
                >
                  <button className="btn btn-primary">
                    {item.cta.primary}
                  </button>
                  <button className="btn btn-secondary">
                    {item.cta.secondary}
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageCarousel; 