import React from 'react';
import { motion } from 'framer-motion';
import { FaHistory, FaStar, FaUsers, FaChartLine } from 'react-icons/fa';

function BrandStory() {
  const highlights = [
    { 
      title: 'Pioneers', 
      value: '10+', 
      description: 'Years of Expertise in Events',
      icon: <FaHistory className="text-primary" />,
      suffix: 'years'
    },
    { 
      title: 'Perfection', 
      value: '99', 
      description: 'Client Satisfaction Rate',
      icon: <FaStar className="text-primary" />,
      suffix: '%'
    },
    { 
      title: 'Clients', 
      value: '100', 
      description: 'Satisfied Clients',
      icon: <FaUsers className="text-primary" />,
      suffix: '+'
    },
    { 
      title: 'Scale', 
      value: '1000', 
      description: 'Events in 9 years',
      icon: <FaChartLine className="text-primary" />,
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
    <section id="brand-story" className="py-24 bg-white relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="section-title">Brand Story: An Eventful Bunch</h2>
          <p className="text-gray-medium font-body max-w-2xl mx-auto">
            May of 2010, armed with passion and vision, we began our journey. Today, we've grown 
            by leaps and bounds to carve out a unique space in the events industry.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="card group hover:bg-primary/5 transition-colors duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2 text-gray-dark">
                {item.title}
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <motion.span
                  className="text-4xl font-bold text-primary"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {item.value}
                </motion.span>
                <span className="text-xl text-primary-dark">{item.suffix}</span>
              </div>
              <p className="text-gray-medium font-body">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button className="btn btn-primary">
            Explore Our Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default BrandStory;

