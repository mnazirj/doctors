<template>
  <div class="chart-1">
    <Chart
      type="line"
      :data="chartDataPatientsAnnually"
      :options="chartOptionsPatientsAnnually"
      class="h-100"
    />
  </div>
  <div class="chart-2">
    <Chart
      type="bar"
      :data="chartDataDoctorsAppointmentsDaily"
      :options="chartOptionsDoctorsAppointmentsDaily"
      class="h-100"
    />
  </div>
</template>

<script>
import Chart from "primevue/chart";
export default {
  components: {
    Chart,
  },
  data() {
    return {
      chartDataPatientsAnnually: null,
      chartOptionsPatientsAnnually: null,
      chartDataDoctorsAppointmentsDaily: null,
      chartOptionsDoctorsAppointmentsDaily: null,
    };
  },
  mounted() {
    this.chartDataPatientsAnnually = this.setChartDataPatientsAnnually();
    this.chartOptionsPatientsAnnually = this.setChartOptionsPatientsAnnually();
    this.chartDataDoctorsAppointmentsDaily =
      this.setChartDataDoctorsAppointmentsDaily();
    this.chartOptionsDoctorsAppointmentsDaily =
      this.setChartOptionsDoctorsAppointmentsDaily();
  },
  methods: {
    setChartDataPatientsAnnually() {
      const documentStyle = getComputedStyle(document.documentElement);

      return {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          " August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Patients",
            data: [80, 89, 112, 98, 120, 80, 70, 65, 50, 55, 80, 120],
            fill: true,
            borderColor: documentStyle.getPropertyValue("--p-fuchsia-800"),
            tension: 0.4,
          },
        ],
      };
    },
    setChartOptionsPatientsAnnually() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue("--p-text-color");
      const textColorSecondary = documentStyle.getPropertyValue(
        "--p-text-muted-color"
      );
      const surfaceBorder = documentStyle.getPropertyValue(
        "--p-content-border-color"
      );

      return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
          y: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
        },
      };
    },
    setChartDataDoctorsAppointmentsDaily() {
      const documentStyle = getComputedStyle(document.documentElement);

      return {
        labels: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        datasets: [
          {
            label: "Doctors",
            backgroundColor: documentStyle.getPropertyValue("--p-amber-400"),
            borderColor: documentStyle.getPropertyValue("--p-cyan-500"),
            data: [25, 22, 24, 21, 21, 0, 18],
          },
          {
            label: "Appointments",
            backgroundColor: documentStyle.getPropertyValue("--p-green-400"),
            borderColor: documentStyle.getPropertyValue("--p-gray-500"),
            data: [50, 48, 40, 45, 35, 0, 45],
          },
        ],
      };
    },
    setChartOptionsDoctorsAppointmentsDaily() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue("--p-text-color");
      const textColorSecondary = documentStyle.getPropertyValue(
        "--p-text-muted-color"
      );
      const surfaceBorder = documentStyle.getPropertyValue(
        "--p-content-border-color"
      );

      return {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 500,
              },
            },
            grid: {
              display: false,
              drawBorder: false,
            },
          },
          y: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
        },
      };
    },
  },
};
</script>
