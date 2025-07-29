import Header from "./components/Header";

import { useState, useEffect } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-theme" : "light-theme";
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
