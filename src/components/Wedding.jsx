import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Wedding.scss';

// Import images
import wedding1 from '../assets/images/wedding1.jpg';
import wedding2 from '../assets/images/wedding2.png';
import wedding3 from '../assets/images/wedding3.jpg';
import wedding4 from '../assets/images/wedding4.jpg';
import wedding5 from '../assets/images/wedding5.jpg';
import wedding6 from '../assets/images/wedding6.jpg';
import wedding7 from '../assets/images/wedding7.jpg';
import wedding8 from '../assets/images/wedding8.jpg';

function Wedding() {
  const weddingImages = [
    {
      id: 1,
      image: wedding1,
      title: "Horning's Hideout Venue",
      description: "Outdoor wedding celebration"
    },
    {
      id: 2,
      image: wedding2,
      title: "Yamini and Nick Mehendi",
      description: "Traditional ceremony"
    },
    {
      id: 3,
      image: wedding3,
      title: "Ian and Julie's send-off",
      description: "Evening celebration"
    },
    {
      id: 4,
      image: wedding4,
      title: "Casa Bella, California",
      description: "Traditional Indian wedding"
    },
    {
      id: 5,
      image: wedding5,
      title: "Mountain View Ceremony",
      description: "Outdoor wedding"
    },
    {
      id: 6,
      image: wedding6,
      title: "Sunset Celebration",
      description: "Evening reception"
    },
    {
      id: 7,
      image: wedding7,
      title: "Garden Party",
      description: "Outdoor reception"
    },
    {
      id: 8,
      image: wedding8,
      title: "Evening Dance",
      description: "Reception celebration"
    }
  ];

  return (
    <div className="wedding-container min-h-screen bg-[#FAF9F6]">
      <div className="wedding-grid-container px-5 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {weddingImages.slice(0, 4).map((item) => (
            <motion.div
              key={item.id}
              className="wedding-card group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom row images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {weddingImages.slice(4).map((item) => (
            <motion.div
              key={item.id}
              className="wedding-card group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wedding; 