import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";

import { useState, useEffect } from "react";

import "./styles/app.sass"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
        <About />
      </main>
    </div>
  );
}

export default App;
