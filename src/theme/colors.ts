export type ThemeMode = "light" | "dark";

export interface ThemeColors {
  background: string;
  button: {
    primary: string;
    primaryText: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
}

export const lightTheme: ThemeColors = {
  background: "#FAFAFA",
  button: {
    primary: "#18181B",
    primaryText: "#FAFAFA",
  },
  text: {
    primary: "#18181B",
    secondary: "#52525B",
  },
};

export const darkTheme: ThemeColors = {
  background: "#09090B",
  button: {
    primary: "#F4F4F5",
    primaryText: "#09090B",
  },
  text: {
    primary: "#F4F4F5",
    secondary: "#A1A1AA",
  },
};

export const themes: Record<ThemeMode, ThemeColors> = {
  light: lightTheme,
  dark: darkTheme,
};
