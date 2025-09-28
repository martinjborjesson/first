import SafeAreaView from "@/components/safe-area-view";
import Text from "@/components/text";
import ThemeButton from "@/components/theme-button";
import View from "@/components/view";
import { ScrollView, StyleSheet } from "react-native";

export default function PlacesScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={s.container}>
          <Text style={s.bigText}>
            SETTINGS
          </Text>
          <ThemeButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bigText: {
    fontSize: 30,
    marginTop: 15,
  },
})