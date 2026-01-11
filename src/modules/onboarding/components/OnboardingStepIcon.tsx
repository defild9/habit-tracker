import React, { useMemo } from "react";
import {
  CalendarCheck,
  ChartNoAxesColumnIncreasing,
  Target,
  User,
  LucideIcon,
} from "lucide-react-native";
import { StyleSheet, View } from "react-native";
import { useTheme } from "@/theme/useTheme";

export type OnboardingIconType = "track" | "analytics" | "focus" | "last_step";

interface OnboardingStepIconProps {
  type: OnboardingIconType;
}

export const OnboardingStepIcon = ({ type }: OnboardingStepIconProps) => {
  const { theme } = useTheme();
  const IconComponent = useMemo<LucideIcon>(() => ICONS[type], [type]);

  const finalContainerStyle = useMemo(() => {
    return [styles.iconContainer, { borderColor: theme.borderColor }];
  }, [theme.borderColor]);
  return (
    <View style={finalContainerStyle}>
      <IconComponent size={40} color={ICONS_COLORS[type]} strokeWidth={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 2,
  },
});

const ICONS: Record<OnboardingIconType, LucideIcon> = {
  track: CalendarCheck,
  analytics: ChartNoAxesColumnIncreasing,
  focus: Target,
  last_step: User,
};

const ICONS_COLORS: Record<OnboardingIconType, string> = {
  track: "#6366F1",
  analytics: "#10B981",
  focus: "#8B5CF6",
  last_step: "#3B82F6",
};
