import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//PrimeVue UI
import PrimeVue from "primevue/config";
import { definePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "animate.css";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

//Custom Style
import "./assets/style/custom.css";

//Website color theme
const Noir = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{blue.50}",
      100: "{blue.100}",
      200: "{blue.200}",
      300: "{blue.300}",
      400: "{blue.400}",
      500: "{blue.500}",
      600: "{blue.600}",
      700: "{blue.700}",
      800: "{blue.800}",
      900: "{blue.900}",
      950: "{blue.950}",
    },
    colorScheme: {
      light: {
        primary: {
          color: "{blue.600}",
          inverseColor: "#ffffff",
          hoverColor: "{blue.900}",
          activeColor: "{blue.800}",
        },
        highlight: {
          background: "{blue.950}",
          focusBackground: "{blue.700}",
          color: "#ffffff",
          focusColor: "#ffffff",
        },
      },
      dark: {
        primary: {
          color: "{zinc.50}",
          inverseColor: "{zinc.950}",
          hoverColor: "{zinc.100}",
          activeColor: "{zinc.200}",
        },
        highlight: {
          background: "rgba(250, 250, 250, .16)",
          focusBackground: "rgba(250, 250, 250, .24)",
          color: "rgba(255,255,255,.87)",
          focusColor: "rgba(255,255,255,.87)",
        },
      },
    },
  },
});

createApp(App)
  .use(store)
  .use(router)
  .use(PrimeVue, {
    ripple: true,
    theme: {
      preset: Noir,

      options: {
        prefix: "p",
        darkModeSelector: ".my-app-dark",
        cssLayer: false,
      },
    },
  })
  .mount("#app");
