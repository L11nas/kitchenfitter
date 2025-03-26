import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaWhatsapp, FaSms, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.location.reload();
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className='navbar-container'>
        <Link
          to='/'
          className='logo'
          onClick={handleLogoClick}
          title='S.L. BUILDERS LTD - Home'
        >
          <span className='logo-main'>S.L. BUILDERS LTD</span>
          <br />
          <span className='logo-sub'>
            Kitchen Installations, Flooring & Home Renovations.
          </span>
        </Link>

        <div className='desktop-nav'>
          <ul className='nav-links'>
            <li>
              <Link to='/' title='Go to Home Page'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' title='Learn more About Us'>
                About
              </Link>
            </li>
            <li>
              <Link to='/services' title='View our Services'>
                Services
              </Link>
            </li>
            <li>
              <Link to='/projects' title='See our Latest Projects'>
                Projects
              </Link>
            </li>
          </ul>
          <div className='contact-links'>
            <a
              href='sms:+440000000000'
              className='contact-link'
              target='_blank'
              rel='noopener noreferrer'
              title='Send us an SMS'
            >
              <FaSms aria-label='SMS' /> SMS only
            </a>
            <a
              href='https://wa.me/+440000000000'
              className='contact-link'
              target='_blank'
              rel='noopener noreferrer'
              title='Chat with us on WhatsApp'
            >
              <FaWhatsapp aria-label='WhatsApp' /> WhatsApp only
            </a>
          </div>
        </div>

        <div className='mobile-controls'>
          <div className='mobile-contacts'>
            <a
              href='sms:+440000000000'
              className='mobile-contact-link'
              target='_blank'
              rel='noopener noreferrer'
              title='Send us an SMS'
            >
              <FaSms aria-label='SMS' />
            </a>
            <a
              href='https://wa.me/+440000000000'
              className='mobile-contact-link'
              target='_blank'
              rel='noopener noreferrer'
              title='Chat with us on WhatsApp'
            >
              <FaWhatsapp aria-label='WhatsApp' />
            </a>
          </div>
          <div
            className='menu-toggle'
            onClick={toggleMobileMenu}
            title='Toggle Menu'
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        <ul className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to='/' onClick={toggleMobileMenu} title='Go to Home Page'>
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              onClick={toggleMobileMenu}
              title='Learn more About Us'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='/services'
              onClick={toggleMobileMenu}
              title='View our Services'
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to='/projects'
              onClick={toggleMobileMenu}
              title='See our Latest Projects'
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
