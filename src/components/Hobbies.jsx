import React from 'react';

const Hobbies = () => {
  const hobbies = [
    {
      title: 'Drone Photography',
      description: "To take a break from screens means getting a bird's eye perspective of the world! My DJI Mini 3 Pro is my main companion to parks and outdoor adventures."
    },
    {
      title: 'Swimming',
      description: '200m IM Team Relays. 100m Backstroke. 50m Freestyle. 6am Winter Practices. 1 Varsity Swimmer. This sport has not only shaped my body, but my mind and pain tolerance too!'
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

