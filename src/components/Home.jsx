import React from 'react';
import ImageCarousel from './ImageCarousel';
import WhyAlchemy from './WhyAlchemy';
import BrandStory from './BrandStory';
import Vision from './Vision';
import Clients from './Clients';
import ContactUs from './ContactUs';

function Home() {
  return (
    <main className="container min-h-screen overflow-x-hidden bg-white p-0 m-0 dark:bg-black">
      {/* Hero Carousel Section */}
      <section className="rounded-t-3xl sticky overflow-hidden p-0 m-0 w-100%">
      <ImageCarousel />
      </section>
        <WhyAlchemy />
        <BrandStory />
        <Clients />
        <Vision />
        <ContactUs />
    </main>
  );
}

export default Home;

