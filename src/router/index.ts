import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainPage from "../pages/MainPage.vue";
import PostPage from "../pages/PostPage.vue";
import AboutPage from "../pages/AboutPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
