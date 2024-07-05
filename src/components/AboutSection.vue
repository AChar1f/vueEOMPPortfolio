<template>
  <div class="container">
    <div class="row align-items-center">
      <h2>About</h2>
      <div v-if="about?.length" class="col pt-5">
        <h5>Background:</h5>
        <p>{{ about[0]?.part4 }}</p>
        <h5>My Mission:</h5>
        <p>{{ about[0]?.part5 }}</p>
        <h5>My Journey:</h5>
        <p>
          {{ about[0]?.part1 }}
          {{ about[0]?.part2 }}
          {{ about[0]?.part3 }}
        </p>
      </div>
      <Spinner v-else />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Spinner from "./SpinnerComp.vue";

const store = useStore();
const about = computed(() => store.state.about);

onMounted(() => {
  store.dispatch("fetchAbout");
});
</script>

<style scoped>
.container {
  background: url("https://achar1f.github.io/projectimages/images/about-bg.jpg")
    no-repeat 30%;
  background-size: cover;
}
.row {
  backdrop-filter: brightness(40%);
}
</style>
