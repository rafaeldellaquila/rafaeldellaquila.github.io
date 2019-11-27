import React from 'react';
import './App.css';
import HeaderPage from './component/HeaderPage';
import BannerHome from './component/BannerHome';
import SocialIcons from './objects/SocialIcons';
import AboutMe from './objects/AboutMe';

function App() {
  return (
    <>
      <HeaderPage />
      <BannerHome />
      <SocialIcons />
      <AboutMe />
    </>
  );
}

export default App;
