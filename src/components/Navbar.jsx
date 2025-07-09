    
import React, { useState } from 'react';
import "../css/Navbar.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (selector) => {
    const section = document.querySelector(selector);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // close menu on click (mobile)
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">🏥 HealthyLife</div>

      <div className={`nav-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li onClick={() => scrollToSection('.hero')}>Home</li>
        <li onClick={() => scrollToSection('.about')}>About</li>
        <li onClick={() => scrollToSection('.services')}>Services</li>
        <li onClick={() => scrollToSection('.doctors')}>Doctors</li>
        <li onClick={() => scrollToSection('.appointment')}>Appointment</li>
      </ul>
    </nav>
  );
};

export default Navbar;
