import React from 'react';

const HackathonProjects = () => {
  const projects = [
    {
      year: '2025',
      category: 'Hackathon',
      title: 'License Plate Detector - Intel Tiber Hackathon',
      description: 'Designed a license plate detector to address the inefficient permit system, piloting 9500 users. Trained an OpenCV model for image pre-processing and Ultralytics YOLO for object detection, yielding 90% accuracy. Programmed API endpoints to verify license plates within our AWS DynamoDB database.',
      tech: ['OpenCV', 'YOLO', 'AWS DynamoDB', 'RESTful API', 'Python'],
      links: { github: '#', demo: '#' }
    },
    {
      year: '2025',
      category: 'Hackathon',
      title: 'Version Control System - Adobe Express AI Hackathon',
      description: 'Guided by employee complaints, we overhauled the version control via multi-user save states and a visual changes UI. Deployed RESTful API calls to AWS, stored metadata for downloadable rollbacks, and multi-user workflows. Recognized by 12 professionals amongst 100+ participants to pitch our team project for further funding. Award: 2nd Overall.',
      tech: ['AWS', 'RESTful API', 'Version Control', 'Multi-user Systems'],
      links: { github: '#', demo: '#' }
    },
    {
      year: '2024',
      category: 'Hackathon',
      title: 'Safety Heatmap - AWS x INRIX Hackathon',
      description: 'Tackled growing San Jose safety concern through assessing 220 neighborhoods on an interactive heatmap. Optimized AI prompts for Claude 3 Sonnet-generated scores, constructed a scalable system for future expansion. Engineered current & future prediction scores into S3 buckets to increase resident safety awareness. Drove product vision and team ideation; led project pitch rounds to 20 industry judges and 350+ participants. Award: 2nd Best Use of Responsible AI.',
      tech: ['AWS S3', 'Claude 3 Sonnet', 'Data Visualization', 'AI/ML', 'Heatmap'],
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

