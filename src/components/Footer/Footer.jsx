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
          <p>
            <FaSms /> <a href='sms:+447414460648'>+44 7414 460648 (SMS only)</a>
          </p>
          <p>
            <FaEnvelope />{' '}
            <a href='mailto:info@fittersuk.com'>info@fittersuk.com</a>
          </p>
          <div className='social-icons'>
            <a
              href='https://www.facebook.com/S.L.BUILDERS.LTD'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon-link'
            >
              <FaFacebook /> <span>Facebook</span>
            </a>
            <a
              href='sms:+447414460648'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon-link'
            >
              <FaWhatsapp /> <span>WhatsApp (SMS only)</span>
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
            ></iframe>
          </div>
        </div>

        {/* Service Areas (right) */}
        <div className='footer-column services'>
          <h4>We provide services in</h4>
          <div className='service-areas-container'>
            <ul className='service-areas'>
              <li>
                <FaMapMarkerAlt className='location-icon' /> Lincolnshire, UK
              </li>
              <li>
                <FaMapMarkerAlt className='location-icon' /> Nottinghamshire, UK
              </li>
              <li>
                <FaMapMarkerAlt className='location-icon' /> Leicestershire, UK
              </li>
              <li>
                <FaMapMarkerAlt className='location-icon' /> Doncaster, UK
              </li>
              <li>
                <FaMapMarkerAlt className='location-icon' /> Hucknall, UK
              </li>
              <li>
                <FaMapMarkerAlt className='location-icon' /> Leeds, UK
              </li>
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
