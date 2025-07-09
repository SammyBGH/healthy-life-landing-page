import React, { useState } from "react";
import "../css/FAQSection.css";

const faqs = [
  {
    question: "Do you accept health insurance?",
    answer: "Yes, we accept most major health insurance plans. You can also contact us for specific providers.",
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer: "Absolutely. Just let us know at least 24 hours in advance, and we’ll assist you with rescheduling.",
  },
  {
    question: "Do I need a referral to see a specialist?",
    answer: "Not necessarily. You can book directly with most of our specialists online or via phone.",
  },
  {
    question: "Is emergency care available 24/7?",
    answer: "Yes, our emergency department operates around the clock with trained staff ready for urgent needs.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{item.question}</div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
