<template>
  <div class="container-fluid Edu">
    <div class="row py-3">
      <h2>Education</h2>
    </div>
    <div class="row" v-if="Education?.length">
      <div class="col pb-2" v-for="(content, id) in Education" :key="id">
        <h5>{{ content.schoolName }} {{ content.location }}</h5>
        <h5>{{ content.level }}</h5>
        <h6>{{ content.duration }}</h6>
        <h6>{{ content.qualification }}</h6>
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
const Education = computed(() => store.state.education);
onMounted(() => store.dispatch("fetchEducation"));
</script>

<style scoped>
.Edu {
  border: 3px solid white;
  background-image: linear-gradient(180deg, black 65%,#232323) ;
}
</style>
