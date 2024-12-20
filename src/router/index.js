import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "@/store/index.js";

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
    path: "/dashboard/login",
    name: "dash.login",
    component: () => import("@/views/dashboard/admin/LoginView.vue"),
    beforeEnter: (to, from, next) => {
      if (store.getters.isAuth) {
        next({ name: "admin.home" });
      } else {
        next();
      }
    },
  },
  {
    path: "/admin/dashboard",
    name: "dash.admin",
    component: () => import("@/views/dashboard/admin/DashboardView.vue"),
    beforeEnter: (to, from, next) => {
      if (!store.getters.isAuth) {
        next({ name: "dash.login" });
      } else {
        if (to.name === "dash.admin") {
          next({ name: "admin.home" });
        }
        next();
      }
    },
    meta: {
      breadcrumb: {
        name: "Dashboard",
        icon: "pi pi-th-large me-1",
      },
    },
    children: [
      {
        path: "home",
        name: "admin.home",
        component: () => import("@/components/dashboard/admin/Home.vue"),
        meta: {
          breadcrumb: {
            name: "Home",
            icon: "pi pi-home me-1",
          },
        },
      },
      {
        path: "appointments",
        name: "admin.appointments",
        component: () =>
          import("@/components/dashboard/admin/Appointments.vue"),
        meta: {
          breadcrumb: {
            name: "Appointments",
            icon: "pi pi-calendar-clock me-1",
          },
        },
      },
      {
        path: "specialities",
        name: "admin.specialities",
        component: () =>
          import("@/components/dashboard/admin/Specialities.vue"),
        meta: {
          breadcrumb: {
            name: "Specialities",
            icon: "fa-solid fa-stethoscope me-1",
          },
        },
      },
      {
        path: "doctors",
        name: "admin.doctors",
        component: () => import("@/components/dashboard/admin/Doctors.vue"),
        meta: {
          breadcrumb: {
            name: "Doctors",
            icon: "fa-solid fa-user-doctor me-1",
          },
        },
      },
      {
        path: "paitents",
        name: "admin.paitents",
        component: () => import("@/components/dashboard/admin/Patients.vue"),
        meta: {
          breadcrumb: {
            name: "Paitents",
            icon: "fa-solid fa-user-injured me-1",
          },
        },
      },
      {
        path: "reviews",
        name: "admin.reviews",
        component: () => import("@/components/dashboard/admin/Reviews.vue"),
        meta: {
          breadcrumb: {
            name: "Reviews",
            icon: "pi pi-star-fill me-1",
          },
        },
      },
      {
        path: "website-settings",
        name: "admin.websitSettings",
        component: () =>
          import("@/components/dashboard/admin/WebsitSettings.vue"),
        meta: {
          breadcrumb: {
            name: "Website Settings",
            icon: "fa-solid fa-gears me-1",
          },
        },
      },
      {
        path: "profile",
        name: "admin.profile",
        component: () => import("@/components/dashboard/admin/Profile.vue"),
        meta: {
          breadcrumb: {
            name: "Profile",
            icon: "pi pi-address-book me-1",
          },
        },
      },
      {
        path: "settings",
        name: "admin.settings",
        component: () => import("@/components/dashboard/admin/Settings.vue"),
        meta: {
          breadcrumb: {
            name: "Settings",
            icon: "pi pi-cog me-1",
          },
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
      {
        path: "reviews",
        name: "doc.reviews",
        component: () => import("@/components/dashboard/doctor/reviews.vue"),
      },
      {
        path: "profile",
        name: "doc.profile",
        component: () => import("@/components/dashboard/doctor/profile.vue"),
      },
    ],
  },

  //Auth Area
  {
    path: "/auth",
    name: "auth",
    children: [
      {
        path: "doctor",
        name: "auth.doc",
        component: () => import("@/components/auth/doctor/signin.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
