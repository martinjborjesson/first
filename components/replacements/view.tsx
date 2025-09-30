import { useTheme } from "@/hooks/use-theme";
import { ComponentProps } from "react";
import { View as ViewRN } from "react-native";

type Props = ComponentProps<typeof ViewRN> & {
  surface?: boolean;
  background?: boolean;
};

export default function View({ style, children, surface, background, ...rest }: Props) {
  const theme = useTheme();
  let backgroundColor = "unset";

  if (background) {
    backgroundColor = theme.background;
  } else if (surface) {
    backgroundColor = theme.surface;
  }

  return (
    <ViewRN {...rest} style={[{ backgroundColor: backgroundColor }, style]}>
      {children}
    </ViewRN>
  );
};