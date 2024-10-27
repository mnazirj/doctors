<template>
  <nav
    aria-label="Page navigation example"
    class="w-100 mt-3 mb-3 d-flex justify-content-center"
  >
    <ul class="pagination">
      <li class="page-item">
        <button
          type="button"
          class="page-link"
          @click="prevPage"
          :disabled="currentPage === 1"
        >
          Previous
        </button>
      </li>
      <li
        :class="['page-item', { activePage: currentPage === page }]"
        v-for="page in paginationPages"
        :key="page"
        @click="goToPage(page)"
      >
        <button
          class="page-link"
          :disabled="page === '...' || page == currentPage"
        >
          {{ page }}
        </button>
      </li>
      <li class="page-item">
        <button
          type="button"
          class="page-link"
          @click="nextPage"
          :disabled="currentPage === totalPages"
        >
          Next
        </button>
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
    totalPages() {
      return Math.ceil(this.data.length / this.itemsPerPage);
    },
    paginatedData() {
      let start = (this.currentPage - 1) * this.itemsPerPage;
      let end = start + this.itemsPerPage;
      return this.data.slice(start, end);
    },
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
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(page) {
      if (page !== "...") {
        this.currentPage = page;
      }
    },
  },
  watch: {
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
