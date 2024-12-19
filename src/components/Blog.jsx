import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

function Blog() {
  // Demo blog data
  const demoEvents = [
    {
      id: 1,
      title: "Tech Summit 2024",
      date: new Date("2024-03-15"),
      description: "A groundbreaking tech conference bringing together industry leaders and innovators.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format",
      tags: ["Technology", "Conference", "Innovation"],
      location: "Portland Convention Center"
    },
    {
      id: 2,
      title: "Corporate Leadership Retreat",
      date: new Date("2024-02-20"),
      description: "An exclusive leadership development program focused on team building and strategy.",
      imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format",
      tags: ["Leadership", "Corporate", "Team Building"],
      location: "Mountain Resort, Aspen"
    },
    {
      id: 3,
      title: "Annual Marketing Symposium",
      date: new Date("2024-04-10"),
      description: "Exploring the latest trends in digital marketing and brand strategy.",
      imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format",
      tags: ["Marketing", "Digital", "Branding"],
      location: "Downtown Conference Hall"
    }
  ];

  const [events] = useState(demoEvents);
  const [loading] = useState(false);
  const [error] = useState(null);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Our Latest Events
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the magic behind our most recent events and get inspired for your next celebration.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">
                    {format(event.date, 'MMMM dd, yyyy')}
                  </p>
                  <p className="text-xs opacity-75">{event.location}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {event.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-6">
                <button className="w-full py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 rounded-lg text-sm font-medium">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest event updates and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            />
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Blog; 