import React from "react";
import { skills } from "../data";
import './Skills.css'; // Import the CSS file

export default function Skills() {
  return (
    <section id="skills" className="container">
      <div className="text-center">
        <h1 className="text-header">Skills &amp; Technologies</h1>
        <p>These are the skills and technologies I have experience with.</p>
      </div>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill} className="skill-item">
            <div className="skill-content">
              <span className="checkmark">✔</span> {/* Use a checkmark symbol */}
              <span className="skill-text">{skill}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}