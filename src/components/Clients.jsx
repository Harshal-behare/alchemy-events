import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import audiLogo from '../assets/logos/audi-logo.png';
import mercedesLogo from '../assets/logos/mercedes-logo.webp';
import godrejLogo from '../assets/logos/godrej-logo.webp';
import appleLogo from '../assets/logos/apple-logo.jpg';
import goldmanLogo from '../assets/logos/goldman-logo.jpg';

function Clients({ isDark }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [visibleLogos, setVisibleLogos] = useState([]);

  const clients = [
    { name: 'Audi', logo: audiLogo },
    { name: 'Mercedes', logo: mercedesLogo },
    { name: 'Apple', logo: appleLogo },
    { name: 'Goldman Sachs', logo: goldmanLogo },
    { name: 'Godrej Properties', logo: godrejLogo },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    let currentIndex = 0;
    const interval = setInterval(() => {
      setVisibleLogos((prev) => [...prev, clients[currentIndex]]);
      currentIndex = (currentIndex + 1) % clients.length;
    }, 2000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [clients]);

  return (
    <section className="clients-section">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-bold text-primary">Our Clients</h2>
        <div className="flex flex-wrap justify-center">
          <AnimatePresence>
            {isMobile ? (
              visibleLogos.map((client) => (
                <motion.div key={client.name} className="flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <img src={client.logo} alt={client.name} className="w-auto h-12 object-contain" />
                </motion.div>
              ))
            ) : (
              clients.map((client) => (
                <motion.div key={client.name} className="flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <img src={client.logo} alt={client.name} className="w-auto h-12 object-contain" />
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="text-center mt-8 sm:mt-16">
          <p className="text-gray-medium font-body text-base sm:text-lg">
            <span className="font-bold text-primary text-xl sm:text-2xl">1000+</span>
            <span className="block mt-1 sm:mt-2">Events Managed Successfully (2010-2020)</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Clients;
