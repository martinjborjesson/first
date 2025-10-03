import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { useState } from "react";
import { Modal, Pressable, StyleSheet } from "react-native";
import AddCampsiteForm from "./add-campsite-form";
import Text from "./replacements/text";
import View from "./replacements/view";

type Props = {
  location: Location.LocationObject | null;
  refetch: () => void;
}

export default function AddCampsiteButton({ location, refetch }: Props) {
  const theme = useTheme();
  const language = useLanguage();
  const [modalVisible, setModalVisible] = useState(false);

  if (!location) return null

  return (
    <>
      <Pressable
        style={[s.add, { backgroundColor: theme.background, borderColor: theme.primary }]}
        onPress={() => { setModalVisible(true) }}
      >
        <Ionicons name="add" size={24} color={theme.primary} />
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
                <Text style={s.modalTitle}>{language.map.addCampsite.title}</Text>
              </View>

              <AddCampsiteForm location={location} onClose={() => setModalVisible(false)} refetch={refetch} />
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}

const s = StyleSheet.create({
  add: {
    position: "absolute",
    bottom: 90,
    right: 20,
    padding: 10,
    borderWidth: 2,
    borderRadius: 30,
    elevation: 3,
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
})