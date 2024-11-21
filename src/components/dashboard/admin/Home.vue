<template>
      <!-- Cards -->
      <div class="cards d-flex justify-content-evenly align-items-center flex-wrap w-100 mb-3">
        <!-- First card -->
        <Card  :card="{name:'Doctors' ,number : 168 , iconClass:'fa-solid fa-user-doctor' }" />
        <!-- Second Card -->
        <Card  :card="{name:'Appointments' ,number : 265 , iconClass:'pi pi-calendar-clock' }" />
        <!-- Third card -->
        <Card  :card="{name:'Total Reviews' ,number : 2.9 , iconClass:'pi pi-star' }" />
        <!-- Fourth card -->
        <Card  :card="{name:'Patients' ,number : 300 , iconClass:'fa-solid fa-user-injured' }" />
      </div>
        <!-- Charts -->
      <div class="charts w-100 d-flex justify-content-around flex-wrap mt-4 mb-4">
        <div class="title d-flex w-100 fs-2 text-main-color">
          <span class="font-kanit">Weekly OverView</span>
          <div class="">
            <i class="fa-solid fa-chart-line ms-2"></i>
          </div>
        </div>
        
        <ChartHome />
      </div>
      <!-- Tables -->
      <div>
        <div class="title d-flex w-100 fs-2 text-main-color">
          <span class="font-kanit">Last Patients and Doctors</span>
          <div class="">
            <i class="fa-solid fa-table ms-2"></i>
          </div>
        </div>
        <TableHome/>
      </div>
      
</template>

<script>
import Card from "@/components/dashboard/admin/Card.vue";
import ChartHome from "@/components/dashboard/admin/ChartHome.vue";
import TableHome from "@/components/dashboard/admin/TableHome.vue";
import "@/assets/style/custom.css";
export default {
  name: "HomeViewAdmin",
  components: {
    Card,
    ChartHome,
    TableHome,
  },
  
};
</script>

<style scoped>
/* .title div i{
  position: absolute;
  top: -10;
}  */
</style>