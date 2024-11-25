<template>
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between align-content-between fixed-top"
    id="navbar"
  >
    <div class="d-flex justify-content-center ms-4">
      <a class="navbar-brand" href="#"
        ><img
          src="@/assets/images/homepage/logo.svg"
          alt="logo"
          class="brand-icon"
      /></a>
      <div class="ml-2 d-flex justify-content-center align-items-center">
        <button
          type="button"
          class="btn navbar-toggler-icon border-none"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarr"
        ></button>
      </div>
    </div>

    <div class="d-flex justify-content-center align-items-center me-5">
      <div
        class="dropdown d-flex justify-content-center align-item-center ml-auto me-3 dropdown-notfications"
      >
        <!-- <div class=" flex justify-content-center align-items-center me-3 notification">
            <i class="pi pi-bell"></i>
            <div class="notification-number">1</div>
        </div> -->
        <div
          class="flex justify-content-center align-items-center me-3 notification position-relative dropdown-toggle-false"
          data-bs-toggle="dropdown"
        >
          <i class="pi pi-bell"></i>
          <span
            class="position-absolute d-flex justify-content-center align-items-center top-2 start-100 translate-middle badge rounded-circle notification-number"
          >
            99+
            <span class="visually-hidden">unread messages</span>
          </span>
          <div class="dropdown-menu">
            <div
              class="d-flex justify-content-between dropdown-header border-bottom-1"
            >
              <span>Notfications</span>
              <span class="text-danger cursor-pointer">Clear All</span>
            </div>
            <div class="dropdown-content">
              <div
                class="dropdown-item d-flex cursor-pointer"
                v-for="notfication in notfications"
                :key="notfication.id"
              >
                <div class="d-flex justify-content-center align-items-center">
                  <img
                    class="notfication-img"
                    :src="notfication.img"
                    alt="notfication-image"
                  />
                </div>
                <div class="ms-3 p-1 text-content d-flex flex-wrap">
                  <span class="w-100 notification-message text-wrap">{{
                    notfication.message
                  }}</span>
                  <span class="w-100 text-muted">{{ notfication.from }}</span>
                </div>
              </div>
            </div>
            <div
              class="dropdown-footer d-flex justify-content-center align-items-center border-top-1"
            >
              <span>Show All notfications</span>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown dropdown-profile">
        <a
          class="nav-link dropdown-toggle nav-image-user"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <!-- <i class="pi pi-user text-danger rounded-circle nav-icon-user"></i> -->
          <img
            src="@/assets/images/homepage/avatar-03.bcd54570.jpg"
            alt="user-image"
            class="rounded-circle w-100 h-100"
          />
        </a>
        <ul class="dropdown-menu">
          <router-link :to="{ name: 'admin.profile' }"
            ><li class="dropdown-item">
              <i class="pi pi-user me-2"></i><span>Profile</span>
            </li></router-link
          >

          <router-link :to="{ name: 'admin.settings' }">
            <li class="dropdown-item">
              <i class="pi pi-cog me-2"></i><span>Settings</span>
            </li></router-link
          >

          <li class="dropdown-item">
            <a class="" href="#"
              ><i class="pi pi-sign-out me-2"></i><span>Logout</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      notfications: [
        {
          id: 1,
          message: "Dr.Sara orginaz meeting with all doctors in 10:00 AM",
          from: "6 min ago",
          img: require("@/assets/images/homepage/doctor.png"),
        },
        {
          id: 2,
          message: "Dr.Sara orginaz meeting with all doctors in 10:00 AM",
          from: "6 min ago",
          img: require("@/assets/images/homepage/doctor.png"),
        },
        {
          id: 3,
          message: "Dr.Sara orginaz meeting with all doctors in 10:00 AM",
          from: "6 min ago",
          img: require("@/assets/images/homepage/doctor.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
#navbar {
  height: 4rem;
  min-width: 4rem;
  top: 0;
  left: 0;
}

.dropdown-profile .dropdown-menu {
  width: 8rem !important;
  --bs-dropdown-min-width: 8rem !important;
  margin-right: 4rem !important;
}
.dropdown-profile .dropdown-menu[data-bs-popper] {
  top: 108%;
  left: -34px !important;
}
.dropdown-profile .dropdown-menu .dropdown-item {
  margin: 0.4rem 0px;
  color: #004f74;
}
.dropdown-profile .dropdown-menu .dropdown-item a {
  color: inherit;
}
.dropdown-profile .dropdown-item:focus,
.dropdown-item:hover {
  color: #0087c6 !important;
}
.dropdown-notfications .dropdown-menu {
  width: 22rem;
  max-height: 20rem;
  overflow-y: auto;
}
.dropdown-notfications .dropdown-menu[data-bs-popper] {
  top: 118%;
  left: -330px;
}
.dropdown-notfications .dropdown-menu .dropdown-item {
  border-bottom: 1px solid #dfdfdf;
}
.notfication-img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
}
.dropdown-item .text-content span {
  font-size: 0.7rem;
}
.dropdown-item .text-content .notfication-message {
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
}

.nav-icon-user {
  width: 2.5rem;
  height: 2.5rem;
  font-size: 2.5rem !important;
}
.nav-image-user {
  width: 3rem;
  height: 3rem;
}
.notification i {
  font-size: 1.5rem;
  color: #0087c6;
}
/*.notification-number{
     color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 0.8rem;
    width: 1.2rem;
    height: 1.2rem;
    background-color: #0072a7;
    position: absolute;
    border: 1px solid ;
    margin-left: 16px;
    margin-top: -20px;
    border-radius: 50%;
    z-index: 1; 
}*/
.notification-number {
  color: #f4f4f4;
  background-color: #0072a7;
  width: 1.5rem;
  height: 1.5rem;
}
</style>
