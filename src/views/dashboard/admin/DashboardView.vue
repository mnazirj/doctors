<template>
  <!-- <Navbar /> -->
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div
        id="sidebar-container"
        ref="sidebarContainer"
        class="col-auto px-0 shown"
      >
        <Sidebar />
      </div>

      <main ref="main" class="main col">
        <div
          class="btn-toggle-continer d-flex justify-content-center align-items-center p-0 fixed"
        >
          <button
            type="button"
            class="btn bg-main-color rounded-circle text-white"
            data-bs-toggle="collapse"
            data-bs-target="#sidebar"
            aria-expanded="false"
            aria-controls="sidebar"
            @click="toggleSidebarShown"
          >
            <i class="pi pi-list mt-1"></i>
          </button>
        </div>
        <div class="w-100 d-flex flex-wrap mb-2 align-items-center">
          <!-- Breadcrumb -->
          <nav
            class="w-50 d-flex justify-content-around "
            style="--bs-breadcrumb-divider: '/'"
            aria-label="breadcrumb"
          >
            <ol class="breadcrumb flex-nowrap w-75 ms-3">
              <li
                v-for="(crumb, i) in breadcrumbs"
                :key="i"
                class="breadcrumb-item "
              >
                <router-link class=" d-flex align-items-center flex-nowarp" :to="crumb.to">
                  <i :class="crumb.icon"></i>
                  <span>{{ crumb.label }}</span>
                </router-link>
              </li>
            </ol>
          </nav>
          <!-- Languages Selector -->
          <div class="w-47 d-flex justify-content-end">
            <FloatLabel class="w-fit" variant="on">
              <Select
                v-model="selectedLang"
                :options="languages"
                optionLabel="name"
                placeholder="Select a Language"
                class="w-full h-fit md:w-56"
                @change="test"
              >
                <template #value="slotProps">
                  <div v-if="slotProps.value" class="flex items-center">
                    <img
                      :alt="slotProps.value.label"
                      :src="slotProps.value.icon"
                      :class="`mr-2 flag`"
                      style="width: 18px"
                    />
                    <div>{{ slotProps.value.name }}</div>
                  </div>
                  <span v-else>
                    {{ slotProps.placeholder }}
                  </span>
                </template>
                <template #option="slotProps">
                  <div class="flex items-center">
                    <img
                      :alt="slotProps.option.label"
                      :src="slotProps.option.icon"
                      :class="`mr-2 flag`"
                      style="width: 18px"
                    />
                    <div>{{ slotProps.option.name }}</div>
                  </div>
                </template>
                <template #dropdownicon>
                  <i class="fa-solid fa-language me-1"></i>
                </template>
              </Select>
              <label for="on_label">Language</label>
            </FloatLabel>
          </div>
        </div>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
// import Navbar from "@/components/dashboard/Navbar.vue";
import Sidebar from "@/components/dashboard/Sidebar.vue";
import Select from "primevue/select";
import FloatLabel from "primevue/floatlabel";

export default {
  name: "DashboardView",
  components: {
    //Navbar,
    Sidebar,
    Select,
    FloatLabel,
  },
  data() {
    return {
      sidebarShown: true,
      selectedLang: {
        name: "English",
        value: "en",
        icon: require("@/assets/images/dashboards/global/us.svg"),
      },
      languages: [
        {
          name: "Arabic",
          value: "ar",
          icon: require("@/assets/images/dashboards/global/sy.svg"),
        },
        {
          name: "English",
          value: "en",
          icon: require("@/assets/images/dashboards/global/us.svg"),
        },
      ],
    };
  },
  computed: {
    breadcrumbs() {
      let crumbs = [];
      this.$route.matched.forEach((route) => {
        if (route.meta && route.meta.breadcrumb) {
          crumbs.push({
            label: route.meta.breadcrumb.name,
            icon: route.meta.breadcrumb.icon,
            to: { name: route.name },
          });
        }
      });
      return crumbs;
    },
  },
  methods: {
    toggleSidebarShown() {
      this.sidebarShown == true
        ? (this.sidebarShown = false)
        : (this.sidebarShown = true);
      if (this.sidebarShown == true) {
        this.$refs.sidebarContainer.classList.add("shown");
      } else {
        this.$refs.sidebarContainer.classList.remove("shown");
      }
    },
  },
};
</script>

<style scoped>
::v-deep a {
  color: inherit !important;
}
/* Breadcrumb */
.breadcrumb-item a:hover i {
  color: #2563eb;
}
/*  Language Selector */
.p-select:is(.p-select-open) .p-select-dropdown i {
  color: #2563eb;
}
/* Toggle Sidebar */

.container-fluid {
  margin-left: 0px !important;
  margin-right: 0px !important;
  padding-left: 0px !important;
}
.main {
  min-height: calc(100% - 4rem);
  margin-top: 0.3rem;
  transition: all 0.2s ease-in-out;
  /* margin-left: 19rem; */
}
#sidebar-container:is(.shown) + main {
  margin-left: 18rem !important;
}
#sidebar-container:not(.shown) + main {
  margin-left: 1.5rem !important;
}

/* table */
.page-link {
  color: #005e8a;
}
/* tables */
::v-deep .table {
  white-space: nowrap;
  text-align: center;
}
/*::v-deep .table-continer div table{
      width: 100%;
       margin: auto; 
  }*/
::v-deep table thead tr th:first-child {
  border-top-left-radius: 0.4rem;
}
::v-deep table thead tr th:last-child {
  border-top-right-radius: 0.4rem;
}
::v-deep table tbody tr td {
  padding-left: 1rem;
  padding-right: 1rem;
}
/* table which had image with name */
::v-deep .table-continer div table tbody tr td:has(img) {
  text-align: end;
}
::v-deep .table-continer div table tbody tr td:has(span) {
  text-align: start;
}
/* table pagination  */
::v-deep .table-continer nav ul li button:disabled {
  color: #727272;
  cursor: auto;
}
/* table set header color */
::v-deep thead th {
  background: transparent;
  color: #fff;
}
::v-deep thead {
  /* background: linear-gradient(90deg, #185aea , #4f7cdc , #1a5cea); */
  background: url("@/assets/images/homepage/bg-doc.jpg");
}
/* search */
@media (max-width: 768px) {
  ::v-deep .search {
    width: 60% !important;
    min-width: 60% !important;
  }
}
@media (min-width: 768px) {
  ::v-deep .search {
    width: 45% !important;
    min-width: 45% !important;
  }
}
@media (min-width: 1024px) {
  ::v-deep .search {
    width: 35% !important;
    min-width: 35% !important;
  }
}
/* modal */
::v-deep .modal-footer {
  border-top: none;
}
/* Rate */
::v-deep .p-rating-option,
.p-rating-option-active {
  cursor: default !important;
}
::v-deep .p-rating-option-active .p-rating-icon {
  color: #2563eb;
}
::v-deep .p-rating-icon {
  color: #2563eb;
}
</style>
