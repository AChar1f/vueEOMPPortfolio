<template>
  <div class="container">
    <div class="col mt-3">
      <Education />
    </div>
    <div class="col mt-3">
      <Experience />
    </div>
  </div>
</template>

<script>
import Education from "./EducationComp.vue";
import Experience from "./ExperienceComp.vue";

export default {
  name: "ResumeSection",
  components: {
    Experience,
    Education,
  },
};
</script>

<style scoped>

</style>
