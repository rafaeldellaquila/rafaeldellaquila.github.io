import React from 'react';
import DownArrow from '../../img/down-arrow.png';
import './styles.css';

function ScrollArrow() {
  return (
    <a className="scroll-arrow" href="#about-section">
      scroll
      <img src={DownArrow} alt="down arrow scroll" className="arrow" />
    </a>
  );
}
export default ScrollArrow;
