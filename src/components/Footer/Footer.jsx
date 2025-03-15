import {
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaSms,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        {/* Contact Information (left) */}
        <div className='footer-column contact-info'>
          <h4>Contact Information</h4>
          <address>
            <p>
              <FaSms aria-label='SMS icon' title='SMS' />{' '}
              <a href='sms:+447414460648'>+44 7414 460648 (SMS only)</a>
            </p>
            <p>
              <FaEnvelope aria-label='Email icon' title='Email' />{' '}
              <a href='mailto:info@fittersuk.com'>info@fittersuk.com</a>
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
              href='https://wa.me/447414460648'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon-link'
              aria-label='Chat with us on WhatsApp'
            >
              <FaWhatsapp title='WhatsApp' /> <span>WhatsApp (SMS only)</span>
            </a>
          </div>
        </div>

        {/* Map (center) */}
        <div className='footer-column service-area'>
          <h4>Service Area</h4>
          <div className='map-container'>
            <iframe
              src='https://www.google.com/maps/d/u/0/embed?mid=14HW21weW7r_NS8dsaUHVN_agE8A0KuI&ehbc=2E312F&noprof=1'
              width='100%'
              height='180'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              title='Kitchen Fitters UK Service Area'
              aria-label='Kitchen Fitters UK Service Area'
            ></iframe>
          </div>
        </div>

        {/* Service Areas (right) */}
        <div className='footer-column services'>
          <h4>We provide services in</h4>
          <div className='service-areas-container'>
            <ul className='service-areas'>
              {[
                'Lincolnshire, UK',
                'Nottinghamshire, UK',
                'Leicestershire, UK',
                'Doncaster, UK',
                'Hucknall, UK',
                'Leeds, UK',
              ].map((area, index) => (
                <li key={index}>
                  <FaMapMarkerAlt
                    className='location-icon'
                    aria-label={`Location: ${area}`}
                    title={area}
                  />{' '}
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright (center, bottom) */}
      <div className='footer-copyright'>
        &copy; 2025 Kitchen Fitters UK. All rights reserved.
      </div>
    </footer>
  );
}
