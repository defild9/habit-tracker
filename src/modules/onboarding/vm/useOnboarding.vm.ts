import { AppLogger } from "@/libs/appLogger/AppLogger";
import { storageManagerState } from "@/libs/storageManager";
import { StateKeyConst } from "@/types/storageState.types";
import { useCallback, useState } from "react";

const LOG_TOPIC = "OnboardingVM";
const logger = new AppLogger("useOnboardingVm");

export const useOnBoardingVm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = useCallback(() => {
    setCurrentStep((prevStep) => prevStep + 1);
    logger.log(LOG_TOPIC, `Navigated to step ${currentStep + 1}`);
  }, []);

  const goToPreviousStep = useCallback(() => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    logger.log(LOG_TOPIC, `Navigated to step ${currentStep - 1}`);
  }, []);

  const onComplete = () => {
    storageManagerState.setItem(StateKeyConst.ONBOARDING_COMPLETE, "true");
    logger.log(LOG_TOPIC, "Onboarding completed");
  };
  return {
    onComplete,
    currentStep,
    goToNextStep,
    goToPreviousStep,
  };
};
