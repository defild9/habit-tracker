import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";

declare global {
  type TabParamList = {
    /**
     * Home Screen
     */
    Home: undefined;

    /**
     * Add Button (placeholder)
     */
    AddButton: undefined;

    /**
     * Stats Screen
     */
    Stats: undefined;
  };

  type RootStackParamList = {
    /**
     * Onboarding
     */
    OnboardingScreen: undefined;

    /**
     * Tab Navigation
     */
    TabNavigation: NavigatorScreenParams<TabParamList>;
  };

  /**
   * Tab Navigation
   */
  type TabStackProps<T extends keyof TabParamList> = NativeStackScreenProps<
    TabParamList,
    T
  >;

  type TabRootStackNavigationProps =
    RootStackProps<"TabNavigation">["navigation"];

  /**
   * Root Navigation
   */
  type RootStackProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
