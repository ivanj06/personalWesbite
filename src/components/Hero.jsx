import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-greeting">Hi, I'm</span>
            <span className="hero-name">Ivan Jauregui</span>
          </h1>
          <p className="hero-subtitle">Electrical & Computer Engineer</p>
          <p className="hero-description">
            I design and build innovative solutions at the intersection of hardware and software. 
            Passionate about embedded systems, circuit design, and creating technology that makes a difference.
          </p>
          <div className="hero-links">
            <a href="mailto:ivanjauregui85@gmail.com" className="hero-link">Email</a>
            <span className="separator">/</span>
            <a href="https://www.linkedin.com/in/ivanjauregui" className="hero-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span className="separator">/</span>
            <a href="https://github.com/ivanj06" className="hero-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

