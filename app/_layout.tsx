import ThemedNavigationBar from "@/components/themed-navigation-bar";
import { ThemeProvider } from "@/providers/theme-provider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemedNavigationBar />
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider >
  );
}