import BackgroundImage from "@/components/background-image";
import SafeAreaView from "@/components/replacements/safe-area-view";
import Text from "@/components/replacements/text";
import View from "@/components/replacements/view";
import ShelterListItem from "@/components/shelter-list-item";
import { mockData } from "@/data";
import { languages } from "@/languages";
import { ScrollView, StyleSheet } from "react-native";

export default function PlacesScreen() {
  const language = languages.swedish;
  const shelters = mockData;

  return (
    <SafeAreaView>
      <BackgroundImage />
      <ScrollView>
        <View style={s.container}>
          <Text style={s.bigText}>
            {language.places.title}
          </Text>
          {shelters.map((s) => {
            return <ShelterListItem shelter={s} key={s.id} />
          })}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  bigText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
})