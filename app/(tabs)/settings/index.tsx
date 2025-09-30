import BackgroundImage from "@/components/background-image";
import SafeAreaView from "@/components/replacements/safe-area-view";
import Text from "@/components/replacements/text";
import View from "@/components/replacements/view";
import ThemeButton from "@/components/theme-button";
import { StyleSheet } from "react-native";

export default function PlacesScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={s.container}>
        <BackgroundImage />
        <Text style={s.bigText}>
          SETTINGS
        </Text>
        <ThemeButton />
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  bigText: {
    fontSize: 30,
    marginTop: 15,
  },
})