import SafeAreaView from "@/components/safe-area-view";
import View from "@/components/view";
import { mockData } from "@/data";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapScreen() {
  const markers = mockData.filter(place => place.id !== "patrik").map(({ id, name, description, coordinates }) => ({
    id,
    name,
    description,
    coordinates,
  }));

  return (
    <SafeAreaView>
      <View style={s.container}>
        <MapView
          style={s.map}
          initialRegion={{
            latitude: 59.6,
            longitude: 14.4,
            latitudeDelta: 8.0,
            longitudeDelta: 2.0,
          }}
        >
          <Marker
            coordinate={{
              latitude: 57.714186790674404,
              longitude: 12.796773591829576,
            }}
            title="Patrik Lax"
            description="Kung."
            image={require("@/assets/app/patrik.png")}
          />
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
              />
            );
          })}
        </MapView>
      </View>
    </SafeAreaView>
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
})