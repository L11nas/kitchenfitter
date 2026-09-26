import { FaWhatsapp, FaSms } from 'react-icons/fa';

const RAW_NUMBER = '447414460648';
const SMS_HREF = `sms:+${RAW_NUMBER}`;
const WHATSAPP_HREF = `https://wa.me/${RAW_NUMBER}`;

const IconComponents = ({ type }) => {
  if (type === 'desktop') {
    return (
      <>
        <a href={SMS_HREF} className='contact-link' title='Send us an SMS'>
          <FaSms aria-label='SMS' /> SMS only
        </a>
        <a
          href={WHATSAPP_HREF}
          target='_blank'
          rel='noopener noreferrer'
          className='contact-link'
          title='Chat with us on WhatsApp'
        >
          <FaWhatsapp aria-label='WhatsApp' /> WhatsApp only
        </a>
      </>
    );
  } else {
    return (
      <>
        <a
          href={SMS_HREF}
          className='mobile-contact-link'
          title='Send us an SMS'
        >
          <FaSms aria-label='SMS' />
        </a>
        <a
          href={WHATSAPP_HREF}
          target='_blank'
          rel='noopener noreferrer'
          className='mobile-contact-link'
          title='Chat with us on WhatsApp'
        >
          <FaWhatsapp aria-label='WhatsApp' />
        </a>
      </>
    );
  }
};

export default IconComponents;
