import "uno.css";
import { createApp } from "vue";
import { createPinia } from "pinia";

import { useInstallLibs } from "./registerLibs";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

useInstallLibs(app);

app.use(createPinia());
app.use(router);

app.mount("#app");
