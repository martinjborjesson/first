import { themesList } from "@/themes/theme";
import { Theme } from "@/types/types";
import React, { createContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

type ThemeContextType = {
  currentTheme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: themesList.dark,
  isDarkMode: true,
  toggleTheme: () => { },
  setTheme: () => { },
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scheme = useColorScheme();

  const [currentTheme, setCurrentTheme] = useState<Theme>(
    scheme === "dark" ? themesList.dark : themesList.light
  );

  const [previousDarkTheme, setPreviousDarkTheme] = useState<Theme>(themesList.dark)
  const [previousLightTheme, setPreviousLightTheme] = useState<Theme>(themesList.light)

  useEffect(() => {
    const initialTheme = scheme === "dark" ? themesList.dark : themesList.light;
    setCurrentTheme(initialTheme);
    initialTheme.isDarkMode ? setPreviousDarkTheme(initialTheme) : setPreviousLightTheme(initialTheme);
  }, [scheme]);

  const toggleTheme = () => {
    currentTheme.isDarkMode ? setCurrentTheme(previousLightTheme) : setCurrentTheme(previousDarkTheme);
  };

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    theme.isDarkMode ? setPreviousDarkTheme(theme) : setPreviousLightTheme(theme);
  };

  const value: ThemeContextType = {
    currentTheme,
    isDarkMode: currentTheme.isDarkMode,
    toggleTheme,
    setTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};