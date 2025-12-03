import React from 'react';

const Affiliations = () => {
  const affiliations = [
    {
      name: 'SCU Formula SAE Racing',
      logo: '/logos/formula-sae-logo.png',
      description: 'Formula SAE Racing team at Santa Clara University - Engineering and racing competition team.'
    },
    {
      name: 'ColorStack',
      logo: '/logos/colorstack-logo.png',
      description: 'Community organization supporting Black and Latinx computer science students through mentorship, resources, and career opportunities.'
    },
    {
      name: 'HeadStart',
      logo: '/logos/headstart-logo.png',
      description: "A 500+ fellow fellowship based out of the US empowering students to achieve their career goals, in Tech, Consulting, and Finance. Fellows have gone on to join teams at Uber, Google, Meta, Goldman Sachs, McKinsey, Bain, Coinbase, Boston Consulting Group (BCG), Microsoft & more!"
    },
    {
      name: "MLT Career Prep '28",
      logo: '/logos/mlt-logo.png',
      description: 'Management Leadership for Tomorrow Career Prep - Career development and leadership program for high-achieving people of color.'
    },
    {
      name: 'LEAD First-Gen Scholars Program',
      logo: '/logos/lead-logo.png',
      description: 'LEAD Scholars Program - Supporting first-generation college students through mentorship and academic resources.'
    },
    {
      name: 'SHPE',
      logo: '/logos/shpe-logo.png',
      description: 'Society of Hispanic Professional Engineers - Promoting STEM education and professional development within the Hispanic community.'
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

