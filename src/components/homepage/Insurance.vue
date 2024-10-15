<template>
  <section class="py-5" id="insurance">
    <div class="container">
      <div class="text-center">
        <h1 class="sp-title">Accepted Insurance</h1>
      </div>
      <Carousel
        :value="companies"
        :numVisible="3"
        :numScroll="3"
        :responsiveOptions="responsiveOptions"
        circular
      >
        <template #item="slotProps">
          <div>
            <div>
              <div class="text-center">
                <img
                  :src="slotProps.data.img"
                  width="200px"
                  height="200px"
                  class="img-fit"
                />
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import Carousel from "primevue/carousel";
</script>

<script>
export default {
  data() {
    return {
      companies: [
        {
          id: 1,
          img: require("@/assets/images/homepage/i1.svg"),
        },
        {
          id: 2,
          img: require("@/assets/images/homepage/i2.svg"),
        },
        {
          id: 3,
          img: require("@/assets/images/homepage/i3.svg"),
        },
        {
          id: 4,
          img: require("@/assets/images/homepage/i4.svg"),
        },
        {
          id: 5,
          img: require("@/assets/images/homepage/i5.svg"),
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
