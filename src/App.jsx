import React from 'react';
import './App.css';
import HeaderPage from './component/HeaderPage';
import BannerHome from './component/BannerHome';
import AboutSection from './component/AboutSection';
import SkillDescription from './objects/SkillDescription';

function App() {
  return (
    <>
      <HeaderPage />
      <BannerHome />
      <AboutSection />
      <SkillDescription
        title="Design"
        skillUm="web design"
        skillDois="direção de arte"
        skillTres="user interface"
        skillQuatro="user experience"
      />
      <SkillDescription
        title="Front-end"
        skillUm="html e css"
        skillDois="javascript (react.js lib)"
        skillTres="git & gitraken"
      />
    </>
  );
}

export default App;
