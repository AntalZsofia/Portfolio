import React from "react";
import { skills } from "../data";
import './Skills.css'; // Import the CSS file

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="text-center">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            These are the skills and technologies I have experience with.
          </p>
        </div>
        <div className="grid">
          {skills.map((skill) => (
            <div key={skill} className="p-2 w-full w-half">
              <div className="bg-gray rounded p-4 h-full items-center">
                <span className="text-green-400 w-6 h-6 flex-shrink-0 mr-4">✔</span> {/* Use a checkmark symbol */}
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}