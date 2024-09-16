<template>
  <div class="container">
    <div class="col mt-3">
      <Education />
    </div>
    <div class="col mt-3">
      <Experience />
    </div>
    <div class="row mt-3">
      <Skills />
    </div>
  </div>
</template>

<script>
import Skills from "./SkillComp.vue";
import Education from "./EducationComp.vue";
import Experience from "./ExperienceComp.vue";

export default {
  name: "ResumeSection",
  components: {
    Skills,
    Experience,
    Education,
  },
};
</script>

<style scoped>

</style>
