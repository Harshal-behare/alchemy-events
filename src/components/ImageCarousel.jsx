import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';

function ImageCarousel() {
  const carouselItems = [
    {
      id: 1,
      image: slide1,
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
      image: slide2,
      title: "Milestone Celebrations",
      subtitle: "Making Moments Matter",
      description: "Turning special occasions into unforgettable experiences.",
      cta: {
        primary: "Start Planning",
        secondary: "View Gallery"
      }
    },
    {
      id: 3,
      image: slide3,
      title: "Corporate Excellence",
      subtitle: "Where Business Meets Brilliance",
      description: "Creating memorable corporate events that inspire and connect.",
      cta: {
        primary: "Start Planning",
        secondary: "View Gallery"
      }
    },
    // ... other items
  ];

  return (
    <div className="carousel-container sticky w-auto h-auto sm:h-[90vh] sm:w-[100vw]  rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-[1]" />
      
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={500}
        swipeable={true}
        emulateTouch={true}
        className="h-full w-full"
      >
        {carouselItems.map((item, index) => (
          <div key={index} className="relative h-full">
            <div 
              className="absolute inset-0 bg-cover bg-center rounded-lg bg-no-repeat"
              style={{ 
                backgroundImage: `url(${item.image})`,
                height: '100rem',
                width: '100rem',
                filter: 'brightness(0.85)'
              }}
            />
            
            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl mx-auto backdrop-blur-[2px] bg-black/20 p-4 sm:p-6 md:p-8 rounded-xl"
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
                  className="text-sm sm:text-base md:text-lg text-white/80 mb-4 sm:mb-6 md:mb-8 font-serif hidden sm:block"
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
                  <button className="btn btn-secondary dark:bg-slate-700">
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