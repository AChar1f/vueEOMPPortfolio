<template>
  <div class="container-fluid">
    <div class="row">
      <h2>Testimonials</h2>
    </div>
    <div
      class="row justify-content-center gap-3 mb-3"
      v-if="testimonials?.length"
    >
      <Card v-for="(content, id) in testimonials" :key="id">
        <template #cardHeader>
          <img
            class="img-fluid"
            :src="content.img_url"
            :alt="content.name"
            loading="lazy"
          />
        </template>
        <template #cardBody>
          <h5>{{ content.name }}</h5>
          <h6>{{ content.affiliation }}</h6>
          <p>{{ content.quote }}</p>
        </template>
      </Card>
    </div>
    <Spinner v-else />
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Card from "./CardComp.vue";
import Spinner from "./SpinnerComp.vue";

const store = useStore();
const testimonials = computed(() => store.state.testimonials);

onMounted(() => store.dispatch("fetchTestimonials"));
</script>

<style scoped></style>
