import React from 'react';
import ImageCarousel from './ImageCarousel';
import WhyAlchemy from './WhyAlchemy';
import BrandStory from './BrandStory';
import Vision from './Vision';
import Clients from './Clients';
import ContactUs from './ContactUs';



function Home() {
  return (
    <main className="container min-h-screen overflow-x-hidden bg-slate-200 p-0 m-0 dark:bg-slate-700">
      {/* Hero Carousel Section */}
      <section className="rounded-t-3xl sticky overflow-hidden p-0 m-0 w-[750px]">
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

