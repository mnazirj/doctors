<template>
  <section class="py-5" id="faq">
    <div class="container" data-aos="zoom-in-up" data-aos-duration="1000">
      <div>
        <h6 class="text-primary">Get Your Answer</h6>
        <h1 class="sp-title">Frequently Asked Questions</h1>
      </div>
      <div class="row">
        <div class="col d-none d-lg-block">
          <img src="../../assets/images/homepage/faq.png" class="img-fluid" />
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="col" v-for="item in faq" :key="item.id">
            <Panel
              :header="item.question"
              class="bg-light border-0"
              toggleable
              :collapsed="item.id != 1"
              ref="pan"
              @click="toggle(item.id - 1)"
            >
              <hr />
              <p class="article.sub">
                {{ item.answer }}
              </p>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Panel from "primevue/panel";
import { ref } from "vue";
const pan = ref(null);
const toggle = (index) => {
  //Loop inside all instance and collapse all
  for (let i = 0; i < pan.value.length; i++) {
    pan.value[i].d_collapsed = true;
  }
  //call toggle event to expand the current clicking
  pan.value[index].toggle();
};
</script>

<script>
export default {
  data() {
    return {
      faq: [
        {
          id: 1,
          question:
            "Can i make an Appointment Online with White Plains Hospital Kendi?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        },
        {
          id: 2,
          question:
            "Can i make an Appointment Online with White Plains Hospital Kendi?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        },
        {
          id: 3,
          question:
            "Can i make an Appointment Online with White Plains Hospital Kendi?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        },
        {
          id: 4,
          question:
            "Can i make an Appointment Online with White Plains Hospital Kendi?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        },
        {
          id: 5,
          question:
            "Can i make an Appointment Online with White Plains Hospital Kendi?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        },
      ],
    };
  },
};
</script>
