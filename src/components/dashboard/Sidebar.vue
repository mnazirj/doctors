<template>
  <div id="sidebar" class="collapse collapse-horizontal show h-100 fixed z-2">
    <div
      id="sidebar-nav"
      class="list-group border-0 shadow text-sm-start min-vh-100 h-100"
    >
      <div class="bg-main-img">
        <div class="d-flex justify-content-center p-1">
          <img
            src="@/assets/images/dashboards/admin/logo.svg"
            alt="Logo-image"
          />
        </div>
        <div
          class="d-flex flex-wrap justify-content-center align-items-center p-1"
        >
          <div class="w-100 d-flex justify-content-center">
            <img
              src="@/assets/images/homepage/articles2.jpg"
              alt="profile-image"
              class="sidebar-img rounded-circle m-2 me-3 ms-3"
            />
          </div>
          <div
            class="d-flex flex-wrap justify-content-center align-items-center"
          >
            <div class="text-center mb-2 w-100">
              <span class="bg-white p-1 px-3 rounded-2">Dr.Sara Alsrsara</span>
            </div>
            <div class="d-flex flex-wrap justify-content-center">
              <router-link class="mx-1" :to="{ name: 'admin.profile' }">
                <div
                  :class="[
                    'profile-item w-fit p-1 mt-1 mb-2 rounded-2 cursor-pointer',
                    isActive('admin.profile') ? 'active-profile' : '',
                  ]"
                >
                  <i class="pi pi-address-book me-2"></i>
                  <span>Profile</span>
                </div>
              </router-link>
              <router-link class="mx-1" :to="{ name: 'admin.settings' }">
                <div
                  :class="[
                    'profile-item w-fit p-1 mt-1 mb-2 rounded-2  cursor-pointer',
                    isActive('admin.settings') ? 'active-profile' : '',
                  ]"
                >
                  <i class="pi pi-cog me-2"></i>
                  <span>Settings</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div
        class="d-flex flex-column flex-wrap justify-content-between h-100 bg-white"
      >
        <ul class="list-group w-100">
          <li
            :class="[
              'list-group-item d-flex m-2 me-5 ms-4 p-0 rounded-2 ',
              isActive('admin.home') ? 'active' : '',
            ]"
          >
            <router-link
              class="w-100 h-100 p-1 ps-2 rounded-2 cursor-pointer"
              :to="{ name: 'admin.home' }"
            >
              <i class="pi pi-home me-2"></i>
              <span>Home</span>
            </router-link>
          </li>

          <li
            :class="[
              'list-group-item d-flex m-2 me-5 ms-4 p-0 rounded-2 ',
              isActive('admin.appointments') ? 'active' : '',
            ]"
          >
            <router-link
              class="w-100 h-100 p-1 ps-2 rounded-2 cursor-pointer"
              :to="{ name: 'admin.appointments' }"
            >
              <i class="pi pi-calendar-clock me-2"></i>
              <span>Appointments</span>
            </router-link>
          </li>

          <li
            :class="[
              'list-group-item d-flex m-2 me-5 ms-4 p-0 rounded-2 ',
              isActive('admin.doctors') ? 'active' : '',
            ]"
          >
            <router-link
              class="w-100 h-100 p-1 ps-2 rounded-2 cursor-pointer"
              :to="{ name: 'admin.doctors' }"
            >
              <i class="fa-solid fa-user-doctor me-2"></i>
              <span>Doctors</span>
            </router-link>
          </li>

          <li
            :class="[
              'list-group-item d-flex m-2 me-5 ms-4 p-0 rounded-2 ',
              isActive('admin.specialities') ? 'active' : '',
            ]"
          >
            <router-link
              class="w-100 h-100 p-1 ps-2 rounded-2 cursor-pointer"
              :to="{ name: 'admin.specialities' }"
            >
              <i class="fa-solid fa-stethoscope me-2"></i>
              <span>Specialities</span>
            </router-link>
          </li>

          <li
            :class="[
              'list-group-item d-flex m-2 me-5 ms-4 p-0 rounded-2 ',
              isActive('admin.paitents') ? 'active' : '',
            ]"
          >
            <router-link
              class="w-100 h-100 p-1 ps-2 rounded-2 cursor-pointer"
              :to="{ name: 'admin.paitents' }"
            >
              <i class="fa-solid fa-user-injured me-2"></i>
              <span>Paitents</span>
            </router-link>
          </li>

          <li
            :class="[
              'list-group-item d-flex m-2 me-5 ms-4 p-0 rounded-2 ',
              isActive('admin.reviews') ? 'active' : '',
            ]"
          >
            <router-link
              class="w-100 h-100 p-1 ps-2 rounded-2 cursor-pointer"
              :to="{ name: 'admin.reviews' }"
            >
              <i class="pi pi-star-fill me-2"></i>
              <span>Reviews</span>
            </router-link>
          </li>

          <li
            :class="[
              'list-group-item d-flex m-2 me-5 ms-4 p-0 rounded-2 ',
              isActive('admin.websitSettings') ? 'active' : '',
            ]"
          >
            <router-link
              class="w-100 h-100 p-1 ps-2 rounded-2 cursor-pointer"
              :to="{ name: 'admin.websitSettings' }"
            >
              <i class="fa-solid fa-gears me-2"></i>
              <span>WebSite Settings</span>
            </router-link>
          </li>
        </ul>
        <div
          class="logout-section h-fit w-100 d-flex justify-content-center align-items-center py-1 cursor-pointer"
          @click="logout"
        >
          <i class="pi pi-sign-out me-2"></i>
          <span>Logout</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    isActive(routeName) {
      return this.$route.name === routeName;
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "dash.login" });
    },
  },
};
</script>

<style scoped>
#sidebar-nav {
  width: 18rem !important;
  /* position: ; */
}

.sidebar-img {
  width: 9rem;
  height: 9rem;
  border: 0.1rem solid white;
}
.list-group-item {
  border: 0;
}
.list-group-item:is(.active) {
  color: white;
  background-color: #2563eb;
}
.list-group-item:not(.active):hover {
  background-color: #d9d9d9;
}
.profile-item {
  color: #fff;
}
.profile-item:is(.active-profile) {
  background-color: #fff;
  color: inherit;
}
.profile-item:not(.active-profile):hover {
  background-color: #1c4cb5;
}
.logout-section {
  background-color: #2563ea;
  color: #fff;
}
.logout-section:hover {
  background-color: #1e54c9;
}
</style>

<!-- <style scoped>

a {
  color:inherit !important;
}
.sidebar{
/* min-height: 100vh; */
/* width: 18rem; */
z-index: 1000;
/* margin-top: 4rem; */
transition: all 0.2s linear ;
}
.sidebar div {
  width: 18rem;
}
.sidebar-img{
width: 8rem;
height: 8rem;
border: 0.1rem solid white;
}
.list-group-item:first-child{
border-radius: 0;
}
.list-group-item:last-child{
border-radius: 0;
}
.btn-toggle-continer{
/* margin-top: 4.5rem; */
margin-top: 1rem;
/* width: 3rem; */
z-index: 1000;
transition: all 0.2s linear ;
}

.btn-toggle-continer button{
width: 2.5rem;
height: 2.5rem;
}
.btn-toggle-continer button i{
color: #ffffff;
}
.sidebar:is(.show) + .btn-toggle-continer{
margin-left: 18.5rem !important;
}
.sidebar:not(.show) + .btn-toggle-continer{
margin-left: 0.6rem !important;
}
.prfile-item:not(.active-profile):hover i {
color: #ffffff;
}
.prfile-item:not(.active-profile):hover span {
color: #ffffff;
}
.list-group-item {
border: 0;
}
.list-group-item:hover{
background-color: #d9d9d9 ;
}
.list-group-item:not(.active):hover i {
color: #2563eb !important;
}
.active{
background-color: #2563eb !important;
color:#ffffff;
}
.active-profile {
background: #ffffff !important;
}
</style> -->
