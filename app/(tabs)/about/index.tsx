import BackgroundImage from "@/components/background-image";
import SafeAreaView from "@/components/replacements/safe-area-view";
import Text from "@/components/replacements/text";
import View from "@/components/replacements/view";
import { useLanguage } from "@/hooks/use-language";
import { ScrollView, StyleSheet } from "react-native";

export default function AboutScreen() {
  const language = useLanguage();
  const versionNumber = "1.0.0"

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackgroundImage />
      <ScrollView contentContainerStyle={s.container}>
        <Text style={s.bigText}>{language.about.title}</Text>
        <Text style={s.paragraph}>{language.about.description}</Text>

        <View>
          <Text style={s.sectionTitle}>{language.about.featuresTitle}</Text>
          {language.about.features.map((f, i) => (
            <Text key={i} style={s.listItem}>{"• " + f}</Text>
          ))}
        </View>

        <View>
          <Text style={s.sectionTitle}>{language.about.disclaimerTitle}</Text>
          <Text style={s.paragraph}>{language.about.disclaimer}</Text>
        </View>

        <View>
          <Text style={s.sectionTitle}>{language.about.version}</Text>
          <Text>{"v" + versionNumber}</Text>
        </View>

        <View>
          <Text style={s.sectionTitle}>{language.about.contactTitle}</Text>
          <Text>{"📧 " + language.about.contactEmail}</Text>
          <Text>{"🌐 " + language.about.contactWebsite}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  bigText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 24,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 12,
  },
  listItem: {
    fontSize: 16,
    lineHeight: 22,
    marginLeft: 12,
    marginBottom: 6,
  },
})