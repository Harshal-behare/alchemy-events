import React from 'react';

function BrandStory() {
  const highlights = [
    { title: 'Pioneers', value: '10+ years', description: 'Expertise in the Event Business' },
    { title: 'Perfection', value: '99%', description: 'Client Satisfaction Rate' },
    { title: 'Clientele', value: '100+', description: 'Satisfied Clients' },
    { title: 'Scale', value: '1000+', description: 'Events in 9 years' },
  ];

  return (
    <section id="brand-story" className="py-16 bg-gray-50/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Brand Story: An Eventful Bunch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-4xl font-bold text-primary mb-2">{item.value}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandStory;

