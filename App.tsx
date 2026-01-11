import { AppNavigation } from "@/navigation/AppNavigation";
import { ThemeProvider } from "@/theme/ThemeContext";
import { ComponentType, useEffect } from "react";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import "./src/lang/i18n";
import { baseStyle } from "@/theme/baseStyles";
import { useAppVm } from "@/modules/app/vm/useApp.vm";

const withProvider = (Component: ComponentType) => {
  return () => {
    return (
      <GestureHandlerRootView style={baseStyle.flex}>
        <SafeAreaProvider>
          <ThemeProvider>
            <StatusBar
              backgroundColor={"transparent"}
              barStyle={"dark-content"}
              translucent={true}
            />
            <Component />
          </ThemeProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    );
  };
};

export const App = withProvider(() => {
  const { initRoute, isInit, initializeApp } = useAppVm();

  useEffect(() => {
    initializeApp();
  });

  return <>{isInit && <AppNavigation initRoute={initRoute} />}</>;
});
