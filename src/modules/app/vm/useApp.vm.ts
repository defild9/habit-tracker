import { AppLogger } from "@/libs/appLogger/AppLogger";
import { storageManagerState } from "@/libs/storageManager";
import { useCallback, useState } from "react";

const LOG_TOPIC = "AppVM";
const logger = new AppLogger("useAppVm");

export const useAppVm = () => {
  const [initRoute, setInitRoute] =
    useState<keyof RootStackParamList>("OnboardingScreen");
  const [isInit, setIsInit] = useState(false);

  const initializeApp = useCallback(async () => {
    logger.log(LOG_TOPIC, "App VM initialized");

    const isOnboardingComplete = await storageManagerState.getItem<boolean>(
      "ONBOARDING_COMPLETE"
    );

    if (isOnboardingComplete) {
      setInitRoute("TabNavigation");
      logger.log(
        LOG_TOPIC,
        "Onboarding already completed, navigating to TabNavigation"
      );
      setIsInit(true);
      return;
    }
    setInitRoute("OnboardingScreen");

    setIsInit(true);
  }, []);

  return {
    initRoute,
    isInit,
    initializeApp,
  };
};
