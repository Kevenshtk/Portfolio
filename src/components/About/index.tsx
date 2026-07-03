import { useThemeContext } from "../../hooks/useThemeContext";

import "./styles.sass";

const About = () => {
  const { isDarkMode } = useThemeContext();

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>

        <div className="about-content">
          <div className="profile-section">
            <div className="profile-image">
              <img
                src={
                  isDarkMode ? "./imgPerfilDark.png" : "./imgPerfilLight.png"
                }
                alt="Keven di Camargo"
              />
              <div className="profile-border"></div>
            </div>
          </div>

          <div className="bio-section">
            <p className="intro-text">
              Olá! Sou Keven, estudante de Análise e
              Desenvolvimento de Sistemas na Fatec e formado como Técnico
              em Informática pela Etec.
            </p>

            <p>
              Desde 2018 venho construindo minha trajetória no desenvolvimento
              web por meio de projetos pessoais e acadêmicos, aplicando na
              prática tecnologias como React, Next.js, TypeScript, JavaScript
              e Tailwind CSS. Tenho experiência no desenvolvimento de
              interfaces responsivas, componentização, consumo de APIs REST e
              boas práticas de organização de código.
            </p>

            <p>
              Atualmente, continuo aprimorando meus conhecimentos em Jest e
              React Testing Library para testes de aplicações, além de Docker,
              buscando desenvolver aplicações cada vez mais escaláveis,
              performáticas e de fácil manutenção.
            </p>

            <div className="social-links">
              <a
                className="social-link github"
                href="https://github.com/Kevenshtk"
                target="_blank"
              >
                <div className="icon-container">
                  <span className="icon">📂</span>
                </div>
                <span>GitHub</span>
              </a>
              <a
                className="social-link linkedin"
                href="https://www.linkedin.com/in/kevendicamargoelpidio/"
                target="_blank"
              >
                <div className="icon-container">
                  <span className="icon">💼</span>
                </div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
