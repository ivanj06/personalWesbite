import React from 'react';

const WorkHistory = () => {
  const roles = [
    {
      date: 'April 2022 - Present',
      title: 'Restaurant Server',
      org: 'La Huaca Peruvian Cuisine | Roseville, CA',
      bullets: [
        'Delivered efficient attention to 8+ parties during rush hours, prioritizing tasks based on customer needs.',
        'Leveraged bilingual communication to ensure a smooth 15-person team coordination in catering and weddings.',
        'Utilized charisma to boost the average shift report to $1500 and increase customer retention by 35%.'
      ]
    },
    {
      date: '2024',
      title: 'Seminar Peer Educator',
      org: 'LEAD Scholars Program | Santa Clara University',
      bullets: [
        'Facilitated educational seminars and supported first-generation students in their academic transition.',
        'Collaborated with program staff to design sessions that build community, confidence, and campus navigation skills.'
      ]
    }
  ];

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">04</span>
          <h2 className="section-title">Work History</h2>
        </div>
        <div className="certifications-list">
          {roles.map((role, index) => (
            <article key={index} className="cert-item">
              <div className="cert-meta">
                <span className="cert-date">{role.date}</span>
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{role.title}</h3>
                <p className="cert-org">{role.org}</p>
                <ul className="work-bullets">
                  {role.bullets.map((bullet, i) => (
                    <li key={i} className="work-bullet">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkHistory;


