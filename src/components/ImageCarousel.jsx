import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import images correctly
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';

const ImageCarousel = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  const carouselItems = [
    {
      image: slide1,
      title: "Creating Magical Moments",
      subtitle: "Your Vision, Our Expertise",
      description: "Transform your corporate events into unforgettable experiences",
      cta: {
        primary: "Get Started",
        secondary: "View Details"
      }
    },
    {
      image: slide2,
      title: "Exceptional Events",
      subtitle: "Every Detail Matters",
      description: "From intimate gatherings to grand celebrations",
      cta: {
        primary: "Get Started",
        secondary: "View Details"
      }
    },
    {
          image: slide3,
      title: "Professional Excellence",
      subtitle: "1000+ Events Successfully Managed",
      description: "Trusted by leading brands across industries",
      cta: {
        primary: "Get Started",
        secondary: "View Details"
      }
    }
  ];

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative h-[45vh] sm:h-[50vh] md:h-[70vh] lg:h-screen overflow-hidden bg-gray-50">
      <Carousel
        autoPlay
        infiniteLoop={true}
        interval={3000}
        transitionTime={1000}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        swipeable={true}
        emulateTouch={true}
        className="h-full touch-pan-y"
        stopOnHover={false}
        useKeyboardArrows={true}
        swipeScrollTolerance={30}
        preventMovementUntilSwipeScrollTolerance={false}
        axis="horizontal"
        animationHandler="fade"
        selectedItem={0}
        centerMode={false}
        dynamicHeight={false}
        centerSlidePercentage={100}
        continuous={true}
      >
        {carouselItems.map((item, index) => (
          <div 
            key={index} 
            className="relative h-full cursor-grab active:cursor-grabbing touch-pan-y"
          >
            <div className="absolute inset-0 touch-pan-y" />
            {isLoading && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
            <img 
              src={item.image} 
              alt={item.title}
              className={`object-cover w-full h-full transition-all duration-1000 ease-in-out touch-pan-y brightness-[0.85] ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
              loading={index === 0 ? "eager" : "lazy"}
              draggable={false}
              onLoad={handleImageLoad}
              onError={(e) => {
                console.error(`Error loading image: ${item.image}`);
                e.target.src = 'https://via.placeholder.com/1920x1080?text=Event+Image';
                e.target.className = 'object-cover w-full h-full opacity-75';
                setIsLoading(false);
              }}
            />
            {/* Overlay Gradient - adjusted opacity */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-black/10 pointer-events-none" />
            
            {/* Content - adjusted background opacity */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl mx-auto backdrop-blur-sm bg-black/3 p-4 sm:p-6 md:p-8 rounded-xl"
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
                  <button className="btn btn-primary text-sm sm:text-base py-1.5 sm:py-2 px-4 sm:px-6">
                    {item.cta.primary}
                  </button>
                  <button className="btn btn-secondary text-sm sm:text-base py-1.5 sm:py-2 px-4 sm:px-6">
                    {item.cta.secondary}
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Scroll indicator - Hide on smallest screens */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 pointer-events-none hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-4 sm:w-6 h-8 sm:h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default ImageCarousel; 