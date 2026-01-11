import { baseStyle } from "@/theme/baseStyles";
import { useTheme } from "@/theme/useTheme";
import { ReactNode, useMemo } from "react";
import { View } from "react-native";

interface Props {
  children: ReactNode;
}

export const UiLayout = ({ children }: Props) => {
  const { theme } = useTheme();

  const finalStyle = useMemo(() => {
    return [baseStyle.flex, { backgroundColor: theme.background }];
  }, [theme.background]);
  return <View style={finalStyle}>{children}</View>;
};
