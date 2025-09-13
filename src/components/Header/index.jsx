import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../context/themes";


import { MdLightMode, MdNightlightRound } from "react-icons/md";

import "./styles.sass";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <div className="logo">
          <h1>Keven Camargo</h1>
          <span className="subtitle">Desenvolvedor Frontend</span>
        </div>

        <nav className="navigation">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>Sobre</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("projects")}>Projetos</button>
          <button onClick={() => scrollToSection("contact")}>Contato</button>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? <MdLightMode className="icon-mode"/> : <MdNightlightRound className="icon-mode"/>}
          </button>
          <a className="cv-button" href="/cv.pdf" download= "cv">Download CV</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
