import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import View from "./replacements/view";

export default function BackgroundImage() {
  const theme = useTheme();
  const { width, height } = Dimensions.get("window");
  const backgroundSize = width * 2;

  return (
    <View
      style={{
        position: "absolute",
        width: width * 4,
        height: height * 4,
        top: -(backgroundSize / 16),
        left: -(backgroundSize / 4),
        overflow: "hidden",
      }}
    >
      <Ionicons
        name="bonfire-outline"
        size={backgroundSize}
        color={hexToRgba(theme.primary, 0.05)}
      />
    </View>
  );
}

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}