import React from "react";
import Contactme from "../Pictures/contactme.png";
import "./Contact.css"; // Import the CSS file
import { useState } from "react";
export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch(event.target.action, {
      method: 'POST',
      body: new FormData(event.target),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      setIsSubmitted(true);
      event.target.reset()
    }).catch(error => {
      console.log(error)
    });
  }
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-header">Contact Me</h2>
      <p className="contact-subheader">
        Have a question or want to work together?</p>
      <div className="contact-container">
        <div className="image-container">
          <img src={Contactme} alt="ContactMe" />
        </div>
        <form
          action="https://formspree.io/f/xbjnjglk"
          method="POST"
          onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="name" className="input-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input-text"
            />
          </div>
          <div className="input-field">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-text"
            />
          </div>
          <div className="input-field">
            <label
              htmlFor="message"
              className="input-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="input-textarea"
            />
          </div>
          <button
            type="submit"
            className="submit-button">
            Submit
          </button>
        </form>
        {isSubmitted && <p className="success-message">Thank you for your message. I will get back to you soon!</p>}
      </div>
    </section>
  );
}