import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaUserShield } from 'react-icons/fa';

function PrivacyPolicy() {
  const sections = [
    {
      icon: <FaUserShield />,
      title: "1. Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you use our services or contact us, we may collect:"
        },
        {
          list: [
            "Name and contact information (email, phone number, address)",
            "Event details and requirements",
            "Company information (for corporate clients)",
            "Payment and billing information",
            "Communication preferences",
            "Any other information you choose to provide"
          ]
        },
        {
          subtitle: "Automatically Collected Information",
          text: "When you visit our website, we automatically collect:"
        },
        {
          list: [
            "IP address and device information",
            "Browser type and version",
            "Pages visited and time spent",
            "Referring website",
            "Cookies and similar tracking technologies"
          ]
        }
      ]
    },
    {
      icon: <FaLock />,
      title: "2. How We Use Your Information",
      content: [
        {
          text: "We use the information we collect to:"
        },
        {
          list: [
            "Provide and improve our event management services",
            "Communicate with you about your events and our services",
            "Process payments and manage bookings",
            "Send marketing communications (with your consent)",
            "Respond to your inquiries and support requests",
            "Analyze website usage and improve user experience",
            "Comply with legal obligations and enforce our terms",
            "Prevent fraud and ensure security"
          ]
        }
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: "3. Information Sharing and Disclosure",
      content: [
        {
          text: "We do not sell your personal information. We may share your information with:"
        },
        {
          subtitle: "Service Providers",
          list: [
            "Vendors and suppliers (venues, caterers, decorators, etc.)",
            "Payment processors and financial institutions",
            "Technology service providers (hosting, analytics, email)",
            "Professional advisors (lawyers, accountants)"
          ]
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose information when required by law, court order, or to:"
        },
        {
          list: [
            "Comply with legal processes",
            "Protect our rights and property",
            "Prevent fraud or illegal activities",
            "Protect the safety of our users and the public"
          ]
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity."
        }
      ]
    },
    {
      icon: <FaLock />,
      title: "4. Data Security",
      content: [
        {
          text: "We implement appropriate technical and organizational measures to protect your personal information:"
        },
        {
          list: [
            "Encryption of sensitive data (SSL/TLS)",
            "Secure servers and databases",
            "Access controls and authentication",
            "Regular security audits and updates",
            "Employee training on data protection",
            "Secure payment processing (PCI DSS compliant)"
          ]
        },
        {
          text: "However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security."
        }
      ]
    },
    {
      title: "5. Your Rights and Choices",
      content: [
        {
          text: "You have the following rights regarding your personal information:"
        },
        {
          subtitle: "Access and Correction",
          list: [
            "Request access to your personal data",
            "Correct inaccurate or incomplete information",
            "Update your contact preferences"
          ]
        },
        {
          subtitle: "Deletion",
          list: [
            "Request deletion of your personal data",
            "Right to be forgotten (subject to legal obligations)"
          ]
        },
        {
          subtitle: "Marketing Communications",
          list: [
            "Opt-out of marketing emails (unsubscribe link provided)",
            "Opt-out of SMS marketing",
            "Manage communication preferences"
          ]
        },
        {
          subtitle: "Data Portability",
          list: [
            "Request a copy of your data in a portable format",
            "Transfer your data to another service provider"
          ]
        },
        {
          text: "To exercise these rights, contact us at info@alchemyevents.in or call +91 8446669100."
        }
      ]
    },
    {
      title: "6. Cookies and Tracking Technologies",
      content: [
        {
          text: "We use cookies and similar technologies to:"
        },
        {
          list: [
            "Remember your preferences and settings",
            "Analyze website traffic and usage patterns",
            "Improve website functionality and user experience",
            "Deliver personalized content and advertisements",
            "Track marketing campaign effectiveness"
          ]
        },
        {
          subtitle: "Types of Cookies We Use",
          list: [
            "Essential cookies (required for website functionality)",
            "Analytics cookies (Google Analytics)",
            "Marketing cookies (social media, advertising)",
            "Preference cookies (language, region settings)"
          ]
        },
        {
          text: "You can control cookies through your browser settings. Note that disabling cookies may affect website functionality."
        }
      ]
    },
    {
      title: "7. Third-Party Services",
      content: [
        {
          text: "Our website and services may contain links to third-party websites and integrate with third-party services:"
        },
        {
          list: [
            "Google Analytics (website analytics)",
            "Social media platforms (Facebook, Instagram, LinkedIn)",
            "Payment gateways",
            "Email service providers",
            "Cloud storage services"
          ]
        },
        {
          text: "These third parties have their own privacy policies. We are not responsible for their practices and encourage you to review their policies."
        }
      ]
    },
    {
      title: "8. Data Retention",
      content: [
        {
          text: "We retain your personal information for as long as necessary to:"
        },
        {
          list: [
            "Provide our services and fulfill contractual obligations",
            "Comply with legal and regulatory requirements",
            "Resolve disputes and enforce agreements",
            "Maintain business records and archives"
          ]
        },
        {
          text: "Typical retention periods:"
        },
        {
          list: [
            "Active client data: Duration of relationship + 7 years",
            "Inquiry data: 2 years from last contact",
            "Marketing data: Until opt-out or 3 years of inactivity",
            "Financial records: 7 years (as per Indian law)"
          ]
        }
      ]
    },
    {
      title: "9. Children's Privacy",
      content: [
        {
          text: "Our services are not directed to children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately."
        }
      ]
    },
    {
      title: "10. International Data Transfers",
      content: [
        {
          text: "Your information may be transferred to and processed in countries other than India. We ensure appropriate safeguards are in place for such transfers, including:"
        },
        {
          list: [
            "Standard contractual clauses",
            "Adequacy decisions by regulatory authorities",
            "Consent where required",
            "Compliance with applicable data protection laws"
          ]
        }
      ]
    },
    {
      title: "11. Changes to This Privacy Policy",
      content: [
        {
          text: "We may update this Privacy Policy from time to time to reflect:"
        },
        {
          list: [
            "Changes in our practices",
            "Legal or regulatory requirements",
            "New features or services",
            "Feedback from users"
          ]
        },
        {
          text: "We will notify you of significant changes by:"
        },
        {
          list: [
            "Posting the updated policy on our website",
            "Updating the 'Last Updated' date",
            "Sending email notifications (for material changes)",
            "Displaying a notice on our website"
          ]
        },
        {
          text: "Your continued use of our services after changes constitutes acceptance of the updated policy."
        }
      ]
    },
    {
      title: "12. Contact Us",
      content: [
        {
          text: "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:"
        },
        {
          text: "Alchemy Events"
        },
        {
          text: "Email: info@alchemyevents.in"
        },
        {
          text: "Phone: +91 8446669100"
        },
        {
          text: "Pune Office: A 1503, Ganga Florentina, NIBM Annex, Pune - 411060"
        },
        {
          text: "Mumbai Office: 603, Romell Amore, Off Veera Desai Road, Andheri West, Mumbai - 400058"
        },
        {
          text: "We will respond to your inquiry within 30 days."
        }
      ]
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
              <FaShieldAlt className="text-3xl sm:text-4xl text-primary" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-4">
            Last updated: November 28, 2024
          </p>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            At Alchemy Events, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-8 sm:space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
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
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex-1">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    {item.subtitle && (
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {item.subtitle}
                      </h3>
                    )}
                    {item.text && (
                      <p className="text-sm sm:text-base leading-relaxed mb-2">
                        {item.text}
                      </p>
                    )}
                    {item.list && (
                      <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                        {item.list.map((listItem, listIndex) => (
                          <li key={listIndex}>{listItem}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 sm:mt-16 text-center card bg-gradient-to-r from-primary/5 to-primary/10"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Questions about our Privacy Policy?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We're here to help. Contact us if you have any concerns or need clarification.
          </p>
          <a 
            href="#contact-us" 
            className="btn btn-primary"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
