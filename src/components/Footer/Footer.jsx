import { FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../styles/footer.css'; // Importuojame stilius

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        {/* 🔹 Kontaktinė informacija (kairėje) */}
        <div className='footer-column'>
          <h4>Contact Information</h4>
          <p>
            <FaPhone /> <a href='tel:+44 7414 460648'>+44 7414 460648</a>
          </p>
          <p>
            <FaEnvelope />{' '}
            <a href='mailto:slcarpentryltd@gmail.com'>
              slcarpentryltd@gmail.com
            </a>
          </p>
          {/* 🔹 Socialiniai tinklai */}
          <div className='social-icons'>
            <a
              href='https://www.facebook.com/S.L.BUILDERS.LTD?rdid=YQTc4DYXfuff7RDW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18evDGgZrq#'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook /> Facebook
            </a>
            <a
              href='https://wa.me/+447414460648'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>

        {/* 🔹 Žemėlapis (centre) */}
        {/* 🔹 Žemėlapis (centre) */}
        <div className='footer-column service-area'>
          <h4>Service Area</h4>
          <iframe
            src='https://www.google.com/maps/d/u/0/embed?mid=14HW21weW7r_NS8dsaUHVN_agE8A0KuI&ehbc=2E312F&noprof=1'
            width='340'
            height='180'
          ></iframe>
        </div>

        {/* 🔹 Paslaugų teikimo vietovės (dešinėje) */}
        <div className='footer-column services'>
          <div className='footer-column'>
            <h4>We provide services in:</h4>
            <ul className='service-areas'>
              <li>Lincolnshire, UK</li>
              <li>Nottinghamshire, UK</li>
              <li>Leicestershire, UK</li>
              <li>Doncaster, UK</li>
              <li>Hucknall, UK</li>
              <li>Leeds, UK</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 🔹 Autorių teisės (centre, apačioje) */}
      <div className='footer-copyright'>
        &copy; 2025 Kitchen Fitters UK. All rights reserved.
      </div>
    </footer>
  );
}
