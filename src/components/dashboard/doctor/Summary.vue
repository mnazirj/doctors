<template>
  <div class="ps-5">
    <div class="container-fluid">
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
                  <h2 class="mb-0 text-primary font-kanit">700</h2>
                  <small class="text-success font-kanit">
                    <i
                      class="pi pi-arrow-up font-bold"
                      style="font-size: 0.7rem"
                    />
                    15% From Last Week
                  </small>
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
                  <h2 class="mb-0 text-primary font-kanit">300</h2>
                  <small class="text-danger font-kanit">
                    <i
                      class="pi pi-arrow-down font-bold"
                      style="font-size: 0.7rem"
                    />
                    15% From Last Week
                  </small>
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
                  <h2 class="mb-0 text-primary font-kanit">250</h2>
                  <small class="text-success font-kanit">
                    <i
                      class="pi pi-arrow-up font-bold"
                      style="font-size: 0.7rem"
                    />
                    20% From Last Week
                  </small>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </div>
      <h3 class="text-primary mt-5 text-uppercase sp-title">Weekly Overview</h3>
      <hr />
      <div class="row">
        <div class="col-lg-6 col-md-12 col-12">
          <Chart type="line" :data="patients" />
        </div>
        <div class="col-lg-6 col-md-12 col-12">
          <Chart type="bar" :data="appointments" />
        </div>
      </div>
    </div>
    <h3 class="text-primary mt-5 text-uppercase sp-title">
      Appointments Today
    </h3>
    <hr />
    <div class="container-fluid">
      <DataTable :value="upcoming" removableSort scrollable paginator :rows="5">
        <Column field="code" header="Code" class="font-kanit"></Column>
        <Column field="name" header="Name" sortable>
          <template #body="slotProps">
            <img
              :src="require('../../../assets/images/homepage/p1.jpg')"
              width="48"
              class="rounded"
            />
            <span class="ms-3 font-kanit">{{ slotProps.data.name }}</span>
          </template>
        </Column>
        <Column field="date" header="Date" sortable>
          <template #body="slotProps">
            <h6 class="font-kanit">{{ slotProps.data.date }}</h6>
            <Tag :value="slotProps.data.type" rounded />
          </template>
        </Column>
        <Column header="Action">
          <template #body>
            <div class="row align-items-center">
              <Button
                icon="pi pi-check"
                size="small"
                severity="success"
                rounded
                class="me-2 outlined text-success"
              />
              <Button
                icon="pi pi-trash"
                size="small"
                severity="danger"
                rounded
                class="outlined text-danger"
              />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import Button from "primevue/button";
import Card from "primevue/card";
import Chart from "primevue/chart";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Tag from "primevue/tag";
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
      upcoming: [
        {
          id: 1,
          code: "#APT0001",
          name: "Adrian Marshall",
          date: "11 Nov 2024 10:45 AM",
          type: "General",
        },
        {
          id: 2,
          code: "#APT0002",
          name: "Kelly Stevens",
          date: "15 Nov 2024 10:45 AM",
          type: "General",
        },
        {
          id: 3,
          code: "#APT0003",
          name: "Samuel Anderson",
          date: "10 Nov 2024 7:00 AM",
          type: "General",
        },
        {
          id: 4,
          code: "#APT0004",
          name: "Catherine Griffin",
          date: "11 Nov 2024 2:45 PM",
          type: "General",
        },
        {
          id: 5,
          code: "#APT0005",
          name: "Robert Hutchinson",
          date: "11 Oct 2024 4:45 PM",
          type: "General",
        },
        {
          id: 6,
          code: "#APT0006",
          name: "Robert Hutchinson",
          date: "11 Oct 2024 4:45 PM",
          type: "General",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card-img {
  color: white;
  font-size: 3rem;
  margin-right: 0.6rem;
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
        var(--p-primary-color) 40%,
        transparent 10%
      )
      no-repeat;
  }
}
@media screen and (min-width: 375px) {
  .bg-custom {
    background: linear-gradient(
        to left,
        var(--p-primary-color) 35%,
        transparent 10%
      )
      no-repeat;
  }
}
@media screen and (min-width: 425px) {
  .bg-custom {
    background: linear-gradient(
        to left,
        var(--p-primary-color) 35%,
        transparent 10%
      )
      no-repeat;
  }
}
@media screen and (min-width: 768px) {
  .bg-custom {
    background: linear-gradient(
        to left,
        var(--p-primary-color) 20%,
        transparent 10%
      )
      no-repeat;
  }
}
@media screen and (min-width: 1024px) {
  .bg-custom {
    background: linear-gradient(
        to left,
        var(--p-primary-color) 40%,
        transparent 10%
      )
      no-repeat;
  }
}
@media screen and (min-width: 1920px) {
  .bg-custom {
    background: linear-gradient(
        to left,
        var(--p-primary-color) 25%,
        transparent 10%
      )
      no-repeat;
  }
}
</style>
