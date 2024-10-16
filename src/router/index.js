import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminHomeView from "@/views/dashboards/admin/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
  /* 
 Dashboard Routes
 */
  //Admin Area
  {
    path: "/dashboard/admin/",
    name: "DashboardAdminHome",
    component: AdminHomeView,
  },

  //Doctor Area
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/dashboards/doctor/DashboardView.vue"),
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/components/dashboard/doctor/Summary.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
