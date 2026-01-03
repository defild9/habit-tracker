import { memo, useMemo } from "react";
import { StyleSheet, Pressable, ViewStyle, PressableProps } from "react-native";
import { UiText } from "../UiText";
import { useTheme } from "@/theme/useTheme";

type ButtonVariant = "primary" | "secondary";

interface UiButtonProps extends Omit<PressableProps, "style"> {
  variant?: ButtonVariant;
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  style?: ViewStyle;
}

export const UiButton = memo(
  ({
    variant = "primary",
    title,
    leftIcon,
    rightIcon,
    disabled = false,
    style,
    ...props
  }: UiButtonProps) => {
    const { theme } = useTheme();

    const buttonStyle = useMemo(() => {
      const baseStyle: ViewStyle[] = [styles.button];

      if (variant === "primary") {
        baseStyle.push({
          backgroundColor: theme.button.primary,
        });
      } else {
        baseStyle.push({
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: theme.button.primary,
        });
      }

      if (disabled) {
        baseStyle.push(styles.disabled);
      }

      if (style) {
        baseStyle.push(style);
      }

      return baseStyle;
    }, [variant, theme, disabled, style]);

    const textColor = useMemo(() => {
      if (variant === "primary") {
        return theme.button.primaryText;
      }
      return theme.button.primary;
    }, [variant, theme]);

    return (
      <Pressable
        style={({ pressed }) => [
          ...buttonStyle,
          pressed && !disabled && styles.pressed,
        ]}
        disabled={disabled}
        {...props}
      >
        {leftIcon}
        <UiText
          variant="body"
          weight="semibold"
          style={[styles.text, { color: textColor }]}
        >
          {title}
        </UiText>
        {rightIcon}
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    height: 48,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 9999,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  text: {
    textAlign: "center",
  },
  pressed: {
    opacity: 0.8,
  },
  disabled: {
    opacity: 0.5,
  },
});
