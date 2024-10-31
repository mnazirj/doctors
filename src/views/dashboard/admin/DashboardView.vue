<template>
  <Navbar />
  <div class="container-fluid row ">
    <Sidebar />
    <div class="main col">
        <div class="w-100">
            <h1 class="w-100">Welcome Admin !</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li
            v-for="(crumb, i) in breadcrumbs"
            :key="i"
            class="breadcrumb-item"
          >
            <router-link :to="crumb.to">{{ crumb.label }}</router-link>
          </li>
        </ol>
      </nav>
        </div>
       
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/dashboard/Navbar.vue";
import Sidebar from "@/components/dashboard/Sidebar.vue";
export default {
  name: "DashboardView",
  components: {
    Navbar,
    Sidebar,
  },
  computed: {
    breadcrumbs() {
      let crumbs = [];

        this.$route.matched.forEach((route) => {
        if (route.meta && route.meta.breadcrumb) {
          crumbs.push({
            label: route.meta.breadcrumb,
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
.container-fluid{
    margin-left: 0px !important;
    margin-right: 0px !important;
    padding-left: 0px !important;
}
/* table */
.page-link{
    color: #005e8a;
}
</style>
