import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";

function ContactUs() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const formEle = e.target;
      const formDatab = new FormData(formEle);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw3bat5fB_kwxqZV-hwbrLjb4kPheARBjItMSwcRl744GNtusG4bRDaL9hvOCHvtt_H-g/exec",
        {
          method: "POST",
          body: formDatab,
        }
      );

      if (response.ok) {
        setFormData({ Name: "", Email: "", Phone: "", Message: "" });
        setStatus({
          type: "success",
          message:
            "Thank you for your message! We will get back to you soon.",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact-us"
      className="py-12 sm:py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent dark:from-primary/10" />

      <motion.div
        className="absolute top-32 right-32 w-64 h-64 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-xs sm:text-base tracking-wider uppercase mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading text-gray-900 dark:text-white mb-4">
            Let's Create Magic Together
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-body max-w-2xl mx-auto text-base sm:text-lg">
            If you can think it, we will build it
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Form Card */}
          <motion.div
            className="p-6 sm:p-8 rounded-xl shadow-md bg-white dark:bg-gray-800 transition-colors space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-heading font-semibold text-gray-900 dark:text-white">
              Write to Us
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {status.message && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === "success"
                      ? "bg-green-100 text-green-900 dark:bg-green-900/40 dark:text-green-300"
                      : "bg-red-100 text-red-900 dark:bg-red-900/40 dark:text-red-300"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  minLength="2"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary/30 outline-none"
                />

                <input
                  type="email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary/30 outline-none"
                />
              </div>

              <textarea
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                rows="4"
                placeholder="Your Message"
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary/30 outline-none"
              ></textarea>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary w-full sm:w-auto min-w-[160px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            className="p-6 sm:p-8 rounded-xl shadow-md bg-white dark:bg-gray-800 transition-colors space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-start space-x-4 sm:space-x-6">
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 dark:bg-primary/20">
                <FaPhone className="text-primary text-xl sm:text-2xl" />
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-heading font-semibold text-gray-900 dark:text-white mb-2">
                  Grab the Phone & Say Hello!
                </h4>

                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4">
                  Ready to discuss your event?
                </p>

                <a
                  href="tel:+91 95031 70005"
                  className="btn btn-primary px-6 py-3 inline-block"
                >
                  +91 95031 70005
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
