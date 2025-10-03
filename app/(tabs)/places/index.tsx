import BackgroundImage from "@/components/background-image";
import CampsiteListItem from "@/components/campsite-list-item";
import SafeAreaView from "@/components/replacements/safe-area-view";
import Text from "@/components/replacements/text";
import View from "@/components/replacements/view";
import useCampsites from "@/hooks/use-campsites";
import { useLanguage } from "@/hooks/use-language";
import { ScrollView, StyleSheet } from "react-native";

export default function PlacesScreen() {
  const language = useLanguage();
  const { campsites } = useCampsites();

  return (
    <SafeAreaView>
      <BackgroundImage />
      <ScrollView>
        <View style={s.container}>
          <Text style={s.bigText}>
            {language.places.title}
          </Text>
          {campsites.map((c) => {
            return <CampsiteListItem campsite={c} key={c.id} />
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