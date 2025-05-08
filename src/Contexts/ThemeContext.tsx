import React from "react";

export const Themes = {
  light: "light",
  dark: "dark"
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = React.createContext({
  theme: Themes.light,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState(Themes.dark);

  const toggleTheme = () => {
    console.log("toggleTheme called");
    console.log("Current theme:", theme);
    setTheme((prevTheme) => (prevTheme === Themes.light ? Themes.dark : Themes.light));
    console.log("New theme:", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
 