export type Theme = {
  name: string,
  isDarkMode: boolean,
  primary: string,
  accent: string,
  background: string,
  surface: string,
  text: string,
};

export const defaultDark: Theme = {
  name: "Default Dark",
  isDarkMode: true,
  primary: "#f47835",
  accent: "#8ec127",
  background: "#181818",
  surface: "#303030",
  text: "#faf3e0",
};

export const defaultLight: Theme = {
  name: "Default Light",
  isDarkMode: false,
  primary: "#f47835",
  accent: "#8ec127",
  background: "#faf3e0",
  surface: "#f9f7f1",
  text: "#181818",
};

export const skyBlue: Theme = {
  name: "Skye Blue",
  isDarkMode: false,
  primary: "#1E90FF",
  accent: "#00BFFF",
  background: "#F0F8FF",
  surface: "#E6F0FA",
  text: "#0F172A",
};

export const forestDark: Theme = {
  name: "Forest Dark",
  isDarkMode: true,
  primary: "#2E7D32",
  accent: "#A5D6A7",
  background: "#1B1F1A",
  surface: "#2C352A",
  text: "#E8F5E9",
};

export const themesList = {
  light: defaultLight,
  dark: defaultDark,
  skyeBlue: skyBlue,
  forestDark: forestDark,
};