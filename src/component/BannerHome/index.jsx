import React from 'react';
import BannerTitle from '../../objects/BannerTitle';
import ScrollArrow from '../../objects/ScrollArrow';
import './styles.css';

function BannerHome() {
  return (
    <section className="banner-home">
      <BannerTitle />
      <ScrollArrow />
    </section>
  );
}

export default BannerHome;
