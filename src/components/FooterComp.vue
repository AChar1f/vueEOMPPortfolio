<template>
  <footer class="container-fluid">
    <div class="row">
      <p class="lead">
        Abdurahmaan's Portfolio
        <span>&copy; {{ currentYear }}</span>
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterComp",
  data() {
    return {
      currentYear: new Date().getUTCFullYear(),
    };
  },
};
</script>
<style scoped>
.container-fluid {
  color: white;
  border-top: 2px solid silver;
  background-image: linear-gradient(180deg, black 50%, #232323);
}
</style>
