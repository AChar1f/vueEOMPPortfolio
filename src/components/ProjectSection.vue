<template>
    <div class="container">
        <div class="row pt-5">
            <h2 class="display-2">Projects</h2>
        </div>
        <div class="row gap-3 mb-3 justify-content-center">
            <Card v-for="(content, id) in projects" :key="id">
                <template #cardHeader>
                    <img class="img-fluid" :src="content.img_url" :alt="content.projectName" loading="lazy">
                </template>
                <template #cardBody>
                    <h5>{{ content.projectName }}</h5>
                    <p>{{ content.description }}</p>
                    <a :href="content.gitHub" target="_blank"><button type="button" class="btn"><i class="bi bi-github"></i></button></a>
                    <a :href="content.vercel" target="_blank"><button type ="button" class="btn"><i class="bi bi-triangle-fill"></i></button></a>
                </template>
            </Card>
        </div>
    </div>
</template>

<script setup>
import  Card from './CardComp.vue'
import { computed, onMounted} from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const projects = computed(() => store.state.projects) 

onMounted(() => {
    store.dispatch('fetchProjects')
})
</script>

<style scoped>
    .btn{
        margin-inline: 0.5rem;
        background-color: black;
        color: whitesmoke;
        &:hover {
            background-color: gray;
            color: darkslategray;
        }
    }
</style>