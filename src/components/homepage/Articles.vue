<template>
  <section class="bg-light py-5 best" id="articles">
    <div class="container" data-aos="zoom-in-up" data-aos-duration="1000">
      <div class="text-center mb-5">
        <h1 class="sp-title">Latest Articles</h1>
      </div>
      <div class="row">
        <div
          class="col-lg-6 col-md-6 col-12 mb-4"
          v-for="article in articles"
          :key="article"
        >
          <Card>
            <template #content>
              <div class="row">
                <div class="col-lg-4 col-md-4 col-12">
                  <img :src="article.cover" class="rounded img-fluid w-full" />
                </div>
                <div class="col">
                  <div>
                    <Tag
                      :value="article.author"
                      icon="pi pi-user"
                      class="me-3"
                    />
                    <Tag :value="article.date" icon="pi pi-calendar-clock" />
                  </div>
                  <div class="mt-2">
                    <h6>
                      <a href="#" class="article-link">{{ article.title }}</a>
                    </h6>
                    <h6 class="font-light article-sub">
                      {{ article.subtitle }}
                    </h6>
                  </div>
                  <div>
                    <Button label="Read More" />
                  </div>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from "primevue/card";
import Tag from "primevue/tag";
import Button from "primevue/button";
</script>

<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "Navigating Telehealth: A Guide to Virtual Healthcare Visits",
          subtitle:
            "Explore the benefits & challenges of virtual healthcare appointments, along with tips for making good health.",
          author: "John Doe",
          date: "12 Oct, 2024",
          cover: require("@/assets/images/homepage/articles1.jpg"),
        },
        {
          id: 2,
          title: "Work-Life Harmony: Balancing Career and Personal Wellness",
          subtitle:
            "Uncover strategies to achieve a harmonious balance between professional commitments and personal well-being.",
          author: "Darren Elder",
          date: "10 Oct, 2024",
          cover: require("@/assets/images/homepage/articles2.jpg"),
        },
        {
          id: 3,
          title: "Sleep Solutions: Unveiling the Secrets to a Restful Night",
          subtitle:
            "Explore importance of quality sleep & learn tips to improve your sleep, ensuring you wake up",
          author: "Ruby Perrin",
          date: "5 Oct, 2024",
          cover: require("@/assets/images/homepage/articles3.jpg"),
        },
        {
          id: 4,
          title:
            "Mental Wellness in a Digital Age: Strategies for a Healthy Mind Online",
          subtitle:
            "Delve into the impact of digital life on mental health & discover practical strategies to maintain mental well-being.",
          author: "Sofia Brient",
          date: "4 Oct, 2024",
          cover: require("@/assets/images/homepage/articles4.jpg"),
        },
      ],
    };
  },
};
</script>
