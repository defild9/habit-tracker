import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { isAndroidDevice } from "../../utils/device";

export const BASE_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
  contentStyle: {},
  ...(isAndroidDevice
    ? {
        statusBarStyle: "dark",
        statusBarTranslucent: true,
      }
    : {}),
};

export const MODAL_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
  contentStyle: {
    ...(isAndroidDevice
      ? {
          marginTop: 10,
        }
      : {}),
  },
  ...(isAndroidDevice
    ? {
        presentation: "formSheet",
        animation: "slide_from_bottom",
        statusBarStyle: "dark",
        statusBarTranslucent: true,
        sheetAllowedDetents: [0.95],
        sheetCornerRadius: 10,
      }
    : {
        presentation: "modal",
      }),
};
