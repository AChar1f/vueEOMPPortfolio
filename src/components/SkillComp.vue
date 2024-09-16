<template>
  <div class="container d-flex justify-content-center col-8">
    <div class="row">
    </div>
    <div class="row gap-3 justify-content-center mb-3" v-if="skills?.length">
      <h2>Skills</h2>
      <Card v-for="(content, id) in skills" :key="id">
        <template #cardHeader>
          <img
            loading="lazy"
            class="img-fluid"
            :src="content.img_url"
            :alt="content.skillName"
          />
        </template>
        <template #cardBody>
          <h5>{{ content.skillName }}</h5>
        </template>
      </Card>
    </div>
    <Spinner v-else />
  </div>
</template>

<script setup>
import Card from "./CardComp.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Spinner from "./SpinnerComp.vue";
const store = useStore();
const skills = computed(() => store.state.skills);

onMounted(() => store.dispatch("fetchSkills"));
</script>

<style scoped></style>
