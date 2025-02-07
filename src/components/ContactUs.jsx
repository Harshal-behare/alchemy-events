import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaCalendar, FaEnvelope } from 'react-icons/fa';

function ContactUs() {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const formEle = e.target;
      const formDatab = new FormData(formEle);
      
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw3bat5fB_kwxqZV-hwbrLjb4kPheARBjItMSwcRl744GNtusG4bRDaL9hvOCHvtt_H-g/exec",
        {
          method: "POST",
          body: formDatab
        }
      );

      if (response.ok) {
        setFormData({ Name: '', Email: '', Message: '' });
        setStatus({
          type: 'success',
          message: 'Thank you for your message! We will get back to you soon.'
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section id="contact-us" className="py-12 sm:py-24 bg-gray-900 relative overflow-hidden dark:bg-gray-800">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent" />
      <motion.div 
        className="absolute top-32 right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-white">Let's Connect</h2>
          <p className="text-gray-300 font-body max-w-2xl mx-auto text-sm sm:text-base">
            Ready to create something amazing together? We're here to turn your vision into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            className="card space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-heading font-semibold text-gray-dark">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {status.message && (
                <div className={`p-4 rounded-lg ${
                  status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}>
                  {status.message}
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none font-body text-sm sm:text-base"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none font-body text-sm sm:text-base"
                  />
                </div>
              </div>
              <div>
                <textarea
                  name="Message"
                  value={formData.Message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="w-full p-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none font-body text-sm sm:text-base"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button 
                  type="submit" 
                  className="btn btn-primary w-full sm:w-auto min-w-[160px] disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div 
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {/* Schedule Appointment Card */}
            <div className="card group hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 group-hover:scale-110 transition-transform">
                  <FaCalendar className="text-primary text-xl sm:text-2xl" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-heading font-semibold text-gray-dark mb-2">
                    Schedule an Appointment
                  </h4>
                  <p className="text-gray-medium font-body text-sm sm:text-base mb-3">
                    Let's discuss your event in detail
                  </p>
                  <a 
                    href="https://calendly.com/your-calendar-link" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary inline-block text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3"
                  >
                    Book a Meeting
                  </a>
                </div>
              </div>
            </div>

            {/* Call Us Card */}
            <div className="card group hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 group-hover:scale-110 transition-transform">
                  <FaPhone className="text-primary text-xl sm:text-2xl" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-heading font-semibold text-gray-dark mb-2">
                    Call Us
                  </h4>
                  <p className="text-gray-medium font-body text-sm sm:text-base mb-3">
                    Ready to discuss your event?
                  </p>
                  <a 
                    href="tel:+1971-295-3811" 
                    className="btn btn-primary inline-block text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3"
                  >
                    +1 971-295-3811
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;

