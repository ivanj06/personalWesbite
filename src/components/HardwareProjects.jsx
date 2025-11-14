import React from 'react';

const HardwareProjects = () => {
  const projects = [
    {
      year: '2024',
      category: 'Hardware',
      title: 'TreasureBox',
      description: 'A secure hardware storage solution with integrated electronics. Designed and implemented circuit design, component selection, and embedded system programming to create a functional and reliable hardware device.',
      tech: ['Circuit Design', 'Embedded Systems', 'Hardware Prototyping'],
      links: { documentation: '#', video: '#' }
    },
    {
      year: '2024',
      category: 'Hardware',
      title: 'PCB Placeholder',
      description: 'Custom printed circuit board design project. Involved schematic design, PCB layout, component placement, routing, and board fabrication. Demonstrates expertise in electronic design and manufacturing processes.',
      tech: ['PCB Design', 'Schematic Capture', 'Board Layout'],
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

