<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-center align-items-center h-100vh">
      <div
        class="d-flex w-60 p-0 align-items-center justify-content-between h-50"
      >
        <div
          class="img-side d-flex justify-content-center align-items-center w-40 h-100 rounded-start-2"
        >
          <img
            src="@/assets/images/dashboards/admin/logo.svg"
            alt="Logo-image"
          />
        </div>
        <div class="bg-white w-60 h-100 rounded-end-2">
          <div class="text-center fs-3 text-muted mt-3 mb-3">
            <span>Login</span>
          </div>
          <div
            class="w-100 mt-5 mb-2 d-flex justify-content-center align-items-center"
          >
            <form class="w-66 mt-4" action="">
              <div class="mt-2 mb-4 w-100">
                <input
                  class="form-control"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  v-model="user.username"
                />
              </div>
              <div class="mt-2 mb-3 relative">
                <input
                  class="form-control"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  ref="passwordInput"
                  v-model="user.password"
                />
                <div class="show-toggle">
                  <i
                    ref="toggleIcon"
                    class="pi pi-eye text-muted"
                    @click="passwordShowHideToggle"
                  ></i>
                </div>
              </div>
              <div class="mt-2 mb-3 form-check">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  class="form-check-input"
                  v-model="rememberMe"
                />
                <label for="remember-me" class="form-check-label"
                  >Remember me</label
                >
              </div>
              <div class="w-100 d-flex justify-content-center mt-4">
                <button type="button" class="btn btn-main" @click="login">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rememberMe: false,
      user: {
        username: null,
        password: null,
        premisson: "admin",
      },
    };
  },
  methods: {
    passwordShowHideToggle() {
      if (this.$refs.passwordInput.type == "password") {
        this.$refs.passwordInput.type = "text";
        this.$refs.toggleIcon.classList.add("text-main-color");
        this.$refs.toggleIcon.classList.remove("text-mute");
      } else {
        this.$refs.passwordInput.type = "password";
        this.$refs.toggleIcon.classList.remove("text-main-color");
        this.$refs.toggleIcon.classList.add("text-mute");
      }
    },
    login() {
      this.$store.dispatch("login");
      this.$router.push({ name: "dash.admin" });
    },
  },
};
</script>

<style scoped>
.h-100vh {
  height: 100vh;
}
.img-side {
  background: linear-gradient(135deg, #4781ff, #2563eb, #1d4fbc);
}
.show-toggle {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
.show-toggle i:hover {
  cursor: pointer;
}
</style>
