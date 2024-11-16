<template>
  <nav aria-label="Page navigation example" class="w-100 mt-3 mb-3 d-flex justify-content-center">
    <ul class="pagination">
      <!-- Pervious button -->
      <li class="page-item">
        <button type="button" class="page-link" @click="prevPage" :disabled="currentPage === 1" > Previous</button>
      </li>
      <!-- pages number -->
      <li :class="['page-item', { activePage: currentPage === page }]" v-for="page in paginationPages" :key="page" @click="goToPage(page)">
        <button  class="page-link" :disabled="page === '...' || page == currentPage"> {{ page }} </button>
      </li>
      <!-- Next button -->
      <li class="page-item">
        <button type="button" class="page-link" @click="nextPage" :disabled="currentPage === totalPages"> Next</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
    };
  },
  props: {
    data: {
      Type: Array,
      require: true,
    },
    itemsPerPage:{
      Type:Number ,
      require:true,
    }
  },
  computed: {
    // calculate number of pages by (total number of rows / number of row per page)
    // Example: we have array contains 100 item and we want display 10 item per page  (100/10 = 10 pages)
    totalPages() {
      return Math.ceil(this.data.length / this.itemsPerPage);
    },

    // divied total items into arrays
    paginatedData() {
      // take page we stand on it (after subtract 1) * item per page ex(2-1*10 => 1* 10 = 10) and this is start point  
      let start = (this.currentPage - 1) * this.itemsPerPage;
      // end point set by add on start point number of item per page ex(10 + 10 = 20) and this is end point
      let end = start + this.itemsPerPage;
      // we sliced main data array from start point to end point and return this slice
      return this.data.slice(start, end);
    },

    //  this method to set a array and this array contains all number pages and even '...' (what display in pagination)
    paginationPages() {
      let pages = [];
      if(this.totalPages === 1){
        pages.push(1);
      }
      else{ let totalPagesToShow = 3;
      let totalPages = this.totalPages;
      pages.push(1);
      if (totalPages <= totalPagesToShow + 2) {
        for (let i = 2; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        if (this.currentPage > 3) {
          pages.push("...");
        }
        for (
          let i = Math.max(2, this.currentPage - 1);
          i <= Math.min(totalPages, this.currentPage + 1);
          i++
        ) {
          pages.push(i);
        }
        if (this.currentPage < totalPages - 1) {
          pages.push("...");
        }
        if (totalPages > 1 && !pages.includes(totalPages)) {
          pages.push(totalPages);
        }
      }
    }
     
      return pages;
    },
  },
  methods: {
    // when press Prevent page (this method fired) and we subtract from current page 1
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    // when press Next page (this method fired) and we add on current page 1
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    //  when we press on a number of page (this method fired) and page in current page to display it.
    goToPage(page) {
      if (page !== "...") {
        // while we are not pressing on '...' we put page in cureent page
        this.currentPage = page;
      }
    },
  },
  watch: {
    // watch if there any change from perant
    paginatedData(newValue) {
      this.$emit("updatePaginatedData", newValue);
    },
  },
  mounted() {
    // Emit initial paginated data when the component is mounted
    this.$emit("updatePaginatedData", this.paginatedData);
    console.log(this.itemPerPage);
  },
};
</script>
