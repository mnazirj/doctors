<template>
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between align-content-between fixed-top" id="navbar"
  >
    <div class="d-flex justify-content-center ms-4">
      <a class="navbar-brand" href="#"
        ><img
          src="@/assets/images/homepage/logo.svg"
          alt="logo"
          class="brand-icon"
      /></a>
      <div class="ml-2 d-flex justify-content-center align-items-center" ><button type="button" class="btn navbar-toggler-icon border-none " data-bs-toggle="collapse" data-bs-target="#sidebarr"></button></div>
    </div>
    
    <div class="d-flex justify-content-center align-items-center me-5">
      <div class=" dropdown d-flex justify-content-center align-item-center ml-auto me-3 dropdown-notfications">
        <!-- <div class=" flex justify-content-center align-items-center me-3 notification">
            <i class="pi pi-bell"></i>
            <div class="notification-number">1</div>
        </div> -->
        <div class="flex justify-content-center align-items-center me-3 notification position-relative dropdown-toggle-false" data-bs-toggle="dropdown">
          <i class="pi pi-bell"></i>
        <span class="position-absolute d-flex justify-content-center align-items-center top-2 start-100 translate-middle badge rounded-circle notification-number">
          99+
          <span class="visually-hidden">unread messages</span>
        </span>
        <div class="dropdown-menu">
          <div class=" d-flex justify-content-between dropdown-header border-bottom-1 ">
            <span>Notfications</span>
            <span class=" text-danger cursor-pointer">Clear All</span>
          </div>
          <div class="dropdown-content">
            <div class=" dropdown-item d-flex cursor-pointer" v-for="notfication in notfications" :key="notfication.id">
              <div class="d-flex justify-content-center align-items-center"><img class="notfication-img" :src="notfication.img" alt="notfication-image"></div>
              <div class="ms-3 p-1 text-content d-flex flex-wrap">
                <span class="w-100 notification-message text-wrap">{{ notfication.message }}</span>
                <span class="w-100 text-muted">{{ notfication.from }}</span>
              </div>
            </div>
          </div>
          <div class="dropdown-footer d-flex justify-content-center align-items-center border-top-1">
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
          <router-link :to="{name:'DashboardAdminProfile'}"><li class="dropdown-item">
              <i class="pi pi-user me-2"></i><span>Profile</span>
          </li></router-link>
          
          <router-link :to="{name:'DashboardAdminSettings'}" > <li class="dropdown-item">  
              <i class="pi pi-cog me-2"></i><span>Settings</span>
          </li></router-link>
          
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
      notfications:[
        {
          id:1,
          message:"Dr.Sara orginaz meeting with all doctors in 10:00 AM",
          from: "6 min ago",
          img: require('@/assets/images/homepage/doctor.png'),
        },
        {
          id:2,
          message:"Dr.Sara orginaz meeting with all doctors in 10:00 AM",
          from: "6 min ago",
          img: require('@/assets/images/homepage/doctor.png'),
        },
        {
          id:3,
          message:"Dr.Sara orginaz meeting with all doctors in 10:00 AM",
          from: "6 min ago",
          img: require('@/assets/images/homepage/doctor.png'),
        },
      ]
    }
  },
}
</script>

<style scoped>


</style>
