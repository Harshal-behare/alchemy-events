import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaLightbulb, FaChartLine, FaMagic } from 'react-icons/fa';

function WhyAlchemy() {
  const miceItems = [
    {
      letter: "M",
      title: "Meetings",
      description: "Corporate gatherings that inspire collaboration and innovation",
      icon: <FaHandshake className="text-2xl" />
    },
    {
      letter: "I",
      title: "Incentives",
      description: "Reward programs that motivate and celebrate excellence",
      icon: <FaLightbulb className="text-2xl" />
    },
    {
      letter: "C",
      title: "Conferences",
      description: "Large-scale events that connect and educate industries",
      icon: <FaChartLine className="text-2xl" />
    },
    {
      letter: "E",
      title: "Events",
      description: "Memorable experiences that leave lasting impressions",
      icon: <FaMagic className="text-2xl" />
    }
  ];

  return (
    <section id="why-alchemy" className="py-24 bg-gray-light relative overflow-hidden">
      <motion.div 
        className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Why Alchemy for Events?</h2>
          <p className="text-gray-medium font-body max-w-2xl mx-auto text-lg">
            Making Interesting Corporate Events is our specialty. We transform ordinary gatherings into extraordinary experiences.
          </p>
        </motion.div>

        {/* MICE Section */}
        <div className="mb-20">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {miceItems.map((item, index) => (
              <motion.div
                key={item.letter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="card overflow-hidden">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl font-bold text-primary/20 font-heading">
                        {item.letter}
                      </span>
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-2 text-gray-dark">
                      {item.title}
                    </h3>
                    <p className="text-gray-medium font-body">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Value Propositions */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="card group hover:bg-primary/5 transition-colors duration-300">
            <h3 className="text-xl font-heading font-semibold mb-2 text-gray-dark">
              Value System
            </h3>
            <p className="text-gray-medium font-body">
              Our core values drive every event we create, ensuring excellence and innovation.
            </p>
          </div>
          <div className="card group hover:bg-primary/5 transition-colors duration-300">
            <h3 className="text-xl font-heading font-semibold mb-2 text-gray-dark">
              MICE Expertise
            </h3>
            <p className="text-gray-medium font-body">
              From intimate meetings to grand conferences, we excel in every aspect of MICE events.
            </p>
          </div>
          <div className="card group hover:bg-primary/5 transition-colors duration-300">
            <h3 className="text-xl font-heading font-semibold mb-2 text-gray-dark">
              Passion
            </h3>
            <p className="text-gray-medium font-body">
              Nothing excites us more than blowing life into your events!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyAlchemy;

