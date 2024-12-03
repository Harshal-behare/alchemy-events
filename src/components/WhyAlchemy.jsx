import React from 'react';

function WhyAlchemy() {
  return (
    <section id="why-alchemy" className="py-16 bg-gray-100/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Why Alchemy for Events?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Value System</h3>
            <p className="text-gray-600">Our core values drive every event we create, ensuring excellence and innovation.</p>
          </div>
          <div className="card hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">MICE Expertise</h3>
            <p className="text-gray-600">Making Interesting Corporate Events is our specialty, from meetings to exhibitions.</p>
          </div>
          <div className="card hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Passion</h3>
            <p className="text-gray-600">Nothing excites us more than blowing life into your events!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyAlchemy;

