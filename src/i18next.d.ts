import type en from "./locales/en.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    strictKeyChecks: true;
    resources: { en: typeof en };
  }
}
