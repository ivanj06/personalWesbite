import React from 'react';
import { FaSwimmer, FaGuitar } from 'react-icons/fa';
import { PiDrone } from 'react-icons/pi';
import { TbSkateboard } from 'react-icons/tb';

const Hobbies = () => {
  const hobbies = [
    {
      title: 'Swimming',
      Icon: FaSwimmer,
      description:
        '200m IM Team Relays. 100m Backstroke. 50m Freestyle. 6am Winter Practices. 1 Varsity Swimmer. This sport has not only shaped my body, but my mind and pain tolerance too!'
    },
    {
      title: 'Drones',
      Icon: PiDrone,
      description:
        "To take a break from screens means getting a bird's eye perspective of the world! My DJI Mini 3 Pro is my main companion to parks and outdoor adventures."
    },
    {
      title: 'Ukulele',
      Icon: FaGuitar,
      description:
        'Small instrument, big unwind—learning chord progressions and playing for friends between study sessions and swim meets.'
    },
    {
      title: 'Pennyboard',
      Icon: TbSkateboard,
      description:
        'Compact cruiser for campus hops and quick rides—easy to carry, smooth on mellow pavement, and a fun way to clear my head.'
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
          {hobbies.map(({ title, description, Icon }, index) => (
            <div key={index} className="hobby-item">
              <Icon className="hobby-icon" aria-hidden />
              <h3 className="hobby-title">{title}</h3>
              <p className="hobby-description">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
