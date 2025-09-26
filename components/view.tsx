import UseTheme from "@/hooks/use-theme";
import { ComponentProps } from "react";
import { View as ViewRN } from "react-native";

type Props = ComponentProps<typeof ViewRN> & {
  surface?: boolean;
};

export default function View({ style, children, surface, ...rest }: Props) {
  const theme = UseTheme();

  return (
    <ViewRN {...rest} style={[{ backgroundColor: surface ? theme.surface : theme.background }, style]}>
      {children}
    </ViewRN>
  );
};