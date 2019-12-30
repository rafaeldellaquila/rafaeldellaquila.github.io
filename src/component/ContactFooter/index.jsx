import React from 'react';
import './styles.css';
import ContactTitle from '../../objects/ContactTitle';
import SocialIcons from '../../objects/SocialIcons';
import EmailContact from '../../objects/EmailContact';
import AvatarContact from '../../objects/AvatarContact';

function ContactFooter() {
  return (
    <footer className="contact-footer" id="contatos">
      <ContactTitle />
      <div className="links">
        <SocialIcons />
        <EmailContact />
      </div>
      <AvatarContact />
    </footer>
  );
}

export default ContactFooter;
