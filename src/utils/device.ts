import { Platform, Dimensions } from "react-native";

export const isAndroidDevice = Platform.OS === "android";
export const isIOSDevice = Platform.OS === "ios";

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
