import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-greeting">Hi, I'm</span>
              <span className="hero-name">Ivan Jauregui</span>
            </h1>
            <p className="hero-subtitle">Electrical & Computer Engineer</p>
            <p className="hero-description">
              I'm a first-generation ECE student at Santa Clara University (Expected Graduation June 2028) with experience in AI/ML, AWS development, and multiple award-winning industry hackathons. I combine strong technical skills with leadership and communication experience from SHPE, HPE, and customer-facing work. I aim to work in robotics or EVs in a technical client-facing role, with long-term goals in startups.
            </p>
            <div className="hero-links">
              <a href="tel:+19168075462" className="hero-link">(916) 807-5462</a>
              <span className="separator">/</span>
              <a href="mailto:ivanejauregui@gmail.com" className="hero-link">Email</a>
              <span className="separator">/</span>
              <a href="https://www.linkedin.com/in/ivanjauregui" className="hero-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <span className="separator">/</span>
              <a href="https://github.com/ivanj06" className="hero-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img 
              src="/headshot.jpg" 
              alt="Ivan Jauregui" 
              className="hero-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="hero-image-placeholder" style={{display: 'none'}}>
              <p>Headshot placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

