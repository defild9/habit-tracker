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
  onboarding: {
    dots: string;
    dotsActive: string;
  };
  input: {
    border: string;
    background: string;
    text: string;
  };
  tabBar: {
    background: string;
    active: string;
    inactive: string;
  };
  borderColor: string;
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
  onboarding: {
    dots: "#E4E4E7",
    dotsActive: "#18181B",
  },
  input: {
    border: "#E4E4E7",
    background: "#F4F4F5",
    text: "#52525B",
  },
  tabBar: {
    background: "#FAFAFA",
    active: "#18181B",
    inactive: "#A1A1AA",
  },
  borderColor: "#E4E4E7",
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
  onboarding: {
    dots: "#27272A",
    dotsActive: "#F4F4F5",
  },
  input: {
    border: "#27272A",
    background: "#18181B",
    text: "#52525B",
  },
  tabBar: {
    background: "#09090B",
    active: "#F4F4F5",
    inactive: "#52525B",
  },
  borderColor: "#27272A",
};

export const themes: Record<ThemeMode, ThemeColors> = {
  light: lightTheme,
  dark: darkTheme,
};
