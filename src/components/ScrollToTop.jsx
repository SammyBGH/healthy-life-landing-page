import React, { useState, useEffect } from 'react';
import '../css/ScrollToTop.css';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'doctors', 'appointment'];

      let current = '';
      for (let id of sections) {
        const section = document.querySelector(`.${id}`);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
      setShowButton(current !== '' && current !== 'hero'); // only show after hero
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (
      <button className={`scroll-to-top ${activeSection}`} onClick={scrollToTop}>
        ↑
      </button>
    )
  );
};

export default ScrollToTop;
