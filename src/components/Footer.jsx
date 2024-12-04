import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';
import Logo from '../assets/logos/logo.png';

function Footer() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  const socialLinks = [
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
    { icon: <FaLinkedinIn />, href: '#' },
    { icon: <FaTwitter />, href: '#' }
  ];

  const quickLinks = [
    { name: 'Why Alchemy', href: '#why-alchemy' },
    { name: 'Brand Story', href: '#brand-story' },
    { name: 'Vision', href: '#vision' },
    { name: 'Contact Us', href: '#contact-us' }
  ];

  const locations = [
    'Pune',
    'Mumbai',
    'Delhi'
  ];

  return (
    <footer className="bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand Section */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
            <img src={Logo} alt="Alchemy Events" className="h-12 mb-6" />
            <p className="text-gray-medium font-body mb-6">
              Transforming visions into unforgettable experiences
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h3 className="text-lg font-heading font-semibold mb-6 text-gray-dark">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-medium hover:text-primary transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Locations */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <h3 className="text-lg font-heading font-semibold mb-6 text-gray-dark">
              Our Locations
            </h3>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li key={location} className="flex items-start space-x-2 text-gray-medium">
                  <div className="location">
                    <span>{location}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <h3 className="text-lg font-heading font-semibold mb-6 text-gray-dark">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <a href="tel:+1971-295-3811" className="flex items-center space-x-3 text-gray-medium hover:text-primary transition-colors duration-300">
                <FaPhone />
                <span>+91 98200 00000</span>
              </a>
              <a href="mailto:info.alchemyevents@gmail.com" className="flex items-center space-x-3 text-gray-medium hover:text-primary transition-colors duration-300">
                <FaEnvelope />
                <span>info.alchemyevents@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 py-6">
          <p className="text-center text-gray-medium text-sm">
            © {new Date().getFullYear()} Alchemy Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

