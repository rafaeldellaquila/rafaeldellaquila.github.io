import React from 'react';
import SkillDescription from '../../objects/SkillDescription';
import './styles.css';

function SkillSection() {
  return (
    <section className="skill-section">
      <SkillDescription
        title="Front-end"
        skillUm="html e css"
        skillDois="javascript"
        skillTres="(react.js)"
        skillQuatro="git & gitraken"
      />
      <SkillDescription
        title="Design"
        skillUm="web design"
        skillDois="direção de arte"
        skillTres="user interface"
        skillQuatro="user experience"
      />
    </section>
  );
}

export default SkillSection;
