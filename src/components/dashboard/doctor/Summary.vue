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
    <div class="col-12">
      <h3>Weekly Overview</h3>
      <div class="w-100">
        <Chart type="line" :data="chartData" />
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
      chartData: {
        labels: ["M", "T", "W", "T", "F,", "S", "S"],
        datasets: [
          {
            label: "Patients",
            data: [50, 40, 65, 55, 60, 35, 70],
            backgroundColor: [
              "rgba(59,130,246,.7)",
              "rgba(14,165,233,.7)",
              "rgba(6,182,212,.7)",
            ],
            borderColor: [
              "rgb(59,130,246,.7)",
              "rgb(14,165,233,.7)",
              "rgb(6,182,212,.7)",
            ],
            tension: 0.4,
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
