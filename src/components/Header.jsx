import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Logo from "../assets/logo.png";
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import '../styles/Header.scss';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const scrollToSection = (section) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${section}`;
    }
    setIsOpen(false);
  };

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
              <span>+1 971-295-3811</span>
            </a>
            <a href="mailto:info.eventcracker@gmail.com">
              <FaEnvelope />
              <span>info.eventcracker@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <nav className="nav">
        <div className="nav__container">
          <RouterLink to="/" className="nav__logo">
            <img src={Logo} alt="Alchemy Events" />
          </RouterLink>

          <div className="nav__menu">
            <RouterLink to="/">Home</RouterLink>
            <ScrollLink
              to="why-alchemy"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer"
              onClick={() => scrollToSection('why-alchemy')}
            >
              Why Alchemy
            </ScrollLink>
            <RouterLink to="/services">Services</RouterLink>
            <ScrollLink
              to="vision"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer"
              onClick={() => scrollToSection('vision')}
            >
              Vision
            </ScrollLink>
            <RouterLink to="/blog">Blog</RouterLink>
            <ScrollLink
              to="contact-us"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer"
              onClick={() => scrollToSection('contact-us')}
            >
              Contact Us
            </ScrollLink>
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
        <RouterLink to="/" onClick={() => setIsOpen(false)}>Home</RouterLink>
        <ScrollLink
          to="why-alchemy"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer"
          onClick={() => scrollToSection('why-alchemy')}
        >
          Why Alchemy
        </ScrollLink>
        <RouterLink to="/services" onClick={() => setIsOpen(false)}>Services</RouterLink>
        <ScrollLink
          to="vision"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer"
          onClick={() => scrollToSection('vision')}
        >
          Vision
        </ScrollLink>
        <RouterLink to="/blog" onClick={() => setIsOpen(false)}>Blog</RouterLink>
        <ScrollLink
          to="contact-us"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer"
          onClick={() => scrollToSection('contact-us')}
        >
          Contact Us
        </ScrollLink>
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

