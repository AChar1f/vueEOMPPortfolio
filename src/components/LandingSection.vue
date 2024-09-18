<template>
  <div class="container-fluid pt-5">
    <div class="row landing align-items-center text-center">
      <div class="col">
        <img
          src="https://achar1f.github.io/projectimages/vueImages/P-abdu.jpeg"
          alt="profileImage"
          loading="lazy"
          class="profileImage"
        />
      </div>
      <div class="col">
        <h2 class="title">Abdurahmaan Charif</h2>
        <h3 class="title">Aspiring Developer</h3>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* landing image style */
img[alt="profileImage"] {
  aspect-ratio: 1/1;
  width: 360px;
  height: 360px;
}

@media (width < 992px) {
  img[alt="profileImage"] {
    aspect-ratio: 1;
    width: 320px;
    height: 320px;
  }
}

@media (width < 770px) {
  img[alt="profileImage"] {
    aspect-ratio: 1;
    width: 300px;
    height: 300px;
  }
}

@media (width < 420px) {
  img[alt="profileImage"] {
    aspect-ratio: 1;
    width: 240px;
    height: 240px;
  }
}
/* landing image animation */
.profileImage {
  border: 3px solid silver;
  animation-name: welcome;
  animation-duration: 35s;
  animation-delay: 0s;
  position: relative;
  animation-direction: alternate;
}

@keyframes welcome {
  0% {
    left: -800px;
    top: 0px;
  }

  25% {
    left: 0px;
    top: 0px;
  }

  50% {
    left: 0px;
    top: 0px;
  }

  75% {
    top: 0px;
    left: 0px;
  }

  100% {
    left: 0px;
    top: 0px;
  }
}
/* landing header animation */
.title {
  color: white;
  opacity: 1;
  animation-name: rightFadeInOut;
  animation-delay: 0s;
  animation-duration: 15s;
}
@keyframes rightFadeInOut {
  0% {
    right: -3rem;
    opacity: 0;
  }

  75% {
    right: 10rem;
    opacity: 1;
  }

  100% {
    opacity: 1;
    right: 10rem;
  }
}

@media (width < 770px){
  .profileImage{
    animation: 0;
  }
  .title{
    animation: none;
  }
}
.row{
  background-image: linear-gradient(180deg, black 65%,#232323);
}
</style>
