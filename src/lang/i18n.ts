import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";

import en from "./translate/en.json";
import uk from "./translate/uk.json";

import type { Resource } from "i18next";

const resources: Resource = {
  en: { translation: en },
  uk: { translation: uk },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: Localization.getLocales()[0]?.languageCode || "en",
  fallbackLng: "en",
  compatibilityJSON: "v4",
  interpolation: {
    escapeValue: false,
  },
});
