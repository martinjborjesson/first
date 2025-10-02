import { mockData } from "@/data";
import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "@/hooks/use-theme";
import { Campsite, NewCampsiteFormData } from "@/types/types";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, ScrollView, StyleSheet, Switch, TextInput } from "react-native";
import Text from "./replacements/text";
import View from "./replacements/view";

type Props = {
  location: Location.LocationObject | null;
  onClose: () => void;
}

export default function AddCampsiteForm({ location, onClose }: Props) {
  const theme = useTheme();
  const language = useLanguage();
  const [image, setImage] = useState<string | undefined>(undefined)
  const campsites = mockData;

  if (!location || !campsites) return null;

  const { control, handleSubmit } = useForm<NewCampsiteFormData>({
    defaultValues: {
      name: "",
      description: "",
      firePlace: false,
      fireWood: false,
      shelter: false,
      water: false,
      drinkingWater: false,
      note: "",
      toilet: false,
    }
  });

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 0.5,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  function onSubmit(data: NewCampsiteFormData) {
    const newCampsite: Campsite = {
      ...data,
      id: calculateNewId(campsites),
      image,
      coordinates: {
        longitude: location!.coords.longitude,
        latitude: location!.coords.latitude,
      },
    };

    console.log("New campsite: ", newCampsite);
    saveNewCampsite(newCampsite);

    onClose();
  }

  return (
    <ScrollView>
      <View style={s.imagePicker}>
        <Pressable onPress={pickImage} style={[s.imageContainer, { backgroundColor: theme.surface, borderColor: theme.primary }]}>
          {!image && (
            <>
              <Text>{language.map.addCampsite.image}</Text>
              <Ionicons name="image-outline" color={theme.primary} size={24} />
            </>
          )}
          {image && (
            <Text>{language.map.addCampsite.imageExists}</Text>
          )}
        </Pressable>

      </View>

      <Text style={s.label}>{language.map.addCampsite.name}</Text>
      <Controller
        control={control}
        name="name"
        rules={{
          required: language.map.addCampsite.requiredName,
          minLength: { value: 1, message: language.map.addCampsite.requiredNameMin },
          maxLength: { value: 32, message: language.map.addCampsite.requiredNameMax },
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              style={[s.input, { backgroundColor: theme.surface, borderColor: theme.primary, color: theme.text }]}
              // placeholder={language.map.addCampsite.name}
              placeholderTextColor={theme.text + "88"}
              value={value}
              onChangeText={onChange}
            />
            {error && <Text style={{ color: "red" }}>{error.message}</Text>}
          </>
        )}
      />

      <Text style={s.label}>{language.map.addCampsite.description}</Text>
      <Controller
        control={control}
        name="description"
        rules={{
          required: language.map.addCampsite.requiredDescription,
          maxLength: { value: 64, message: language.map.addCampsite.requiredNameMax },
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              style={[s.input, { backgroundColor: theme.surface, borderColor: theme.primary, color: theme.text }]}
              // placeholder={language.map.addCampsite.description}
              placeholderTextColor={theme.text + "88"}
              value={value}
              onChangeText={onChange}
            />
            {error && <Text style={{ color: "red" }}>{error.message}</Text>}
          </>
        )}
      />

      <Controller
        control={control}
        name="firePlace"
        render={({ field: { value, onChange } }) => (
          <View style={s.booleanRow}>
            <Text>{language.map.addCampsite.firePlace}</Text>
            <Switch
              value={value}
              onValueChange={onChange}
              thumbColor={theme.primary}
              trackColor={{ false: theme.surface, true: theme.primary + "77" }}
            />
          </View>
        )}
      />

      <Controller
        control={control}
        name="fireWood"
        render={({ field: { value, onChange } }) => (
          <View style={s.booleanRow}>
            <Text>{language.map.addCampsite.fireWood}</Text>
            <Switch
              value={value}
              onValueChange={onChange}
              thumbColor={theme.primary}
              trackColor={{ false: theme.surface, true: theme.primary + "77" }}
            />
          </View>
        )}
      />

      <Controller
        control={control}
        name="shelter"
        render={({ field: { value, onChange } }) => (
          <View style={s.booleanRow}>
            <Text>{language.map.addCampsite.shelter}</Text>
            <Switch
              value={value}
              onValueChange={onChange}
              thumbColor={theme.primary}
              trackColor={{ false: theme.surface, true: theme.primary + "77" }}
            />
          </View>
        )}
      />

      <Controller
        control={control}
        name="water"
        render={({ field: { value, onChange } }) => (
          <View style={s.booleanRow}>
            <Text>{language.map.addCampsite.water}</Text>
            <Switch
              value={value}
              onValueChange={onChange}
              thumbColor={theme.primary}
              trackColor={{ false: theme.surface, true: theme.primary + "77" }}
            />
          </View>
        )}
      />

      <Controller
        control={control}
        name="drinkingWater"
        render={({ field: { value, onChange } }) => (
          <View style={s.booleanRow}>
            <Text>{language.map.addCampsite.drinkingWater}</Text>
            <Switch
              value={value}
              onValueChange={onChange}
              thumbColor={theme.primary}
              trackColor={{ false: theme.surface, true: theme.primary + "77" }}
            />
          </View>
        )}
      />

      <Controller
        control={control}
        name="toilet"
        render={({ field: { value, onChange } }) => (
          <View style={s.booleanRow}>
            <Text>{language.map.addCampsite.toilet}</Text>
            <Switch
              value={value}
              onValueChange={onChange}
              thumbColor={theme.primary}
              trackColor={{ false: theme.surface, true: theme.primary + "77" }}
            />
          </View>
        )}
      />

      <Text style={s.label}>{language.map.addCampsite.note}</Text>
      <Controller
        control={control}
        name="note"
        rules={{ required: false }}
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              style={[s.input, { backgroundColor: theme.surface, borderColor: theme.primary, color: theme.text }]}
              // placeholder={language.map.addCampsite.note}
              placeholderTextColor={theme.text + "88"}
              value={value}
              onChangeText={onChange}
            />
          </>
        )}
      />

      <View style={s.buttonContainer}>
        <Pressable onPress={handleSubmit(onSubmit)} style={s.button}>
          <Text>{language.map.create}</Text>
          <Ionicons name="add-circle-outline" color={theme.primary} size={24} />
        </Pressable>

        <Pressable onPress={onClose} style={s.button}>
          <Text>{language.map.close}</Text>
          <Ionicons name="chevron-back-circle-outline" color={theme.primary} size={24} />
        </Pressable>
      </View>
    </ScrollView>
  )
}

const s = StyleSheet.create({
  form: {
    gap: 2,
  },
  imagePicker: {
    alignItems: "center",
  },
  imageContainer: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    borderWidth: 1,
    borderRadius: 4,
  },
  label: {
    marginTop: 8,
    paddingHorizontal: 5,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
  },
  booleanRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    gap: 30,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
})

function calculateNewId(campsites: Campsite[]) {
  const campsitesId = campsites.map(c => parseInt(c.id, 10));
  const highestId = Math.max(...campsitesId);
  const newId = String(highestId + 1).padStart(4, "0");

  return newId;
}

function saveNewCampsite(campsite: Campsite) {

}

