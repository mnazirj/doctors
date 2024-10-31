<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-auto px-0">
        <div
          id="sidebar"
          class="collapse collapse-horizontal show border-end h-100"
        >
          <div
            id="sidebar-nav"
            class="list-group border-0 shadow text-sm-start min-vh-100 h-100"
          >
            <div class="profile-showcase p-3 mb-3">
              <div class="d-flex align-items-center flex-column mb-3">
                <div>
                  <img
                    src="../../../assets/images/homepage/doctor2.jpg"
                    alt="User Avatar"
                    class="rounded-circle img-fluid img-thumbnail"
                    width="150px"
                  />
                </div>
                <div class="text-center mt-3">
                  <Tag value="Dr. John Doe" severity="secondary" />
                  <Tag
                    value="BDS, MDS - Oral & Maxillofacial Surgery"
                    class="d-block mt-2"
                    severity="info"
                  />
                  <Tag
                    value="Dentist"
                    severity="secondary"
                    class="d-block mt-2 w-fit mx-auto"
                  />
                </div>
              </div>
            </div>

            <a
              v-for="link in links"
              :key="link.id"
              :href="link.route"
              class="list-group-item border-0 ms-4 me-2 rounded mb-2"
              :class="[
                { active: $route.matched[0].children[0].path == link.route },
                { hover: $route.matched[0].children[0].path != link.route },
                {
                  'text-dark-emphasis':
                    $route.matched[0].children[0].path != link.route,
                },
              ]"
              data-bs-parent="#sidebar"
            >
              <i :class="link.icon" class="me-2"></i>
              <span>{{ link.name }}</span>
            </a>

            <div class="mt-auto">
              <Button
                label="Logout"
                icon="fas fa-sign-out-alt"
                icon-pos="right"
                class="w-100 rounded-0"
                severity="danger"
              />
            </div>
          </div>
        </div>
      </div>

      <main role="main" class="col ps-md-2 pt-2 me-0 me-lg-5 me-md-5">
        <Button
          data-bs-target="#sidebar"
          data-bs-toggle="collapse"
          size="small"
          rounded
          icon="pi pi-list"
          class="ms-2 mb-2"
          @click="changeSize"
        />

        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import Button from "primevue/button";
import Tag from "primevue/tag";
</script>
<script>
export default {
  data() {
    return {
      links: [
        {
          id: 1,
          name: "Dashboard",
          route: "home",
          icon: "fas fa-shapes",
        },
        {
          id: 2,
          name: "Appointments",
          route: "appointments",
          icon: "fas fa-address-book",
        },
        {
          id: 3,
          name: "Available Timings",
          route: "available-time",
          icon: "fas fa-calendar-check",
        },
        {
          id: 4,
          name: "My Patients",
          route: "patients",
          icon: "fas fa-hospital-user",
        },
        {
          id: 5,
          name: "Reviews",
          route: "reviews",
          icon: "fas fa-bullhorn",
        },
        {
          id: 6,
          name: "Profile Settings",
          route: "profile",
          icon: "fas fa-address-card",
        },
        {
          id: 7,
          name: "Change Password",
          route: "password",
          icon: "fas fa-key",
        },
      ],
    };
  },
};
</script>

<style scoped>
#sidebar-nav {
  width: 300px;
}
.profile-showcase {
  background-image: url("../../../assets/images/homepage/bg-doc.jpg");
  color: white;
}
.hover {
  transition: 0.9s ease-out;
}
.hover:hover {
  background-color: var(--p-stone-100);
  transition: 0.5s ease-in-out;
}
.hover:hover > i {
  color: var(--p-primary-color);
  transition: 0.5s ease-in-out;
}
</style>
