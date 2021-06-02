import { createRouter, createWebHistory } from "vue-router";
import TheMain from "../views/TheMain";
import TheBlog from "../views/TheBlog";
import MobilePortfolio from "../views/MobilePortfolio.vue";
import ThePortfolio from "../views/ThePortfolio";
const routes = [
  { path: "/", name: "main", component: TheMain },
  { path: "/blog", name: "blog", component: TheBlog },
  { path: "/mPortfolio", name: "mPortfolio", component: MobilePortfolio },
  {
    path: "/portfolioPage/:engId",
    name: "portfolioPage",
    component: ThePortfolio,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
