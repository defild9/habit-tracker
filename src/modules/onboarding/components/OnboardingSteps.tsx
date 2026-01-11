import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import { OnboardingIconType, OnboardingStepIcon } from "./OnboardingStepIcon";
import { UiText } from "@/components/UiText";
import { useMemo, useEffect } from "react";
import Animated, {
  FadeInDown,
  FadeOutUp,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { UiInput } from "@/components/UiInput/UiInput";

interface OnboardingStepsProps {
  step: number;
  isLastStep?: boolean;
  onSetUsername?: (name: string) => void;
}

export const OnboardingSteps = ({
  step,
  isLastStep,
  onSetUsername,
}: OnboardingStepsProps) => {
  const { t } = useTranslation();

  const scale = useSharedValue(0.8);
  const opacity = useSharedValue(0);

  const stepIconType = useMemo<OnboardingIconType>(() => {
    return STEPS_ICONS[step];
  }, [step]);

  const stepTextTitle = useMemo(() => {
    return t(`onboarding.step_${step}.title`);
  }, [step, t]);

  const stepTextDescription = useMemo(() => {
    return t(`onboarding.step_${step}.description`);
  }, [step, t]);

  useEffect(() => {
    scale.set(0.8);
    opacity.set(0);

    scale.value = withSpring(1, {
      damping: 15,
      stiffness: 90,
    });
    opacity.value = withTiming(1, { duration: 400 });
  }, [opacity, scale, step]);

  const iconAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={iconAnimatedStyle}>
        <OnboardingStepIcon type={stepIconType} />
      </Animated.View>
      <Animated.View
        key={`text-${step}`}
        entering={FadeInDown.duration(500).delay(200)}
        exiting={FadeOutUp.duration(300)}
        style={styles.textContainer}
      >
        <UiText variant="h2">{stepTextTitle}</UiText>
        <UiText variant="caption" style={styles.textDescription}>
          {stepTextDescription}
        </UiText>
        {isLastStep && (
          <UiInput
            placeholder={t("onboarding.input.placeholder")}
            style={styles.input}
            onChangeText={onSetUsername}
          />
        )}
      </Animated.View>
    </View>
  );
};

const STEPS_ICONS: Record<number, OnboardingIconType> = {
  0: "track",
  1: "analytics",
  2: "focus",
  3: "last_step",
};

const styles = StyleSheet.create({
  container: {
    gap: 32,
    alignItems: "center",
  },
  textContainer: {
    gap: 10,
    alignItems: "center",
  },
  textDescription: {
    textAlign: "center",
  },
  input: {
    width: 250,
    textAlign: "center",
  },
});
