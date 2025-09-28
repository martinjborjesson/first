import SafeAreaView from "@/components/safe-area-view";
import Text from "@/components/text";
import View from "@/components/view";
import UseTheme from "@/hooks/use-theme";
import { ThemeProvider } from "@/providers/theme-provider";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  const theme = UseTheme();

  return (
    <ThemeProvider>
      <SafeAreaView edges={["top"]} style={{ flex: 0 }}>
        <View>
          <Text>Lägerplatser</Text>
        </View>
      </SafeAreaView>
      <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: theme.surface,
        tabBarActiveTintColor: theme.primary,
        tabBarStyle: { backgroundColor: theme.background },
      }}>
        <Tabs.Screen
          name="(tabs)/home/index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="(tabs)/map/index"
          options={{
            title: "Maps",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="location-outline" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="(tabs)/places/index"
          options={{
            title: "Places",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bonfire-outline" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="(tabs)/about/index"
          options={{
            title: "About",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-circle-outline" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </ThemeProvider >
  );
}