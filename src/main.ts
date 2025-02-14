import { createApp } from "vue";
import i18next, { type BackendModule } from "i18next";
import i18NextVue from "i18next-vue";
import App from "./App.vue";

const i18nBackend = {
  type: "backend",
  read: (language, _namespace, callback) => {
    import(`./locales/${language}.json`)
      .then((resources) => {
        callback(null, resources);
      })
      .catch((error) => {
        callback(error, null);
      });
  },
} as BackendModule;

await i18next.use(i18nBackend).init({ fallbackLng: "en", lng: "en" });

const app = createApp(App);
app.use(i18NextVue, { i18next });
app.mount("#app");
