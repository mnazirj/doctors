<template>
  <div
    class="table-continer d-flex flex-wrap justify-content-center align-content-center shadow shadow-3 ms-auto me-auto pt-4 pb-4 mt-4 mb-4 rounded rounded-4"
  >
    <div class="table-responsive">
      <table class="table table-hover">
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
        <tbody class="table-group-divider align-middle">
          <tr v-for="review in paginatedData" :key="review.id">
            <td>
              <img
                :src="review.paitentImg"
                alt="paitent-image"
                class="table-img"
              />
            </td>
            <td>
              <span>{{ review.paitentName }}</span>
            </td>
            <td>
              <img
                :src="review.doctorImg"
                alt="doctor-image"
                class="table-img"
              />
            </td>
            <td>
              <span>{{ review.doctorName }}</span>
            </td>
            <!-- <td v-html="createRate(review.rate)"></td> -->
            <td>
              <Rating v-model="rate" readonly />
            </td>
            <td>{{ review.description }}</td>
            <td>{{ review.data }}</td>
            <td>
              <button type="button" class="btn btn-primary me-1 ms-1">
                <i class="pi pi-pen-to-square"></i>
              </button>
              <button type="button" class="btn btn-danger me-1 ms-1">
                <i class="pi pi-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination
      :data="reviews"
      :itemsPerPage="5"
      @updatePaginatedData="handlePaginatedDataUpdate"
    />
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
      paginatedData: [],
      rate: 3.5,
      reviews: [
        {
          id: 1,
          paitentName: "Mohammad GG",
          doctorName: "Sara Alsrsara",
          rate: 5,
          description: "GG",
          date: "11/12/2024 10:20 AM",
          doctorImg: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
          paitentImg: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
        },
        {
          id: 1,
          paitentName: "Mohammad GG",
          doctorName: "Sara Alsrsara",
          rate: 2.5,
          description: "GG",
          date: "11/12/2024 10:20 AM",
          doctorImg: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
          paitentImg: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
          img: require("@/assets/images/homepage/avatar-04.4c576192.jpg"),
        },
        {
          id: 2,
          paitentName: "Mohammad GG",
          doctorName: "Sara Alsrsara",
          rate: 3.5,
          description: "GG",
          date: "11/12/2024 10:20 AM",
          doctorImg: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
          paitentImg: require("@/assets/images/homepage/avatar-04.4c576192.jpg"),
        },
        {
          id: 3,
          paitentName: "Mohammad GG",
          doctorName: "Sara Alsrsara",
          rate: 4,
          description: "GG",
          date: "11/12/2024 10:20 AM",
          doctorImg: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
          paitentImg: require("@/assets/images/homepage/avatar-04.4c576192.jpg"),
        },
        {
          id: 4,
          paitentName: "Mohammad GG",
          doctorName: "Sara Alsrsara",
          rate: 2.7,
          description: "GG",
          date: "11/12/2024 10:20 AM",
          doctorImg: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
          paitentImg: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
        },
        {
          id: 5,
          paitentName: "Mohammad GG",
          doctorName: "Sara Alsrsara",
          rate: 2.5,
          description: "GG",
          date: "11/12/2024 10:20 AM",
          doctorImg: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
          paitentImg: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
        },
        {
          id: 6,
          paitentName: "Mohammad GG",
          doctorName: "Sara Alsrsara",
          rate: 2.5,
          description: "GG",
          date: "11/12/2024 10:20 AM",
          doctorImg: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
          paitentImg: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
          img: require("@/assets/images/homepage/avatar-04.4c576192.jpg"),
        },
        {
          id: 7,
          paitentName: "Mohammad GG",
          doctorName: "Sara Alsrsara",
          rate: 3.5,
          description: "GG",
          date: "11/12/2024 10:20 AM",
          doctorImg: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
          paitentImg: require("@/assets/images/homepage/avatar-04.4c576192.jpg"),
        },
        {
          id: 8,
          paitentName: "Mohammad GG",
          doctorName: "Sara Alsrsara",
          rate: 3.5,
          description: "GG",
          date: "11/12/2024 10:20 AM",
          doctorImg: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
          paitentImg: require("@/assets/images/homepage/avatar-04.4c576192.jpg"),
        },
        {
          id: 9,
          paitentName: "Mohammad GG",
          doctorName: "Sara Alsrsara",
          rate: 2.7,
          description: "GG",
          date: "11/12/2024 10:20 AM",
          doctorImg: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
          paitentImg: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
        },
        {
          id: 10,
          paitentName: "Mohammad GG",
          doctorName: "Sara Alsrsara",
          rate: 1,
          description: "GG",
          date: "11/12/2024 10:20 AM",
          doctorImg: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
          paitentImg: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
          img: require("@/assets/images/homepage/avatar-04.4c576192.jpg"),
        },
        {
          id: 11,
          paitentName: "Mohammad GG",
          doctorName: "Sara Alsrsara",
          rate: 4.5,
          description: "GG",
          date: "11/12/2024 10:20 AM",
          doctorImg: require("@/assets//images//homepage/avatar-03.bcd54570.jpg"),
          paitentImg: require("@/assets/images/homepage/avatar-04.4c576192.jpg"),
        },
      ],
    };
  },
  methods: {
    handlePaginatedDataUpdate(newPaginatedData) {
      this.paginatedData = newPaginatedData;
    },
    createRate(rateNumber) {
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
    },
  },
};
</script>
