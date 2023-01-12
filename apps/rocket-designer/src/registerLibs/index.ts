import type { App } from "vue";

// ui
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";

export const useInstallLibs = (app: App) => {
  app.use(ArcoVue);
  return app;
};
