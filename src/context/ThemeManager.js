import React, { useState } from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  // theme = light, dark
  const [theme, setTheme] = useState('light Mode');

  const toggleTheme = () => {
    if (theme === 'light Mode') {
      setTheme('dark Mode');
    } else {
      setTheme('light Mode');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
