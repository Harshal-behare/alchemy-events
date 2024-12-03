import React, { useState, useEffect } from 'react';

const images = [
  '/placeholder.svg?height=600&width=1200',
  '/placeholder.svg?height=600&width=1200',
  '/placeholder.svg?height=600&width=1200',
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`Event ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to Alchemy Events
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            Transforming your vision into unforgettable experiences
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;

