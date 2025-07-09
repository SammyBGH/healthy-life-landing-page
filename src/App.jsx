import React from 'react';
import './css/App.css';

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Doctors from './components/Doctors';
import FAQSection from './components/FAQSection';
import Appointment from './components/Appointment';
import AppointmentsChart from './components/AppointmentsChart';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <StatsSection />
        <TestimonialsSection />
        <Doctors />
        <FAQSection />
        <AppointmentsChart />
        <Appointment />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
