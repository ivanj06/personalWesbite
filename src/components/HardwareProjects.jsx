import React from 'react';

const HardwareProjects = () => {
  const projects = [
    {
      year: '2025',
      category: 'Hardware',
      title: 'Automated Mother\'s Day Gift Box - SCU Robotics Showcase',
      description: 'Coordinated with the multidisciplinary team to create an automated Mother\'s Day gift box. Deployed C++ functions on an Arduino for photoresistor object detection and closing mechanism. Designed and implemented an electrical wiring to interconnect the wooden frame with components.',
      tech: ['Arduino', 'C++', 'Circuit Design', 'Photoresistor', 'Embedded Systems'],
      links: { documentation: '#', video: '#' }
    }
  ];

  return (
    <section id="hardware" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-number">02</span>
          <h2 className="section-title">Hardware Projects</h2>
        </div>
        <div className="projects-list">
          {projects.map((project, index) => (
            <article key={index} className="project-item">
              <div className="project-meta">
                <span className="project-year">{project.year}</span>
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.links.documentation} className="project-link">Documentation →</a>
                  <a href={project.links.video} className="project-link">Video →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardwareProjects;

