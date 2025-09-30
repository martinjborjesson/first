import EasterEgg from "@/components/easter-egg";
import View from "@/components/replacements/view";
import { mockData } from "@/data";
import { useTheme } from "@/hooks/use-theme";
import { darkMapTheme } from "@/themes/dark-map-theme";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapScreen() {
  const theme = useTheme();
  const markers = mockData.map(({ id, name, description, coordinates }) => ({
    id,
    name,
    description,
    coordinates,
  }));

  return (
    <View style={s.container}>
      <MapView
        style={s.map}
        customMapStyle={theme.isDarkMode ? darkMapTheme : []}
        initialRegion={{
          latitude: 59.6,
          longitude: 14.4,
          latitudeDelta: 8.0,
          longitudeDelta: 2.0,
        }}
      >
        <EasterEgg />
        {markers.map((m) => {
          return (
            <Marker
              key={m.id}
              coordinate={{
                latitude: m.coordinates.latitude,
                longitude: m.coordinates.longitude,
              }}
              title={m.name}
              description={m.description}
            >
              <View style={[s.mapIcon, { backgroundColor: theme.surface, borderColor: theme.primary }]}>
                <Ionicons name="bonfire-outline" size={28} color={theme.primary} />
              </View>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  mapIcon: {
    height: 36,
    width: 36,
    borderWidth: 2,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
})