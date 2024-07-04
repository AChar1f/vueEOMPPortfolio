<template>
  <div class="container-fluid py-3 XP">
    <div class="row pb-3">
      <h2>Experience</h2>
    </div>
    <div class="row" v-if="Experience?.length">
      <div class="col" v-for="(content, id) in Experience" :key="id">
        <h5>{{ content.role }}</h5>
        <h5>{{ content.location }}</h5>
        <h6>{{ content.duration }}</h6>
        <p>{{ content.description }}</p>
      </div>
    </div>
    <Spinner v-else/>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Spinner from './SpinnerComp.vue'

const store = useStore();
const Experience = computed(() => store.state.experience);
onMounted(() => store.dispatch("fetchExperience"));
</script>

<style scoped>
.XP {
  border: 3px solid white;
  background-image: linear-gradient(180deg, black 65%,#232323);
}
</style>
