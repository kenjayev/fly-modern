import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const currentLang = localStorage.getItem("i18nextLng") || "uz";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    lng: currentLang,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "fly-modern-lng", // LocalStorage uchun custom key
      caches: ["localStorage"], // Tilni localStorage-ga avtomatik saqlash
    },
  });

export default i18n;
