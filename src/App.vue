<template>
  <div class="wrapper">
    <Navbar/>
    <main class="container-fluid">
      <router-view />
    </main>
    <Footer/>
  </div>
</template>

<script>
  import Navbar from '@/components/NavbarComp.vue'
  import Footer from '@/components/FooterComp.vue'
  export default {
    components: {
      Navbar, Footer
    }
  }
</script>

<style src="@/assets/css/style.css">
</style>
