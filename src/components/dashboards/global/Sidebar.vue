<template>
  <aside
    class="h-full ps-3 sidebarr row" ref="sidebarr" id="sidebarr"
  >
    <div class="col" id="x">
      <ul class="pl-0 pe-0 d-flex flex-wrap flex-column sidebar-menu">
        <li class=" rounded rounded-3 sidebar-item active">
          <i class="pi pi-home" title="Home"></i><span>Home</span>
        </li>
        <li class="rounded rounded-3 sidebar-item">
          <i class="pi pi-calendar" title="Appointments"></i
          ><span>Appointments</span>
        </li>
        <li class=" rounded rounded-3 sidebar-item">
          <i class="pi pi-sparkles" title="Specialities"></i><span>Specialities</span>
        </li>
        <li class="  rounded rounded-3 sidebar-item">
          <i class="pi pi-users" title="Doctors"></i><span>Doctors</span>
        </li>
        <li class="  rounded rounded-3 sidebar-item">
          <i class="pi pi-user" title="Patients"></i><span>Patients</span>
        </li>
        <li class="rounded rounded-3 sidebar-item">
          <i class="pi pi-star-fill" title="Reviews"></i><span>Reviews</span>
        </li>
        <li class=" rounded rounded-3 sidebar-item">
          <i class="pi pi-cog" title="Websit Settings"></i><span>Websit Settings</span>
        </li>
      </ul>
    </div>

    <div
      class="h-full bg-dark col-1 d-flex justify-content-center align-items-center flex-column toggle-btn"
    >
      <button
        class="p-0 m-0 w-auto h-auto btn border-none"
        @click="SidebarToggle"
      >
        <i class="pi pi-angle-right text-light" ref="toggleBtn"></i>
      </button>
    </div>
  </aside>

  <!-- <aside id="sidebar">
    <div class="d-flex">
      <button class="toggle-btn" type="button" ref="toggleBtn" @click="toggle">
        <i class="pi pi-th-large"></i>
      </button>
      <div class="sidebar-logo">
        <a href="">Sidebar</a>
      </div>
    </div>
    <ul class="sidebar-nav">
      <li class="sidebar-item">
        <a><i class="pi pi-home p-1 m-1"></i><span>Home</span></a>
      </li>
      <li class="sidebar-item">
        <a href="" class="sidebar-link"
          ><i class="pi pi-calendar p-1 m-1"></i><span>Appointments</span></a
        >
      </li>
      <li class="sidebar-item">
        <a href="" class="sidebar-link"
          ><i class="pi pi-sparkles p-1 m-1"></i><span>Specialities</span></a
        >
      </li>
      <li class="sidebar-item">
        <a href="" class="sidebar-link"
          ><i class="pi pi-users p-1 m-1"></i><span>Doctors</span></a
        >
      </li>
      <li class="sidebar-item">
        <a href="" class="sidebar-link"
          ><i class="pi pi-star-fill p-1 m-1"></i><span>Reviews</span></a
        >
      </li>
      <li class="sidebar-item">
        <a href="" class="sidebar-link"
          ><i class="pi pi-cog p-1 m-1"></i><span>Websit Settings</span></a
        >
      </li>
    </ul>
  </aside> -->
</template>

<script>
export default {
  methods:{
    SidebarToggle(){
      // this.$refs.sidebarr.classList.toggle('expand');
      // console.log(this.$refs.sidebarr.classList.toggle('expand'));
      if(this.$refs.sidebarr.classList.toggle('expand')){
        this.$refs.toggleBtn.classList.remove('pi-angle-right');
        this.$refs.toggleBtn.classList.add('pi-angle-left');
      }else{
        this.$refs.toggleBtn.classList.add('pi-angle-right');
        this.$refs.toggleBtn.classList.remove('pi-angle-left');
      }
    }
  }
};
</script>
