<template>
  <nav class="navbar navbar-expand-lg bg-light sticky-top py-3" id="main-nav">
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
            <a class="nav-link article-link" aria-current="page" href="#home"
              >Home</a
            >
          </li>
          <li class="nav-item px-3">
            <a class="nav-link article-link" href="#doctors">Doctors</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link article-link" id="test" href="#articles"
              >Articles</a
            >
          </li>
          <li class="nav-item px-3">
            <a class="nav-link article-link" href="#faq">FAQ</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link article-link" href="#insurance">Insurance</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link article-link" href="#work">Get Started</a>
          </li>
        </ul>
      </div>
      <div class="float-end">
        <Button
          @click="toggle()"
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

<script setup>
import Button from "primevue/button";

function toggle() {
  document.documentElement.classList.toggle("my-app-dark");
}
</script>
