import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "@/hooks/use-theme";
import { Campsite } from "@/types/types";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import Text from "./replacements/text";
import View from "./replacements/view";

type Props = {
  campsite: Campsite;
}

export default function CampsiteListItem({ campsite: campsite }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const language = useLanguage();

  return (
    <Pressable onPress={() => setIsOpen(!isOpen)}>
      <View style={s.card} surface>
        <View style={s.cardImageContainer} background>
          {campsite.image ? <Image style={s.image} source={{ uri: campsite.image }} /> : <Ionicons name="eye-off-outline" color={theme.primary} size={40} />}
        </View>
        <View style={s.cardContent}>
          <Text style={s.cardTitle}>{campsite.name}</Text>
          <Text style={s.cardDescription}>{campsite.description}</Text>
          {!isOpen && <View style={{ flex: 1, justifyContent: "flex-end" }}><Text style={s.press}>{language.places.press}</Text></View>}
          {isOpen &&
            <View>
              {campsite.firePlace && <Text>{"• " + language.places.fireplace}</Text>}
              {campsite.fireWood && <Text>{"• " + language.places.fireWood}</Text>}
              {campsite.shelter && <Text>{"• " + language.places.shelter}</Text>}
              {campsite.water && <Text>{"• " + language.places.water}</Text>}
              {campsite.drinkingWater && <Text>{"• " + language.places.drinkingWater}</Text>}
              {campsite.toilet && <Text>{"• " + language.places.toilet}</Text>}
              {campsite.note && <Text style={s.cardNote}>{campsite.note}</Text>}
            </View>
          }
        </View>
      </View>
    </Pressable>
  );
}

const s = StyleSheet.create({
  card: {
    marginBottom: 15,
    flexDirection: "row",
    gap: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 3,
  },
  cardImageContainer: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 5,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 600,
  },
  cardDescription: {
    paddingBottom: 20,
  },
  cardNote: {
    paddingTop: 20,
  },
  press: {

  },
})