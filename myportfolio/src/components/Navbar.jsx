
import React from "react";
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        
          <a href="#about" className="navbar-link">
            Zsófia Bubláné Antal
          </a>
       
        <nav className="navbar-nav">
          <a href="#projects" className="navbar-link">
            Past Work
          </a>
          <a href="#skills" className="navbar-link">
            Skills
          </a>
        </nav>
        <a href="#contact" className="navbar-button">
          Contact Me
          <p className="navbar-button-icon" />
        </a>
      </div>
    </header>
  );
}
