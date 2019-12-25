import React from 'react';
import './App.css';
import HeaderPage from './component/HeaderPage';
import BannerHome from './component/BannerHome';
import AboutSection from './component/AboutSection';
import PortfolioSection from './component/PortfolioSection';
import ContactFooter from './component/ContactFooter';

function App() {
  return (
    <>
      <HeaderPage />
      <BannerHome />
      <AboutSection />
      <PortfolioSection />
      <ContactFooter />
    </>
  );
}

export default App;
