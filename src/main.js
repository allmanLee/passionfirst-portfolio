import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/reset.css";
import "./assets/css/base.css";
//import "./assets/css/reset-d.css";

// Import Swiper styles
import "swiper/swiper-bundle.css";

// Import Swiper Vue.js components
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  EffectFade,
} from "swiper";

SwiperCore.use([Navigation, Pagination, Controller, EffectFade]);

createApp(App).use(store).use(router).mount("#app");
