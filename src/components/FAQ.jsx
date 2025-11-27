import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What types of events do you manage?",
          answer: "We specialize in MICE events - Meetings, Incentives, Conferences, and Events. This includes corporate meetings, board meetings, product launches, conferences, team building activities, award ceremonies, weddings, and social events. We handle everything from intimate gatherings to large-scale conferences with 1000+ attendees."
        },
        {
          question: "How far in advance should I book?",
          answer: "We recommend booking at least 3-6 months in advance for large corporate events and conferences. For weddings, 6-12 months is ideal. However, we understand that sometimes events come up quickly, and we can accommodate shorter timelines depending on our availability and the event requirements."
        },
        {
          question: "Do you provide services outside Pune and Mumbai?",
          answer: "Yes! While we're based in Pune and Mumbai, we manage events across India and internationally. We have a strong network of vendors and partners in major cities and can coordinate events anywhere you need."
        }
      ]
    },
    {
      category: "Services & Pricing",
      questions: [
        {
          question: "What's included in your event management services?",
          answer: "Our comprehensive services include: venue selection and booking, vendor management, catering coordination, decor and theme design, audio-visual setup, entertainment booking, logistics management, registration systems, on-site coordination, and post-event support. We customize our services based on your specific needs."
        },
        {
          question: "How do you charge for your services?",
          answer: "Our pricing is customized based on event size, complexity, location, and specific requirements. We offer both percentage-based fees and fixed-price packages. Contact us for a detailed quote tailored to your event. We're transparent about all costs and provide detailed breakdowns."
        },
        {
          question: "Do you offer partial event management services?",
          answer: "Yes! We understand that some clients prefer to handle certain aspects themselves. We offer flexible packages where you can choose specific services like venue selection, vendor coordination, or day-of coordination only."
        }
      ]
    },
    {
      category: "Planning Process",
      questions: [
        {
          question: "What is your event planning process?",
          answer: "Our process includes: 1) Initial consultation to understand your vision and requirements, 2) Proposal and budget planning, 3) Venue and vendor selection, 4) Design and theme development, 5) Timeline creation and coordination, 6) Regular progress updates, 7) Final walkthrough and rehearsal, 8) Event day execution, 9) Post-event wrap-up and feedback."
        },
        {
          question: "How involved do I need to be in the planning?",
          answer: "That's entirely up to you! Some clients prefer to be involved in every decision, while others want us to handle everything. We adapt to your preferred level of involvement and keep you informed at every stage. We'll schedule regular check-ins and always seek your approval on major decisions."
        },
        {
          question: "Can I make changes after the planning has started?",
          answer: "Yes, we understand that plans can change. We're flexible and can accommodate modifications throughout the planning process. However, significant changes close to the event date may incur additional costs or have limited options due to vendor availability."
        }
      ]
    },
    {
      category: "Vendors & Logistics",
      questions: [
        {
          question: "Do you work with specific vendors or can I choose my own?",
          answer: "We have a trusted network of vendors we've worked with for years, ensuring quality and reliability. However, if you have preferred vendors, we're happy to coordinate with them. We can also help you evaluate and select vendors based on your requirements and budget."
        },
        {
          question: "What happens if something goes wrong on the event day?",
          answer: "We have contingency plans for all scenarios and our experienced team handles issues quickly and professionally. We have backup vendors, alternative plans, and insurance coverage. Our on-site coordinators are trained to manage unexpected situations without disrupting your event."
        },
        {
          question: "Do you provide event insurance?",
          answer: "We can help you arrange event insurance through our partners. We recommend insurance for large events to protect against unforeseen circumstances like weather issues, vendor cancellations, or other emergencies."
        }
      ]
    },
    {
      category: "Payment & Contracts",
      questions: [
        {
          question: "What is your payment structure?",
          answer: "Typically, we require a 30% advance to secure the date and begin planning, 40% one month before the event, and the final 30% on the event day. Payment terms can be customized for large corporate clients. We accept bank transfers, cheques, and online payments."
        },
        {
          question: "What is your cancellation policy?",
          answer: "Cancellation terms depend on the timing: More than 90 days before the event - 50% refund of advance paid, 60-90 days - 30% refund, 30-60 days - 15% refund, Less than 30 days - No refund. These terms are outlined in our contract and can be discussed during the initial consultation."
        },
        {
          question: "Do you require a contract?",
          answer: "Yes, we work with a detailed contract that outlines services, timelines, payment terms, cancellation policy, and responsibilities of both parties. This protects both you and us and ensures clear expectations. We're happy to review and discuss all contract terms before signing."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent-sand/30 to-white dark:from-gray-900 dark:to-gray-800 py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <FaQuestionCircle className="text-3xl sm:text-4xl text-primary" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our event management services. 
            Can't find what you're looking for? <a href="#contact-us" className="text-primary hover:underline">Contact us</a>
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8 sm:space-y-12">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              {/* Category Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
                <span className="w-1 h-6 sm:h-8 bg-primary rounded-full mr-3"></span>
                {category.category}
              </h2>

              {/* Questions */}
              <div className="space-y-3 sm:space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const index = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === index;

                  return (
                    <motion.div
                      key={questionIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (categoryIndex * 0.1) + (questionIndex * 0.05) }}
                      className="card hover:shadow-lg transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full flex justify-between items-start text-left gap-4 group"
                        aria-expanded={isOpen}
                      >
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors pr-4">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0 mt-1">
                          <div className={`w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary' : ''}`}>
                            <FaChevronDown
                              className={`text-primary transition-all duration-300 ${
                                isOpen ? 'rotate-180 text-white' : ''
                              }`}
                            />
                          </div>
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 sm:mt-16 text-center card bg-gradient-to-r from-primary/5 to-primary/10"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our team is here to help. Get in touch and we'll answer all your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact-us" 
              className="btn btn-primary"
            >
              Contact Us
            </a>
            <a 
              href="tel:+918446669100" 
              className="btn btn-secondary"
            >
              Call +91 8446669100
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default FAQ;
