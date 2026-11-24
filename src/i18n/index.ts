import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import hi from "./locales/hi.json";
import ta from "./locales/ta.json";
import te from "./locales/te.json";
import bn from "./locales/bn.json";
import mr from "./locales/mr.json";
import kn from "./locales/kn.json";
import gu from "./locales/gu.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      ta: { translation: ta },
      te: { translation: te },
      bn: { translation: bn },
      mr: { translation: mr },
      kn: { translation: kn },
      gu: { translation: gu },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export const languages = [
  { code: "en", label: "English", short: "EN" },
  { code: "hi", label: "हिन्दी", short: "HI" },
  { code: "ta", label: "தமிழ்", short: "TA" },
  { code: "te", label: "తెలుగు", short: "TE" },
  { code: "bn", label: "বাংলা", short: "BN" },
  { code: "mr", label: "मराठी", short: "MR" },
  { code: "kn", label: "ಕನ್ನಡ", short: "KN" },
  { code: "gu", label: "ગુજરાતી", short: "GU" },
];

export default i18n;
