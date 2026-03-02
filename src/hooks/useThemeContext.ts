import { createContext, useContext  } from "react";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};


export const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext deve ser usado dentro do ThemeProvider");
  }

  return context;
};