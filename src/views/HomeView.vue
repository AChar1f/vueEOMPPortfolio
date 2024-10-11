<template>
  <div class="container-fluid">
    <section class="row" id="landing">
      <Landing/>
    </section>
    <section class="row mt-5 d-flex justify-content-center" id="about">
      <About/>
      <div class="row mt-3">
      <Skills />
      <Awards />
    </div>
    </section>
    <section class="row mt-5" id="resume">
      <Resume/>
    </section>
    <section class="row mt-5" id="projects">
      <Projects/>
    </section>
    <section class="row mt-5" id="reachMe">
      <Form/>
    </section>
  </div>
</template>

<script>
import Landing from '@/components/LandingSection.vue'
import About from '@/components/AboutSection.vue'
import Skills from '@/components/SkillComp.vue'
import Projects from '@/components/ProjectSection.vue'
import Resume from '@/components/Resume.vue'
import Form from '@/components/ContactSection.vue'
import Awards from '@/components/AchievementsSection.vue'

export default {
  name: 'HomeView',
  components: {
    Landing, About, Skills, Projects, Resume, Form, Awards
  }
}
</script>
