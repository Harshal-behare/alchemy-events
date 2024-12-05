import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import images correctly
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';

const ImageCarousel = () => {
  const carouselItems = [
    {
      image: slide1,
      title: "Creating Magical Moments",
      subtitle: "Your Vision, Our Expertise",
      description: "Transform your corporate events into unforgettable experiences",
      cta: {
        primary: "Get Started",
        secondary: "View Portfolio"
      }
    },
    {
      image: slide2,
      title: "Exceptional Events",
      subtitle: "Every Detail Matters",
      description: "From intimate gatherings to grand celebrations",
      cta: {
        primary: "Get Started",
        secondary: "View Portfolio"
      }
    },
    {
          image: slide3,
      title: "Professional Excellence",
      subtitle: "1000+ Events Successfully Managed",
      description: "Trusted by leading brands across industries",
      cta: {
        primary: "Get Started",
        secondary: "View Portfolio"
      }
    }
  ];

  return (
    <div className="relative h-[100svh] md:h-screen">
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
        className="h-full"
        stopOnHover={true}
        useKeyboardArrows={true}
        swipeScrollTolerance={30}
        preventMovementUntilSwipeScrollTolerance={false}
        axis="horizontal"
        renderArrowPrev={(clickHandler) => (
          <button
            onClick={clickHandler}
            className="absolute left-4 z-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-center justify-center hover:scale-110"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        renderArrowNext={(clickHandler) => (
          <button
            onClick={clickHandler}
            className="absolute right-4 z-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      >
        {carouselItems.map((item, index) => (
          <div 
            key={index} 
            className="relative h-[100svh] md:h-screen cursor-grab active:cursor-grabbing"
          >
            <div className="absolute inset-0 z-10 touch-pan-y" />
            <img 
              src={item.image} 
              alt={item.title}
              className="object-cover w-full h-full transition-opacity duration-300"
              loading="eager"
              draggable={false}
              onError={(e) => {
                console.error(`Error loading image: ${item.image}`);
                e.target.src = 'https://via.placeholder.com/1920x1080?text=Event+Image';
                e.target.className = 'object-cover w-full h-full opacity-75';
              }}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent pointer-events-none" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl mx-auto backdrop-blur-sm bg-black/10 p-8 rounded-xl"
              >
                <motion.h2 
                  className="text-4xl md:text-6xl font-bold text-white mb-4 font-heading"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  className="text-xl md:text-2xl text-white/90 mb-4 font-body"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {item.subtitle}
                </motion.p>
                <motion.p
                  className="text-lg text-white/80 mb-8 font-body"
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
                  <button className="btn btn-secondary">
                    {item.cta.secondary}
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Make scroll indicator pointer-events-none */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default ImageCarousel; 