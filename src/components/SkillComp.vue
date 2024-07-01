<template>
    <div class="container">
        <div class="row gap-3 justify-content-center mb-3">
            <Card v-for="(content, id) in skills" :key="id">
                <template #cardHeader>
                    <img loading="lazy" class="img-fluid" :src="content.img_url" :alt="content.skillName">
                </template>
                <template #cardBody>
                    <h5>{{ content.skillName }}</h5>
                </template>
            </Card>
        </div>
    </div>
</template>

<script setup>
import Card from './CardComp.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const skills = computed( () => store.state.skills)

onMounted( () => store.dispatch('fetchSkills'))
</script>

<style>
    
</style>