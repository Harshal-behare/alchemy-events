import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Mercedes-Benz India",
      position: "Event Manager",
      text: "Alchemy Events transformed our annual dealer conference into an unforgettable experience. Their attention to detail and professionalism is truly exceptional. We have been working with them for 3 years now.",
      rating: 5,
      image: null,
    },
    {
      name: "Priya Sharma",
      company: "Godrej Properties",
      position: "Marketing Head",
      text: "Working with Alchemy Events was seamless from start to finish. They understood our vision and executed it flawlessly. Our product launch event exceeded all expectations and received amazing feedback.",
      rating: 5,
      image: null,
    },
    {
      name: "Amit Patel",
      company: "ACI Worldwide",
      position: "HR Director",
      text: "The team at Alchemy Events goes above and beyond. They managed our 500+ employee annual gathering with such precision and creativity. Highly recommended for corporate events!",
      rating: 5,
      image: null,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-20 bg-gradient-to-br from-accent-sand/30 via-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 to-accent-sage/20 relative overflow-hidden transition-colors"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 dark:to-primary/10" />
      <motion.div
        className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-semibold text-xs sm:text-base tracking-wider uppercase mb-2 block">
            Client Success Stories
          </span>

          <h2 className="section-title text-3xl sm:text-5xl mb-4 sm:mb-6 dark:text-white">
            What Our Clients Say
          </h2>

          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg font-medium">
            Hear from the companies we've helped create unforgettable experiences
          </p>
        </motion.div>

        {/* ⭐ MOBILE: Horizontal scroll */}
        <div className="block sm:hidden overflow-x-auto whitespace-nowrap space-x-4 pb-4 snap-x snap-mandatory no-scrollbar">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="inline-block align-top w-80 snap-center card bg-white dark:bg-gray-800 rounded-xl p-5 mr-4 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Quote bubble */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <FaQuoteLeft className="text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3 justify-end">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-xs">{testimonial.position}</p>
                  <p className="text-primary text-xs">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ⭐ DESKTOP/TABLET: Grid layout */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="card bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <FaQuoteLeft className="text-primary" />
              </div>

              <div className="flex gap-1 mb-3 justify-end">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-base" />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-base mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  <p className="text-primary text-sm">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-20"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm sm:text-base">
            Join our growing list of satisfied clients
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary border-2 border-white dark:border-gray-900 text-white flex items-center justify-center text-xs font-bold"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                100+ Happy Clients
              </span>
            </div>

            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm sm:text-base" />
              ))}
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 ml-2 font-medium">
                4.9/5 Average Rating
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
