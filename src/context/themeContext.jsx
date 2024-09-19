import React, { createContext, useState } from "react";
  
const ThemContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemContext.Provider>
  );
};

export default ThemContext;
