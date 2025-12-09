import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';

// Add two NEW images (replace with your actual file names)
import slide4 from '../assets/images/slide4.jpg';
import slide5 from '../assets/images/slide5.jpg';

function ImageCarousel() {
  const carouselItems = [
    { id: 1, image: slide1 },
    { id: 2, image: slide2 },
    { id: 3, image: slide3 },
    { id: 4, image: slide4 },
    { id: 5, image: slide5 }
  ];

  return (
    <div className="carousel-container w-full h-[40vh] sm:h-[85vh] md:h-[90vh] rounded-lg overflow-hidden relative">

      {/* Remove gradient overlay if you don't need it */}
      <div className="hidden sm:block absolute inset-0 bg-black/0 z-[1]" />

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

            {/* PURE IMAGE ONLY */}
            <img 
              src={item.image}
              alt={`Slide ${item.id}`}
              className="object-cover object-center w-full h-[40vh] sm:h-[85vh] md:h-[90vh]"
            />

          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
