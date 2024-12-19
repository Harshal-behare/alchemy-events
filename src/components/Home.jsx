import React from 'react';
import ImageCarousel from './ImageCarousel';
import WhyAlchemy from './WhyAlchemy';
import BrandStory from './BrandStory';
import Vision from './Vision';
import Clients from './Clients';
import ContactUs from './ContactUs';



function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAF9F6] p-0">
      {/* Hero Carousel Section */}
      <section className="relative h-screen overflow-hidden mb-[-95px]">
        <ImageCarousel />
      </section>

      {/* Other Sections */}
      <div className="relative z-10 bg-[#FAF9F6] space-y-0">
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

