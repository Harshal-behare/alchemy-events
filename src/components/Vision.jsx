import React from 'react';
import { motion } from 'framer-motion';

function Vision() {
  return (
    <section id="vision" className="py-16 bg-white relative overflow-hidden">
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-full bg-primary/5"
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Rethinking the Events Space
        </motion.h2>
        <motion.div 
          className="card max-w-3xl mx-auto backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-gray-dark">
                Our Vision
              </h3>
              <p className="mb-4 font-body text-gray-medium">
                With global businesses going back to the basics of community-oriented working styles, 
                we understand the evolving needs of the corporate event space.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'Inclusiveness',
                'Employee Engagement',
                'Stakeholder Management',
                'Growth-based Leadership'
              ].map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-gray-medium font-body">{item}</span>
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

