import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaHeart, FaRing, FaGlassCheers, FaCamera } from 'react-icons/fa';
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

  const weddingServices = [
    {
      icon: <FaHeart />,
      title: "Wedding Planning",
      description: "Complete wedding planning from concept to execution"
    },
    {
      icon: <FaRing />,
      title: "Venue Selection",
      description: "Perfect venues for your special day"
    },
    {
      icon: <FaGlassCheers />,
      title: "Catering & Decor",
      description: "Exquisite food and stunning decorations"
    },
    {
      icon: <FaCamera />,
      title: "Photography",
      description: "Capture every precious moment beautifully"
    }
  ];

  return (
    <div className="wedding-container min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm sm:text-base tracking-wider uppercase mb-2 block">
              Dream Weddings
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 font-heading">
              Your Perfect Wedding Awaits
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              From intimate ceremonies to grand celebrations, we bring your wedding vision to life with 
              meticulous attention to detail. Every moment is crafted to perfection, creating memories 
              that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#contact-us"
                className="btn btn-primary w-full sm:w-auto px-8 py-3"
              >
                Plan Your Wedding
              </a>
              <a 
                href="tel:+918446669100"
                className="btn btn-secondary w-full sm:w-auto px-8 py-3"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {weddingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="card text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Wedding Portfolio
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Browse through our collection of beautiful weddings we've had the honor to plan and execute
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {weddingImages.map((item) => (
              <motion.div key={item.id} className="wedding-card group" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Wedding; 