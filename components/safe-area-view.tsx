
import { useTheme } from "@/hooks/use-theme";
import { ComponentProps } from "react";
import { SafeAreaView as SafeAreaViewRN } from "react-native-safe-area-context";

type Props = ComponentProps<typeof SafeAreaViewRN>;

export default function SafeAreaView({ style, ...rest }: Props) {
  const theme = useTheme();

  return (
    <SafeAreaViewRN {...rest} style={[{ flex: 1, backgroundColor: theme.background }, style,]} />
  );
}