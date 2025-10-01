import CurrentLocationButton from "@/components/current-location-button";
import EasterEgg from "@/components/easter-egg";
import View from "@/components/replacements/view";
import { mockData } from "@/data";
import { useTheme } from "@/hooks/use-theme";
import { darkMapTheme } from "@/themes/dark-map-theme";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapScreen() {
  const theme = useTheme();
  const mapRef = useRef<MapView>(null);
  const [location, setLocation] = useState<Location.LocationObject | null>(null)

  useEffect(() => {
    async function getCurrentLocation() {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.warn('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    }

    getCurrentLocation();
  }, []);

  const markers = mockData.map(({ id, name, description, coordinates }) => ({
    id,
    name,
    description,
    coordinates,
  }));

  return (
    <View style={s.container}>
      <MapView
        ref={mapRef}
        style={s.map}
        customMapStyle={theme.isDarkMode ? darkMapTheme : []}
        initialRegion={{
          latitude: location?.coords.latitude ?? 59.6,
          longitude: location?.coords.longitude ?? 14.4,
          latitudeDelta: 8.0,
          longitudeDelta: 2.0,
        }}
        showsUserLocation={true}
        showsMyLocationButton={false}
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
              zIndex={2}
              style={{ maxWidth: 50 }}
            >
              <View style={[
                s.mapIcon, { backgroundColor: theme.surface, borderColor: theme.primary }]}>
                <Ionicons name="bonfire" size={25} color={theme.primary} />
              </View>
            </Marker>
          );
        })}
      </MapView>

      <CurrentLocationButton location={location} mapRef={mapRef} />
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
    height: "100%",
    width: "100%",
    borderWidth: 2,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
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