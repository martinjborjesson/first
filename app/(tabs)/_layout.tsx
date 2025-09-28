import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "react-native";

export default function TabsLayout() {
  const theme = useTheme();

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
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="map/index"
          options={{
            title: "Maps",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="location-outline" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="places/index"
          options={{
            title: "Places",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bonfire-outline" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings/index"
          options={{
            title: "Settings",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="about/index"
          options={{
            title: "About",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-circle-outline" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}