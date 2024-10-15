<template>
  <Navbar />
  <div class="container-fluid">
    <Sidebar />
    <div class="main d-flex flex-wrap">
      <div class="cumber m-2 mt-4 mb-3 w-100">
        <h1>Welcome Admin!</h1>
        <p>Home/</p>
      </div>
      <!-- Start Cards -->
      <div
        class="cards d-flex justify-content-evenly align-items-center flex-wrap w-100"
      >
        <!-- First card -->
        <div class="card card-1 m-1 mt-2 mb-2 p-1 shadow shadow-2">
          <div
            class="card-body d-flex justify-content-between align-items-center flex-wrap"
          >
            <i class="pi pi-users"></i>
            <span>168</span>
            <div class="mt-2 d-flex flex-wrap w-100">
              <label for="doctors-num" class="form-label w-100">Doctors</label>
              <progress
                value="168"
                max="400"
                name="doctors-num"
                class="w-100"
              ></progress>
            </div>
          </div>
        </div>

        <!-- Second Card -->
        <div class="card card-2 m-1 mt-2 mb-2 p-1 shadow shadow-2">
          <div
            class="card-body d-flex justify-content-between align-items-center flex-wrap"
          >
            <i class="pi pi-calendar-clock"></i>
            <span>168</span>
            <div class="mt-2 d-flex flex-wrap w-100">
              <label for="doctors-num" class="form-label w-100"
                >Appointments</label
              >
              <progress
                value="168"
                max="400"
                name="doctors-num"
                class="w-100"
              ></progress>
            </div>
          </div>
        </div>
        <!-- Third card -->
        <div class="card card-3 m-1 mt-2 mb-2 p-1 shadow shadow-2">
          <div
            class="card-body d-flex justify-content-between align-items-center flex-wrap"
          >
            <i class="pi pi-star"></i>
            <span>3.9</span>
            <div class="mt-2 d-flex flex-wrap w-100">
              <label for="doctors-num" class="form-label w-100"
                >Total Reviews</label
              >
              <progress
                value="3.9"
                max="5"
                name="doctors-num"
                class="w-100"
              ></progress>
            </div>
          </div>
        </div>
        <!-- Fourth card -->
        <div class="card card-4 m-1 mt-2 mb-2 p-1 shadow shadow-2">
          <div
            class="card-body d-flex justify-content-between align-items-center flex-wrap"
          >
            <i class="pi pi-user"></i>
            <span>242</span>
            <div class="mt-2 d-flex flex-wrap w-100">
              <label for="doctors-num" class="form-label w-100">Patients</label>
              <progress
                value="242"
                max="400"
                name="doctors-num"
                class="w-100"
              ></progress>
            </div>
          </div>
        </div>
        <!-- End cards -->
        <!-- Charts -->
        <div class="charts w-100 d-flex justify-content-around">
          <div class="w-40">
          
          </div>
          <div class="w-40">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/dashboards/global/Navbar.vue";
import Sidebar from "@/components/dashboards/global/Sidebar.vue";
import "@/assets/style/custom.css";
export default {
  name: "HomeViewAdmin",
  components: {
    Navbar,
    Sidebar,
  },
};
</script>
