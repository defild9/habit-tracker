import { AppLogger } from "@/libs/appLogger/AppLogger";
import { storageManagerState } from "@/libs/storageManager";
import { StateKeyConst } from "@/types/storageState.types";
import { useCallback, useMemo, useState } from "react";

const LOG_TOPIC = "OnboardingVM";
const logger = new AppLogger("useOnboardingVm");

interface UseOnBoardingVmProps {
  totalSteps: number;
}

export const useOnBoardingVm = ({ totalSteps }: UseOnBoardingVmProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [username, setUsername] = useState("");
  const [isAvailableToComplete, setIsAvailableToComplete] = useState(false);

  const isLastStep = useMemo(
    () => currentStep === totalSteps - 1,
    [currentStep, totalSteps]
  );

  const goToNextStep = useCallback(() => {
    setCurrentStep((prevStep) => prevStep + 1);
    logger.log(LOG_TOPIC, `Navigated to step ${currentStep + 1}`);
  }, [currentStep]);

  const goToPreviousStep = useCallback(() => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    logger.log(LOG_TOPIC, `Navigated to step ${currentStep - 1}`);
  }, [currentStep]);

  const onComplete = useCallback(() => {
    storageManagerState.setItem(StateKeyConst.ONBOARDING_COMPLETE, "true");
    storageManagerState.setItem(StateKeyConst.USERNAME, username);
    logger.log(LOG_TOPIC, "Onboarding completed");
  }, [username]);

  const onSetUsername = useCallback((name: string) => {
    if (name.trim().length > 0) {
      setUsername(name);
      setIsAvailableToComplete(true);
      logger.log(LOG_TOPIC, `Username set to ${name}`);
      return;
    }
    setUsername("");
    setIsAvailableToComplete(false);
  }, []);

  return {
    currentStep,
    totalSteps,
    isLastStep,
    isAvailableToComplete,
    onComplete,
    goToNextStep,
    goToPreviousStep,
    onSetUsername,
  };
};
