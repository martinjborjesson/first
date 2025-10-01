import BackgroundImage from "@/components/background-image";
import LanguageButton from "@/components/language-button";
import SafeAreaView from "@/components/replacements/safe-area-view";
import Text from "@/components/replacements/text";
import View from "@/components/replacements/view";
import ThemeButton from "@/components/theme-button";
import { languages } from "@/languages";
import { StyleSheet } from "react-native";

export default function PlacesScreen() {
  const language = languages.swedish;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackgroundImage />
      <View style={s.container}>
        <Text style={s.bigText}>{language.settings.title}</Text>

        <View style={s.settingsContainer}>
          <View style={s.setting}>
            <View style={s.settingsRow}>
              <Text>{language.settings.theme + ":"}</Text>
              <ThemeButton />
            </View>
            <Text style={s.themeInstructions}>{language.settings.themeInstructions}</Text>
          </View>

          <View style={s.setting}>
            <View style={s.settingsRow}>
              <Text>{language.settings.language + ":"}</Text>
              <LanguageButton />
            </View>
          </View>
        </View>
      </View>
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
  settingsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  setting: {
    justifyContent: "flex-start",
    marginBottom: 30,
    padding: 5,
    width: "100%",
  },
  settingsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  themeInstructions: {
    paddingTop: 10,
    fontStyle: "italic",
  },
})