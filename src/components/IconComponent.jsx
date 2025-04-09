import React from 'react';
import { FaWhatsapp, FaSms } from 'react-icons/fa';

const IconComponents = ({ type }) => {
  if (type === 'desktop') {
    return (
      <>
        <a
          href='sms:+44 7414 460648'
          className='contact-link'
          target='_blank'
          rel='noopener noreferrer'
          title='Send us an SMS'
        >
          <FaSms aria-label='SMS' /> SMS only
        </a>
        <a
          href='https://wa.me/+44 7414 460648'
          className='contact-link'
          target='_blank'
          rel='noopener noreferrer'
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
          href='sms:+44 7414 460648'
          className='mobile-contact-link'
          target='_blank'
          rel='noopener noreferrer'
          title='Send us an SMS'
        >
          <FaSms aria-label='SMS' />
        </a>
        <a
          href='https://wa.me/+44 7414 460648'
          className='mobile-contact-link'
          target='_blank'
          rel='noopener noreferrer'
          title='Chat with us on WhatsApp'
        >
          <FaWhatsapp aria-label='WhatsApp' />
        </a>
      </>
    );
  }
};

export default IconComponents;
