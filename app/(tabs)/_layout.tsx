import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Tabs } from "expo-router";
import { StatusBar } from "react-native";

export default function TabsLayout() {
  const theme = useTheme();
  const language = useLanguage();

  return (
    <>
      <StatusBar
        barStyle={theme.isDarkMode ? "light-content" : "dark-content"}
      />
      <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: theme.surface,
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.text,
        tabBarStyle: { backgroundColor: theme.background },
      }}>
        <Tabs.Screen
          name="home/index"
          options={{
            title: language.tabs.home,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
          listeners={{
            tabPress: () => Haptics.selectionAsync(),
          }}
        />
        <Tabs.Screen
          name="map/index"
          options={{
            title: language.tabs.map,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="location-outline" color={color} size={size} />
            ),
          }}
          listeners={{
            tabPress: () => Haptics.selectionAsync(),
          }}
        />
        <Tabs.Screen
          name="places/index"
          options={{
            title: language.tabs.places,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bonfire-outline" color={color} size={size} />
            ),
          }}
          listeners={{
            tabPress: () => Haptics.selectionAsync(),
          }}
        />
        <Tabs.Screen
          name="settings/index"
          options={{
            title: language.tabs.settings,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" color={color} size={size} />
            ),
          }}
          listeners={{
            tabPress: () => Haptics.selectionAsync(),
          }}
        />
        <Tabs.Screen
          name="about/index"
          options={{
            title: language.tabs.about,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-circle-outline" color={color} size={size} />
            ),
          }}
          listeners={{
            tabPress: () => Haptics.selectionAsync(),
          }}
        />
      </Tabs>
    </>
  );
}