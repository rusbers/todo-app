import { useState, useEffect, createContext } from 'react';
import ThemeContainer from '../components/theme-container/theme-container';

export const ThemeContext = createContext();

const COLOR_SCHEME = {
  LIGHT: 'light',
  DARK: 'dark',
};

function ThemeContextProvider({ children }) {
  const isDarkTheme = window?.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  const defaultTheme = isDarkTheme ? COLOR_SCHEME.DARK : COLOR_SCHEME.LIGHT;

  const [theme, setTheme] = useState(
    localStorage.getItem('app-theme') || defaultTheme
  );

  const switchTheme = () => {
    setTheme(
      theme === COLOR_SCHEME.LIGHT ? COLOR_SCHEME.DARK : COLOR_SCHEME.LIGHT
    );
  };

  useEffect(() => {
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const value = { theme, switchTheme };

  return (
    <ThemeContext.Provider value={value}>
      <ThemeContainer>{children}</ThemeContainer>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
