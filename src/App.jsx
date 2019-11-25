import React from 'react';
import avatar from './img/avatar.png';
import './App.css';

function App() {
  return (
    <div className="under-construction">
      <header className="content">
        <img src={avatar} className="avatar" alt="logo" />
        <p className="text">Em construção.</p>
        <a
          className="link"
          href="https://github.com/rafaeldellaquila/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="link"
          href="mailto:rafadellaquila@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          rafadellaquila@gmail.com
        </a>
      </header>
    </div>
  );
}

export default App;
