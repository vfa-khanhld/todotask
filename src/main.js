/* eslint-disable prettier/prettier */
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import router from "./router";

createApp(App)
    .use(Quasar, quasarUserOptions)
    .use(store)
    .use(router)
    .mount("#app");