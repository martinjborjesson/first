import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { Pressable, StyleSheet } from "react-native";
import MapView from "react-native-maps";

type Props = {
  location: Location.LocationObject | null;
  mapRef: React.RefObject<MapView | null>;
};

export default function CurrentLocationButton({ location, mapRef }: Props) {
  const theme = useTheme();

  if (!location) return null;

  return (
    <Pressable
      style={[s.currentLocation, { backgroundColor: theme.background, borderColor: theme.primary }]}
      onPress={() => {
        if (location && mapRef.current) {
          mapRef.current.animateToRegion(
            {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            },
            1000
          );
        }
      }}
    >
      <Ionicons name="locate" size={24} color={theme.primary} />
    </Pressable>
  );
}

const s = StyleSheet.create({
  currentLocation: {
    position: "absolute",
    bottom: 20,
    right: 20,
    padding: 10,
    borderWidth: 2,
    borderRadius: 30,
    elevation: 3,
  },
})