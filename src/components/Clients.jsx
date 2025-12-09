import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

import audiLogo from "../assets/logos/audi.jpg";
import mercedesLogo from "../assets/logos/mercedes-logo.webp";
import godrejLogo from "../assets/logos/godrej-logo.webp";
import aegisLogo from "../assets/logos/aegis-logistics-limited-logo.jpg";
import bmwLogo from "../assets/logos/bmw.jpg";
import rocketSoftwareLogo from "../assets/logos/rocket-software-logo.jpg";

function Clients() {
  const clientsWithLogos = useMemo(
    () => [
      { name: "Mercedes", logo: mercedesLogo },
      {name:"BMW", logo: bmwLogo},
      { name: "Audi", logo: audiLogo },
      { name: "Godrej", logo: godrejLogo },
      { name: "Aegis", logo: aegisLogo },
      {name:"Rocket Software", logo: rocketSoftwareLogo},
      { name: "Indofil", logo: null },
      { name: "ACI Worldwide", logo: null },
      { name: "AurionPro", logo: null },
      { name: "Diebold", logo: null },
    ],
    []
  );

  // Duplicate list to create a seamless loop
  const scrollingLogos = [...clientsWithLogos, ...clientsWithLogos];

  return (
    <section className="clients-section py-12 sm:py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <span className="text-primary font-semibold text-xs sm:text-base tracking-wider uppercase mb-2 block text-center">
          Trusted Partners
        </span>

        <h2 className="text-center text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Our Clients
        </h2>

        <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-base sm:text-lg font-medium">
          Trusted by leading brands across industries.
        </p>

        {/* ⭐ Infinite Scroll Container */}
        <div className="relative overflow-hidden py-6">
          <motion.div
            className="flex items-center gap-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
          >
            {scrollingLogos.map((client, index) => (
              <div
                key={index}
                className="min-w-[120px] sm:min-w-[160px] h-16 sm:h-20 flex items-center justify-center"
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 dark:brightness-95 dark:hover:brightness-110"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center 
                    border border-gray-200 dark:border-gray-700 rounded-lg 
                    bg-gray-50 dark:bg-gray-800 
                    hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-gray-600 dark:text-gray-300 font-medium text-sm sm:text-base">
                      {client.name}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <div
            className="inline-block 
              bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 
              dark:from-primary/20 dark:via-primary/10 dark:to-primary/20
              rounded-2xl px-8 py-6 shadow-lg dark:shadow-primary/10"
          >
            <p className="text-gray-700 dark:text-gray-300 font-body text-base sm:text-lg mb-2">
              <span className="font-bold text-primary text-4xl sm:text-5xl block mb-3">
                2000+
              </span>
              Events Managed Successfully
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Since 2009</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Clients;
