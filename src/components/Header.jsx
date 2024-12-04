import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Logo from "../assets/logos/logo.png";
import { FaPhone, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import '../styles/Header.scss';
import { motion } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDark(savedTheme === 'dark');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  const scrollToSection = (section) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${section}`;
    }
    setIsOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''} ${isDark ? 'dark' : ''}`}>
      <div className="top-bar backdrop-blur-sm bg-primary/5">
        <div className="top-bar__content container mx-auto px-4">
          <p className="top-bar__tagline font-heading text-gray-700">
            Transforming visions into unforgettable experiences
          </p>
          <div className="top-bar__contact flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="fixed top-4 right-4 z-[60] w-12 h-12 rounded-full 
                bg-white/10 backdrop-blur-md flex items-center justify-center 
                text-primary dark:text-dark-text hover:bg-primary hover:text-white 
                dark:hover:bg-primary transition-all duration-500 
                shadow-lg hover:shadow-primary/20 dark:shadow-primary/10
                border border-white/20 dark:border-white/10
                transform hover:scale-110 active:scale-95"
              aria-label="Toggle theme"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full flex items-center justify-center"
              >
                {isDark ? (
                  <FaSun className="text-xl text-yellow-400" />
                ) : (
                  <FaMoon className="text-xl text-primary" />
                )}
              </motion.div>
            </button>
            <a href="tel:+1971-295-3" className="flex items-center gap-2 text-primary hover:text-primary-dark">
              <FaPhone className="text-lg" />
              <span className="font-medium">+1 971-295-38</span>
            </a>
            <a href="mailto:info@alchemyevents.com" className="flex items-center gap-2 text-primary hover:text-primary-dark">
              <FaEnvelope className="text-lg" />
              <span className="font-medium">info@alchemyevents.com</span>
            </a>
          </div>
        </div>
      </div>

      <nav className={`nav backdrop-blur-md ${isScrolled ? 'bg-white/90 shadow-lg' : 'bg-transparent'}`}>
        <div className="nav__container container mx-auto px-4">
          <RouterLink to="/" className="nav__logo transition-transform hover:scale-105" onClick={scrollToTop}>
            <img src={Logo} alt="Alchemy Events" className="h-12" />
          </RouterLink>

          <div className="nav__menu">
            <RouterLink to="/" onClick={scrollToTop} className="nav__link hover:text-primary transition-colors">
              Home
            </RouterLink>
            <ScrollLink
              to="why-alchemy"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="nav__link hover:text-primary transition-colors cursor-pointer"
              onClick={() => scrollToSection('why-alchemy')}
            >
              Why Alchemy
            </ScrollLink>
            <RouterLink to="/services" className="nav__link hover:text-primary transition-colors">Services</RouterLink>
            <ScrollLink
              to="vision"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="nav__link hover:text-primary transition-colors cursor-pointer"
              onClick={() => scrollToSection('vision')}
            >
              Vision
            </ScrollLink>
            <RouterLink to="/blog" className="nav__link hover:text-primary transition-colors">Blog</RouterLink>
            <ScrollLink
              to="contact-us"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="nav__link hover:text-primary transition-colors cursor-pointer"
              onClick={() => scrollToSection('contact-us')}
            >
              Contact Us
            </ScrollLink>
          </div>

          <button 
            className="nav__toggle hover:bg-primary/10 p-2 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-gray-800"
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

      <div className={`mobile-menu backdrop-blur-md bg-white/95 transform transition-transform duration-300 ${!isOpen ? 'translate-x-full' : 'translate-x-0'}`}>
        <RouterLink to="/" onClick={scrollToTop} className="mobile-menu__link">Home</RouterLink>
        <ScrollLink
          to="why-alchemy"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="mobile-menu__link"
          onClick={() => scrollToSection('why-alchemy')}
        >
          Why Alchemy
        </ScrollLink>
        <RouterLink to="/services" onClick={() => setIsOpen(false)} className="mobile-menu__link">Services</RouterLink>
        <ScrollLink
          to="vision"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="mobile-menu__link"
          onClick={() => scrollToSection('vision')}
        >
          Vision
        </ScrollLink>
        <RouterLink to="/blog" onClick={() => setIsOpen(false)} className="mobile-menu__link">Blog</RouterLink>
        <ScrollLink
          to="contact-us"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="mobile-menu__link"
          onClick={() => scrollToSection('contact-us')}
        >
          Contact Us
        </ScrollLink>
        <div className="mobile-menu__contact">
          <a href="tel:+1971-295-3811" className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors">
            <FaPhone className="text-lg" />
            <span className="font-medium">+1 971-295-3811</span>
          </a>
          <a href="mailto:info.alchemyevents@gmail.com" className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors">
            <FaEnvelope className="text-lg" />
            <span className="font-medium">info.alchemyevents@gmail.com</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
