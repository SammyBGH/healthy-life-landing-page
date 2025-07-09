import React from 'react';
import '../css/WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-us" data-aos="fade-up">
      <h2>Why Choose HealthyLife?</h2>
      <div className="features">
        <div className="feature-card">
          <span>🕐</span>
          <h4>24/7 Services</h4>
          <p>Always open to care for you, day or night.</p>
        </div>
        <div className="feature-card">
          <span>🧪</span>
          <h4>Modern Labs</h4>
          <p>State-of-the-art equipment for accurate diagnosis.</p>
        </div>
        <div className="feature-card">
          <span>👨‍⚕️</span>
          <h4>Expert Doctors</h4>
          <p>Experienced professionals across all departments.</p>
        </div>
        <div className="feature-card">
          <span>💙</span>
          <h4>Patient-Centered Care</h4>
          <p>Every decision made with your well-being in mind.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
