import React from 'react';
import SocialIcons from '../../objects/SocialIcons';
import AboutMe from '../../objects/AboutMe';
import SkillSide from '../../objects/SkillSide';
import './styles.css';

function AboutSection() {
  return (
    <div className="about-section" id="about-section">
      <section className="about">
        <SocialIcons />
        <AboutMe />
      </section>
      <SkillSide />
    </div>
  );
}

export default AboutSection;
