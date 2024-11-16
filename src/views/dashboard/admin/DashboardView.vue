<template>
  <!-- <Navbar /> -->
  <div class="container-fluid row ">
    <Sidebar />
    
    <div class="main col">
        <div class="w-100 d-flex mb-2 align-items-center">
          <!-- Breadcrumb -->
          <nav class="w-50" style="--bs-breadcrumb-divider: '/';" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li v-for="(crumb, i) in breadcrumbs" :key="i" class="breadcrumb-item">
                  <router-link :to="crumb.to">
                    <i :class="crumb.icon"></i>
                    {{ crumb.label }}
                  </router-link>
                </li>
              </ol>
          </nav>
          <!-- Languages Selector -->
          <div class="w-50 d-flex justify-content-end ">
            <!-- <div class="d-flex align-items-center">
              <i class="fa-solid fa-language me-1 text-main-color"></i>
              <span class="me-2">Language </span>
            </div> -->
            <FloatLabel class="w-fit md:w-56" variant="on">
              <Select v-model="selectedLang" :options="languages" optionLabel="name" placeholder="Select a Language" class="w-full h-fit md:w-56" @change="test">
                <template #value="slotProps">
                  <div v-if="slotProps.value" class="flex items-center">
                      <img :alt="slotProps.value.label" :src="slotProps.value.icon" :class="`mr-2 flag`" style="width: 18px" />
                      <div>{{ slotProps.value.name }}</div>
                  </div>
                  <span v-else>
                      {{ slotProps.placeholder }}
                  </span>
                </template>
                <template #option="slotProps">
                    <div class="flex items-center">
                        <img :alt="slotProps.option.label" :src="slotProps.option.icon" :class="`mr-2 flag`" style="width: 18px" />
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
    </div>
  </div>
</template>

<script>
// import Navbar from "@/components/dashboard/Navbar.vue";
import Sidebar from "@/components/dashboard/Sidebar.vue";
import Select from 'primevue/select';
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
      selectedLang: {
          name:"English",
          value:'en',
          icon:require("@/assets/images/dashboards/global/us.svg"),
        },
      languages:[
        {
          name:"Arabic",
          value:'ar',
          icon: require("@/assets/images/dashboards/global/sy.svg"),
        },
        {
          name:"English",
          value:'en',
          icon:require("@/assets/images/dashboards/global/us.svg"),
        }
      ]
    }
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
};
</script>


<style scoped>
a {
    color:inherit !important;
}
.breadcrumb-item a:hover i{
  color: #2563eb;
}
/*  Language Selector */
.p-select:is(.p-select-open) .p-select-dropdown i {
  color: #2563eb;
}
/* .collapseing {
  transition: all 0.2s ease-in-out;
} */
.container-fluid{
    margin-left: 0px !important;
    margin-right: 0px !important;
    padding-left: 0px !important;
}
.main {
    min-height: calc(100% - 4rem);
    margin-top: 0.3rem;
    transition: all 0.2s ease-in-out ;
    /* margin-left: 19rem; */
}
/* #sidebar + .main {
  width: calc(100% - 16rem);
  margin-left: 19rem !important;
} */
.sidebar:is(.show) + .btn-toggle-continer + .main {
  /* width: calc(100% - 19rem); */
  margin-left: 19rem !important;
}
.sidebar:not(.show) + .btn-toggle-continer + .main {
  /* width: calc(100% - 3rem); */
  margin-left: 3rem !important;
}
/* table */
.page-link{
    color: #005e8a;
}
/* tables */
::v-deep .table{
  white-space: nowrap;
  text-align: center;
}
/*::v-deep .table-continer div table{
      width: 100%;
       margin: auto; 
  }*/
  ::v-deep  table thead tr th:first-child{
      border-top-left-radius: 0.4rem;
  }
  ::v-deep .table-continer div table thead tr th:last-child{
      border-top-right-radius: 0.4rem;
  }
  ::v-deep table tbody tr td {
      padding-left: 1rem;
      padding-right: 1rem ;
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
      cursor:auto;
  }
  /* table set header color */
  ::v-deep thead th {
  background: transparent;
}
::v-deep thead{
  background: linear-gradient(90deg, #185aea , #4f7cdc , #1a5cea);
  
}
  /* search */
  @media (max-width:768px) {
    ::v-deep .search {
        width: 90%;
    }
}
 @media (min-width:768px){
  ::v-deep .search{
    width: 50%;
  }
}
/* modal */
::v-deep .modal-footer{
  border-top: none;
}
/* Rate */
::v-deep .p-rating-option , .p-rating-option-active{
  cursor: default !important;
}
::v-deep .p-rating-option-active .p-rating-icon {
  color:#2563eb ;
}
::v-deep .p-rating-icon{
  color: #2563eb;
}


</style>
