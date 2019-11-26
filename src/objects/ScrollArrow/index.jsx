import React from 'react';
import DownArrow from '../../img/down-arrow.png';
import './styles.css';

function ScrollArrow() {
  return (
    <div className="scroll-arrow">
      <span className="text">scroll</span>
      <img src={DownArrow} alt="down arrow scroll" className="arrow" />
    </div>
  );
}
export default ScrollArrow;
