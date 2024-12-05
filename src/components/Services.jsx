import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaLightbulb, FaChartLine, FaMagic, 
         FaGlassCheers, FaUsers, FaAward, FaBriefcase } from 'react-icons/fa';

function Services() {
  const services = [
    {
      icon: <FaHandshake />,
      title: "Corporate Meetings",
      description: "Professional meeting management for board meetings, stakeholder gatherings, and team sessions",
      features: [
        "Venue Selection & Setup",
        "Technical Equipment",
        "Catering Services",
        "Documentation"
      ]
    },
    {
      icon: <FaGlassCheers />,
      title: "Corporate Events",
      description: "End-to-end management of corporate events that leave lasting impressions",
      features: [
        "Product Launches",
        "Annual Celebrations",
        "Award Ceremonies",
        "Team Building Events"
      ]
    },
    {
      icon: <FaUsers />,
      title: "Conferences",
      description: "Large-scale conference management with attention to every detail",
      features: [
        "Multi-day Conferences",
        "Speaker Management",
        "Registration Systems",
        "Live Streaming"
      ]
    },
    {
      icon: <FaAward />,
      title: "Incentive Programs",
      description: "Memorable incentive events that motivate and reward excellence",
      features: [
        "Travel Programs",
        "Award Functions",
        "Recognition Events",
        "Team Retreats"
      ]
    }
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
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary/5 overflow-hidden">
        <motion.div 
          className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              From intimate corporate gatherings to grand celebrations, we deliver 
              exceptional experiences tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-2xl group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-heading font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-gray-600 mb-8">
              Let's discuss how we can help make your next event extraordinary
            </p>
            <button className="btn btn-primary">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services; 