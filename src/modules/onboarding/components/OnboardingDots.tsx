import { useTheme } from "@/theme/useTheme";
import { use, useCallback, useMemo } from "react";
import { StyleSheet, View } from "react-native";

interface OnboardingDotsProps {
  totalSteps?: number;
  currentStep?: number;
}

export const OnboardingDots = ({
  totalSteps = 3,
  currentStep = 1,
}: OnboardingDotsProps) => {
  const { theme } = useTheme();

  const dots = useMemo(() => Array.from({ length: totalSteps }), [totalSteps]);

  const getDotStyle = useCallback(
    (index: number) => {
      const isActive = index === currentStep;
      return [
        styles.dot,
        {
          backgroundColor: isActive
            ? theme.onboarding.dotsActive
            : theme.onboarding.dots,
        },
      ];
    },
    [currentStep, theme]
  );

  return (
    <View style={styles.container}>
      {dots.map((_, index) => (
        <View key={index} style={getDotStyle(index)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 999,
  },
});
