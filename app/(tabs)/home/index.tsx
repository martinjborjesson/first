import BackgroundImage from "@/components/background-image";
import SafeAreaView from "@/components/replacements/safe-area-view";
import Text from "@/components/replacements/text";
import View from "@/components/replacements/view";
import { mockData } from "@/data";
import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet } from "react-native";

export default function HomeScreen() {
  const theme = useTheme();
  const language = useLanguage();

  const campsitesWithImage = mockData.filter(c => c.image != undefined)
  const campsite = campsitesWithImage[Math.floor(Math.random() * campsitesWithImage.length)];

  return (
    <SafeAreaView>
      <BackgroundImage />
      <View style={s.container}>
        <View style={[s.container, { flex: 0 }]}>
          <View style={s.header}>
            <Ionicons name="bonfire-outline" color={theme.primary} size={50} />
            <Text style={s.title}>Lägerplatser.se</Text>
          </View>
          <Text style={s.subTitle}>
            {language.home.greeting}
          </Text>
        </View>
        <View style={s.imageContainer}>
          <Image source={{ uri: campsite.image }} style={s.image} />
          <Text style={s.imageText}>{campsite.name}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
    marginVertical: 40,
  },
  title: {
    fontSize: 30,
  },
  subTitle: {
    marginBottom: 40,
  },
  imageContainer: {
    gap: 2,
    margin: 15,
  },
  image: {
    width: 300,
    height: 200,
    objectFit: "cover",
    padding: 2,
    borderRadius: 5,
  },
  imageText: {
    fontStyle: "italic"
  }
})