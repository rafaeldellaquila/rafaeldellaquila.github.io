import React from 'react';
import './App.css';
import HeaderPage from './component/HeaderPage';
import BannerHome from './component/BannerHome';
import SocialIcons from './objects/SocialIcons';

function App() {
  return (
    <>
      <HeaderPage />
      <BannerHome />
      <SocialIcons />
    </>
  );
}

export default App;
