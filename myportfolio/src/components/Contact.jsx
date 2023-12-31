import React from "react";
import Contactme from "../Pictures/contactme.png";
import "./Contact.css"; // Import the CSS file
export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
          <div className="image-container">
            <img src={Contactme} alt="ContactMe" />
          </div>
        <form
        action="https://formspree.io/f/xbjnjglk"
        method="POST">
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
      </div>
    </section>
  );
}