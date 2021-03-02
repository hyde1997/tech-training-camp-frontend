import Vue from "vue";
import VueRouter from "vue-router";
import myEditor from "@/App.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "myEditor",
    component: myEditor
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
