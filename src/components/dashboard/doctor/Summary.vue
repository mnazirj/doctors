<template>
  <div class="ps-5">
    <div class="row justify-content-center align-items-center">
      <div class="col-lg-4 col-md-12 col-12">
        <Card class="bg-custom shadow text-dark">
          <template #content>
            <div
              class="d-flex justify-content-between align-items-center flex-row-reverse"
            >
              <div class="me-2">
                <i class="fas fa-user-injured card-img" />
              </div>
              <div>
                <span>Total Patient</span>
                <h2 class="mb-0 text-primary">985</h2>
              </div>
            </div>
          </template>
        </Card>
      </div>

      <div class="col-lg-4 col-md-12 col-12">
        <Card class="bg-custom shadow text-dark">
          <template #content>
            <div
              class="d-flex justify-content-between align-items-center flex-row-reverse"
            >
              <div>
                <i class="fas fa-user-clock card-img" />
              </div>
              <div>
                <span>Patients Today</span>
                <h2 class="mb-0 text-primary">985</h2>
              </div>
            </div>
          </template>
        </Card>
      </div>

      <div class="col-lg-4 col-md-12 col-12">
        <Card class="bg-custom shadow text-dark">
          <template #content>
            <div
              class="d-flex justify-content-between align-items-center flex-row-reverse"
            >
              <div class="me-2">
                <i class="fas fa-calendar-days card-img" />
              </div>
              <div>
                <span @click="isActive">Appointments Today</span>
                <h2 class="mb-0 text-primary">985</h2>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
    <h3>Weekly Overview</h3>
    <div class="row">
      <div class="col-lg-6 col-md-12 col-12">
        <Chart type="line" :data="patients" />
      </div>
      <div class="col-lg-6 col-md-12 col-12">
        <Chart type="bar" :data="appointments" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "primevue/card";
import Chart from "primevue/chart";
</script>

<script>
export default {
  data() {
    return {
      patients: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        datasets: [
          {
            label: "Patients",
            data: [50, 40, 65, 55, 60, 39, 70],

            borderColor: getComputedStyle(
              document.documentElement
            ).getPropertyValue("--p-blue-600"),
            fill: true,
            tension: 0.4,
          },
        ],
      },
      appointments: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        datasets: [
          {
            label: "Appointments",
            data: [80, 45, 65, 32, 75, 65, 91],

            backgroundColor: getComputedStyle(
              document.documentElement
            ).getPropertyValue("--p-blue-600"),
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.card-img {
  color: white;
  font-size: 3rem;
}
.bg-custom {
  background: linear-gradient(
      to left,
      var(--p-primary-color) 20%,
      transparent 10%
    )
    no-repeat;
}

@media screen and (min-width: 320px) {
  .bg-custom {
    background: linear-gradient(
        to left,
        var(--p-primary-color) 35%,
        transparent 10%
      )
      no-repeat;
  }
}
@media screen and (min-width: 375px) {
  .bg-custom {
    background: linear-gradient(
        to left,
        var(--p-primary-color) 30%,
        transparent 10%
      )
      no-repeat;
  }
}
@media screen and (min-width: 425px) {
  .bg-custom {
    background: linear-gradient(
        to left,
        var(--p-primary-color) 25%,
        transparent 10%
      )
      no-repeat;
  }
}
@media screen and (min-width: 768px) {
  .bg-custom {
    background: linear-gradient(
        to left,
        var(--p-primary-color) 25%,
        transparent 10%
      )
      no-repeat;
  }
}
@media screen and (min-width: 1024px) {
  .bg-custom {
    background: linear-gradient(
        to left,
        var(--p-primary-color) 30%,
        transparent 10%
      )
      no-repeat;
  }
}
@media screen and (min-width: 1920px) {
  .bg-custom {
    background: linear-gradient(
        to left,
        var(--p-primary-color) 20%,
        transparent 10%
      )
      no-repeat;
  }
}
</style>
