import React from 'react';

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
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision. Feel free to reach out.
          </p>
          <div className="contact-links">
            <a href="mailto:ivanjauregui85@gmail.com" className="contact-link">ivanjauregui85@gmail.com</a>
            <a href="mailto:iejauregui@scu.edu" className="contact-link">iejauregui@scu.edu</a>
            <a href="https://www.linkedin.com/in/ivanjauregui" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/ivanj06" className="contact-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

