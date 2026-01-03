import { StyleProp } from "react-native";

declare global {
  declare type Nullable<T> = T | null;

  declare type StyleProps<T> = StyleProp<T> | StyleProp<T>[];

  declare type ValueOf<T> = T[keyof T];

  declare type AnyError = any;
}
