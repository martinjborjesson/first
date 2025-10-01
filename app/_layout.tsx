import ThemedNavigationBar from "@/components/themed-navigation-bar";
import { LanguageProvider } from "@/providers/language-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ThemedNavigationBar />
        <Stack screenOptions={{ headerShown: false }} />
      </LanguageProvider>
    </ThemeProvider >
  );
}