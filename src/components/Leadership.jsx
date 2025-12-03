import React from 'react';

const Leadership = () => {
  const experiences = [
    {
      date: '2025',
      title: 'Client Team Lead',
      org: 'Hewlett Packard Enterprise | Roseville, CA',
      description: 'Led a 10-programmer client team whilst coordinating with 28 API and Software Student Developers. Adapted to company restructuring and time zone protocols to ensure a smooth collaborative workflow. Injected 45+ modules and simulated HTTPS requests via Postman to produce a RESTful API global application. Presented cross-team deliverables to 7 industry professionals and 35 program stakeholders.'
    },
    {
      date: '2025 - Present',
      title: 'Treasurer',
      org: 'Society of Hispanic Professional Engineers | Santa Clara, CA',
      description: 'Collaborated with 12 board committees to align financial decisions for 80+ members. Budgeted $15,000 for 11 to attend the national convention, and crowdfunded $5000 via company outreach. Carried previous Freshman Representative duties, advocated for 40+ class, leading in 155 signups.'
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

