import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const lightTheme = {
  background: '#f8f9fa',
  color: '#212529',
  buttonBg: '#e0f7fa',
  buttonBorder: '#007b8a',
};

export const darkTheme = {
  background: '#121212',
  color: '#ffffff',
  buttonBg: '#4e5d6c',
  buttonBorder: '#ffffff',
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme); // Start with dark theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === darkTheme ? lightTheme : darkTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
