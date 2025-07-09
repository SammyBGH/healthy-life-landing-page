import React from 'react';
import '../css/Services.css';

const services = [
  { title: 'Emergency Care', desc: '24/7 emergency support by top physicians' },
  { title: 'Diagnostics', desc: 'Advanced lab and radiology services' },
  { title: 'Surgery', desc: 'Safe, modern operating theaters' },
  { title: 'Pediatrics', desc: 'Specialized care for children' },
];

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
