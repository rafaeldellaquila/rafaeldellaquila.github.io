import React from 'react';
import SkillDescription from '../SkillDescription';
import './styles.css';

function SkillSide() {
  return (
    <aside className="skill-side">
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
    </aside>
  );
}

export default SkillSide;
