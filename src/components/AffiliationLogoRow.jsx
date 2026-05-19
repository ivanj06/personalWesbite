import React from 'react';
import { affiliationLogos } from '../data/affiliationLogos';

const AffiliationLogoRow = () => {
  return (
    <section className="home-affiliations section-alt" aria-label="Organizations I belong to">
      <div className="container">
        <div className="home-affiliations-row">
          {affiliationLogos.map(({ name, logo }) => (
            <div key={name} className="home-affiliation-logo">
              <img src={logo} alt={`${name} logo`} onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliationLogoRow;
