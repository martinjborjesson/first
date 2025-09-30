import SafeAreaView from "@/components/replacements/safe-area-view";
import Text from "@/components/replacements/text";
import View from "@/components/replacements/view";
import { ScrollView, StyleSheet } from "react-native";

export default function PlacesScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={s.container}>
          <Text style={s.bigText}>
            PLACES
          </Text>
        </View>
      </ScrollView>
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