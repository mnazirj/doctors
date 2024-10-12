<template>
  <section class="bg-light py-5">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-8 col-md-8 col-12">
          <h1 class="col-lg-10 col-md-10">
            Consult <span class="text-primary">Best Doctors</span> Your Nearby
            Location.
          </h1>
          <p class="col-lg-8 col-md-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ipsa
            dicta tempore soluta voluptas ullam laboriosam quae assumenda
            laudantium deleniti!
          </p>
          <Button
            label="Start Consult"
            size="large"
            raised
            icon="pi pi-arrow-circle-right"
            icon-pos="right"
            severity="primary"
          />
        </div>
        <div class="col-lg-4 col-md-4 col-12">
          <img
            src="../../assets/images/homepage/hero-doctor.png"
            class="img-fluid"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "primevue/button";
</script>
