import React from 'react';
import CountUp from 'react-countup';
import '../css/StatsSection.css';

const StatsSection = () => {
  return (
    <section className="stats-section" data-aos="fade-up">
      <div className="stat">
        <h3><CountUp end={5000} duration={3} />+</h3>
        <p>Patients Served</p>
      </div>
      <div className="stat">
        <h3><CountUp end={35} duration={4} />+</h3>
        <p>Qualified Doctors</p>
      </div>
      <div className="stat">
        <h3><CountUp end={20} duration={4} />+</h3>
        <p>Years of Excellence</p>
      </div>
      <div className="stat">
        <h3><CountUp end={98} duration={4} suffix="%" /></h3>
        <p>Satisfaction Rate</p>
      </div>
    </section>
  );
};

export default StatsSection;
