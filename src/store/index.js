import { createStore } from "vuex";
import LoginModule from "@/store/dashboard/admin/login.js";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login: LoginModule,
  },
});
