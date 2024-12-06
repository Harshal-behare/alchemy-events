import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaCalendar, FaEnvelope } from 'react-icons/fa';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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
      // Add document to 'contacts' collection
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'new'
      });

      // Clear form and show success message
      setFormData({ name: '', email: '', message: '' });
      setStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.'
      });
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
    <section id="contact-us" className="py-12 sm:py-24 bg-white relative overflow-hidden">
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
          <h2 className="section-title">Hello!</h2>
          <p className="text-gray-medium font-body max-w-2xl mx-auto">
            If you can think it, we will build it. Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            className="card space-y-3 sm:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-heading font-semibold text-gray-dark">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {status.message && (
                <div className={`p-4 rounded-lg ${
                  status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}>
                  {status.message}
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none font-body"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none font-body"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Your Message"
                    required
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none font-body"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div 
            className="space-y-3 sm:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {/* Schedule Appointment Card */}
            <div className="card group cursor-pointer">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 group-hover:scale-110 transition-transform">
                  <FaCalendar className="text-primary text-lg sm:text-xl" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-heading font-semibold text-gray-dark mb-1 sm:mb-2">
                    Schedule an Appointment
                  </h4>
                  <p className="text-gray-medium font-body text-sm sm:text-base">
                    Let's discuss your event in detail
                  </p>
                  <a 
                    href="https://calendly.com/your-calendar-link" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-2 sm:mt-4 inline-block text-sm sm:text-base"
                  >
                    Book a Meeting
                  </a>
                </div>
              </div>
            </div>

            {/* Call Us Card */}
            <div className="card group cursor-pointer">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 group-hover:scale-110 transition-transform">
                  <FaPhone className="text-primary text-lg sm:text-xl" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-heading font-semibold text-gray-dark mb-1 sm:mb-2">
                    Call Us
                  </h4>
                  <p className="text-gray-medium font-body text-sm sm:text-base">
                    Ready to discuss your event?
                  </p>
                  <a 
                    href="tel:+1971-295-3811" 
                    className="btn btn-primary mt-2 sm:mt-4 inline-block text-sm sm:text-base"
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

