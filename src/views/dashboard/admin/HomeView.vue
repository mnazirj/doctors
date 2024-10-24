<template>
      <!-- Start Cards -->
       
      <div
        class="cards d-flex justify-content-evenly align-items-center flex-wrap w-100 mb-3"
      >
        <!-- First card -->
       
        <Card class="card-1" :card="{name:'Doctors' ,number : 168 , iconClass:'pi-users' , maxNumber: 400}" />
        <!-- Second Card -->
        <Card class="card-2" :card="{name:'Appointments' ,number : 265 , iconClass:'pi-calendar-clock' , maxNumber: 400}" />
        <!-- Third card -->
        <Card class="card-3" :card="{name:'Total Reviews' ,number : 2.9 , iconClass:'pi-star' , maxNumber: 5}" />
        <!-- Fourth card -->
        <Card class="card-4" :card="{name:'Patients' ,number : 300 , iconClass:'pi-user' , maxNumber: 400}" />
       
      </div>
      <!-- End cards -->

        <!-- Charts -->
      <div class="charts w-100 d-flex justify-content-around flex-wrap mt-3 mb-3">
          <ChartHome />
        </div>
        <!-- end Charts -->
      <!-- Tables -->
        <TableHome/>
        <!-- end Tables -->
</template>

<script>
import Navbar from "@/components/dashboard/Navbar.vue";
import Sidebar from "@/components/dashboard/Sidebar.vue";
import Card from "@/components/dashboard/admin/Card.vue";
import ChartHome from "@/components/dashboard/admin/ChartHome.vue";
import TableHome from "@/components/dashboard/admin/TableHome.vue";
import "@/assets/style/custom.css";
import Chart from "primevue/chart";
export default {
  name: "HomeViewAdmin",
  components: {
    Navbar,
    Sidebar,
    Chart,
    Card,
    ChartHome,
    TableHome,
  },
  
};
</script>
