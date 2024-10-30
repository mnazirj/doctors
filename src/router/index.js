import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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
    path: "/dashboard/admin",
    name: "DashboardAdmin",
    component: () => import("@/views/dashboard/admin/DashboardView.vue"),
    meta: {
      breadcrumb: "Dashboard",
    },
    children: [
      {
        path: "/dashboard/admin/home",
        name: "DashboardAdminHome",
        component: () => import("@/views/dashboard/admin/HomeView.vue"),
        meta: {
          breadcrumb: "Home",
        },
      },
      {
        path: "/dashboard/admin/appointments",
        name: "DashboardAdminAppointments",
        component: () =>
          import("@/components/dashboard/admin/Appointments.vue"),
        meta: {
          breadcrumb: "Appointments",
        },
      },
      {
        path: "/dashboard/admin/specialities",
        name: "DashboardAdminSpecialities",
        component: () =>
          import("@/components/dashboard/admin/Specialities.vue"),
        meta: {
          breadcrumb: "Specialities",
        },
      },
      {
        path: "/dashboard/admin/doctors",
        name: "DashboardAdminDoctors",
        component: () => import("@/components/dashboard/admin/Doctors.vue"),
        meta: {
          breadcrumb: "Doctors",
        },
      },
      {
        path: "/dashboard/admin/paitents",
        name: "DashboardAdminPaitents",
        component: () => import("@/components/dashboard/admin/Patients.vue"),
        meta: {
          breadcrumb: "Paitents",
        },
      },
      {
        path: "/dashboard/admin/reviews",
        name: "DashboardAdminReviews",
        component: () => import("@/components/dashboard/admin/Reviews.vue"),
        meta: {
          breadcrumb: "Reviews",
        },
      },
      {
        path: "/dashboard/admin/website-settings",
        name: "DashboardAdminWebsiteSettings",
        component: () =>
          import("@/components/dashboard/admin/WebsitSettings.vue"),
        meta: {
          breadcrumb: "Website Settings",
        },
      },
    ],
  },

  //Doctor Area
  {
    path: "/doctor/dashboard",
    name: "dashboard",
    component: () => import("@/views/dashboard/doctor/DashboardView.vue"),

    children: [
      {
        path: "home",
        name: "doc.home",
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
