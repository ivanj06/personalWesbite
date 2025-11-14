import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      date: 'August 2024',
      title: 'Junior Developer',
      org: 'Hewlett Packard Enterprise',
      description: 'Development certification validating foundational skills in software engineering, programming, and enterprise application development.',
      link: '#'
    },
    {
      date: 'March 2025',
      title: 'Client Team Lead',
      org: 'Hewlett Packard Enterprise',
      description: 'Leadership certification demonstrating expertise in managing client relationships, leading technical teams, and delivering enterprise solutions.',
      link: '#'
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">03</span>
          <h2 className="section-title">HPE Certifications</h2>
        </div>
        <div className="certifications-list">
          {certifications.map((cert, index) => (
            <article key={index} className="cert-item">
              <div className="cert-meta">
                <span className="cert-date">{cert.date}</span>
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-org">{cert.org}</p>
                <p className="cert-description">{cert.description}</p>
                <a href={cert.link} className="cert-link">View Credential →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

