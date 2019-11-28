import React from 'react';
import SocialIcons from '../../objects/SocialIcons';
import AboutMe from '../../objects/AboutMe';
import './styles.css';

function AboutSection() {
  return (
    <section className="about-section" id="about-section">
      <SocialIcons />
      <AboutMe />
    </section>
  );
}

export default AboutSection;
