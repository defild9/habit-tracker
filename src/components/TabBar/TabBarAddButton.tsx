import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Plus } from "lucide-react-native";
import { useTheme } from "@/theme/useTheme";
import { useMemo } from "react";

const ADD_BUTTON_SIZE = 56;

interface TabBarAddButtonProps {
  onPress: () => void;
}

export const TabBarAddButton = ({ onPress }: TabBarAddButtonProps) => {
  const { theme } = useTheme();

  const buttonStyle = useMemo(
    () =>
      StyleSheet.flatten([
        styles.button,
        { backgroundColor: theme.button.primary },
      ]),
    [theme.button.primary]
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.7}
    >
      <View style={buttonStyle}>
        <Plus size={28} color={theme.button.primaryText} strokeWidth={2.5} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10,
  },
  button: {
    width: ADD_BUTTON_SIZE,
    height: ADD_BUTTON_SIZE,
    borderRadius: ADD_BUTTON_SIZE / 2,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});
