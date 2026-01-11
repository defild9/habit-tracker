import { TouchableOpacity, StyleSheet } from "react-native";
import { LucideIcon } from "lucide-react-native";
import { UiText } from "../UiText";
import { useTheme } from "@/theme/useTheme";
import { useMemo } from "react";

const ICON_SIZE = 24;

interface TabBarItemProps {
  Icon: LucideIcon;
  label: string;
  isFocused: boolean;
  onPress: () => void;
}

export const TabBarItem = ({
  Icon,
  label,
  isFocused,
  onPress,
}: TabBarItemProps) => {
  const { theme } = useTheme();
  const iconColor = useMemo(
    () => (isFocused ? theme.tabBar.active : theme.tabBar.inactive),
    [isFocused, theme.tabBar.active, theme.tabBar.inactive]
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.7}
    >
      <Icon size={ICON_SIZE} color={iconColor} strokeWidth={2} />
      <UiText variant="caption" style={[styles.label, { color: iconColor }]}>
        {label}
      </UiText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  label: {
    fontSize: 12,
  },
});
