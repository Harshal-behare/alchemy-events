import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaHandshake, FaGlassCheers, FaBullhorn, FaTrophy, FaUsers, FaRocket } from 'react-icons/fa';

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaHandshake />,
      title: "Corporate Meetings",
      description: "Professional meeting management for board meetings, stakeholder gatherings, and strategic planning sessions with seamless execution.",
      features: [
        "Board Meetings & AGMs",
        "Venue Selection & Setup",
        "Audio-Visual Equipment",
        "Catering & Hospitality",
        "Documentation & Minutes"
      ]
    },
    {
      icon: <FaTrophy />,
      title: "Incentive Programs",
      description: "Reward your top performers with meticulously planned incentive trips and recognition events that inspire and motivate.",
      features: [
        "Award Ceremonies",
        "Team Building Activities",
        "Destination Management",
        "Recognition Events",
        "Custom Trophies & Gifts"
      ]
    },
    {
      icon: <FaUsers />,
      title: "Conferences & Summits",
      description: "Large-scale conferences bringing industries together with cutting-edge technology, seamless coordination, and memorable experiences.",
      features: [
        "Industry Summits",
        "Trade Shows & Exhibitions",
        "Speaker Management",
        "Registration Systems",
        "Live Streaming & Hybrid Events"
      ]
    },
    {
      icon: <FaGlassCheers />,
      title: "Corporate Events",
      description: "Transform ordinary occasions into extraordinary experiences with our creative planning and meticulous attention to detail.",
      features: [
        "Annual Day Celebrations",
        "Team Outings & Picnics",
        "Festival Celebrations",
        "Milestone Events",
        "Employee Engagement"
      ]
    },
    {
      icon: <FaRocket />,
      title: "Product Launches",
      description: "Create buzz and excitement around your new products with impactful launch events that leave lasting impressions.",
      features: [
        "Launch Event Planning",
        "Media Management",
        "Brand Activations",
        "Demo Setups",
        "Post-Event Analytics"
      ]
    },
    {
      icon: <FaBullhorn />,
      title: "Brand Activations",
      description: "Engage your audience with immersive brand experiences that create meaningful connections and drive business results.",
      features: [
        "Experiential Marketing",
        "Pop-up Events",
        "Roadshows",
        "Mall Activations",
        "Social Media Integration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-slate-700">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="section-title">Our Services</h2>
            <p className="text-gray-600 mb-16">
              Comprehensive event management solutions for your corporate needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group"
              >
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 text-primary">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{service.description}</p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-500 text-sm sm:text-base">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full mr-1.5 sm:mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-gray-600 mb-8">
              Let's discuss how we can help make your next event extraordinary
            </p>
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/contact')}
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;