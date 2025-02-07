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

function Wedding({ isDark }) {
  const weddingImages = [
    { id: 1, image: wedding1, title: "Horning's Hideout Venue", description: "Outdoor wedding celebration" },
    { id: 2, image: wedding2, title: "Yamini and Nick Mehendi", description: "Traditional ceremony" },
    { id: 3, image: wedding3, title: "Elegant Indoor Ceremony", description: "A beautiful indoor setup" },
    // Add more images as needed
  ];

  return (
    <div className="wedding-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {weddingImages.map((item) => (
          <motion.div key={item.id} className="wedding-card group" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute bottom-0 left-0 right-0 p-4 ${isDark ? 'text-gray-300' : 'text-black'}`}>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Wedding; 