import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "../assets/logos/logo.jpg";
import LogoDark from "../assets/logos/logoDark.jpg";

function Footer({ isDark }) {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaLinkedinIn />, href: "https://in.linkedin.com/" },
    { icon: <FaTwitter />, href: "https://x.com/?lang=en" },
  ];

  const quickLinks = [
    { name: "Why Alchemy", href: "#why-alchemy" },
    { name: "Brand Story", href: "#brand-story" },
    { name: "Vision", href: "#vision" },
    { name: "Contact Us", href: "#contact-us" },
  ];

  const legalLinks = [
    { name: "FAQ", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
  ];

  const locations = [
    "Pune Office: A 1503, Ganga Florentina, NIBM Annex, Pune - 411060.",
    "Mumbai Office: 603, Romell Amore, Off Veera Desai Road, Andheri West, Mumbai - 400058.",
  ];

  return (
    <footer className={`bg-white relative overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-accent-sand'}`}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />

      <div className="container mx-auto px-4 relative">
        {/* Adjust grid gap and padding for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 py-8 sm:py-16">
          {/* Brand Section */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-2 lg:col-span-1 space-y-4 sm:space-y-6"
          >
            <img 
              src={isDark ? LogoDark : Logo}
              alt="Alchemy Events" 
              className="h-10 sm:h-12" 
            />
            <p className="text-sm sm:text-base text-gray-medium font-serif">
              Transforming visions into unforgettable experiences
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links, Legal Links, and Locations in a nested grid for mobile */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Quick Links */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="space-y-4 sm:space-y-6"
            >
              <h3 className="text-lg sm:text-xl font-heading font-semibold text-gray-dark">
                Quick Links
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm sm:text-base text-gray-medium hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.25 }}
              className="space-y-4 sm:space-y-6"
            >
              <h3 className="text-lg sm:text-xl font-heading font-semibold text-gray-dark">
                Legal
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm sm:text-base text-gray-medium hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Locations */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="space-y-4 sm:space-y-6 col-span-2 md:col-span-1"
            >
              <h3 className="text-lg sm:text-xl font-heading font-semibold text-gray-dark">
                Locations
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {locations.map((location) => (
                  <li
                    key={location}
                    className="text-sm sm:text-base text-gray-medium"
                  >
                    {location}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="col-span-1 md:col-span-2 lg:col-span-1 space-y-4 sm:space-y-6"
          >
            <h3 className="text-lg sm:text-xl font-heading font-semibold text-gray-dark">
              Contact Us
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="tel:8446669100"
                className="flex items-center gap-2 text-sm sm:text-base text-gray-medium hover:text-primary transition-colors"
              >
                <FaPhone className="text-primary" />
                +91 8446669100
              </a>
              <a
                href="mailto:info@alchemyevents.in"
                className="flex items-center gap-2 text-sm sm:text-base text-gray-medium hover:text-primary transition-colors"
              >
                <FaEnvelope className="text-primary" />
                info@alchemyevents.in
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-100 py-4 sm:py-6 justify-between text-center text-sm sm:text-base text-gray-medium">
          &copy; {new Date().getFullYear()} Alchemy Events. All rights
          reserved.Made by MJX Labs
        </div>
      </div>
    </footer>
  );
}

export default Footer;
