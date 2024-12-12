export default {
  state: {
    // user: null,
    isAuth: localStorage.getItem("isAuth") === "true",
  },
  getters: {
    isAuth: (state) => state.isAuth,
  },
  mutations: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
    // userLoader(state, newUser) {
    //   state.user = newUser;
    //   console.log(state.user);
    // },
  },
  actions: {
    login({ commit }) {
      // api
      commit("login");
      localStorage.setItem("isAuth", "true");
    },
    logout({ commit }) {
      //api
      commit("logout");
      localStorage.removeItem("isAuth");
    },
  },
};
