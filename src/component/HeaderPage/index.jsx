import React from 'react';
import './styles.css';
import HeaderName from '../../objects/HeaderName';
import NavHeader from '../../objects/NavHeader';

function HeaderPage() {
  return (
    <header className="header-page">
      <HeaderName />
      <NavHeader />
    </header>
  );
}

export default HeaderPage;
