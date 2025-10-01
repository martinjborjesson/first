
import { useTheme } from "@/hooks/use-theme";
import { languages } from "@/languages";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, Pressable, ScrollView, StyleSheet } from "react-native";
import Text from "./replacements/text";
import View from "./replacements/view";

export default function LanguageButton() {
  const theme = useTheme();
  const language = languages.swedish;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Pressable
        style={[s.button, { backgroundColor: theme.surface, borderColor: theme.primary }]}
        onPress={() => { }}
        onLongPress={() => setModalVisible(true)}
      >
        <Text style={{ color: theme.text }}>{language.name}</Text>
      </Pressable>

      <View>
        <Modal
          visible={modalVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={s.modalOverlay}>
            <View style={[s.modalContent, { backgroundColor: theme.background }]}>
              <View style={s.modalHeader}>
                <Text style={[s.modalTitle, { color: theme.text }]}>{language.settings.chooseLanguage}</Text>
              </View>

              <ScrollView style={{ maxHeight: 300 }}>
                {Object.values(languages)
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((language) => (
                    <Pressable
                      key={language.name}
                      // onPress={() => setLanguage(language)}
                      onPress={() => { }}
                      style={s.themeButton}
                    >
                      <Text>{language.name}</Text>
                    </Pressable>
                  ))}
              </ScrollView>

              <View style={s.back}>
                <Pressable onPress={() => setModalVisible(false)} style={s.backButton}>
                  <Text>{language.settings.back}</Text>
                  <Ionicons name="chevron-back-circle-outline" color={theme.primary} size={24} />
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}

const s = StyleSheet.create({
  button: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000077",
  },
  modalContent: {
    borderRadius: 8,
    padding: 20,
    width: "80%",
    maxHeight: "70%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "600",
  },
  themeButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  back: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  red: {
    borderWidth: 1,
    borderColor: "#f00",
  }
})