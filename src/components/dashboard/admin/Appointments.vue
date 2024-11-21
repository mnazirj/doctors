<template>
  <div
    class="table-continer w-100 d-flex flex-wrap justify-content-center align-content-center pb-1 pt-1 mt-1 mb-1"
  >
    <!-- Search -->
    <div
      class="d-flex flex-nowrap justify-content-center align-items-center search mt-1 mb-3 input-group"
    >
      <span class="input-group-text"
        ><i class="pi pi-search fs-4 text-main-color"></i
      ></span>
      <input
        type="text"
        name="search"
        id="search"
        class="form-control"
        placeholder="Search ..."
        v-model="searchInput"
        @input="resetToFirstPage"
      />
    </div>
    <!-- table -->
    <div class="table-responsive w-100">
      <table class="table table-hover">
        <!-- table head -->
        <thead>
          <tr class="">
            <th scope="col">Patient Name</th>
            <th scope="col">Doctor Name</th>
            <th scope="col">Specialitie</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th class="">Actions</th>
          </tr>
        </thead>
        <!-- table body -->
        <tbody class="align-middle">
          <tr v-for="appointment in paginatedData" :key="appointment.id">
            <td>{{ appointment.patientName }}</td>
            <td>{{ appointment.doctorName }}</td>
            <td>{{ appointment.specialitie }}</td>
            <td>{{ appointment.date }}</td>
            <td>
              <i
                :class="[
                  'pi pi-circle-fill',
                  appointment.status ? 'text-success' : 'text-danger',
                ]"
              ></i>
            </td>
            <td>
              <!-- <button type="button" class="btn btn-primary me-1 ms-1"><i class="pi pi-pen-to-square"></i></button> -->
              <!-- delete button -->
              <button
                type="button"
                class="btn btn-outline-danger rounded-circle"
                data-bs-toggle="modal"
                data-bs-target="#delete-appointment-modal"
                title="Delete this Appointment"
                @click="loadCurrentData(appointment)"
              >
                <i class="pi pi-trash mt-1"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- delete modal -->
    <div class="modal fade" id="delete-appointment-modal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Delete Appointment #{{ currentData.id }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div
            class="modal-body d-flex justify-content-center align-items-center"
          >
            <p>Are you sure deleting #{{ currentData.id }} appointment ?</p>
          </div>
          <div class="modal-footer d-flex justify-content-end">
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
              @click="deleteData"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Pagination -->
    <Pagination
      :data="filteredData"
      :itemsPerPage="10"
      @updatePaginatedData="handlePaginatedDataUpdate"
      ref="pagination"
    />
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";
export default {
  components: {
    Pagination,
  },
  data() {
    return {
      searchInput: "",
      paginatedData: [],
      currentData: {
        id: null,
        patientName: null,
        doctorName: null,
        specialitie: null,
        date: null,
        status: null,
      },
      appointments: [
        {
          id: 1,
          patientName: "Mohammad Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: true,
        },
        {
          id: 2,
          patientName: "Omar Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: false,
        },
        {
          id: 3,
          patientName: "Samer Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: true,
        },
        {
          id: 4,
          patientName: "Sami Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: true,
        },
        {
          id: 5,
          patientName: "Houda Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: true,
        },
        {
          id: 6,
          patientName: "Haddel Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: true,
        },
        {
          id: 7,
          patientName: "Ammar Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: true,
        },
        {
          id: 8,
          patientName: "SOso Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: true,
        },
        {
          id: 9,
          patientName: "Sara Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: true,
        },
        {
          id: 10,
          patientName: "Samer Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: true,
        },
        {
          id: 11,
          patientName: "Slark Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: true,
        },
        {
          id: 12,
          patientName: "Doom Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: true,
        },
        {
          id: 13,
          patientName: "TA Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: true,
        },
        {
          id: 14,
          patientName: "AntiMage Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: false,
        },
        {
          id: 15,
          patientName: "Lina Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: true,
        },
        {
          id: 16,
          patientName: "Luna Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: false,
        },
        {
          id: 17,
          patientName: "Lanaya Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: false,
        },
        {
          id: 18,
          patientName: "Jamil Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: false,
        },
        {
          id: 19,
          patientName: "Jamal Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: false,
        },
        {
          id: 20,
          patientName: "Jasem Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: false,
        },
        {
          id: 21,
          patientName: "Ghassan Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: false,
        },
        {
          id: 22,
          patientName: "Ghiath Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: false,
        },
        {
          id: 23,
          patientName: "Mhmd Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "28/5/2010 10:00 AM",
          status: false,
        },
        {
          id: 24,
          patientName: "Dina Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2022 10:00 AM",
          status: false,
        },
        {
          id: 25,
          patientName: "Dana Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: false,
        },
        {
          id: 26,
          patientName: "DOdo Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: false,
        },
        {
          id: 27,
          patientName: "Bo Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "25/4/2023 10:00 AM",
          status: false,
        },
        {
          id: 28,
          patientName: "blabblab Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: false,
        },
        {
          id: 29,
          patientName: "Mohammad Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/2/2024 10:00 AM",
          status: false,
        },
        {
          id: 30,
          patientName: "Mohammad Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "12/1/2024 10:00 AM",
          status: false,
        },
        {
          id: 31,
          patientName: "Mohammad Mahmmoud",
          doctorName: "Ahmad AlAhmad",
          specialitie: "Playing in Hearts",
          date: "10/1/2024 10:00 AM",
          status: false,
        },
      ],
    };
  },
  computed: {
    filteredData() {
      // condtion if search input is empty return all data
      if (!this.searchInput) {
        return this.appointments;
      }
      // filter appoinments by (patient name , doctor name , speciality , date , status)
      // take every value from appointment (after convert it to lower case) then we show if this value contains what writed in search input (after convert it to lower case) then return array (contains data which include what writed search input value)
      return this.appointments.filter(
        (item) =>
          item.patientName
            .toLowerCase()
            .includes(this.searchInput.toLowerCase()) ||
          item.doctorName
            .toLowerCase()
            .includes(this.searchInput.toLowerCase()) ||
          item.specialitie
            .toLowerCase()
            .includes(this.searchInput.toLowerCase()) ||
          // convert data into string (becuse mabye it will be time type)
          String(item.date).includes(this.searchInput) ||
          String(item.status).includes(this.searchInput)
      );
    },
  },
  methods: {
    loadCurrentData(data) {
      this.currentData = data;
    },
    // when search to set page number 1
    resetToFirstPage() {
      this.$refs.pagination.currentPage = 1;
    },

    // to set page number x data in variable[array contains rows for this page] (table view this variable).
    //  Example : when we turn to page 2 (this method fired) and we put in variable paginatiedData new rows to display them.
    handlePaginatedDataUpdate(newPaginatedData) {
      this.paginatedData = newPaginatedData;
    },

    deleteData() {
      console.log("Deleting this : ", this.currentData);
    },
  },
};
</script>
