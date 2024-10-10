<script setup>
import Carousel from "primevue/carousel";
</script>

<template>
  <section class="py-5">
    <div class="container">
      <h1 class="sp-title">Specialities</h1>
      <Carousel
        :value="items"
        :numVisible="5"
        :numScroll="1"
        circular
        :responsiveOptions="responsiveOptions"
      >
        <template #item="slotProps">
          <div class="m-2 p-4">
            <div class="mb-4">
              <div class="relative mx-auto text-center">
                <img
                  :src="slotProps.data.img"
                  :alt="slotProps.data.name"
                  height="100"
                />
              </div>
            </div>
            <div class="mb-4 font-medium text-center">
              {{ slotProps.data.name }}
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: "Cardiology", img: require("@/assets/images/1.svg") },
        { name: "Neurology", img: require("@/assets/images/2.svg") },
        { name: "Urology", img: require("@/assets/images/3.svg") },
        { name: "Orthopedic", img: require("@/assets/images/4.svg") },
        { name: "Dentist", img: require("@/assets/images/5.svg") },
        { name: "Ophthalmology", img: require("@/assets/images/6.svg") },
      ],
      responsiveOptions: [
        {
          breakpoint: "1400px",
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: "1199px",
          numVisible: 5,
          numScroll: 1,
        },
        {
          breakpoint: "768px",
          numVisible: 3,
          numScroll: 1,
        },
        {
          breakpoint: "767px",
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: "575px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
    };
  },
};
</script>
