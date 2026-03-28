import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-info">
        <p>Email: pittaharika638@gmail.com</p>
        <p>Phone: 9876543210</p>
      </div>
    </section>
  );
}

export default Contact;