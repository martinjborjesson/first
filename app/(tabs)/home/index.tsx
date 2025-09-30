import SafeAreaView from "@/components/replacements/safe-area-view";
import Text from "@/components/replacements/text";
import View from "@/components/replacements/view";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet } from "react-native";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <SafeAreaView>
      <View style={s.container}>
        <View style={[s.container, { flex: 0 }]}>
          <View style={s.header}>
            <Ionicons name="bonfire-outline" color={theme.primary} size={50} />
            <Text style={s.title}>Lägerplatser.se</Text>
          </View>
          <Text style={s.subTitle}>
            Upptäck, dela och betygsätt lägerplatser i skogen.
          </Text>
        </View>
        <View style={s.imageContainer}>
          <Image source={require("@/assets/app/front-page.jpg")} style={s.image} />
          <Text style={s.imageText}>Hålehall, skåneleden</Text>
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
    resizeMode: "cover",
    padding: 2,
    borderRadius: 5,
  },
  imageText: {
    fontStyle: "italic"
  }
})