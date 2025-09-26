import UseTheme from "@/hooks/use-theme";
import { ComponentProps } from "react";
import { Text as TextRN } from "react-native";

type Props = ComponentProps<typeof TextRN>;

export default function Text({ style, children, ...rest }: Props) {
  const theme = UseTheme();

  return (
    <TextRN {...rest} style={[{ color: theme.text }, style]}>
      {children}
    </TextRN>
  );
}