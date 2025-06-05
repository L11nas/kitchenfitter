import {
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaSms,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import '../styles/footer.css';
import { useState } from 'react';

export default function Footer() {
  const [showMap, setShowMap] = useState(false);

  const phoneNumber = '+44 7414 460648';
  const rawNumber = '447414460648';

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/${rawNumber}`, '_blank');
  };

  const handleSmsClick = (e) => {
    e.preventDefault();
    window.location.href = `sms:${rawNumber}`;
  };

  return (
    <footer className='footer'>
      <div className='footer-container'>
        {/* Contact Information (left) */}
        <div className='footer-column contact-info'>
          <h3>Contact Our Expert Fitters</h3>
          <address>
            <p>
              <FaSms aria-label='SMS icon' title='SMS' />{' '}
              <a href='#' onClick={handleSmsClick}>
                SMS only
              </a>
            </p>
            <p>
              <FaEnvelope aria-label='Email icon' title='Email' />{' '}
              <a
                href='#'
                onClick={(e) => {
                  e.preventDefault();
                  const email = 'slbuilderswork' + '@' + 'gmail.com';
                  window.location.href = `mailto:${email}`;
                }}
                title='Send us an email'
              >
                slbuilderswork@gmail.com
              </a>
            </p>
          </address>
          <div className='social-icons' aria-label='Social media links'>
            <a
              href='https://www.facebook.com/S.L.BUILDERS.LTD'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon-link'
              aria-label='Visit our Facebook page'
            >
              <FaFacebook title='Facebook' /> <span>Facebook</span>
            </a>
            <a
              href='#'
              onClick={handleWhatsAppClick}
              className='social-icon-link'
              aria-label='Chat with us on WhatsApp'
            >
              <FaWhatsapp title='WhatsApp' /> <span>WhatsApp (SMS only)</span>
            </a>
          </div>
        </div>

        {/* Map (center) */}
        <div className='footer-column service-area'>
          <h3>Service Area</h3>
          <div className='map-container'>
            {showMap ? (
              <iframe
                src='https://www.google.com/maps/d/u/0/embed?mid=1dJoAlYFdyWLCkoAgli21m5J6qsvyj2A&ehbc=2E312F&hl=en'
                width='100%'
                height='300'
                style={{ border: 0 }}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Our Service Areas'
              />
            ) : (
              <button
                className='show-map-button'
                onClick={() => setShowMap(true)}
              >
                Show Service Areas
              </button>
            )}
          </div>
        </div>

        {/* Service Areas (right) */}
        <div className='footer-column services'>
          <h3>We provide services in</h3>
          <div className='service-areas-container'>
            <ul className='service-areas'>
              {[
                { name: 'Lincolnshire, UK', path: '/lincolnshire' },
                { name: 'Nottinghamshire, UK', path: '/nottingham' },
                { name: 'Leicestershire, UK', path: '/leicestershire' },
                { name: 'Doncaster, UK', path: '/doncaster' },
                { name: 'Hucknall, UK', path: '/hucknall' },
                { name: 'Leeds, UK', path: '/leeds' },
              ].map((area, index) => (
                <li key={index}>
                  <FaMapMarkerAlt
                    className='location-icon'
                    aria-label={`Location: ${area.name}`}
                    title={area.name}
                  />{' '}
                  <a
                    href={area.path}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='location-link'
                  >
                    {area.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='footer-copyright'>
        &copy; 2025 Kitchen Fitters UK. All rights reserved.{' '}
        <a href='/privacy-policy' className='privacy-link'>
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
