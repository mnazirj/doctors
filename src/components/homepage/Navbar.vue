<script setup>
import Button from "primevue/button";
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary py-3">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../../assets/images/homepage/logo.svg" alt="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-around"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item px-3">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="#">Doctors</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="#">Blogs</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="#">Pharmacy</a>
          </li>
        </ul>
      </div>
      <div class="float-end">
        <Button
          @click="toggleDarkMode"
          icon="pi pi-user"
          as="router-link"
          to="/"
          raised
          rounded
          size="normal"
        />
      </div>
    </div>
  </nav>
</template>

<script>
function toggleDarkMode() {
  document.documentElement.classList.toggle("my-app-dark");
}
</script>
