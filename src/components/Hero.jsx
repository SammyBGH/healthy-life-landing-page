import React from "react";
import "../css/Hero.css";


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your Health, Our Priority</h1>
        <p>Trusted care from experienced professionals</p>
        <button
          onClick={() => {
            const section = document.querySelector(".appointment");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Book Appointment
        </button>
      </div>
    </section>
  );
};

export default Hero;
