import React, { useState, useEffect, memo, lazy, Suspense } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Import icons only when needed - lazy load for performance
const IconComponents = lazy(() => import('../IconComponent'));
import '../styles/navbar.css';

// Pre-rendered placeholder for lazy-loaded icons
const IconPlaceholder = () => <span className='icon-placeholder'></span>;

const Navbar = memo(function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Optimize scroll listener with throttling
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className='navbar-container'>
        {/* Optimize logo for LCP */}
        <Link
          to='/'
          className='logo'
          onClick={handleLogoClick}
          title='SL BUILDERS LTD - Home'
          data-discover='true'
        >
          <span className='logo-main'>SL BUILDERS LTD</span>
          <br />
          <span className='logo-sub'>
            Kitchen Installations, Flooring & Home Renovations.
          </span>
        </Link>

        <div className='desktop-nav'>
          <ul className='nav-links'>
            <li>
              <Link to='/' onClick={handleLogoClick} title='Go to Home Page'>
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
            <Suspense fallback={<IconPlaceholder />}>
              <IconComponents type='desktop' />
            </Suspense>
          </div>
        </div>

        <div className='mobile-controls'>
          <div className='mobile-contacts'>
            <Suspense fallback={<IconPlaceholder />}>
              <IconComponents type='mobile' />
            </Suspense>
          </div>
          <div
            className='menu-toggle'
            onClick={toggleMobileMenu}
            title='Toggle Menu'
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </div>
        </div>

        {/* Only render when needed */}
        {isMobileMenuOpen && (
          <ul className={`mobile-menu active`}>
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
        )}
      </div>
    </nav>
  );
});

export default Navbar;
