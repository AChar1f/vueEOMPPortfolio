<template>
<nav class="navbar navbar-expand-lg sticky-top">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/"><img class="img-fluid"
          src="https://achar1f.github.io/projectimages/images/Logo1-removebg-preview (1).png" alt="logo"
          loading="lazy" /></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto px-3">
        <a class="nav-link mx-3" aria-current="page" href="/">Home</a>
        <a class="nav-link mx-3" href="#about">About</a>
        <a class="nav-link mx-3" href="#resume">Resume</a>
        <a class="nav-link mx-3" href="#projects">Projects</a>
        <a class="nav-link mx-3" href="#testimonials">Testimonials</a>
        <a class="nav-link mx-3" href="#reachMe">Reach Me</a>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/* Navbar */
.navbar {
    background-color: black;
    font-family: "Roboto Serif", "Roboto", serif, sans-serif;
    border-bottom: 4px #A29D95 solid;
   
}
   .nav-link{
    color: whitesmoke;
    font-size: 25px;
    font-weight: 500;
    &:hover{
        color: #2c3e50;
    text-decoration: underline;} 
    
   }
</style>