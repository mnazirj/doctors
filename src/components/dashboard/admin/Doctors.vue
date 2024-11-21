<template>
  <div
    class="table-continer w-100 d-flex flex-wrap justify-content-center align-content-center pb-1 pt-1 mt-1 mb-1"
  >
    <div class="w-100 d-flex justify-content-between">
      <!-- Search -->
      <div class="d-flex justify-content-end align-items-center w-75 mt-1 mb-3">
        <div class="w-66 input-group">
          <span class="input-group-text"
            ><i class="pi pi-search fs-4 text-main-color"></i
          ></span>
          <input
            type="text"
            name="search"
            id="search"
            class="form-control search"
            placeholder="Search ..."
            v-model="searchInput"
            @input="resetToFirstPage"
          />
        </div>
      </div>
      <!-- Create Button -->
      <div class="w-25 d-flex justify-content-end mt-1 mb-3">
        <button
          type="button"
          class="btn btn-main white-space-nowrap"
          data-bs-toggle="modal"
          data-bs-target="#create-btn-modal"
          title="Create a new Doctor"
        >
          <i class="pi pi-plus me-1"></i>Create
        </button>
        <!-- Create Modal Add -->
        <div id="create-btn-modal" class="modal fade" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5>Create a doctor</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form action="">
                  <div class="mt-1 mb-3 input-group">
                    <span class="input-group-text rounded-start-2"
                      ><i class="fa-solid fa-pen text-main-color"></i
                    ></span>
                    <input
                      type="text"
                      name="doctor-name"
                      id="doctor-name"
                      placeholder="Doctor Name"
                      class="form-control"
                    />
                  </div>
                  <div class="mt-1 mb-3 input-group">
                    <label for="doctor-image" class="form-label w-100"
                      >Doctor Image</label
                    >
                    <input
                      class="form-control rounded-start-2"
                      type="file"
                      id="doctor-image"
                    />
                    <span class="input-group-text rounded-end-2"
                      ><i class="fa-solid fa-file-arrow-up text-main-color"></i
                    ></span>
                  </div>
                  <div class="mt-1 mb-3 input-group rounded-end-1">
                    <span class="input-group-text"
                      ><i class="fa-solid fa-stethoscope text-main-color"></i
                    ></span>
                    <select
                      name="doctor-Speciality"
                      id="doctor-Speciality"
                      class="form-select"
                    >
                      <option
                        v-for="speciality in specialities"
                        :key="speciality.id"
                        :value="speciality.id"
                      >
                        {{ speciality.name }}
                      </option>
                    </select>
                  </div>
                  <div class="mt-1 mb-3 form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="doctor-active"
                      checked
                    />
                    <label class="form-check-label" for="doctor-active"
                      >Active account</label
                    >
                  </div>
                </form>
              </div>
              <div class="modal-footer w-100 d-flex justify-content-end">
                <button
                  type="button"
                  class="btn btn-main"
                  data-bs-dismiss="modal"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Table -->
    <div class="table-responsive w-100">
      <table class="table table-hover">
        <!-- table head -->
        <thead>
          <tr class="">
            <th scope="col" colspan="2">Doctor Name</th>
            <th scope="col">Specialitie</th>
            <th scope="col">Join Date</th>
            <th scope="col">Status</th>
            <th class="">Actions</th>
          </tr>
        </thead>
        <!-- table body -->
        <tbody class="align-middle">
          <tr v-for="doctor in paginatedData" :key="doctor.id">
            <td>
              <img :src="doctor.img" alt="doctor-image" class="table-img" />
            </td>
            <td>
              <span>{{ doctor.name }}</span>
            </td>
            <td>{{ doctor.speciality }}</td>
            <td>{{ doctor.joinDate }}</td>
            <td>
              <i
                :class="[
                  'pi pi-circle-fill',
                  doctor.status ? 'text-success' : 'text-danger',
                ]"
              ></i>
            </td>
            <td class="text-center">
              <!-- Edit button -->
              <button
                type="button"
                class="btn btn-outline-main me-1 ms-1 rounded-circle"
                data-bs-toggle="modal"
                data-bs-target="#edit-btn-modal"
                title="Edit This Doctor"
                @click="loadCurrentData(doctor)"
              >
                <i class="pi pi-pen-to-square mt-1"></i>
              </button>

              <!-- delete button -->
              <button
                type="button"
                class="btn btn-outline-danger me-1 ms-1 rounded-circle"
                data-bs-toggle="modal"
                data-bs-target="#delete-doctor-modal"
                title="Delete this Doctor"
                @click="loadCurrentData(doctor)"
              >
                <i class="pi pi-trash mt-1"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- edit modal -->
    <div id="edit-btn-modal" class="modal fade" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5>Edit doctor #{{ currentData.id }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form action="">
              <div class="mt-1 mb-3 input-group">
                <span class="input-group-text rounded-start-2"
                  ><i class="fa-solid fa-pen text-main-color"></i
                ></span>
                <input
                  type="text"
                  name="doctor-name"
                  id="doctor-name"
                  class="form-control"
                  :value="currentData.name"
                />
              </div>
              <div class="mt-1 mb-3 input-group">
                <label for="speciality-logo" class="form-label text-start w-100"
                  >Doctor Image</label
                >
                <input
                  class="form-control rounded-start-2"
                  type="file"
                  id="speciality-logo"
                />
                <span class="input-group-text rounded-end-2"
                  ><i class="fa-solid fa-file-arrow-up text-main-color"></i
                ></span>
              </div>
              <div class="mt-1 mb-3 input-group">
                <span class="input-group-text"
                  ><i class="fa-solid fa-stethoscope text-main-color"></i
                ></span>
                <select
                  name="doctor-Speciality"
                  id="doctor-Speciality"
                  class="form-select"
                >
                  <option
                    v-for="speciality in specialities"
                    :key="speciality.id"
                    :value="speciality.id"
                    :selected="currentData.speciality == speciality.name"
                  >
                    {{ speciality.name }}
                  </option>
                </select>
              </div>
              <div class="mt-1 mb-3 form-check d-flex">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="doctor-active"
                  checked
                />
                <label class="form-check-label ms-2" for="doctor-active"
                  >Active account</label
                >
              </div>
            </form>
          </div>
          <div class="modal-footer w-100 d-flex justify-content-end">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="updateData"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- delete modal -->
    <div class="modal fade" id="delete-doctor-modal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Delete Doctor #{{ currentData.id }}
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
            <p>Are you sure deleting " {{ currentData.name }} " doctor ?</p>
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
        name: null,
        speciality: null,
        joinDate: null,
        img: null,
        status: null,
      },
      specialities: [
        {
          id: 1,
          name: "Cardiologist",
        },
        {
          id: 2,
          name: "Neurology",
        },
        {
          id: 3,
          name: "Urology",
        },
        {
          id: 4,
          name: "Orthopedic",
        },
        {
          id: 5,
          name: "Ophthalmologists",
        },
      ],
      doctors: [
        {
          id: 1,
          name: "Mohammad GG",
          speciality: "Ophthalmologists",
          joinDate: "11-12-2022",
          img: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
          status: true,
        },
        {
          id: 2,
          name: "Omar GG",
          speciality: "Orthopedic",
          joinDate: "7-7-2024",
          img: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
          status: true,
        },
        {
          id: 3,
          name: "Tuka GG",
          speciality: "Ophthalmologists",
          joinDate: "25-8-2020",
          img: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
          status: false,
        },
        {
          id: 4,
          name: "Mohammad GG",
          speciality: "Urology",
          joinDate: "31-4-2021",
          img: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
          status: true,
        },
        {
          id: 5,
          name: "Sara Alsrsara",
          speciality: "Ophthalmologists",
          joinDate: "15-9-2022",
          img: require("@/assets/images/homepage/avatar-04.4c576192.jpg"),
          status: false,
        },
        {
          id: 6,
          name: "Ahmad GG",
          speciality: "Neurology",
          joinDate: "27-11-2021",
          img: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
          status: false,
        },
      ],
    };
  },
  computed: {
    filteredData() {
      // condtion if search input is empty return all data
      if (!this.searchInput) {
        return this.doctors;
      }
      // filter doctors by (name , speciality , join date , status)
      // take every value from doctor (after convert it to lower case) then we show if this value contains what writed in search input (after convert it to lower case) then return array (contains data which include what writed search input value)
      return this.doctors.filter(
        (item) =>
          item.name.toLowerCase().includes(this.searchInput.toLowerCase()) ||
          item.speciality
            .toLowerCase()
            .includes(this.searchInput.toLowerCase()) ||
          String(item.joinDate).includes(this.searchInput) ||
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
    //  Example :if we was in page number 1 when we turn to page 2 (this method fired) and we put in variable paginatiedData new rows to display them.
    handlePaginatedDataUpdate(newPaginatedData) {
      this.paginatedData = newPaginatedData;
    },
    deleteData() {
      console.log("Deleting this :", this.currentData);
    },
    updateData() {
      console.log("Updating this : ", this.currentData);
    },
  },
};
</script>
