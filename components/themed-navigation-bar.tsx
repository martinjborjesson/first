import { useTheme } from "@/hooks/use-theme";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";

export default function ThemedNavigationBar() {
  const theme = useTheme();

  useEffect(() => {
    NavigationBar.setButtonStyleAsync(
      theme.isDarkMode ? "light" : "dark"
    );
  }, [theme]);

  return null;
}
