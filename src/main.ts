import { createApp } from "vue";
import { pinia } from "./plugins/store.plugin";
import { i18n } from "./plugins/i18n.plugin";
import { router } from "./plugins/router.plugin";
import { FontAwesomeIcon } from "./plugins/theme.plugin";
import { onError } from "./plugins/component.plugin";
import App from "./App.vue";

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(i18n);
app.component("font-awesome-icon", FontAwesomeIcon);
app.config.errorHandler = onError;
app.mount("#app");
