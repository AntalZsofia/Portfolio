import React from "react";
import Contactme from "../Pictures/contactme.png";
import "./Contact.css"; // Import the CSS file

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="contact-container">
        <div className="image-container">
          <img src={Contactme} alt="ContactMe" />
        </div>
        <div className="contact-info">
          <div>
            <h2>EMAIL</h2>
            <a href="mailto:antal.zsofia84@email.com">antal.zsofia84@email.com</a>
            <h2>LINKEDIN</h2>
            <a href="https://www.linkedin.com/in/zsófia-bubláné-antal">zsófia-bubláné-antal</a>
          </div>
        </div>
      </div>
    </section>
  );
}