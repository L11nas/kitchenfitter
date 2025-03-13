import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaBars, FaTimes, FaSms } from 'react-icons/fa'; // Import FaSms
import '../styles/navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        {/* Logotipas */}
        <Link to='/' className='logo'>
          <div className='logo-main'>Fitters UK</div>
          <div className='logo-sub'>Kitchen & Flooring Experts</div>
        </Link>

        {/* Desktop navigacija ir kontaktai */}
        <div className='desktop-nav'>
          <ul className='nav-links'>
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
            <div className='contact-link'>
              <FaSms />{' '}
              {/* Changed to FaSms for desktop as well for consistency */}
              <span className='contact-text'>+44 7414 460648 (SMS only)</span>
            </div>
            <a
              href='sms:+447414460648'
              target='_blank'
              rel='noreferrer'
              className='contact-link'
            >
              <FaWhatsapp />
              <span className='contact-text'>WhatsApp (SMS only)</span>
            </a>
          </div>
        </div>

        {/* Mobilūs kontaktai ir hamburger */}
        <div className='mobile-controls'>
          <div className='mobile-contacts'>
            <a href='sms:+447414460648' className='mobile-contact-link'>
              <FaSms /> {/* Changed to FaSms */}
            </a>
            <a
              href='sms:+447414460648'
              target='_blank'
              rel='noreferrer'
              className='mobile-contact-link'
            >
              <FaWhatsapp />
            </a>
          </div>

          <div className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>

        {/* Mobilusis meniu */}
        <ul className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link to='/about' onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to='/services' onClick={() => setMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to='/projects' onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
