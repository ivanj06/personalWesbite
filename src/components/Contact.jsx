import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">07</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>
        <div className="contact-content">
          <p className="contact-intro">
            I'm always open to hearing about projects and opprotunites. Lets quit being strangers and start talking!
          </p>
          <div className="contact-links">
            <a href="tel:+19168075462" className="contact-link">
              <FaPhone className="contact-icon" />
              <span>(916) 807-5462</span>
            </a>
            <a href="mailto:ivanjauregui85@gmail.com" className="contact-link">
              <FaEnvelope className="contact-icon" />
              <span>ivanjauregui85@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/ivanjauregui" className="contact-link" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="contact-icon" />
              <span>linkedin.com/in/ivanjauregui</span>
            </a>
            <a href="https://github.com/ivanj06" className="contact-link" target="_blank" rel="noopener noreferrer">
              <FaGithub className="contact-icon" />
              <span>github.com/ivanj06</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

