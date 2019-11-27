import React from 'react';
import Github from '../../img/icon-github.png';
import Behance from '../../img/icon-behance.png';
import Email from '../../img/icon-email.png';
import Telegram from '../../img/icon-telegram.png';
import Linkedin from '../../img/icon-linkedin.png';

function SocialIcons() {
  return (
    <dl className="social-icons">
      <ul className="social">
        <a
          href="https://github.com/rafaeldellaquila"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src={Github} alt="Icone do Github" />
        </a>
      </ul>
      <ul className="social">
        <a
          href="https://www.linkedin.com/in/rafaeldellaquila/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src={Linkedin} alt="Icone do Linkedin" />
        </a>
      </ul>
      <ul className="social">
        <a
          href="https://www.behance.net/rafaeldellaquila"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src={Behance} alt="Icone do behance" />
        </a>
      </ul>
      <ul className="social">
        <a
          href="mailto:rafadellaquila@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src={Email} alt="Icone do E-mail" />
        </a>
      </ul>
      <ul className="social">
        <a
          href="https://t.me/rafadellaquila"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src={Telegram} alt="Icone do E-mail" />
        </a>
      </ul>
    </dl>
  );
}

export default SocialIcons;
