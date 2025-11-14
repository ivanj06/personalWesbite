import React from 'react';

const Leadership = () => {
  const experiences = [
    {
      date: '2024',
      title: 'Freshman Rep + Treasurer',
      org: 'SHPE (Society of Hispanic Professional Engineers)',
      description: 'Served as Freshman Representative and Treasurer, managing financial operations and representing first-year students in the organization. Responsibilities included budget planning, event coordination, and fostering community engagement.'
    },
    {
      date: '2024',
      title: 'Seminar Peer Educator',
      org: 'LEAD Scholars Program',
      description: 'Facilitated educational seminars and provided mentorship to fellow students. Developed leadership skills through peer education, program coordination, and supporting student success initiatives.'
    }
  ];

  return (
    <section id="leadership" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-number">04</span>
          <h2 className="section-title">Leadership Experience</h2>
        </div>
        <div className="certifications-list">
          {experiences.map((exp, index) => (
            <article key={index} className="cert-item">
              <div className="cert-meta">
                <span className="cert-date">{exp.date}</span>
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{exp.title}</h3>
                <p className="cert-org">{exp.org}</p>
                <p className="cert-description">{exp.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;

