import { useTheme } from "@/theme/useTheme";
import { memo, useMemo } from "react";
import { TextInput, TextInputProps, StyleSheet, ViewStyle } from "react-native";

interface UiInputProps extends TextInputProps {
  style?: ViewStyle;
}

export const UiInput = memo((props: UiInputProps) => {
  const { theme } = useTheme();
  const inputStyles = useMemo(() => {
    return StyleSheet.flatten([
      styles.input,
      props.style,
      {
        borderColor: theme.input.border,
        backgroundColor: theme.input.background,
        color: theme.input.text,
      },
    ]);
  }, [
    props.style,
    theme.input.background,
    theme.input.border,
    theme.input.text,
  ]);
  return <TextInput {...props} style={inputStyles} />;
});

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
  },
});
