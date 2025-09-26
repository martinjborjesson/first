import { Theme, themesList } from "@/themes/theme";
import React, { createContext } from "react";
import { useColorScheme } from "react-native";

export const ThemeContext = createContext<Theme>(themesList.dark);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scheme = useColorScheme();
  const value = scheme === "dark" ? themesList.dark : themesList.light;

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};