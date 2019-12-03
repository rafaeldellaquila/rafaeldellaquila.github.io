import React from 'react';
import './App.css';
import HeaderPage from './component/HeaderPage';
import BannerHome from './component/BannerHome';
import AboutSection from './component/AboutSection';
import SkillSection from './component/SkillSection';
import PortfolioSection from './component/PortfolioSection';

function App() {
  return (
    <>
      <HeaderPage />
      <BannerHome />
      <AboutSection />
      <SkillSection />
      <PortfolioSection />
    </>
  );
}

export default App;
