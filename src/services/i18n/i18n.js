// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// import HttpApi from "i18next-http-backend";

// i18n
//   .use(initReactI18next)
//   .use(LanguageDetector)
//   .use(HttpApi)
//   .init({
//     supportedLangs: ["ar", "en"],
//     fallbackLang: "en",
//     detection: {
//       order: ["htmlTag", "cookie", "localStorage", "path", "subdomain"],
//       caches: ["cookie", "localStorage"],
//     },
//     backend: { loadPath: "/src/locales/{{lng}}.json" },
//     react: { useSuspanse: false },
//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "../../locale/en.json";
import translationAr from "../../locale/ar.json";
import LanguageDetector from "i18next-browser-languagedetector";
const lang = localStorage.getItem("i18nextLng");
const resources = {
  ar: {
    translation: translationAr,
  },
  en: { translation: translationEn },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: lang === "en" ? lang : "ar",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      useSuspanse: false,
    },
  });

export default i18n;
