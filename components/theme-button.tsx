
import { useSetTheme, useTheme, useToggleTheme } from "@/hooks/use-theme";
import { themesList } from "@/themes/theme";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, Pressable, ScrollView, StyleSheet } from "react-native";
import SafeAreaView from "./safe-area-view";
import Text from "./text";
import View from "./view";

export default function ThemeButton() {
  const theme = useTheme();
  const toggleTheme = useToggleTheme();
  const setTheme = useSetTheme();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Pressable
        style={[s.button, { backgroundColor: theme.surface }]}
        onPress={toggleTheme}
        onLongPress={() => setModalVisible(true)}
      >
        <Text style={{ color: theme.text }}>Tema: {theme.name}</Text>
      </Pressable>

      <SafeAreaView>
        <Modal
          visible={modalVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={s.modalOverlay}>
            <View style={[s.modalContent, { backgroundColor: theme.background }]}>
              <View style={s.modalHeader}>
                <Text style={[s.modalTitle, { color: theme.text }]}>Välj tema</Text>
              </View>

              <ScrollView style={{ maxHeight: 300 }}>
                {Object.values(themesList)
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((t) => (
                    <Pressable
                      key={t.name}
                      onPress={() => setTheme(t)}
                      style={s.themeButton}
                    >
                      {t.isDarkMode ? <Ionicons name="moon" color={theme.text} /> : <Ionicons name="sunny" color={theme.text} />}
                      <Text>{t.name}</Text>
                    </Pressable>
                  ))}
              </ScrollView>

              <View style={s.back}>
                <Pressable onPress={() => setModalVisible(false)} style={s.backButton}>
                  <Text>Tillbaka</Text>
                  <Ionicons name="chevron-back-circle-outline" color={theme.primary} size={24} />
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
}

const s = StyleSheet.create({
  button: {
    padding: 5,
    borderRadius: 5,
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
  themeIcon: {

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