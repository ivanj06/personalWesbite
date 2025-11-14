import React from 'react';

const Affiliations = () => {
  const affiliations = [
    {
      name: 'SHPE',
      logo: '/logos/shpe-logo.png',
      description: 'Society of Hispanic Professional Engineers - Promoting STEM education and professional development within the Hispanic community.'
    },
    {
      name: 'HeadStart',
      logo: '/logos/headstart-logo.png',
      description: 'Early childhood education and development program focused on preparing children for success in school and life.'
    },
    {
      name: 'CodePath',
      logo: '/logos/codepath-logo.png',
      description: 'Technical training program providing free computer science courses and career support to underrepresented students.'
    },
    {
      name: 'ColorStack',
      logo: '/logos/colorstack-logo.png',
      description: 'Community organization supporting Black and Latinx computer science students through mentorship, resources, and career opportunities.'
    },
    {
      name: 'MLT',
      logo: '/logos/mlt-logo.png',
      description: 'Management Leadership for Tomorrow - Career development and leadership program for high-achieving people of color.'
    }
  ];

  return (
    <section id="affiliations" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">05</span>
          <h2 className="section-title">Affiliations</h2>
        </div>
        <div className="hobbies-grid">
          {affiliations.map((affiliation, index) => (
            <div key={index} className="hobby-item affiliation-item">
              <div className="affiliation-logo">
                <img
                  src={affiliation.logo}
                  alt={`${affiliation.name} Logo`}
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
              <h3 className="hobby-title">{affiliation.name}</h3>
              <p className="hobby-description">{affiliation.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Affiliations;

