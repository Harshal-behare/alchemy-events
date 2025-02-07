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
    {
      name: 'Audi',
      logo: audiLogo,
    },
    {
      name: 'Mercedes',
      logo: mercedesLogo,
    },
    {
      name: 'Apple',
      logo: appleLogo,
    },
    {
      name: 'Goldman Sachs',
      logo: goldmanLogo,
    },
    {
      name: 'Godrej Properties',
      logo: godrejLogo,
    }
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    let currentIndex = 0;
    const updateLogos = () => {
      const nextThreeLogos = [];
      for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % clients.length;
        nextThreeLogos.push({
          ...clients[index],
          id: `${clients[index].name}-${Date.now()}-${i}`
        });
      }
      setVisibleLogos(nextThreeLogos);
      currentIndex = (currentIndex + 1) % clients.length;
    };

    // Initial set
    updateLogos();

    // Start the interval only for mobile
    const interval = setInterval(updateLogos, 2000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="py-6 sm:py-16 bg-[#FAF9F6] relative overflow-hidden dark:bg-slate-700">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-[#FAF9F6] to-gray-50/50" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-dark mb-4 sm:mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-medium font-body max-w-2xl mx-auto text-base sm:text-lg">
            Over the years, we've had the privilege of working with some of the most prestigious brands
          </p>
        </motion.div>

        <div className={`
          ${isMobile ? 'flex justify-center items-center relative h-20' : 'grid grid-cols-3 md:grid-cols-5'} 
          gap-8 max-w-5xl mx-auto
        `}>
          {isMobile ? (
            <div className="flex gap-8 overflow-hidden w-full justify-center">
              <AnimatePresence mode="popLayout">
                {visibleLogos.map((client, index) => (
                  <motion.div
                    key={client.id}
                    className="flex-shrink-0 flex items-center justify-center"
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -200, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="w-auto h-12 object-contain"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            // Desktop grid view
            clients.map((client) => (
              <motion.div
                key={client.name}
                className="flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="w-auto h-12 object-contain"
                />
              </motion.div>
            ))
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8 sm:mt-16"
        >
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
