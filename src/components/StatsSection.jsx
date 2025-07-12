import React, { useState, useEffect, useRef } from 'react';
import '../css/StatsSection.css';

const stats = [
  { label: 'Patients Treated', value: 1500 },
  { label: 'Doctors Available', value: 45 },
  { label: 'Years of Experience', value: 25 },
  { label: 'Departments', value: 12 },
  { label: 'Satisfaction Rate', value: 98 }
];

const StatsSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounts();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounts = () => {
    stats.forEach((stat, index) => {
      let start = stat.value > 500 ? Math.floor(stat.value * 0.8) : 0;
      const end = stat.value;
      const duration = 1000;
      const stepTime = Math.max(duration / (end - start), 10);

      const interval = setInterval(() => {
        start += 1;
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });

        if (start === end) clearInterval(interval);
      }, stepTime);
    });
  };

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        {stats.map((stat, i) => (
          <div className="stat-box" key={i}>
            <h3>
              {counts[i]}
              {stat.label === 'Satisfaction Rate' ? '%' : ''}
            </h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
