import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer-inner">
        <a href="mailto:ivanejauregui@gmail.com" className="site-footer-link">
          <FaEnvelope className="site-footer-icon" aria-hidden />
          <span>ivanejauregui@gmail.com</span>
        </a>
        <span className="site-footer-dot" aria-hidden>
          ·
        </span>
        <a
          href="https://www.linkedin.com/in/ivanjauregui"
          className="site-footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="site-footer-icon" aria-hidden />
          <span>LinkedIn</span>
        </a>
        <span className="site-footer-dot" aria-hidden>
          ·
        </span>
        <a
          href="https://github.com/ivanj06"
          className="site-footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="site-footer-icon" aria-hidden />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
