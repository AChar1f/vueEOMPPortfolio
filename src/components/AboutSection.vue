<template>
  <div class="container">
    <div class="row align-items-center">
      <h2>About</h2>
      <div v-if="about?.length" class="col pt-5">
        <p>
          {{ about[0]?.part1 }}
        </p>
        <p>
          {{ about[0]?.part2 }}
        </p>
        <p>
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
.container{
  background:url("https://achar1f.github.io/projectimages/images/about-bg.jpg") no-repeat center 30%;
}
.row{
  backdrop-filter: brightness(40%);
}
</style>
