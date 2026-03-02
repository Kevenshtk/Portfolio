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
                  isDarkMode
                    ? "./imgPerfilDark.png"
                    : "./imgPerfilLight.png"
                }
                alt="Keven di Camargo"
              />
              <div className="profile-border"></div>
            </div>
          </div>

          <div className="bio-section">
            <p className="intro-text">
              Olá! Meu nome é Keven, tenho 22 anos, atualmente estou cursando
              Análise e Desenvolvimento de Sistemas na Fatec de Lins e sou
              formado como Técnico em Informática pela Etec de Lins.
            </p>

            <p>
              Desde que conheci o mundo da programação em 2018, venho
              aprimorando minhas habilidades e construindo projetos que reforçam
              meu aprendizado. Tenho experiência com JavaScript, React.js,
              buscando sempre aplicar boas práticas de desenvolvimento, para me
              tornar um desenvolvedor web completo.
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
