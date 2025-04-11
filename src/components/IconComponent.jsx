import React from 'react';
import { FaWhatsapp, FaSms } from 'react-icons/fa';

const IconComponents = ({ type }) => {
  const rawNumber = '447414460648';
  const formattedNumber = '+44 7414 460648';

  const handleSmsClick = (e) => {
    e.preventDefault();
    window.location.href = `sms:${rawNumber}`;
  };

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/${rawNumber}`, '_blank');
  };

  if (type === 'desktop') {
    return (
      <>
        <a
          href='#'
          onClick={handleSmsClick}
          className='contact-link'
          title='Send us an SMS'
        >
          <FaSms aria-label='SMS' /> SMS only
        </a>
        <a
          href='#'
          onClick={handleWhatsAppClick}
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
          href='#'
          onClick={handleSmsClick}
          className='mobile-contact-link'
          title='Send us an SMS'
        >
          <FaSms aria-label='SMS' />
        </a>
        <a
          href='#'
          onClick={handleWhatsAppClick}
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
