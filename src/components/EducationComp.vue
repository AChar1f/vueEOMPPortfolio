<template>
  <div class="container Edu">
    <div class="row pt-3">
      <h4 class="display-4">Education</h4>
    </div>
    <div class="row">
      <div class="col pb-2" v-for="(content, id) in Education" :key="id">
        <h4>{{ content.schoolName }} {{ content.location }}</h4>
        <h5>{{ content.level }}</h5>
        <h5>{{ content.duration }}</h5>
        <h6>{{ content.qualification }}</h6>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

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
