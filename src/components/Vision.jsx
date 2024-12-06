import React from 'react';
import { motion } from 'framer-motion';

function Vision() {
  return (
    <section id="vision" className="py-8 sm:py-12 bg-white relative overflow-hidden">
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-full bg-primary/5"
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="section-title text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Rethinking the Events Space
        </motion.h2>
        <motion.div 
          className="card max-w-3xl mx-auto backdrop-blur-sm p-4 sm:p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-2 sm:mb-3 text-gray-dark">
                Our Vision
              </h3>
              <p className="mb-3 sm:mb-4 font-body text-gray-medium text-sm sm:text-base">
                With global businesses going back to the basics of community-oriented working styles, 
                we understand the evolving needs of the corporate event space.
              </p>
            </div>
            <div className="space-y-2 sm:space-y-3">
              {[
                'Inclusiveness',
                'Employee Engagement',
                'Stakeholder Management',
                'Growth-based Leadership'
              ].map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center space-x-2 sm:space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full" />
                  <span className="text-gray-medium font-body text-sm sm:text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Vision;

