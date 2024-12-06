import React from 'react';
import { motion } from 'framer-motion';
import { FaHistory, FaStar, FaUsers, FaChartLine } from 'react-icons/fa';

function BrandStory() {
  const highlights = [
    { 
      title: 'Pioneers', 
      value: '10+', 
      description: 'Years Experience',
      icon: <FaHistory className="text-primary text-lg sm:text-xl" />,
      suffix: 'yrs'
    },
    { 
      title: 'Perfection', 
      value: '99', 
      description: 'Client Satisfaction',
      icon: <FaStar className="text-primary text-lg sm:text-xl" />,
      suffix: '%'
    },
    { 
      title: 'Clients', 
      value: '100', 
      description: 'Happy Clients',
      icon: <FaUsers className="text-primary text-lg sm:text-xl" />,
      suffix: '+'
    },
    { 
      title: 'Scale', 
      value: '1000', 
      description: 'Events Done',
      icon: <FaChartLine className="text-primary text-lg sm:text-xl" />,
      suffix: '+'
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
    <section id="brand-story" className="py-6 sm:py-24 bg-white relative overflow-hidden">
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
          className="text-center mb-6 sm:mb-16"
        >
          <h2 className="section-title">Brand Story: An Eventful Bunch</h2>
          <p className="text-gray-medium font-body max-w-2xl mx-auto text-sm sm:text-base">
          May of 2010, armed with passion and vision, we began our journey. Today, we've grown 
          by leaps and bounds to carve out a unique space in the events industry.
          </p>
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
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-xl font-heading font-semibold text-gray-dark">
                  {item.title}
                </h3>
                <div className="flex items-baseline gap-0.5 sm:gap-1 my-1 sm:my-2">
                  <motion.span
                    className="text-2xl sm:text-4xl font-bold text-primary"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {item.value}
                  </motion.span>
                  <span className="text-lg sm:text-xl text-primary-dark">{item.suffix}</span>
                </div>
                <p className="text-xs sm:text-base text-gray-medium font-body text-center">
                  {item.description}
                </p>
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
          <button className="btn btn-primary text-sm sm:text-base">
            Explore Our Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default BrandStory;

