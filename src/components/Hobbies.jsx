import React from 'react';
import { FaSwimmer, FaGuitar, FaHiking } from 'react-icons/fa';
import { PiDrone } from 'react-icons/pi';

const Hobbies = () => {
  const hobbies = [
    {
      title: 'Swimming',
      iconVariant: 'swim',
      Icon: FaSwimmer,
      description:
        '200m IM Team Relays. 100m Backstroke. 50m Freestyle. 6am Winter Practices. 1 Varsity Swimmer. Thanks to the sport, I dropped 50lbs in high school.'
    },
    {
      title: 'Drone Photography',
      iconVariant: 'drones',
      Icon: PiDrone,
      description:
        'With FAA Part 107 License in hand, I took my DJI Mini 3 Pro to the skies as a little recording side hustle as a teen.'
    },
    {
      title: 'Ukulele',
      iconVariant: 'ukulele',
      Icon: FaGuitar,
      description:
        'Learned this small little instrument to unwind and play for friends. Currently learning how to play "La Bamba" and "Happy Birthday".'
    },
    {
      title: 'Hiking',
      iconVariant: 'hiking',
      Icon: FaHiking,
      description:
        'Reaching 20, I realized the importance of the outdoors. I loved backpacking Big Sur and getting up to Yosemite.'
    }
  ];

  return (
    <section id="hobbies" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-number">06</span>
          <h2 className="section-title">Hobbies</h2>
        </div>
        <div className="hobbies-grid">
          {hobbies.map(({ title, description, Icon, iconVariant }, index) => (
            <div key={index} className="hobby-item">
              <Icon className={`hobby-icon hobby-icon--${iconVariant}`} aria-hidden />
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
