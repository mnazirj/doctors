<template>
  <aside id="sidebar" class="sidebar h-100 collapse px-0  collapse-horizontal show col-auto  shadow-2   fixed">
    <div class="">
      <div class="d-flex justify-content-center p-1 bg-main-color">
      <img src="@/assets/images/dashboards/admin/logo.svg" alt="Logo-image" >
    </div>
    <div class=" d-flex flex-wrap justify-content-center align-items-center p-1 bg-main-color">
      <div class="w-100 d-flex justify-content-center">
        <img src="@/assets/images/homepage/articles2.jpg" alt="profile-image" class="sidebar-img rounded-circle m-2 me-3 ms-3">
      </div>
      <div class=" d-flex flex-wrap justify-content-center align-items-center ">
        <div class="text-center mb-2 w-100">
          <span class=" bg-white p-1 px-3 rounded-2">Dr.Sara Alsrsara</span>
        </div>
        <div class="d-flex flex-wrap justify-content-center">
          <router-link class=" mx-1" :to="{name:'admin.profile'}">
          <div :class="['prfile-item w-fit p-1 mt-1 mb-2 bg-white rounded-2 bg-main-color cursor-pointer',isActive('admin.profile') ? 'active-profile' : '']">
            <i class="pi pi-address-book  me-2"></i>
            <span>Profile</span>
          </div>
        </router-link>
        <router-link class=" mx-1" :to="{name:'admin.settings'}">
          <div :class="['prfile-item w-fit p-1 mt-1 mb-2 bg-white rounded-2 bg-main-color cursor-pointer',isActive('admin.settings') ? 'active-profile' : '']">
            <i class="pi pi-cog  me-2"></i>
            <span>Settings</span>
          </div>
        </router-link>
        <div class="prfile-item  p-1 mt-1 mb-2 bg-white rounded-2 bg-main-color cursor-pointer text-center w-100">
          <i class="pi pi-sign-out  me-2"></i>
          <span>Logout</span>
        </div>
        </div>
        
      </div>
    </div>
    <div class=" d-flex flex-wrap justify-content-between bg-white">
      <ul class=" list-group w-100">
        <router-link :to="{name:'admin.home'}">
          <li :class="['list-group-item m-2 me-5 ms-3 p-1 ps-2 rounded-2 cursor-pointer',isActive('admin.home') ? 'active' : ''] ">
            <i class="pi pi-home me-2"></i>
            <span>Home</span>
          </li>
        </router-link>
        <router-link :to="{name:'admin.appointments'}">
          <li :class="['list-group-item m-2 me-5 ms-3 p-1 ps-2 rounded-2 cursor-pointer',isActive('admin.appointments') ? 'active' : ''] ">
            <i class="pi pi-calendar-clock me-2"></i>
            <span>Appointments</span>
          </li>
        </router-link>
        <router-link :to="{name:'admin.doctors'}">
          <li :class="['list-group-item m-2 me-5 ms-3 p-1 ps-2 rounded-2 cursor-pointer',isActive('admin.doctors') ? 'active' : ''] ">
            <i class="fa-solid fa-user-doctor me-2"></i>
            <span>Doctors</span>
          </li>
        </router-link>
        <router-link :to="{name:'admin.specialities'}">
          <li :class="['list-group-item m-2 me-5 ms-3 p-1 ps-2 rounded-2 cursor-pointer',isActive('admin.specialities') ? 'active' : ''] ">
            <i class="fa-solid fa-stethoscope me-2"></i>
            <span>Specialities</span>
          </li>
        </router-link>
        <router-link :to="{name:'admin.paitents'}">
          <li :class="['list-group-item m-2 me-5 ms-3 p-1 ps-2 rounded-2 cursor-pointer',isActive('admin.paitents') ? 'active' : ''] ">
            <i class="fa-solid fa-user-injured me-2"></i>
            <span>Paitents</span>
          </li>
        </router-link>
        <router-link :to="{name: 'admin.reviews'}">
          <li :class="['list-group-item m-2 me-5 ms-3 p-1 ps-2 rounded-2 cursor-pointer',isActive('admin.reviews') ? 'active' : ''] ">
            <i class="pi pi-star-fill me-2"></i>
            <span>Reviews</span>
          </li>
        </router-link>
        <router-link :to="{name:'admin.websitSettings'}">
          <li :class="['list-group-item m-2 me-5 ms-3 p-1 ps-2 rounded-2 cursor-pointer',isActive('admin.websitSettings') ? 'active' : ''] ">
            <i class="fa-solid fa-gears me-2"></i>
            <span>WebSite Settings</span>
          </li>
        </router-link>
      </ul>
    </div>
    </div>
   
  </aside>
<div class="col-1 btn-toggle-continer p-0 ms-1 fixed" >
    <button type="button" class="btn bg-main-color rounded-circle" data-bs-toggle="collapse" data-bs-target="#sidebar" aria-expanded="false" aria-controls="sidebar"><i class="pi pi-list"></i></button>
</div>
</template>

<script>
export default {
methods:{
  isActive(routeName){
      return this.$route.name === routeName;
    }
}
}
</script>

<style scoped>
/* .sidebar-continer{
width: 16rem;
z-index: 5;
} */
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
</style>