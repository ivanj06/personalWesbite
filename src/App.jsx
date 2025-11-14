import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HackathonProjects from './components/HackathonProjects';
import HardwareProjects from './components/HardwareProjects';
import Certifications from './components/Certifications';
import Leadership from './components/Leadership';
import Affiliations from './components/Affiliations';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'hackathons', 'hardware', 'certifications', 'leadership', 'affiliations', 'hobbies', 'contact'];
      const scrollY = window.pageYOffset + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;
          if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="App">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero />
      <HackathonProjects />
      <HardwareProjects />
      <Certifications />
      <Leadership />
      <Affiliations />
      <Hobbies />
      <Contact />
    </div>
  );
}

export default App;

