<template>
  <div class="container">
    <div class="row align-items-center">
      <h2 class="display-2">About</h2>
      <div v-if="about?.length" class="col">
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
.row{
    height: 85.5vh;
}
</style>
