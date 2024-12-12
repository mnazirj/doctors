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
    <!-- Table -->
    <div class="table-responsive w-100">
      <table class="table table-hover">
        <!-- table head -->
        <thead>
          <tr class="">
            <th scope="col">ID</th>
            <th scope="col" colspan="2">Paitent Name</th>
            <th scope="col">Age</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Last Visit</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <!-- table body -->
        <tbody class="align-middle">
          <tr v-for="paitent in paginatedData" :key="paitent.id">
            <td>#{{ paitent.id }}</td>
            <td>
              <img :src="paitent.img" alt="paitent-image" class="table-img" />
            </td>
            <td>
              <span>{{ paitent.name }}</span>
            </td>
            <td>{{ paitent.age }}</td>
            <td>{{ paitent.address }}</td>
            <td>{{ paitent.phone }}</td>
            <td>{{ paitent.lastVisit }}</td>
            <td>
              <!-- edit button -->
              <!-- <button type="button" class="btn btn-primary me-1 ms-1"><i class="pi pi-pen-to-square"></i></button> -->
              <!-- delete button -->
              <button
                type="button"
                class="btn btn-outline-danger me-1 ms-1 rounded-circle"
                data-bs-toggle="modal"
                data-bs-target="#delete-paitent-modal"
                title="Delete this paitent"
                @click="loadCurrentData(paitent)"
              >
                <i class="pi pi-trash mt-1"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- delete modal -->
    <div class="modal fade" id="delete-paitent-modal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title font-kanit fs-5">
              Delete Paitent #{{ currentData.id }}
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
            <p>Are you sure deleting "{{ currentData.name }}" paitent ?</p>
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
        address: null,
        phone: null,
        lastVisit: null,
        img: null,
      },
      paitents: [
        {
          id: 1,
          name: "Mohammad GG",
          age: 18,
          address: "Syria ,Damascus ,Baghdad Street ",
          phone: "+963 987 123 987",
          lastVisit: "11/12/2021 10:20 AM",
          img: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
        },
        {
          id: 2,
          name: "Ahmad Almhamoud",
          age: 31,
          address: "United Kingdom ,London ",
          phone: "+871 974 131 782",
          lastVisit: "10/08/2021 04:00 PM",
          img: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
        },
        {
          id: 3,
          name: "Omar Ammor",
          age: 25,
          address: "Lebanon ,Berout ,Baghdad Street ",
          phone: "+964 987 753 951",
          lastVisit: "21/01/2022 8:30 AM",
          img: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
        },
        {
          id: 4,
          name: "Sara Alsrsara",
          age: 23,
          address: "Syria ,Damascus ,Baghdad Street ",
          phone: "+963 987 123 987",
          lastVisit: "11/12/2024 10:20 AM",
          img: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
        },
        {
          id: 5,
          name: "Ammar ALsnar",
          age: 50,
          address: "Syria ,Damascus ,Baghdad Street ",
          phone: "+963 971 573 789",
          lastVisit: "21/05/2024 11:30 AM",
          img: require("@/assets/images/homepage/avatar-04.4c576192.jpg"),
        },
        {
          id: 6,
          name: "Lina The Fire",
          age: 25,
          address: "Lebanon ,AlBaa3 ,Street in Albaa3 ",
          phone: "+964 914 211 654",
          lastVisit: "10/08/2022 10:20 AM",
          img: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
        },
        {
          id: 7,
          name: "Mohammad GG",
          age: 41,
          address: "Syria ,Damascus ,Baghdad Street ",
          phone: "+963 987 123 987",
          lastVisit: "11/12/2024 10:20 AM",
          img: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
        },
        {
          id: 8,
          name: "Mohammad GG",
          age: 25,
          address: "Syria ,Damascus ,Baghdad Street ",
          phone: "+963 987 123 987",
          lastVisit: "11/12/2024 10:20 PM",
          img: require("@/assets/images/homepage/avatar-04.4c576192.jpg"),
        },
      ],
    };
  },
  computed: {
    filteredData() {
      // condtion if search input is empty return all data
      if (!this.searchInput) {
        return this.paitents;
      }
      // filter paitent by (name , address , age , phone , date (last visit) , status)
      // take every value from paitent (after convert it to lower case) then we show if this value contains what writed in search input (after convert it to lower case) then return array (contains data which include what writed search input value)
      return this.paitents.filter(
        (item) =>
          item.name.toLowerCase().includes(this.searchInput.toLowerCase()) ||
          item.address.toLowerCase().includes(this.searchInput.toLowerCase()) ||
          // age is int we convert it to string
          String(item.age).includes(this.searchInput) ||
          // phone is string have numbers so we dont need lower case
          item.phone.includes(this.searchInput) ||
          String(item.lastVisit)
            .toLocaleLowerCase()
            .includes(this.searchInput.toLowerCase()) ||
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
  },
};
</script>
