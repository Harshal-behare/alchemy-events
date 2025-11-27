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
          className="card max-w-4xl mx-auto backdrop-blur-sm p-4 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-6 sm:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-2 sm:mb-4 text-gray-dark">
                Our Vision
              </h3>
              <p className="mb-3 sm:mb-4 font-body text-gray-medium text-sm sm:text-base">
                With global businesses going back to the basics of community-oriented working styles and business models, there’s a need gap in the corporate event space that we understand clearly.
              </p>
              <p className="mb-3 sm:mb-4 font-body text-gray-medium text-sm sm:text-base">
                Curated events with the breeze of an informal spin provides the perfect environment for networking!
              </p>
              <p className="font-body text-gray-medium text-sm sm:text-base">
                Our vision is to create unique brand experiences for companies across the spectrum of large corporations to start-ups to summits and conferences.
              </p>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="font-semibold text-gray-dark mb-2 sm:mb-3">Our model is based on:</h4>
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
              
              <div className="space-y-2">
                 <p className="text-sm text-gray-600 italic">
                   • Our understanding of tonality needed for each event is impeccable.
                 </p>
                 <p className="text-sm text-gray-600 italic">
                   • Consultative approach to building a brilliant event with our partners.
                 </p>
                 <p className="text-sm text-gray-600 italic">
                   • Collaborative leadership putting a strong network of vendors as extended team.
                 </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Vision;

