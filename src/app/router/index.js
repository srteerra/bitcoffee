/* eslint-disable no-undef */
import Vue from "vue";
import Router from "vue-router";
import store from "../store";

Vue.use(Router);

const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import(/* webpackChunkName:"home" */ "../views/HomeView"),
  },
  { path: "/", redirect: { name: "home" } },
  {
    path: "/",
    redirect: { name: "home" },
  },
  {
    path: "*",
    name: "404",
    component: () => import(/* webpackChunkName:"home" */ "../views/404View"),
  },
  {
    path: "/token",
    name: "token",
    component: () =>
      import(/* webpackChunkName:"home" */ "../views/OurTokenView"),
  },
  {
    path: "/faucet",
    name: "faucet",
    component: () =>
      import(/* webpackChunkName:"home" */ "../views/FaucetView"),
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
    path: "/member/:id",
    name: "member",
    component: () =>
      import(/* webpackChunkName:"home" */ "../views/MemberView"),
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

router.beforeEach((to, from, next) => {
  if (to.name === "profile" && store.state.isconnected === false) {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
