import React, { useState } from 'react';
import { Link as RouterLink, NavLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Logo from "../assets/logos/logo.jpg";
import LogoDark from "../assets/logos/logoDark.jpg";
import { FaPhone, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import '../styles/Header.scss';
import { motion } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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

  React.useEffect(() => {
    if (!isHomePage) {
      const activeScrollLinks = document.querySelectorAll('.nav__link.active:not(.route-active)');
      activeScrollLinks.forEach(link => {
        link.classList.remove('active');
      });
    }
  }, [location.pathname, isHomePage]);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''} ${isDark ? 'dark' : ''} ${isOpen ? 'menu-open' : ''}` + "fixed"}>
      <nav className={`nav backdrop-blur-md ${isScrolled ? 'bg-accent-sand dark:bg-slate-700 shadow-lg' : 'bg-transparent'}`}>
        <div className="nav__container">
          <RouterLink 
            to="/" 
            className="nav__logo" 
            onClick={scrollToTop}
          >
            <img 
              src={isDark ? LogoDark : Logo}
              alt="Alchemy Events" 
              className="h-11 md:h-13 transition-all duration-300  rounded-t-2xl rounded-b-md" 
            />
          </RouterLink>

          <div className="nav__menu">
            <NavLink 
              to="/" 
              onClick={scrollToTop}
              className={({ isActive }) => 
                `nav__link hover:text-primary transition-colors  ${isActive ? 'active route-active ' : ''}`
              }
            >
              Home
            </NavLink>
            <ScrollLink
              to="why-alchemy"
              smooth={true}
              offset={-100}
              duration={500}
              spy={true}
              activeClass="active"
              className={`nav__link hover:text-primary transition-colors cursor-pointer ${
                isHomePage ? 'can-active no-glow' : ''
              }`}
              onClick={() => scrollToSection('why-alchemy')}
            >
              Why Alchemy
            </ScrollLink>
            <ScrollLink
              to="vision"
              smooth={true}
              offset={-100}
              duration={500}
              spy={isHomePage}
              className={`nav__link hover:text-primary transition-colors cursor-pointer ${
                isHomePage ? 'can-active no-glow' : ''
              }`}
              onClick={() => scrollToSection('vision')}
            >
              Vision
            </ScrollLink>
            <ScrollLink
              to="contact-us"
              smooth={true}
              offset={-100}
              duration={500}
              spy={isHomePage}
              className={`nav__link hover:text-primary transition-colors cursor-pointer ${
                isHomePage ? 'can-active no-glow' : ''
              }`}
              onClick={() => scrollToSection('contact-us')}
            >
              Contact Us
            </ScrollLink>
            <NavLink 
              to="/services"
              className={({ isActive }) => 
                `nav__link hover:text-primary transition-colors ${isActive ? 'active route-active' : ''}`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/wedding"
              className={({ isActive }) => 
                `nav__link hover:text-primary transition-colors font-serif ${isActive ? 'active route-active' : ''}`
              }
            >
              Wedding
            </NavLink>
            <NavLink 
              to="/blog"
              className={({ isActive }) => 
                `nav__link hover:text-primary transition-colors ${isActive ? 'active route-active' : ''}`
              }
            >
              Blog
            </NavLink>
          </div>
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

         
        </div>
      </nav>

      <div 
        className={`mobile-menu fixed inset-0 z-50 pt-[3.5rem] ${
          !isOpen ? 'translate-x-full' : 'translate-x-0'
        } backdrop-blur-md bg-white/95 dark:bg-gray-900/95`}
      >
        <div className="h-50 overflow-y-auto">
          <div className="flex flex-col space-y-1">
            <RouterLink to="/" onClick={scrollToTop} className="mobile-menu__link">
              Home
            </RouterLink>
            {isHomePage ? (
            <ScrollLink
              to="why-alchemy"
              smooth={true}
              offset={-100}
              duration={500}
              spy={true}
              activeClass="active"
              className="mobile-menu__link "
              onClick={() => scrollToSection('why-alchemy')}
            >
              Why Alchemy
            </ScrollLink>
            ) : (
              <NavLink 
                to="/why-alchemy"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `mobile-menu__link ${isActive ? 'active route-active' : ''}`
                }
              >
                Why Alchemy
              </NavLink>
            )}
            <NavLink 
              to="/services"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `mobile-menu__link ${isActive ? 'active route-active' : ''}`
              }
            >
              Services
            </NavLink>
            <RouterLink to="/wedding" onClick={() => setIsOpen(false)} className="mobile-menu__link">Wedding</RouterLink>
            <ScrollLink
              to="vision"
              smooth={true}
              offset={-100}
              duration={500}
              spy={isHomePage}
              className="mobile-menu__link"
              onClick={() => scrollToSection('vision')}
            >
              Vision
            </ScrollLink>
            <RouterLink to="/blog" onClick={() => setIsOpen(false)} className="mobile-menu__link">Blog</RouterLink>
            <ScrollLink
              to="contact-us"
              smooth={true}
              offset={-100}
              duration={500}
              spy={isHomePage}
              className="mobile-menu__link"
              onClick={() => scrollToSection('contact-us')}
            >
              Contact Us
            </ScrollLink>
            <div className="mobile-menu__contact">
              <a href="tel:+91 8999987331" className="flex items-center gap-2 text-primary hover:text-accent-sage transition-colors">
                <FaPhone className="text-lg" />
                <span className="font-medium">+91 899-998-7331</span>
              </a>
              <a href="mailto:info.alchemyevents@gmail.com" className="flex items-center gap-2 text-primary hover:text-accent-sage transition-colors">
                <FaEnvelope className="text-lg" />
                <span className="font-medium">info.alchemyevents@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
