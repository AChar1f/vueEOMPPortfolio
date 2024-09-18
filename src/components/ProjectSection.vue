<template>
  <div class="container d-flex col-xl-8">
    <div class="row gap-3 mb-3 justify-content-center" v-if="projects?.length">
      <h2>Projects</h2>
      <Card v-for="(content, id) in projects" :key="id">
        <template #cardHeader>
          <img
            class="img-fluid"
            :src="content.img_url"
            :alt="content.projectName"
            loading="lazy"
          />
        </template>
        <template #cardBody>
          <h5>{{ content.projectName }}</h5>
          <p>{{ content.description }}</p>
          <a :href="content.gitHub" target="_blank"
            ><button type="button" class="btn">
              <i class="bi bi-github"></i></button
          ></a>
          <a :href="content.vercel" target="_blank"
            ><button type="button" class="btn">
              <i class="bi bi-triangle-fill"></i></button
          ></a>
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
const projects = computed(() => store.state.projects);

onMounted(() => {
  store.dispatch("fetchProjects");
});
</script>

<style scoped>
.btn {
  margin-inline: 2.2rem;
  background-color: black;
  color: white;
  &:hover {
    background-color: black;
    color: #d2a907;
    border: 1px solid #d2a907;
    transform: scale(1.2);
  }
}
</style>
