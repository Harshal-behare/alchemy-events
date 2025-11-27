import React from 'react';
import { motion } from 'framer-motion';
import { FaFileContract, FaHandshake, FaGavel } from 'react-icons/fa';

function TermsConditions() {
  const sections = [
    {
      icon: <FaHandshake />,
      title: "1. Agreement to Terms",
      content: "By accessing and using Alchemy Events' services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and clients of our event management services."
    },
    {
      icon: <FaFileContract />,
      title: "2. Services Description",
      content: "Alchemy Events provides professional event management services including but not limited to: corporate meetings, conferences, incentive programs, product launches, weddings, and social events. Specific services will be detailed in individual service agreements or contracts."
    },
    {
      title: "3. Booking and Reservations",
      subsections: [
        {
          subtitle: "3.1 Booking Process",
          text: "To book our services, clients must provide complete and accurate information about the event requirements. A formal quotation will be provided based on the information supplied."
        },
        {
          subtitle: "3.2 Confirmation",
          text: "Bookings are confirmed only upon receipt of the advance payment and signing of the service agreement. Dates are not reserved until confirmation is received."
        },
        {
          subtitle: "3.3 Availability",
          text: "All services are subject to availability. We reserve the right to decline bookings if we cannot meet the requirements or if dates are unavailable."
        }
      ]
    },
    {
      title: "4. Payment Terms",
      subsections: [
        {
          subtitle: "4.1 Payment Structure",
          text: "Unless otherwise agreed in writing, our standard payment terms are: 30% advance payment upon booking confirmation, 40% payment one month before the event date, 30% final payment on or before the event day."
        },
        {
          subtitle: "4.2 Payment Methods",
          text: "We accept payments via bank transfer, cheque, online payment, or as specified in the service agreement. All payments must be made in Indian Rupees (INR) unless otherwise agreed."
        },
        {
          subtitle: "4.3 Late Payments",
          text: "Late payments may result in service suspension or cancellation. Interest at 2% per month may be charged on overdue amounts."
        },
        {
          subtitle: "4.4 Additional Costs",
          text: "Any additional services, changes, or upgrades requested after the initial agreement will be charged separately and must be paid before implementation."
        }
      ]
    },
    {
      title: "5. Cancellation and Refund Policy",
      subsections: [
        {
          subtitle: "5.1 Cancellation by Client",
          text: "Cancellations must be made in writing. Refund amounts depend on the cancellation timing: More than 90 days before event - 50% refund of total amount paid, 60-90 days before event - 30% refund, 30-60 days before event - 15% refund, Less than 30 days before event - No refund."
        },
        {
          subtitle: "5.2 Cancellation by Alchemy Events",
          text: "We reserve the right to cancel services due to force majeure, client breach of terms, or other circumstances beyond our control. In such cases, we will refund all payments received minus any costs already incurred."
        },
        {
          subtitle: "5.3 Rescheduling",
          text: "Event rescheduling is subject to availability and may incur additional charges. Rescheduling requests must be made at least 60 days before the original event date."
        }
      ]
    },
    {
      title: "6. Client Responsibilities",
      subsections: [
        {
          subtitle: "6.1 Information Accuracy",
          text: "Clients must provide accurate, complete, and timely information about event requirements, guest counts, dietary restrictions, and special needs."
        },
        {
          subtitle: "6.2 Timely Decisions",
          text: "Clients must make decisions and provide approvals within agreed timelines to ensure smooth event execution."
        },
        {
          subtitle: "6.3 Venue and Vendor Access",
          text: "Clients must ensure we have appropriate access to venues and cooperation from any client-selected vendors."
        },
        {
          subtitle: "6.4 Guest Conduct",
          text: "Clients are responsible for the conduct of their guests and any damages caused by them."
        }
      ]
    },
    {
      title: "7. Our Responsibilities",
      subsections: [
        {
          subtitle: "7.1 Professional Services",
          text: "We will provide professional event management services with reasonable skill and care, in accordance with industry standards."
        },
        {
          subtitle: "7.2 Vendor Coordination",
          text: "We will coordinate with vendors and suppliers to deliver services as agreed. However, we are not liable for vendor failures beyond our reasonable control."
        },
        {
          subtitle: "7.3 On-site Management",
          text: "Our team will be present on-site during the event to manage and coordinate all aspects of the event execution."
        }
      ]
    },
    {
      title: "8. Limitation of Liability",
      subsections: [
        {
          subtitle: "8.1 Service Limitations",
          text: "Our liability is limited to the total amount paid for our services. We are not liable for indirect, consequential, or incidental damages."
        },
        {
          subtitle: "8.2 Third-Party Services",
          text: "We are not liable for failures, delays, or defects in services provided by third-party vendors, venues, or suppliers, except where caused by our negligence."
        },
        {
          subtitle: "8.3 Force Majeure",
          text: "We are not liable for failure to perform due to circumstances beyond our reasonable control including natural disasters, pandemics, government restrictions, strikes, or other force majeure events."
        },
        {
          subtitle: "8.4 Guest Injuries",
          text: "We are not liable for injuries, losses, or damages to guests except where directly caused by our negligence."
        }
      ]
    },
    {
      title: "9. Intellectual Property",
      subsections: [
        {
          subtitle: "9.1 Our Content",
          text: "All content, designs, concepts, and materials created by Alchemy Events remain our intellectual property unless otherwise agreed in writing."
        },
        {
          subtitle: "9.2 Client Content",
          text: "Clients retain ownership of their logos, branding, and materials provided to us. We may use event photos and details for marketing purposes unless client requests otherwise in writing."
        },
        {
          subtitle: "9.3 Photography and Videography",
          text: "We reserve the right to photograph and record events for promotional purposes unless explicitly prohibited by the client."
        }
      ]
    },
    {
      title: "10. Confidentiality",
      content: "Both parties agree to keep confidential any proprietary or sensitive information shared during the course of our engagement. This obligation continues after the termination of services."
    },
    {
      title: "11. Insurance",
      subsections: [
        {
          subtitle: "11.1 Our Insurance",
          text: "We maintain professional liability insurance. Details available upon request."
        },
        {
          subtitle: "11.2 Client Insurance",
          text: "We recommend clients obtain event insurance to cover unforeseen circumstances. We can assist in arranging insurance through our partners."
        }
      ]
    },
    {
      title: "12. Dispute Resolution",
      subsections: [
        {
          subtitle: "12.1 Negotiation",
          text: "Any disputes will first be attempted to be resolved through good faith negotiation between the parties."
        },
        {
          subtitle: "12.2 Mediation",
          text: "If negotiation fails, disputes will be referred to mediation before pursuing legal action."
        },
        {
          subtitle: "12.3 Jurisdiction",
          text: "These terms are governed by Indian law. Courts in Pune, Maharashtra have exclusive jurisdiction over any disputes."
        }
      ]
    },
    {
      title: "13. Modifications to Terms",
      content: "We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of modified terms. Existing contracts will be governed by the terms in effect at the time of signing."
    },
    {
      title: "14. Severability",
      content: "If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect."
    },
    {
      title: "15. Entire Agreement",
      content: "These Terms, together with any service agreement or contract, constitute the entire agreement between the client and Alchemy Events and supersede all prior agreements, understandings, or representations."
    },
    {
      title: "16. Contact Information",
      content: "For questions about these Terms and Conditions, please contact us at: Email: info@alchemyevents.in, Phone: +91 8446669100, Pune Office: A 1503, Ganga Florentina, NIBM Annex, Pune - 411060, Mumbai Office: 603, Romell Amore, Off Veera Desai Road, Andheri West, Mumbai - 400058"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <FaGavel className="text-3xl sm:text-4xl text-primary" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
            Terms & Conditions
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-4">
            Last updated: November 28, 2024
          </p>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Please read these Terms and Conditions carefully before using our services. 
            By engaging Alchemy Events, you agree to be bound by these terms.
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-6 sm:space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              className="card"
            >
              <div className="flex items-start gap-4 mb-4">
                {section.icon && (
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="text-primary text-xl sm:text-2xl">
                      {section.icon}
                    </div>
                  </div>
                )}
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white flex-1">
                  {section.title}
                </h2>
              </div>

              {section.content && (
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              )}

              {section.subsections && (
                <div className="space-y-4 mt-4">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="ml-0 sm:ml-4">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {subsection.subtitle}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                        {subsection.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Acceptance Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 sm:mt-16 card bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary"
        >
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
            Acceptance of Terms
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. 
            If you do not agree to these terms, please do not use our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact-us" 
              className="btn btn-primary"
            >
              Contact Us
            </a>
            <a 
              href="/privacy-policy" 
              className="btn btn-secondary"
            >
              View Privacy Policy
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default TermsConditions;
