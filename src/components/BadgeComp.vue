<template>
    <div class="container col-8 col-xxl-8">
    <div v-if="badges?.length" class="row justify-content-center gap-3">
    <Card v-for="(content, id) in badges" :key="id" class="nospace">
        <template #cardHeader>
            <img :src="content.img" :alt="content.course" loading="lazy">
        </template>
        <template #cardBody>
            <h6>{{ content.course }}</h6>
            <button class="btn"><a :href="content.pdf" target="_blank"><i class="bi bi-download"></i></a></button>
        </template>
    </Card>
    </div>
    <Spinner v-else />
    </div>
</template>

<script setup>
import Card from "./CardComp.vue";
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import Spinner from './SpinnerComp.vue'

const store = useStore()
const badges = computed(() => store.state.badges)

onMounted (() => {
    store.dispatch("fetchBadges")
})
</script>

<style scoped>

img{
    width: 10rem;
}

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

a {
    text-decoration: none;
    color: white;
}
</style>