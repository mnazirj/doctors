<template>
  <section class="best">
    <div class="container">
      <h1 class="sp-title font-medium">Best Doctors</h1>
      <Carousel
        :value="doctors"
        :numVisible="4"
        :numScroll="1"
        circular
        :responsiveOptions="responsiveOptions"
        class="py-5"
      >
        <template #item="slotProps">
          <div class="rounded m-2 bg-white">
            <div class="mb-4">
              <div class="relative mx-auto">
                <img
                  :src="slotProps.data.img"
                  :alt="slotProps.data.name"
                  class="rounded-bottom-0 rounded img-fluid w-full"
                />
                <Tag
                  :value="slotProps.data.star"
                  severity="primary"
                  icon="pi pi-star-fill"
                  icon-pos="center"
                  class="absolute"
                  style="left: 5px; top: 5px"
                />
              </div>
            </div>
            <div class="font-medium px-2">
              <h5>{{ slotProps.data.name }}</h5>
            </div>
            <div>
              <p class="font-light px-2">{{ slotProps.data.spec }}</p>
            </div>
            <hr class="mx-auto mb-2" style="width: 95%" />
            <div class="p-2 pt-0">
              <Tag
                :value="slotProps.data.location"
                icon="pi pi-map-marker"
                severity="primary"
              />
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import Button from "primevue/button";
import Carousel from "primevue/carousel";
import Tag from "primevue/tag";
</script>

<script>
export default {
  data() {
    return {
      doctors: [
        {
          name: "Dr. Ruby perrin",
          spec: "Cardiology",
          star: 4.5,
          location: "Newyouk, USA",
          img: require("@/assets/images/doctor5.jpg"),
        },
        {
          name: "Dr. Jhon Doe",
          spec: "Cardiology",
          star: 4.3,
          location: "Newyouk, USA",
          img: require("@/assets/images/doctor6.jpg"),
        },
        {
          name: "Dr. Darren Elder",
          spec: "Cardiology",
          star: 4.4,
          location: "Newyouk, USA",
          img: require("@/assets/images/doctor7.jpg"),
        },
        {
          name: "Dr. Paul Richard",
          spec: "Cardiology",
          star: 4.2,
          location: "Newyouk, USA",
          img: require("@/assets/images/doctor8.jpg"),
        },
        {
          name: "Dr. Sofia perrin",
          spec: "Cardiology",
          star: 4.0,
          location: "Newyouk, USA",
          img: require("@/assets/images/doctor5.jpg"),
        },
        {
          name: "Dr. Ruby Paul",
          spec: "Cardiology",
          star: 4.1,
          location: "Newyouk, USA",
          img: require("@/assets/images/doctor6.jpg"),
        },
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
