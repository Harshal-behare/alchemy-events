import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaHandshake, FaLightbulb, FaChartLine, FaMagic } from 'react-icons/fa';

function WhyAlchemy() {
  const miceItems = [
    {
      letter: "M",
      title: "Meetings",
      description: "From intimate board meetings to large corporate gatherings, we create engaging spaces for collaboration and decision-making.",
      icon: <FaHandshake className="text-xl sm:text-2xl" />,
      features: ["Board Meetings", "Team Sessions", "Strategic Planning"]
    },
    {
      letter: "I",
      title: "Incentives",
      description: "Reward your top performers with meticulously planned experiences that inspire and motivate.",
      icon: <FaLightbulb className="text-xl sm:text-2xl" />,
      features: ["Award Ceremonies", "Team Building", "Recognition Events"]
    },
    {
      letter: "C",
      title: "Conferences",
      description: "Large-scale events that bring industries together, featuring cutting-edge technology and seamless coordination.",
      icon: <FaChartLine className="text-xl sm:text-2xl" />,
      features: ["Industry Summits", "Trade Shows", "Global Conferences"]
    },
    {
      letter: "E",
      title: "Events",
      description: "Transform ordinary occasions into extraordinary experiences with our creative and meticulous planning.",
      icon: <FaMagic className="text-xl sm:text-2xl" />,
      features: ["Product Launches", "Galas", "Corporate Celebrations"]
    }
  ];

  return (
    <section id="why-alchemy" className="py-0 sm:py-5 bg-gradient-to-br from-accent-sand via-accent-sage to-accent-wood relative overflow-hidden dark:bg-slate-800">
      {/* Mobile-optimized decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-3 sm:opacity-5" />
      <motion.div 
        className="absolute -top-1/3 -right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-primary/5 rounded-full blur-2xl sm:blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto px-3 sm:px-4 relative">
        <motion.div 
          className="text-center mb-6 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-xs sm:text-base tracking-wider uppercase mb-1 sm:mb-2 block">
            Our Expertise
          </span>
          <h2 className="section-title text-2xl sm:text-4xl mb-2 sm:mb-4">The MICE Advantage</h2>
          <p className="text-gray-600 font-body max-w-2xl mx-auto text-sm sm:text-base mt-2 sm:mt-4 px-2">
            We specialize in MICE - the four pillars of corporate events that transform your vision into reality.
          </p>
        </motion.div>

        {/* Mobile-optimized MICE Section */}
        <div className="mb-8 sm:mb-12">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
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
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="card overflow-hidden p-3 sm:p-6 hover:shadow-lg transition-all duration-300">
                  {/* Mobile-optimized blur effect */}
                  <div className="absolute -top-3 -left-3 w-12 sm:w-24 h-12 sm:h-24 bg-primary/10 rounded-full blur-lg sm:blur-2xl group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="relative z-10 flex items-start">
                    {/* Mobile-optimized letter and icon */}
                    <div className="flex flex-col items-center mr-3 sm:mr-4">
                      <span className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent font-heading mb-1 sm:mb-2">
                        {item.letter}
                      </span>
                      <div className="h-6 w-6 sm:h-10 sm:w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                    </div>

                    {/* Mobile-optimized content */}
                    <div className="flex-1">
                      <h3 className="text-base sm:text-xl font-heading font-semibold mb-1 sm:mb-2 text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 font-body mb-2 sm:mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      <ul className="space-y-0.5 sm:space-y-1">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="text-2xs sm:text-sm text-gray-500 flex items-center">
                            <span className="w-1 h-1 bg-primary rounded-full mr-1.5 sm:mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile-optimized CTA */}
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-base">
            Ready to create an unforgettable event?
          </p>
          <Link 
            to="contact-us"
            smooth={true}
            offset={-100}
            duration={500}
            className="btn btn-primary text-sm sm:text-base w-full sm:w-auto"
          >
            Let's Plan Together
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyAlchemy;

