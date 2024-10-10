<template>
  <div class="container">
    <h3 class="text-danger">Hello World</h3>
    <Button label="Submit" />
    <Card style="width: 25rem; overflow: hidden">
      <template #header>
        <img
          alt="user header"
          src="https://picsum.photos/800/600"
          class="img-fluid"
        />
      </template>
      <template #title>Advanced Card</template>
      <template #subtitle>Card subtitle</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button label="Cancel" severity="secondary" outlined class="w-full" />
          <Button label="Save" class="w-full" @click="toggleDarkMode()" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import Button from "primevue/button";
import Card from "primevue/card";
</script>

<script>
function toggleDarkMode() {
  document.documentElement.classList.toggle("my-app-dark");
}
</script>
