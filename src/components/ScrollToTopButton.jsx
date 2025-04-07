import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react'; // Arba naudok bet kokią ikoną
import './styles/scrollToTopButton.css';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button className='scroll-to-top' onClick={scrollToTop}>
        <ArrowUp size={20} />
      </button>
    )
  );
};

export default ScrollToTopButton;
