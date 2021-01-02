import Vue from "vue";
import VueRouter from "vue-router";
// 初期表示ページ
import Stepone from "../views/Stepone.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Stepone",
    component: Stepone
  },
  {
    path: "/steptwo",
    name: "Steptwo",
    // route level code-splitting
    // this generates a separate chunk (steptwo.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "steptwo" */ "../views/Steptwo.vue")
  },
  {
    path: "/stepthree",
    name: "Stepthree",
    // route level code-splitting
    // this generates a separate chunk (Stepthree.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "stepthree" */ "../views/Stepthree.vue")
  },
  {
    path: "/stepfour",
    name: "Stepfour",
    // route level code-splitting
    // this generates a separate chunk (Stepthree.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "stepfour" */ "../views/Stepfour.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
