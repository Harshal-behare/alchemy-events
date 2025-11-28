import React from 'react';
import { motion } from 'framer-motion';
import { FaHistory, FaStar, FaUsers, FaChartLine } from 'react-icons/fa';

function BrandStory() {
  const highlights = [
    { 
      title: 'Pioneers', 
      value: 'Expertise', 
      description: 'Pioneers in the Event Business',
      icon: <FaHistory className="text-primary text-lg sm:text-xl" />,
      suffix: ''
    },
    { 
      title: 'Perfection', 
      value: 'Quality', 
      description: 'Attention to Detail (Quality over Quantity)',
      icon: <FaStar className="text-primary text-lg sm:text-xl" />,
      suffix: ''
    },
    { 
      title: 'Clientele', 
      value: 'Proven', 
      description: 'Been there, done that proposition',
      icon: <FaUsers className="text-primary text-lg sm:text-xl" />,
      suffix: ''
    },
    { 
      title: 'Scale', 
      value: '1000+', 
      description: 'Events in 9 years',
      icon: <FaChartLine className="text-primary text-lg sm:text-xl" />,
      suffix: ''
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="brand-story" className="py-12 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      <motion.div 
        className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <span className="text-primary font-semibold text-xs sm:text-base tracking-wider uppercase mb-2 block">
            Our Journey
          </span>
          <h2 className="section-title text-3xl sm:text-5xl mb-4 sm:mb-6">Built on Passion & Excellence</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-gray-700 font-body text-base sm:text-lg leading-relaxed">
              Founded in 2010 in Pune, Alchemy Events has grown from a passionate startup to a trusted name in the events industry. Our journey is driven by one simple belief: <span className="text-primary font-semibold">God lies in the details</span>.
            </p>
            <p className="text-gray-600 font-body text-sm sm:text-base leading-relaxed">
              With a dedicated team and quick turnaround times, we've executed brand experiences across automobile, energy, real estate, technology, and business service industries.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="card group hover:bg-primary/5 transition-colors duration-300 p-3 sm:p-6"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center h-full justify-between">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-xl font-heading font-semibold text-gray-dark">
                    {item.title}
                  </h3>
                  <div className="flex items-baseline gap-0.5 sm:gap-1 my-1 sm:my-2">
                    <motion.span
                      className="text-lg sm:text-2xl font-bold text-primary text-center"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      {item.value}
                    </motion.span>
                    {item.suffix && <span className="text-lg sm:text-xl text-primary-dark">{item.suffix}</span>}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-medium font-body text-center mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-6 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* <button className="btn btn-primary text-sm sm:text-base">
            Explore Our Journey
          </button> */}
        </motion.div>
      </div>
    </section>
  );
}

export default BrandStory;

