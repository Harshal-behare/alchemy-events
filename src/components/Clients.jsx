import React from 'react';
import { motion } from 'framer-motion';
import audiLogo from '../assets/logos/audi-logo.png';
import mercedesLogo from '../assets/logos/mercedes-logo.webp';
import godrejLogo from '../assets/logos/godrej-logo.webp';

function Clients() {
  const clients = [
    {
      name: 'Audi',
      logo: audiLogo,
      delay: 0.2,
      scale: 1
    },
    {
      name: 'Mercedes',
      logo: mercedesLogo,
      delay: 0.4,
      scale: 1
    },
    {
      name: 'Godrej Properties',
      logo: godrejLogo,
      delay: 0.6,
      scale: 1.5
    }
  ];

  return (
    <section className="py-16 bg-[#FAF9F6] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-[#FAF9F6] to-gray-50/50" />
      <motion.div 
        className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-dark mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-medium font-body max-w-2xl mx-auto text-lg">
            Over the years, we've had the privilege of working with some of the most prestigious brands
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {clients.map((client) => (
            <motion.div
              key={client.name}
              className="flex items-center justify-center p-12 bg-white/50 backdrop-blur-sm rounded-xl 
                shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: client.delay }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
              }}
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className={`w-auto transition-all duration-500 object-contain transform group-hover:scale-110
                  ${client.name === 'Godrej Properties' ? 'h-24 md:h-32' : 'h-16 md:h-20'}`}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-medium font-body text-lg">
            <span className="font-bold text-primary text-2xl">1000+</span>
            <span className="block mt-2">Events Managed Successfully (2010-2020)</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Clients;
