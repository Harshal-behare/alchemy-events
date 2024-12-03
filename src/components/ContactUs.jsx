import React from 'react';

function ContactUs() {
  return (
    <section id="contact-us" className="py-16 bg-gray-50/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Hello!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Write to Us</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary/50 outline-none bg-gray-50/50 border-gray-200 text-gray-800 placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary/50 outline-none bg-gray-50/50 border-gray-200 text-gray-800 placeholder-gray-400"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary/50 outline-none bg-gray-50/50 border-gray-200 text-gray-800 placeholder-gray-400"
              ></textarea>
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Get in Touch</h3>
            <p className="mb-4 text-gray-600">If you can think it, we will build it!</p>
            <button 
              className="btn btn-secondary w-full mb-4"
            >
              Schedule Appointment
            </button>
            <button 
              className="btn btn-primary w-full"
            >
              Call Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;

