import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/reset.css";
import "./assets/css/base.css";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";

// Import Swiper Vue.js components
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  EffectFade,
} from "swiper";



SwiperCore.use([Navigation, Pagination, Controller, EffectFade]);

createApp(App).use(store).use(router).mount("#app");
