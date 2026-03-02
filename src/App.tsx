import { useState, useEffect } from "react";
import { ThemeContext } from "./hooks/useThemeContext";

import Header from "./components/Header/index.tsx";
import Banner from "./components/Banner/index.tsx";
import About from "./components/About/index.tsx";
import Skills from "./components/Skills/index.tsx"
import Projects from "./components/Projects/index.tsx";
import Contact from "./components/Contact/index.tsx";
import MusicPlayer from "./components/MusicPlayer/index.tsx";
import BackToTop from "./components/BackToTop/index.tsx";

import "./styles/app.sass";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-theme" : "light-theme";
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className="app">
        <Header />
        <main>
          <Banner />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <MusicPlayer />
        <BackToTop />

        <div className="background-elements">
          <div className="floating-particles"></div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
