import React from 'react';
import ImageCarousel from './ImageCarousel';
import WhyAlchemy from './WhyAlchemy';
import BrandStory from './BrandStory';
import Vision from './Vision';
import Clients from './Clients';
import ContactUs from './ContactUs';

function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative">
        <ImageCarousel />
      </section>

      {/* Other Sections */}
      <WhyAlchemy />
      <BrandStory />
      <Clients />
      <Vision />
      <ContactUs />
    </main>
  );
}

export default Home;

