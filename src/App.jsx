import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MusicPlayer from "./components/MusicPlayer";
import BackToTop from "./components/BackToTop";

import { useState, useEffect } from "react";

import "./styles/app.sass"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-theme" : "light-theme";
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="app">
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main>
        <Banner />
        <About isDarkMode={isDarkMode} />
        <Skills />
        <Projects />
        <Contact isDarkMode={isDarkMode} />
      </main>
      <MusicPlayer isDarkMode={isDarkMode} />
      <BackToTop />
      <div className="background-elements">
        <div className="floating-particles"></div>
      </div>
    </div>
  );
}

export default App;
