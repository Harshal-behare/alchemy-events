import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaCamera, FaGlassCheers, FaMusic } from 'react-icons/fa';
import '../styles/Wedding.scss';

function Wedding() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaHeart />,
      title: "Wedding Planning",
      description: "Comprehensive wedding planning services from concept to execution",
      features: [
        "Venue Selection",
        "Theme & Design",
        "Timeline Planning",
        "Vendor Management"
      ]
    },
    {
      icon: <FaCamera />,
      title: "Photography & Video",
      description: "Capturing your special moments with artistic excellence",
      features: [
        "Professional Photography",
        "Cinematic Videos",
        "Drone Coverage",
        "Same-Day Edits"
      ]
    },
    {
      icon: <FaGlassCheers />,
      title: "Catering & Decor",
      description: "Exquisite dining experiences and stunning decorations",
      features: [
        "Custom Menus",
        "Theme-based Decor",
        "Floral Arrangements",
        "Lighting Design"
      ]
    },
    {
      icon: <FaMusic />,
      title: "Entertainment",
      description: "Creating the perfect atmosphere for your celebration",
      features: [
        "Live Bands",
        "DJs",
        "Cultural Performances",
        "Sound Systems"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Hero Section */}
      <section className="relative h-[45vh] sm:h-[50vh] md:h-[70vh] lg:h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center wedding-hero"
          style={{ backgroundImage: 'url("/images/wedding-hero.jpg")' }}
        />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
          >
            Your Dream Wedding Awaits
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8"
          >
            Let us create the perfect celebration of your love story
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Wedding Services
            </h2>
            <p className="text-gray-600">
              From intimate gatherings to grand celebrations, we create unforgettable wedding experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 service-card"
              >
                <div className="text-primary text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              Start Planning Your Special Day
            </h2>
            <p className="text-gray-600 mb-8">
              Let's create memories that will last a lifetime
            </p>
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/contact')}
            >
              Schedule a Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Wedding; 