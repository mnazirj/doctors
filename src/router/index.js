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
    path: "/admin/dashboard",
    name: "dash.admin",
    component: () => import("@/views/dashboard/admin/DashboardView.vue"),
    meta: {
      breadcrumb: "Dashboard",
    },
    children: [
      {
        path: "home",
        name: "admin.home",
        component: () => import("@/views/dashboard/admin/HomeView.vue"),
        meta: {
          breadcrumb: "Home",
        },
      },
      {
        path: "appointments",
        name: "admin.appointments",
        component: () =>
          import("@/components/dashboard/admin/Appointments.vue"),
        meta: {
          breadcrumb: "Appointments",
        },
      },
      {
        path: "specialities",
        name: "admin.specialities",
        component: () =>
          import("@/components/dashboard/admin/Specialities.vue"),
        meta: {
          breadcrumb: "Specialities",
        },
      },
      {
        path: "doctors",
        name: "admin.doctors",
        component: () => import("@/components/dashboard/admin/Doctors.vue"),
        meta: {
          breadcrumb: "Doctors",
        },
      },
      {
        path: "paitents",
        name: "admin.patients",
        component: () => import("@/components/dashboard/admin/Patients.vue"),
        meta: {
          breadcrumb: "Paitents",
        },
      },
      {
        path: "reviews",
        name: "admin.reviews",
        component: () => import("@/components/dashboard/admin/Reviews.vue"),
        meta: {
          breadcrumb: "Reviews",
        },
      },
      {
        path: "website-settings",
        name: "admin.websitSettings",
        component: () =>
          import("@/components/dashboard/admin/WebsitSettings.vue"),
        meta: {
          breadcrumb: "Website Settings",
        },
      },
      {
        path: "profile",
        name: "admin.profile",
        component: () => import("@/components/dashboard/admin/Profile.vue"),
        meta: {
          breadcrumb: "Profile",
        },
      },
      {
        path: "settings",
        name: "admin.settings",
        component: () => import("@/components/dashboard/admin/Settings.vue"),
        meta: {
          breadcrumb: "Settings",
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
      {
        path: "appointments",
        name: "doc.appointments",
        component: () =>
          import("@/components/dashboard/doctor/appointments.vue"),
      },
      {
        path: "available-time",
        name: "doc.availabletime",
        component: () =>
          import("@/components/dashboard/doctor/available-timing.vue"),
      },
      {
        path: "patients",
        name: "doc.patients",
        component: () => import("@/components/dashboard/doctor/patients.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
