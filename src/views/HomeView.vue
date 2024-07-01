<template>
  <div class="container">
    <section class="row" id="landing">
      <Landing/>
    </section>
    <section class="row" id="about">
      <About/>
    </section>
    <section class="row" id="resume">

    </section>
    <section class="row" id="projects">
      <Projects/>
    </section>
    <section class="row" id="testimonials">
      <Testimonials/>
    </section>
    <section class="row" id="reachMe">

    </section>
  </div>
</template>

<script>
import Landing from '@/components/LandingSection.vue'
import About from '@/components/AboutSection.vue'
import Testimonials from '@/components/TestimonialsSection.vue'
import Projects from '@/components/ProjectSection.vue'

export default {
  name: 'HomeView',
  components: {
    Landing, About, Testimonials, Projects
  }
}
</script>
