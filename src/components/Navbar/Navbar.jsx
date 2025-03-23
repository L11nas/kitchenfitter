import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { FaWhatsapp, FaSms, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // If already on the home page, reload the page
      window.location.reload();
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className='navbar-container'>
        <Link to='/' className='logo' onClick={handleLogoClick}>
          {' '}
          {/* Add onClick */}
          <span className='logo-main'>Kitchen</span>
          <span className='logo-sub'>Fitter</span>
        </Link>

        {/* Desktop Navigation */}
        <div className='desktop-nav'>
          <ul className='nav-links'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
          </ul>
          <div className='contact-links'>
            <a
              href='sms:+37060000000'
              className='contact-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaSms /> SMS only
            </a>
            <a
              href='https://wa.me/+37060000000'
              className='contact-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaWhatsapp /> WhatsApp only
            </a>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className='mobile-controls'>
          <div className='mobile-contacts'>
            <a
              href='sms:+37060000000'
              className='mobile-contact-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaSms />
            </a>
            <a
              href='https://wa.me/+37060000000'
              className='mobile-contact-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaWhatsapp />
            </a>
          </div>
          <div className='menu-toggle' onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Menu */}
        <ul className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to='/' onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' onClick={toggleMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to='/services' onClick={toggleMobileMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to='/projects' onClick={toggleMobileMenu}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
