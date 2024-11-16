<template>
      <!-- Start Cards -->
       
      <div
        class="cards d-flex justify-content-evenly align-items-center flex-wrap w-100 mb-3"
      >
        <!-- First card -->
       
        <Card  :card="{name:'Doctors' ,number : 168 , iconClass:'fa-solid fa-user-doctor' , maxNumber: 400}" />
        <!-- Second Card -->
        <Card  :card="{name:'Appointments' ,number : 265 , iconClass:'pi pi-calendar-clock' , maxNumber: 400}" />
        <!-- Third card -->
        <Card  :card="{name:'Total Reviews' ,number : 2.9 , iconClass:'pi pi-star' , maxNumber: 5}" />
        <!-- Fourth card -->
        <Card  :card="{name:'Patients' ,number : 300 , iconClass:'fa-solid fa-user-injured' , maxNumber: 400}" />
       
      </div>
      <!-- End cards -->

        <!-- Charts -->
      <div class="charts w-100 d-flex justify-content-around flex-wrap mt-4 mb-4">
        <h3 class="w-100">Weekly OverView</h3>
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

<style scoped>

</style>