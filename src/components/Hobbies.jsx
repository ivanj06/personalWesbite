import React from 'react';

const Hobbies = () => {
  const hobbies = [
    {
      title: 'Drone Photography',
      description: 'Capturing stunning aerial perspectives and landscapes through drone photography. Exploring the intersection of technology and creative visual storytelling from above.'
    },
    {
      title: 'Swimming',
      description: 'Staying active and maintaining fitness through swimming. Enjoying the meditative rhythm of the water and the physical challenge of the sport.'
    }
  ];

  return (
    <section id="hobbies" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-number">06</span>
          <h2 className="section-title">Hobbies & Interests</h2>
        </div>
        <div className="hobbies-grid">
          {hobbies.map((hobby, index) => (
            <div key={index} className="hobby-item">
              <h3 className="hobby-title">{hobby.title}</h3>
              <p className="hobby-description">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;

