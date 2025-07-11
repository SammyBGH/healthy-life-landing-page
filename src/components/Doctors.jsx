import React from 'react';
import '../css/Doctors.css';
import DrJane from '../assets/images/dr-jane.png';
import DrJohn from '../assets/images/dr-john.jpg';
import DrLisa from '../assets/images/dr-lisa.jpg';

const doctors = [
  { name: 'Dr. Jane Doe', specialty: 'Cardiologist', image: DrJane },
  { name: 'Dr. John Smith', specialty: 'Neurologist', image: DrJohn },
  { name: 'Dr. Lisa Ray', specialty: 'Pediatrician', image: DrLisa },
];

const Doctors = () => {
  return (
    <section className="doctors">
      <h2>Meet Our Specialists</h2>
      <div className="doctor-list">
        {doctors.map((doc, i) => (
          <div className="doctor-card" key={i}>
            <img src={doc.image} alt={doc.name} className="doc-photo" />
            <h3>{doc.name}</h3>
            <p>{doc.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
