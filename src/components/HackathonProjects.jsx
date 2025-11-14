import React from 'react';

const HackathonProjects = () => {
  const projects = [
    {
      year: '2024',
      category: 'Hackathon',
      title: 'SafeMap SJ',
      description: 'A safety mapping application for San Jose that helps users identify and navigate safe routes through the city. Built to address urban safety concerns and provide real-time safety data visualization.',
      tech: ['Web Development', 'Mapping API', 'Data Visualization'],
      links: { github: '#', demo: '#' }
    },
    {
      year: '2024',
      category: 'Hackathon',
      title: 'Checkpoint',
      description: 'A security and verification system designed to enhance safety protocols. Developed to streamline checkpoint processes and improve security measures through innovative technology solutions.',
      tech: ['Security Systems', 'Hardware Integration', 'Real-time Processing'],
      links: { github: '#', demo: '#' }
    },
    {
      year: '2024',
      category: 'Hackathon',
      title: 'Parkd',
      description: 'A smart parking solution that helps users find available parking spaces in real-time. Designed to reduce parking frustration and optimize urban parking infrastructure.',
      tech: ['Mobile App', 'IoT Sensors', 'Location Services'],
      links: { github: '#', demo: '#' }
    },
    {
      year: '2024',
      category: 'Hackathon',
      title: 'CitySync',
      description: 'An urban synchronization platform that connects city services, transportation, and residents. Built to improve city-wide coordination and enhance the urban living experience through integrated technology.',
      tech: ['Full Stack', 'API Integration', 'City Services'],
      links: { github: '#', demo: '#' }
    },
    {
      year: '2023',
      category: 'Hackathon',
      title: 'Third Place',
      description: 'A community platform designed to create and discover third places—social spaces beyond home and work. Focused on building stronger community connections and fostering local engagement.',
      tech: ['Social Platform', 'Community Features', 'Location-Based'],
      links: { github: '#', demo: '#' }
    }
  ];

  return (
    <section id="hackathons" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">Hackathon Projects</h2>
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
                  <a href={project.links.github} className="project-link">GitHub →</a>
                  <a href={project.links.demo} className="project-link">Demo →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonProjects;

