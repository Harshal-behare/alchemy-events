import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import audiLogo from '../assets/logos/audi-logo.png';
import mercedesLogo from '../assets/logos/mercedes-logo.webp';
import godrejLogo from '../assets/logos/godrej-logo.webp';
// import aegisLogisticsLogo from '../assets/logos/aegis-logistics-logo.webp';
// import aegisVopakLogo from '../assets/logos/aegis-vopak-logo.webp';
// import bmwLogo from '../assets/logos/bmw-logo.webp';
// import rocketLogo from '../assets/logos/rocket-logo.webp';

function Clients() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [visibleLogos, setVisibleLogos] = useState([]);

  const clientsWithLogos = useMemo(() => [
    { name: 'Mercedes', logo: mercedesLogo },
    { name: 'Audi', logo: audiLogo },
    { name: 'Godrej Properties', logo: godrejLogo },
  ], []);

  const otherClients = [
    "DFPCL", "Indofil", "ACI Worldwide", "Aegis", "AurionPro", "Diebold"
  ];

  const allClients = [
      ...clientsWithLogos,
      ...otherClients.map(name => ({ name, logo: null }))
  ];


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    // Initialize visible logos for mobile animation if needed
    // For this update, we might want to just show all in a grid or carousel
    // But keeping the existing logic for mobile fade-in if preferred, or simplifying.
    // Let's simplify to show all for now as the list is short enough or use the existing logic for all.
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < allClients.length) {
          setVisibleLogos((prev) => {
              if (prev.length < allClients.length) {
                  return [...prev, allClients[currentIndex]];
              }
              return prev;
          });
          currentIndex++;
      }
    }, 500); // Faster animation

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [allClients]);

  return (
    <section className="clients-section py-8 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-primary mb-4">Our Clients</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Have you experienced magic? Well, we all have at some point. The expertise we bring to the table enables us to transform a mere idea into a memorable experience for your guests and employees.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 mb-12">
          <AnimatePresence>
            {allClients.map((client, index) => (
                <motion.div 
                    key={client.name} 
                    className="flex items-center justify-center w-32 sm:w-40 h-20"
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                >
                  {client.logo ? (
                      <img src={client.logo} alt={`${client.name} - Alchemy Events Client`} className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" loading="lazy" />
                  ) : (
                      <div className="w-full h-full flex items-center justify-center border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                          <span className="font-semibold text-gray-600 text-center text-sm sm:text-base p-2">{client.name}</span>
                      </div>
                  )}
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.4 }} 
            className="text-center space-y-6"
        >
          <h3 className="text-xl italic font-medium text-primary">Let’s Create Magic Together</h3>
          
          <div className="py-4">
             <p className="text-gray-medium font-body text-base sm:text-lg">
                <span className="font-bold text-primary text-2xl sm:text-3xl block mb-2">1000+</span>
                Events Managed Successfully (2010-2020)
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 text-gray-600 text-base sm:text-base">
             <p>Over the years, clients from diverse sectors and industries have trusted us with their events!</p>
             <p>Our funda has been simple throughout: To meet and exceed the expectations of all briefs!</p>
             <p>Creating enough brand recall, perfect environments for networking, summits, AGMs, we understand your needs when it comes to events.</p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default Clients;
