import React from "react";
import "../css/TestimonialsSection.css";

const testimonials = [
  {
    name: "Grace A.",
    feedback: "The doctors were incredibly kind and attentive. I felt safe and well cared for.",
    stars: 5,
  },
  {
    name: "Kwame B.",
    feedback: "Fast service and excellent facilities. Booking an appointment was simple and quick!",
    stars: 4,
  },
  {
    name: "Ama S.",
    feedback: "Truly modern and professional care. I would highly recommend HealthyLife!",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2>What Our Patients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card" data-aos="fade-up">
            <p className="feedback">"{t.feedback}"</p>
            <div className="stars">
              {"⭐".repeat(t.stars)}
            </div>
            <p className="name">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
