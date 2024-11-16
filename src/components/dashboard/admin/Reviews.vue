<template>
  <div class="table-continer w-100 d-flex flex-wrap justify-content-center align-content-center pb-1 pt-1 mt-1 mb-1">
    <!-- Search -->
    <div class="d-flex justify-content-center align-items-center w-50 mt-1 mb-3 input-group">
            <span class="input-group-text"><i class="pi pi-search fs-4 text-main-color"></i></span>
            <input type="text" name="search" id="search" class=" form-control search" placeholder="Search ..." v-model="searchInput" @input="resetToFirstPage">
    </div>
    <!-- Table -->
    <div class="table-responsive w-100">
      <table class="table table-hover">
        <!-- table head -->
        <thead>
          <tr class="">
            <th scope="col" colspan="2">Paitent Name</th>
            <th scope="col" colspan="2">Doctor Name</th>
            <th scope="col">Ratings</th>
            <th scope="col">Description</th>
            <th scope="col">Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <!-- table body -->
        <tbody class="align-middle">
          <tr v-for="review in paginatedData" :key="review.id">
            <td><img :src="review.paitentImg" alt="paitent-image" class="table-img"/></td>
            <td><span>{{ review.paitentName }}</span></td>
            <td><img :src="review.doctorImg" alt="doctor-image" class="table-img"/></td>
            <td><span>{{ review.doctorName }}</span></td>
            <!-- <td v-html="createRate(review.rate)"></td> -->
            <td><Rating class="" v-model="review.rate" readonly /></td>
            <td >{{ cutText(review.description) }}</td>
            <td>{{ review.date }}</td>
            <td>
              <!-- Show button -->
              <button type="button" class="btn btn-outline-main me-1 ms-1" title="Show this review" data-bs-toggle="modal" data-bs-target="#show-review-modal"><i class="pi pi-eye"></i></button>
                <!-- Show modal -->
                <div id="show-review-modal" class="modal fade" tabindex="-1">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title fs-5">Review #{{ review.id }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body d-flex flex-wrap">
                        <div class="mt-1 mb-3 w-100">
                          <span class=" text-muted">Paitent Name : </span>
                          <span>{{ review.paitentName }}</span>
                        </div>
                        <div class="mt-1 mb-3 w-100">
                          <span class=" text-muted">Doctor Name : </span>
                          <span>{{ review.doctorName }}</span>
                        </div>
                        <div class="mt-1 mb-3 w-100 d-flex">
                          <span class=" text-muted">Rating : </span>
                          <Rating class="ms-2" v-model="review.rate" readonly />
                        </div>
                        <div class="mt-1 mb-3 w-100">
                          <span class=" text-muted">Description : </span>
                          <span class=" white-space-normal">{{ review.description }}</span>
                        </div>
                        <div class="mt-1 mb-3 w-100">
                          <span class=" text-muted">Date : </span>
                          <span>{{ review.date }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <!-- Delete buttun -->
              <button type="button" class="btn btn-outline-danger me-1 ms-1" title="delete this review" data-bs-toggle="modal" data-bs-target="#delete-review-modal"><i class="pi pi-trash"></i></button>
                <!-- delete modal -->
                <div class=" modal fade" id="delete-review-modal" tabindex="-1">
                                  <div class=" modal-dialog modal-dialog-centered">
                                      <div class=" modal-content">
                                          <div class=" modal-header">
                                              <h1 class="modal-title fs-5" id="exampleModalLabel">Delete Review #{{ review.id }}</h1>
                                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                          </div>
                                          <div class=" modal-body d-flex justify-content-center align-items-center">
                                              <p>Are you sure deleting #{{ review.id }} review ?</p>
                                          </div>
                                          <div class=" modal-footer d-flex justify-content-end">
                                              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Delete</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Pagination -->
    <Pagination :data="filteredData" :itemsPerPage="10" @updatePaginatedData="handlePaginatedDataUpdate" ref="pagination"/>
  </div>
</template>

<script setup>
import Rating from "primevue/rating";
</script>

<script>
import Pagination from "./Pagination.vue";
export default {
  components: {
    Pagination,
  },
  data() {
    return {
      searchInput:'',
      paginatedData: [],
      reviews: [
        {
          id: 1,
          paitentName: "Luna GG",
          doctorName: "Sara Alsrsara",
          rate: 5,
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maxime, illo numquam voluptates, possimus ab quae quos commodi, nam esse placeat iusto? Atque consequatur dignissimos, iure quo vel sunt placeat?",
          date: "11/12/2024 10:20 AM",
          doctorImg: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
          paitentImg: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
        },
        {
          id: 2,
          paitentName: "Lina GG",
          doctorName: "Sara Alsrsara",
          rate: 5,
          description: "a basic description from a normal person ",
          date: "11/12/2024 10:20 AM",
          doctorImg: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
          paitentImg: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
        },
        {
          id: 3,
          paitentName: "Ahmad Gaben",
          doctorName: "Malke Almalek",
          rate: 2.5,
          description: "a day , a week , a mother , a year , no one know",
          date: "11/12/2024 10:20 AM",
          doctorImg: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
          paitentImg: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
          img: require("@/assets/images/homepage/avatar-04.4c576192.jpg"),
        },
        {
          id: 4,
          paitentName: "Mohammad S",
          doctorName: "Sara Alsrsara",
          rate: 3.5,
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maxime, illo numquam voluptates, possimus ab quae quos commodi, nam esse placeat iusto? Atque consequatur dignissimos, iure quo vel sunt placeat?",
          date: "11/12/2024 10:20 AM",
          doctorImg: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
          paitentImg: require("@/assets/images/homepage/avatar-04.4c576192.jpg"),
        },
        {
          id: 5,
          paitentName: "Mohammad W",
          doctorName: "Sara Alsrsara",
          rate: 4,
          description: "Greate App i hope add some feature in futuer",
          date: "11/12/2024 10:20 AM",
          doctorImg: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
          paitentImg: require("@/assets/images/homepage/avatar-04.4c576192.jpg"),
        },
        {
          id: 6,
          paitentName: "Maher maher^2",
          doctorName: "Lanaya Assassin",
          rate: 2.7,
          description: "GG",
          date: "11/12/2024 10:20 AM",
          doctorImg: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
          paitentImg: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
        },
        {
          id: 7,
          paitentName: "sami doubleS",
          doctorName: "Sara Alsrsara",
          rate: 2.5,
          description: "Hello My son dont forget to bring with you a 1k milk and some onuion",
          date: "11/12/2024 10:20 AM",
          doctorImg: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
          paitentImg: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
        },
        {
          id: 8,
          paitentName: "Ammar Alammar",
          doctorName: "Malek Almalek",
          rate: 2.5,
          description: "GG",
          date: "11/12/2024 10:20 AM",
          doctorImg: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
          paitentImg: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
          img: require("@/assets/images/homepage/avatar-04.4c576192.jpg"),
        },
        {
          id: 9,
          paitentName: "Mohammad mohammad",
          doctorName: "Sara Alsrsara",
          rate: 1.5,
          description: "plases value make fact idea more usefull not like this!!",
          date: "11/12/2024 10:20 AM",
          doctorImg: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
          paitentImg: require("@/assets/images/homepage/avatar-04.4c576192.jpg"),
        },
        {
          id: 10,
          paitentName: "Ahmad A3'ead",
          doctorName: "Bassel Albassel",
          rate: 3.5,
          description: "GG Nothing to say ",
          date: "11/12/2024 10:20 AM",
          doctorImg: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
          paitentImg: require("@/assets/images/homepage/avatar-04.4c576192.jpg"),
        },
        {
          id: 11,
          paitentName: "Mohammad Mahmmoud",
          doctorName: "Sara Alsrsara",
          rate: 4.5,
          description: "Great website make life more easily",
          date: "11/12/2024 10:20 AM",
          doctorImg: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
          paitentImg: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
        },
        {
          id: 12,
          paitentName: "Mutaz  AlMutaz son of Mutaz AlMutaz",
          doctorName: "jhaad Almojahed",
          rate: 1,
          description: "There is a issuse in choose appointment something like bug i hope fix it",
          date: "8/05/2022 09:43 AM",
          doctorImg: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
          paitentImg: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
          img: require("@/assets/images/homepage/avatar-04.4c576192.jpg"),
        },
        {
          id: 13,
          paitentName: "Omar AlOmar",
          doctorName: "Bassel Albassel",
          rate: 4.5,
          description: "Thankfull to doctor malek he help me alot",
          date: "10/08/2021 01:30 PM",
          doctorImg: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
          paitentImg: require("@/assets/images/homepage/avatar-04.4c576192.jpg"),
        },
      ],
    };
  },
  computed:{
        filteredData(){
            if(!this.searchInput){
                return this.reviews;
            }
            return this.reviews.filter((item)=> 
                item.paitentName.toLowerCase().includes(this.searchInput.toLowerCase()) ||
                item.doctorName.toLowerCase().includes(this.searchInput.toLowerCase()) ||
                item.description.toLocaleLowerCase().includes(this.searchInput.toLocaleLowerCase()) ||
                item.date.includes(this.searchInput) ||
                String(item.rate).includes(this.searchInput)
            );
        },
        
    },
  methods: {
    // this method to cut description if it greater than 5 word and put "..." to point there is complete to this description
    cutText(text){
      let newText = text;
      if(newText.split(' ').length > 5){
        newText = newText.split(' ').slice(0 , 5).join(' ') + '....';
      }
      return newText;
    },
    // when search to set page number 1
    resetToFirstPage(){
      this.$refs.pagination.currentPage = 1;
    },
    // to set page number x data in variable[array contains rows for this page] (table view this variable).
    //  Example :if we was in page number 1 when we turn to page 2 (this method fired) and we put in variable paginatiedData new rows to display them. 
    handlePaginatedDataUpdate(newPaginatedData) {
      this.paginatedData = newPaginatedData;
    },
    /*createRate(rateNumber) {
      let fullStar = `<i class="fa-solid fa-star text-warning  full-star"></i>`;
      let halfStar = `<i class="fa-solid fa-star-half-stroke text-warning  half-star"></i>`;
      let emptyStar = ` <i class="fa-regular fa-star text-warning empty-star"></i>`;
      let rate = Math.round(rateNumber * 2) / 2;
      if (rate < 0 || rate > 5) {
        return `<p>Invalid rating</p>`;
      }
      let fullStartsCount = Math.floor(rate);
      let hasHalfStar = rate % 1 !== 0;
      let emptyStarsCount = 5 - fullStartsCount - (hasHalfStar ? 1 : 0);

      return (
        fullStar.repeat(fullStartsCount) +
        (hasHalfStar ? halfStar : "") +
        emptyStar.repeat(emptyStarsCount)
      );
    },*/
  },
  // mounted(){
  //   console.log(this.cutText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maxime, illo numquam voluptates, possimus ab quae quos commodi, nam esse placeat iusto? Atque consequatur dignissimos, iure quo vel sunt placeat?'));
  // }
};
</script>

