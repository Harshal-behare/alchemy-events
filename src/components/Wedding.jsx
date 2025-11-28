import React from "react";
import { motion } from "framer-motion";

function Wedding() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 
      bg-white dark:bg-gray-900 transition-colors">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold 
          text-gray-900 dark:text-white mb-4 font-heading">
          We’re Revamping
        </h1>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Our wedding experience page is getting a fresh new look.  
          Stay tuned — magical moments are being crafted for you.
        </p>
      </motion.div>

    </div>
  );
}

export default Wedding;
