import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials: React.FC = () => {
  const testimonials = [
    { 
      name: 'Rajesh Kumar', 
      company: 'Mercedes-Benz India', 
      position: 'Event Manager',
      text: 'Alchemy Events transformed our annual dealer conference into an unforgettable experience. Their attention to detail and professionalism is truly exceptional. We have been working with them for 3 years now.',
      rating: 5,
      image: null
    },
    { 
      name: 'Priya Sharma', 
      company: 'Godrej Properties', 
      position: 'Marketing Head',
      text: 'Working with Alchemy Events was seamless from start to finish. They understood our vision and executed it flawlessly. Our product launch event exceeded all expectations and received amazing feedback.',
      rating: 5,
      image: null
    },
    { 
      name: 'Amit Patel', 
      company: 'ACI Worldwide', 
      position: 'HR Director',
      text: 'The team at Alchemy Events goes above and beyond. They managed our 500+ employee annual gathering with such precision and creativity. Highly recommended for corporate events!',
      rating: 5,
      image: null
    },
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-20 bg-gradient-to-br from-accent-sand/30 via-white to-accent-sage/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
      <motion.div 
        className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <span className="text-primary font-semibold text-xs sm:text-base tracking-wider uppercase mb-2 block">
            Client Success Stories
          </span>
          <h2 className="section-title text-2xl sm:text-4xl mb-3 sm:mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 font-body max-w-2xl mx-auto text-sm sm:text-base">
            Don't just take our word for it - hear from the companies we've helped create unforgettable experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card group hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaQuoteLeft className="text-primary text-lg sm:text-2xl" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-3 sm:mb-4 justify-end">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm sm:text-base" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm sm:text-base text-gray-600 font-body mb-4 sm:mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center pt-4 border-t border-gray-100">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold mr-3 sm:mr-4 flex-shrink-0">
                  {testimonial.name[0]}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm sm:text-base text-gray-dark">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{testimonial.position}</p>
                  <p className="text-xs sm:text-sm text-primary font-medium">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-16"
        >
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Join our growing list of satisfied clients
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">100+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm sm:text-base" />
              ))}
              <span className="text-xs sm:text-sm text-gray-600 ml-2 font-medium">4.9/5 Average Rating</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

