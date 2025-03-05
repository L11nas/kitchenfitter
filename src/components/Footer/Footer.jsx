import { FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../styles/footer.css'; // Importuojame stilius

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        {/* 🔹 Kontaktinė informacija (kairėje) */}
        <div className='footer-column contact-info'>
          <h4>Contact Information</h4>
          <p>
            <FaPhone /> <a href='tel:+44 7414 460648'>+44 7414 460648</a>
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
        <div className='footer-column service-area'>
          <h4>Service Area</h4>
          <iframe
            src='https://www.google.com/maps/d/u/0/embed?mid=14HW21weW7r_NS8dsaUHVN_agE8A0KuI&ehbc=2E312F&noprof=1'
            width='100%'
            height='180'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
          ></iframe>
        </div>

        {/* 🔹 Paslaugų vietovės (dešinėje) */}
        <div className='footer-column services'>
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

      {/* 🔹 Autorių teisės (centre, apačioje) */}
      <div className='footer-copyright'>
        &copy; 2025 Kitchen Fitters UK. All rights reserved.
      </div>
    </footer>
  );
}
