import React from 'react';
import ImageCarousel from './ImageCarousel';
import WhyAlchemy from './WhyAlchemy';
import BrandStory from './BrandStory';
import Vision from './Vision';
import Clients from './Clients';
import ContactUs from './ContactUs';

function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAF9F6]">
      {/* Hero Carousel Section */}
      <section className="relative h-[45vh] sm:h-[50vh] md:h-[70vh] lg:h-screen overflow-hidden">
        <ImageCarousel />
      </section>

      {/* Other Sections */}
      <div className="relative z-10 bg-[#FAF9F6]">
        <WhyAlchemy />
        <BrandStory />
        <Clients />
        <Vision />
        <ContactUs />
      </div>
    </main>
  );
}

export default Home;

