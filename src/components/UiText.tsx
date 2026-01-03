import { memo, useMemo } from "react";
import { Text, TextProps, StyleSheet, TextStyle } from "react-native";
import { useTheme } from "@/theme/useTheme";

type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "bodyLarge"
  | "caption"
  | "small";

type TextWeight = "regular" | "medium" | "semibold" | "bold";

type TextColor = "primary" | "secondary";

interface UiTextProps extends TextProps {
  variant?: TextVariant;
  weight?: TextWeight;
  color?: TextColor;
  children: React.ReactNode;
}

const variantStyles: Record<TextVariant, TextStyle> = {
  h1: {
    fontSize: 32,
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    lineHeight: 28,
  },
  bodyLarge: {
    fontSize: 18,
    lineHeight: 26,
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
  },
  caption: {
    fontSize: 14,
    lineHeight: 20,
  },
  small: {
    fontSize: 12,
    lineHeight: 16,
  },
};

const weightStyles: Record<TextWeight, TextStyle> = {
  regular: {
    fontFamily: "Inter-Regular",
  },
  medium: {
    fontFamily: "Inter-Medium",
  },
  semibold: {
    fontFamily: "Inter-SemiBold",
  },
  bold: {
    fontFamily: "Inter-Bold",
  },
};

export const UiText = memo(
  ({
    variant = "body",
    weight = "regular",
    color = "primary",
    style,
    children,
    ...props
  }: UiTextProps) => {
    const { theme } = useTheme();

    const textStyle = useMemo(
      () => [
        styles.base,
        variantStyles[variant],
        weightStyles[weight],
        { color: theme.text[color] },
        style,
      ],
      [variant, weight, color, theme.text, style]
    );

    return (
      <Text style={textStyle} {...props}>
        {children}
      </Text>
    );
  }
);

UiText.displayName = "UiText";

const styles = StyleSheet.create({
  base: {
    fontFamily: "Inter-Regular",
  },
});
