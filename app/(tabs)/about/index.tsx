import BackgroundImage from "@/components/background-image";
import SafeAreaView from "@/components/replacements/safe-area-view";
import Text from "@/components/replacements/text";
import View from "@/components/replacements/view";
import { StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <SafeAreaView>
      <View style={s.container}>
        <BackgroundImage />
        <Text style={s.bigText}>
          ABOUT
        </Text>
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