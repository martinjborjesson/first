export type Theme = {
  primary: string,
  accent: string,
  background: string,
  surface: string,
  text: string,
};

export const darkTheme: Theme = {
  primary: "#f47835",
  accent: "#8ec127",
  background: "#181818",
  surface: "#212121",
  text: "#faf3e0",
};

export const lightTheme: Theme = {
  primary: "#f47835",
  accent: "#8ec127",
  background: "#faf3e0",
  surface: "#f9f7f1",
  text: "#181818",
};

export const themesList = {
  light: lightTheme,
  dark: darkTheme,
};