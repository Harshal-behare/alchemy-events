import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png";
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import '../styles/Header.scss';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <header className="header">
      <div className="top-bar">
        <div className="top-bar__content">
          <p className="top-bar__tagline">
            Transforming visions into unforgettable experiences
          </p>
          <div className="top-bar__contact">
            <a href="tel:+1971-295-3811">
              <FaPhone />
              <span>+1 971-295-38</span>
            </a>
            <a href="mailto:info.alchemyevents@gmail.com">
              <FaEnvelope />
              <span>info.alchemyevents@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <nav className="nav">
        <div className="nav__container">
          <Link to="/" className="nav__logo">
            <img src={Logo} alt="Alchemy Events" />
          </Link>

          <div className="nav__menu">
            {['Home', 'More About Me', 'Services', 'Pricing', 'Inspiration', 'Blog', 'Lets Talk'].map((item) => (
              <Link key={item} to={`/${item.toLowerCase().replace(' ', '-')}`}>
                {item}
              </Link>
            ))}
          </div>

          <button className="nav__toggle" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${!isOpen ? 'hidden' : ''}`}>
        {['Home', 'More About Me', 'Services', 'Pricing', 'Inspiration', 'Blog', 'Lets Talk'].map((item) => (
          <Link 
            key={item} 
            to={`/${item.toLowerCase().replace(' ', '-')}`}
            onClick={() => setIsOpen(false)}
          >
            {item}
          </Link>
        ))}
        <div className="mobile-menu__contact">
          <a href="tel:+1971-295-3811">
            <FaPhone />
            <span>+1 971-295-3811</span>
          </a>
          <a href="mailto:info.eventcracker@gmail.com">
            <FaEnvelope />
            <span>info.eventcracker@gmail.com</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

