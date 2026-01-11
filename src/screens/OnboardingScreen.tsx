import { UiLayout } from "@/components/UiLayout";
import { useOnBoardingVm } from "@/modules/onboarding";
import { OnboardingFooter } from "@/modules/onboarding/components/OnboardingFooter";
import { OnboardingSteps } from "@/modules/onboarding/components/OnboardingSteps";
import { View, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const TOTAL_STEPS = 4;
const SWIPE_THRESHOLD = 50;

export const OnboardingScreen = ({
  navigation,
}: RootStackProps<"OnboardingScreen">) => {
  const {
    currentStep,
    totalSteps,
    isLastStep,
    isAvailableToComplete,
    goToNextStep,
    goToPreviousStep,
    onComplete,
    onSetUsername,
  } = useOnBoardingVm({ totalSteps: TOTAL_STEPS });

  const handleNext = () => {
    if (isLastStep) {
      onComplete();
    } else {
      goToNextStep();
    }
  };

  const panGesture = Gesture.Pan()
    .onEnd((event) => {
      const { translationX, velocityX } = event;

      if (
        (translationX < -SWIPE_THRESHOLD && velocityX < 0) ||
        velocityX < -500
      ) {
        if (!isLastStep) {
          goToNextStep();
        }
      } else if (
        (translationX > SWIPE_THRESHOLD && velocityX > 0) ||
        velocityX > 500
      ) {
        if (currentStep > 0) {
          goToPreviousStep();
        }
      }
    })
    .runOnJS(true);

  return (
    <UiLayout>
      <GestureDetector gesture={panGesture}>
        <View style={styles.content}>
          <OnboardingSteps
            step={currentStep}
            isLastStep={isLastStep}
            onSetUsername={onSetUsername}
          />
        </View>
      </GestureDetector>

      <OnboardingFooter
        onNext={handleNext}
        isLastStep={isLastStep}
        totalSteps={totalSteps}
        currentStep={currentStep}
        isDisabled={isAvailableToComplete}
      />
    </UiLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    gap: 24,
  },
});
