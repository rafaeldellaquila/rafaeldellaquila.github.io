import React from 'react';
import PortfolioThumb from '../../objects/PortfolioThumb';
import PhotoUm from '../../img/photo-1.png';
import PhotoDois from '../../img/photo-2.png';

function PortfolioSection() {
  return (
    <section className="portifolio-section">
      <PortfolioThumb src={PhotoUm} alt="projeto do linkedin" />
      <PortfolioThumb src={PhotoDois} alt="projeto Solaris" />
      <PortfolioThumb src={PhotoUm} alt="projeto do linkedin" />
    </section>
  );
}

export default PortfolioSection;
