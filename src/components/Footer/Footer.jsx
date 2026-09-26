import {
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaSms,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import '../styles/footer.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [showMap, setShowMap] = useState(false);

  const rawNumber = '447414460648';
  const email = 'slbuilderswork@gmail.com';

  const serviceAreas = [
    { name: 'Lincolnshire, UK', path: '/lincolnshire' },
    { name: 'Nottingham, UK', path: '/nottingham' },
    { name: 'Leicestershire, UK', path: '/leicestershire' },
    { name: 'Doncaster, UK', path: '/doncaster' },
    { name: 'Hucknall, UK', path: '/hucknall' },
    { name: 'Leeds, UK', path: '/leeds' },
  ];

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-column contact-info'>
          <h3>Contact Our Team</h3>

          <address>
            <p>
              <FaSms aria-label='SMS icon' title='SMS' />
              <a href={`sms:+${rawNumber}`}>SMS only</a>
            </p>

            <p>
              <FaEnvelope aria-label='Email icon' title='Email' />
              <a href={`mailto:${email}`} title='Send us an email'>
                {email}
              </a>
            </p>
          </address>

          <div className='social-icons' aria-label='Contact links'>
            <a
              href='https://www.facebook.com/S.L.BUILDERS.LTD'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon-link'
              aria-label='Visit our Facebook page'
            >
              <FaFacebook title='Facebook' />
              <span>Facebook</span>
            </a>

            <a
              href={`https://wa.me/${rawNumber}`}
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon-link'
            >
              <FaWhatsapp title='WhatsApp' />
              <span>WhatsApp only</span>
            </a>
          </div>
        </div>

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
                type='button'
              >
                Show Service Areas
              </button>
            )}
          </div>
        </div>

        <div className='footer-column services'>
          <h3>Areas We Cover</h3>

          <div className='service-areas-container'>
            <ul className='service-areas'>
              {serviceAreas.map((area, index) => (
                <li key={index}>
                  <FaMapMarkerAlt
                    className='location-icon'
                    aria-label={`Location: ${area.name}`}
                    title={area.name}
                  />
                  <Link to={area.path} className='location-link'>
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='footer-copyright'>
        <span suppressHydrationWarning>
          &copy; {new Date().getFullYear()} S.L. BUILDERS LTD. All rights
          reserved.
        </span>
        <Link to='/privacy-policy' className='privacy-link'>
          Privacy Policy
        </Link>
        <Link to='/cookie-policy' className='privacy-link'>
          Cookie Policy
        </Link>
      </div>
      <p className='footer-company-info'>
        S.L. BUILDERS LTD is registered in England and Wales, company number
        09940501.
      </p>
    </footer>
  );
}
