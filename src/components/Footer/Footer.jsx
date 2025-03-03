import { FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../styles/footer.css'; // Importuojame stilius

export default function Footer() {
  return (
    <footer className='footer' id='footer'>
      <p>&copy; 2025 Kitchen Fitters UK. All rights reserved.</p>
      <div className='footer-contacts'>
        <a href='tel:+44 7414 460648'>
          <FaPhone /> +44 7414 460648
        </a>
        <a href='mailto:slcarpentryltd@gmail.com'>
          <FaEnvelope /> slcarpentryltd@gmail.com
        </a>
        <a
          href='https://facebook.com/kitchenfitters'
          target='_blank'
          rel='noreferrer'
        >
          <FaFacebook /> Facebook
        </a>
        <a
          href='https://wa.me/+44 7414 460648'
          target='_blank'
          rel='noreferrer'
        >
          <FaWhatsapp /> WhatsApp
        </a>
      </div>
    </footer>
  );
}
