import { ThemeContext } from "@/providers/theme-provider";
import { useContext } from "react";

export default function UseTheme() {
  return useContext(ThemeContext);
}