<template>
  <div class="wrapper">
    <Navbar/>
    <main class="container-fluid">
      <router-view />
    </main>
  </div>
</template>

<script>
  import Navbar from '@/components/NavbarComp.vue'

  export default {
    components: {
      Navbar
    }
  }
</script>

<style src="@/assets/css/style.css">
</style>
