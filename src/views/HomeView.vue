<template>
  <div class="container-fluid">
    <section class="row" id="landing">
      <Landing/>
    </section>
    <section class="row mt-5" id="about">
      <About/>
    </section>
    <section class="row mt-5" id="resume">
      <Resume/>
    </section>
    <section class="row mt-5" id="projects">
      <Projects/>
    </section>
    <section class="row mt-5" id="testimonials">
      <Testimonials/>
    </section>
    <section class="row mt-5" id="reachMe">
      <Form/>
    </section>
  </div>
</template>

<script>
import Landing from '@/components/LandingSection.vue'
import About from '@/components/AboutSection.vue'
import Testimonials from '@/components/TestimonialsSection.vue'
import Projects from '@/components/ProjectSection.vue'
import Resume from '@/components/Resume.vue'
import Form from '@/components/ContactSection.vue'

export default {
  name: 'HomeView',
  components: {
    Landing, About, Testimonials, Projects, Resume, Form
  }
}
</script>
