import React from 'react';
import '../styles/Clients.scss';

const Clients = () => {
  return (
    <div className="clients-container">
      <h2>Our Clients</h2>
      <div className="client-logos">
        <img src="/assets/audi-logo.png" alt="Audi" />
        <img src="/assets/mercedes-logo.png" alt="Mercedes" />
        <img src="/assets/godrej-logo.png" alt="Godrej" />
      </div>
      <p>1000+ events managed (2010-2020), across various industries.</p>
    </div>
  );
};

export default Clients;
