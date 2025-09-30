import { Marker } from "react-native-maps";

export default function EasterEgg() {
  return (
    <Marker
      coordinate={{
        latitude: 57.714186790674404,
        longitude: 12.796773591829576,
      }}
      title="Patrik Lax"
      description="Kung."
      image={require("@/assets/app/patrik.png")}
      zIndex={100}
    />
  );
}