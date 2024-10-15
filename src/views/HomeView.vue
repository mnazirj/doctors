<template>
  <Navbar />
  <Hero data-aos="fade-bottom" data-aos-duration="1500" />
  <Specialities data-aos="fade-top" data-aos-duration="1500" />
  <BestDoctors />
  <IntroWork />
  <Articles />
  <FAQ />
  <Insurance />
  <Footer />
  <ScrollTop />
</template>

<script setup>
import Navbar from "@/components/homepage/Navbar.vue";
import Hero from "@/components/homepage/Hero.vue";
import Specialities from "@/components/homepage/Specialities.vue";
import BestDoctors from "@/components/homepage/BestDoctors.vue";
import IntroWork from "@/components/homepage/IntroWork.vue";
import Articles from "@/components/homepage/Articles.vue";
import FAQ from "@/components/homepage/FAQ.vue";
import Insurance from "@/components/homepage/Insurance.vue";
import Footer from "@/components/homepage/Footer.vue";
import ScrollTop from "primevue/scrolltop";
</script>
