import React, { useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { UiButton } from "@/components/UiButton/UiButton";
import { OnboardingDots } from "@/modules/onboarding";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react-native";
import { useTheme } from "@/theme/useTheme";

interface OnboardingFooterProps {
  onNext: () => void;
  isLastStep: boolean;
  totalSteps: number;
  currentStep: number;
  isDisabled?: boolean;
}

export const OnboardingFooter = ({
  onNext,
  isLastStep,
  totalSteps,
  currentStep,
  isDisabled,
}: OnboardingFooterProps) => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const buttonTitle = useMemo(() => {
    return isLastStep
      ? t("onboarding.btn.get_started")
      : t("onboarding.btn.next");
  }, [isLastStep, t]);
  return (
    <View style={styles.footer}>
      <OnboardingDots totalSteps={totalSteps} currentStep={currentStep} />
      <UiButton
        variant="primary"
        title={buttonTitle}
        onPress={onNext}
        rightIcon={<ArrowRight size={16} color={theme.background} />}
        disabled={isLastStep && !isDisabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingBottom: 48,
    gap: 24,
  },
});
