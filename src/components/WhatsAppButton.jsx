import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function WhatsAppButton() {
  const whatsappNumber = '+19712953811';
  const whatsappMessage = 'Hello, I would like to know more about your services.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <AnimatePresence>
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp className="text-2xl" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/75 text-white text-sm py-2 px-4 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat with us
        </span>
        <span className="absolute top-0 right-0 -mt-1 -mr-1 px-2.5 py-0.5 bg-red-500 rounded-full text-xs animate-pulse">
          1
        </span>
      </motion.a>
    </AnimatePresence>
  );
}

export default WhatsAppButton; 