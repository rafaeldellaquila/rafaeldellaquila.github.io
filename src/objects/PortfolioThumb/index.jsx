import React from 'react';

function PortfolioThumb({ src, alt }) {
  return (
    <a className="portfolio-thumb" href="#to-do">
      <img className="image" src={src} alt={alt} />
    </a>
  );
}

export default PortfolioThumb;
