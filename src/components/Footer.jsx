import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>🏥 HealthyLife</h3>
          <p>Providing trusted healthcare with compassion and innovation.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Doctors</a></li>
            <li><a href="#">Appointment</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: contact@healthylife.com</p>
          <p>Phone: +233 555 123 456</p>
          <p>Address: 123 Wellness Ave, Accra</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="socials">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} HealthyLife Hospital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
