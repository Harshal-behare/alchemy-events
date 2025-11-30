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
    }
  ];

  return (
    <div className="carousel-container w-full h-[40vh] sm:h-[85vh] md:h-[90vh] rounded-lg overflow-hidden relative">
      {/* Dark overlay only on desktop */}
      <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40 z-[1]" />

      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={600}
        swipeable
        emulateTouch
        className="h-full w-full"
      >
        {carouselItems.map((item) => (
          <div key={item.id} className="relative h-full w-full">
            
            {/* The image */}
            <img 
              src={item.image} 
              alt={item.title} 
              className="object-cover object-center w-full h-[40vh] sm:h-[85vh] md:h-[90vh]" 
            />

            {/* Content overlay ONLY on desktop/tablet */}
            <div className="hidden sm:flex absolute inset-0 flex-col items-center justify-center px-4 z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="
                  text-center max-w-4xl mx-auto
                  backdrop-blur-[2px] bg-black/20 
                  p-6 md:p-8 rounded-xl
                "
              >
                <motion.h2 
                  className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {item.title}
                </motion.h2>

                <motion.p
                  className="text-lg md:text-xl lg:text-2xl text-white/90 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {item.subtitle}
                </motion.p>

                <motion.p
                  className="text-base md:text-lg text-white/80 mb-6"
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
                  className="space-x-4"
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
