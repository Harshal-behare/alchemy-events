import React from 'react';
import ImageCarousel from './ImageCarousel';
import WhyAlchemy from './WhyAlchemy';
import BrandStory from './BrandStory';
import Vision from './Vision';
import ContactUs from './ContactUs';

function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 bg-fixed">
      {/* Hero Carousel Section */}
      <section className="relative">
        <ImageCarousel />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark via-dark/80 to-transparent h-32 backdrop-blur-sm">
          <div className="container mx-auto px-4 h-full flex items-end pb-8">
            <button className="btn btn-primary group">
              Explore Our Services
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <WhyAlchemy />
      <BrandStory />
      <Vision />
      <ContactUs />
    </main>
  );
}

export default Home;

