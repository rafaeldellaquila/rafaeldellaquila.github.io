import React from 'react';
import './styles.css';
import Github from '../../img/icon-github.svg';
import Behance from '../../img/icon-behance.svg';
import Email from '../../img/icon-email.svg';
import Telegram from '../../img/icon-telegram.svg';
import Linkedin from '../../img/icon-linkedin.svg';
import Whatsapp from '../../img/icon-wpp.svg';

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
          <img className="icon" src={Behance} alt="Icone do Behance" />
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
          <img className="icon" src={Telegram} alt="Icone do Telegram" />
        </a>
      </ul>
      <ul className="social">
        <a
          href="https:api.whatsapp.com/send?1=pt_BR&phone=5511964436880"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src={Whatsapp} alt="Icone do WhatsApp" />
        </a>
      </ul>
    </dl>
  );
}

export default SocialIcons;
