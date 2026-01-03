import { AppNavigation } from "@/navigation/AppNavigation";
import { ThemeProvider } from "@/theme/ThemeContext";
import { ComponentType } from "react";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import "./src/lang/i18n";
import { baseStyle } from "@/theme/baseStyles";

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
  return (
    <>
      <AppNavigation />
    </>
  );
});
