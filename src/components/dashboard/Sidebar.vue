<template>
  <aside
    class="ps-3 d-flex justify-content-between sidebarr collapse show"
    ref="sidebarr"
    id="sidebarr"
  >
    <div class="" id="x">
      <ul class="pl-0 pe-0 d-flex flex-wrap flex-column sidebar-menu">
        <router-link :to="{ name: 'DashboardAdminHome' }">
          <li :class="['rounded rounded-3 sidebar-item' , isActive('DashboardAdminHome') ? 'active' : '']">
            <i class="pi pi-home" title="Home"></i><span>Home</span>
          </li>
        </router-link>
        <router-link :to="{ name: 'DashboardAdminAppointments' }">
          <li :class="['rounded rounded-3 sidebar-item' , isActive('DashboardAdminAppointments') ? 'active' : '']">
            <i class="pi pi-calendar" title="Appointments"></i
            ><span class="">Appointments</span>
          </li></router-link
        >

       <router-link :to="{name:'DashboardAdminSpecialities'}"><li :class="['rounded rounded-3 sidebar-item' , isActive('DashboardAdminSpecialities') ? 'active' : '']">
          <i class="pi pi-sparkles" title="Specialities"></i
          ><span>Specialities</span>
        </li></router-link> 
        <router-link :to="{name:'DashboardAdminDoctors'}"> <li :class="['rounded rounded-3 sidebar-item' , isActive('DashboardAdminDoctors') ? 'active' : '']">
          <i class="pi pi-users" title="Doctors"></i><span>Doctors</span>
        </li></router-link>
       
        <router-link :to="{name: 'DashboardAdminPaitents'}"><li :class="['rounded rounded-3 sidebar-item' , isActive('DashboardAdminPaitents') ? 'active' : '']">
          <i class="pi pi-user" title="Patients"></i><span>Patients</span>
        </li></router-link>
        
        <router-link :to="{name: 'DashboardAdminReviews'}"><li :class="['rounded rounded-3 sidebar-item' , isActive('DashboardAdminReviews') ? 'active' : '']">
          <i class="pi pi-star-fill" title="Reviews"></i><span>Reviews</span>
        </li></router-link>
        
        <router-link :to="{name:'DashboardAdminWebsiteSettings'}" > <li :class="['rounded rounded-3 sidebar-item' , isActive('DashboardAdminWebsiteSettings') ? 'active' : '']">
          <i class="pi pi-cog" title="Websit Settings"></i
          ><span>Websit Settings</span>
        </li></router-link>
       
      </ul>
    </div>

    <div
      class="h-100 bg-dark d-flex justify-content-center align-items-center flex-column toggle-btn"
    >
      <button
        class="p-0 m-0 w-auto h-auto btn border-none"
        @click="SidebarToggle"
      >
        <i class="pi pi-angle-right text-light" ref="toggleBtn"></i>
      </button>
    </div>
  </aside>
</template>

<script>
export default {
  methods: {
    SidebarToggle() {
      // this.$refs.sidebarr.classList.toggle('expand');
      // console.log(this.$refs.sidebarr.classList.toggle('expand'));
      if (this.$refs.sidebarr.classList.toggle("expand")) {
        this.$refs.toggleBtn.classList.remove("pi-angle-right");
        this.$refs.toggleBtn.classList.add("pi-angle-left");
      } else {
        this.$refs.toggleBtn.classList.add("pi-angle-right");
        this.$refs.toggleBtn.classList.remove("pi-angle-left");
      }
    },
    isActive(routeName){
      return this.$route.name === routeName;
    }
  },
};
</script>
