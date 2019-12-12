import React from 'react';
import './styles.css';

function NavHeader() {
  return (
    <nav className="nav-header">
      <a className="action" href="#projetos">
        projetos
      </a>
      <a className="action" href="#contatos">
        contatos
      </a>
    </nav>
  );
}

export default NavHeader;
