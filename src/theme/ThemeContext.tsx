import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Appearance, ColorSchemeName } from "react-native";
import { ThemeMode, ThemeColors, themes } from "./colors";
import { storageManagerState } from "@/libs/storageManager";
import { StateKeyConst } from "@/types/storageState.types";

interface ThemeContextType {
  theme: ThemeColors;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const getInitialTheme = (): ThemeMode => {
    const savedTheme = storageManagerState.getItem<ThemeMode>(
      StateKeyConst.THEME
    );
    if (savedTheme) {
      return savedTheme;
    }

    const colorScheme: ColorSchemeName = Appearance.getColorScheme();
    return colorScheme === "dark" ? "dark" : "light";
  };

  const [themeMode, setThemeModeState] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      const savedTheme = storageManagerState.getItem<ThemeMode>(
        StateKeyConst.THEME
      );
      if (!savedTheme) {
        setThemeModeState(colorScheme === "dark" ? "dark" : "light");
      }
    });

    return () => subscription.remove();
  }, []);

  const setThemeMode = (mode: ThemeMode) => {
    setThemeModeState(mode);
    storageManagerState.setItem(StateKeyConst.THEME, mode);
  };

  const toggleTheme = () => {
    const newMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(newMode);
  };

  const value: ThemeContextType = {
    theme: themes[themeMode],
    themeMode,
    setThemeMode,
    toggleTheme,
    isDark: themeMode === "dark",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
