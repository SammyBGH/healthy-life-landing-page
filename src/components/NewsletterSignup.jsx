import React, { useState } from "react";
import "../css/NewsletterSignup.css";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <h2>Stay Informed</h2>
        <p>Subscribe to get health tips and clinic updates directly to your inbox.</p>

        {!subscribed ? (
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        ) : (
          <p className="success-message">✅ You're subscribed. Thank you!</p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;
