import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function SkillDescription({
  title,
  skillUm,
  skillDois,
  skillTres,
  skillQuatro
}) {
  return (
    <dl className="skill-description">
      <dt className="title">{title}</dt>
      <dd className="skill">{skillUm}</dd>
      <dd className="skill">{skillDois}</dd>
      <dd className="skill">{skillTres}</dd>
      <dd className="skill">{skillQuatro}</dd>
    </dl>
  );
}

SkillDescription.propTypes = {
  title: PropTypes.string,
  skillUm: PropTypes.string,
  skillDois: PropTypes.string,
  skillTres: PropTypes.string,
  skillQuatro: PropTypes.string
};

SkillDescription.defaultProps = {
  title: '',
  skillUm: '',
  skillDois: '',
  skillTres: '',
  skillQuatro: ''
};

export default SkillDescription;
