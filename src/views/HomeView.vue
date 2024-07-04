<template>
  <div class="container-fluid">
    <section class="row" id="landing">
      <Landing/>
    </section>
    <section class="row" id="about">
      <About/>
    </section>
    <section class="row" id="resume">
      <Resume/>
    </section>
    <section class="row" id="projects">
      <Projects/>
    </section>
    <section class="row" id="testimonials">
      <Testimonials/>
    </section>
    <section class="row" id="reachMe">
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
