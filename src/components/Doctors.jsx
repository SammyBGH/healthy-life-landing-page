import React from 'react';
import '../css/Doctors.css';

const doctors = [
  { name: 'Dr. Jane Doe', specialty: 'Cardiologist' },
  { name: 'Dr. John Smith', specialty: 'Neurologist' },
  { name: 'Dr. Lisa Ray', specialty: 'Pediatrician' },
];

const Doctors = () => {
  return (
    <section className="doctors">
      <h2>Meet Our Specialists</h2>
      <div className="doctor-list">
        {doctors.map((doc, i) => (
          <div className="doctor-card" key={i}>
            <div className="doc-photo" />
            <h3>{doc.name}</h3>
            <p>{doc.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
