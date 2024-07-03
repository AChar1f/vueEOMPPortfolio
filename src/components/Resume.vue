<template>
  <div class="container">
    <div class="row">
      <Skills />
    </div>
    <div class="col mt-5">
      <Education />
    </div>
    <div class="col mt-5">
      <Experience />
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
