import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "@/hooks/use-theme";
import { CampingSite } from "@/types/types";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import Text from "./replacements/text";
import View from "./replacements/view";

type Props = {
  shelter: CampingSite;
}

export default function ShelterListItem({ shelter }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const language = useLanguage();

  return (
    <Pressable onPress={() => setIsOpen(!isOpen)}>
      <View style={s.card} surface>
        <View style={s.cardImageContainer} background>
          {shelter.image ? <Image style={s.image} source={shelter.image as any} /> : <Ionicons name="eye-off-outline" color={theme.primary} size={40} />}
        </View>
        <View style={s.cardContent}>
          <Text style={s.cardTitle}>{shelter.name}</Text>
          <Text style={s.cardDescription}>{shelter.description}</Text>
          {!isOpen && <View style={{ flex: 1, justifyContent: "flex-end" }}><Text style={s.press}>{language.places.press}</Text></View>}
          {isOpen &&
            <View>
              {shelter.firePlace && <Text>{"• " + language.places.fireplace}</Text>}
              {shelter.fireWood && <Text>{"• " + language.places.fireWood}</Text>}
              {shelter.shelter && <Text>{"• " + language.places.shelter}</Text>}
              {shelter.water && <Text>{"• " + language.places.water}</Text>}
              {shelter.drinkingWater && <Text>{"• " + language.places.drinkingWater}</Text>}
              {shelter.toilet && <Text>{"• " + language.places.toilet}</Text>}
              {shelter.note && <Text style={s.cardNote}>{shelter.note}</Text>}
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