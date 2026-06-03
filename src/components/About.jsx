import React from "react";
import "../styles/About.css";
import profile from "../assets/aboutimage.png";

function About() {
  return (
    <section id="about" className="about-container">
      <div className="about-image">
        <img src={profile} alt="Harika" />
      </div>

      <div className="about-text">
        <h2>About Me</h2>

        <p>
          I am a passionate web developer who enjoys creating modern,
          responsive, and user-friendly web applications.
        </p>

        <h3>Education</h3>
        <p>B.Tech Graduate with a strong interest in software development.</p>

        <h3>My Journey</h3>
        <p>
          Started with HTML, CSS, and JavaScript and gradually expanded
          into React and MERN Stack development.
        </p>

        <h3>Career Objective</h3>
        <p>
          Looking for opportunities to contribute to impactful projects
          and grow as a software developer.
        </p>
      </div>
    </section>
  );
}

export default About;