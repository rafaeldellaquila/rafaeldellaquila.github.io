import React from 'react';
import './styles.css';

function AboutMe() {
  return (
    <article className="about-me">
      <h1 className="title">
        Me chamo Rafael Dell’Aquila, sou Designer e aspirante a Front-end.
      </h1>
      <p className="description">
        Comecei a trabalhar em agências aos 18 anos e durante esse tempo de
        experiência pude trabalhar com diversas marcas atuando como Diretor de
        arte e Designer e agora estou em busca de um novo desafio, o Front-end.
      </p>
      <a href="https://github.com/rafaeldellaquila" className="portifolio">
        Aqui você poderá ver alguns projetos que eu estou fazendo.
      </a>
    </article>
  );
}

export default AboutMe;
