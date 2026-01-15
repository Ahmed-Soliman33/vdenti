import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

// Initialize i18next for Arabic only
i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: "ar", // Force Arabic language
    fallbackLng: "ar",
    debug: false,

    // Namespaces for translation files
    ns: ["common", "footer", "contact", "faq"],
    defaultNS: "common",

    interpolation: {
      escapeValue: false, // React already handles escaping
    },

    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },

    react: {
      useSuspense: true,
    },
  });

// Set document direction to RTL for Arabic
document.documentElement.dir = "rtl";
document.documentElement.lang = "ar";

export default i18n;

// Helper function to get language direction
export const getLanguageDirection = (): "rtl" | "ltr" => {
  return "rtl";
};

// Helper function to load namespaces dynamically
export const loadNamespace = async (namespace: string) => {
  if (i18n.hasLoadedNamespace(namespace)) {
    return;
  }
  await i18n.loadNamespaces(namespace);
};
