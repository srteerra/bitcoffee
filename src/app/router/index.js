/* eslint-disable no-undef */
import Vue from "vue";
import Router from "vue-router";
import store from "../store";

Vue.use(Router);

const routes = [
  {
    path: "*",
    name: "404",
    component: () => import(/* webpackChunkName:"home" */ "../views/404View"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import(/* webpackChunkName:"home" */ "../views/HomeView"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName:"profile" */ "../views/ProfileView"),
  },
  {
    path: "/:user",
    name: "bitcoffee",
    component: () =>
      import(/* webpackChunkName:"home" */ "../views/BitcoffeeView"),
  },
  {
    path: "/creator/",
    name: "creator",
    component: () =>
      import(/* webpackChunkName:"home" */ "../views/ProfileView"),
  },
];

const router = new Router({
  linkExactActiveClass: "link-active",
  routes,
  mode: "hash",
  base: "/",
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

export default router;
