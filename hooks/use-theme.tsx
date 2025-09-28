import { ThemeContext } from "@/providers/theme-provider";
import { useContext } from "react";

export function useTheme() {
  return useContext(ThemeContext).currentTheme;
}

export function useSetTheme() {
  return useContext(ThemeContext).setTheme;
}

export function useToggleTheme() {
  return useContext(ThemeContext).toggleTheme;
}