import React from "react";
import { motion } from "framer-motion";

function Vision() {
  return (
    <section
      id="vision"
      className="py-12 sm:py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors"
    >
      {/* Right-side background block */}
      <motion.div
        className="
          absolute top-0 right-0 w-1/2 h-full 
          bg-primary/5 
          dark:bg-primary/10 
          transition-colors
        "
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Title */}
        <motion.h2
          className="
            section-title text-center mb-6 sm:mb-8 
            text-gray-900 dark:text-white
          "
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Rethinking the Events Space
        </motion.h2>

        {/* Card */}
        <motion.div
          className="
            max-w-4xl mx-auto 
            p-4 sm:p-8 
            rounded-2xl 
            shadow-lg 
            backdrop-blur-sm 
            bg-white/80 dark:bg-gray-800/80 
            border border-gray-200 dark:border-gray-700 
            transition-colors
          "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Left Column */}
            <div>
              <h3
                className="
                  text-2xl sm:text-3xl 
                  font-heading font-semibold 
                  mb-4 sm:mb-6 
                  text-gray-900 dark:text-white
                "
              >
                Our Vision
              </h3>

              <p
                className="
                  font-body 
                  text-gray-700 dark:text-gray-300 
                  text-base sm:text-lg 
                  leading-relaxed mb-4
                "
              >
                Creating unique brand experiences that foster networking and
                community through curated events with an informal touch.
              </p>

              <p
                className="
                  font-body 
                  text-gray-600 dark:text-gray-400 
                  text-sm sm:text-base 
                  leading-relaxed
                "
              >
                From large corporations to startups, summits to conferences—we
                bridge the gap in modern corporate event spaces.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <h4
                className="
                  text-lg font-semibold 
                  text-gray-900 dark:text-white 
                  mb-4
                "
              >
                Core Principles
              </h4>

              <div className="space-y-3">
                {[
                  "Inclusiveness",
                  "Employee Engagement",
                  "Stakeholder Management",
                  "Growth-based Leadership",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span
                      className="
                        text-gray-700 dark:text-gray-300 
                        font-body 
                        text-sm sm:text-base 
                        font-medium
                      "
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Vision;
