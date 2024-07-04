<template>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
        <slot name="flipCardFront"></slot>
    </div>
    <div class="flip-card-back pt-5 mt-5">
        <slot name="flipCardBack"></slot>
    </div>
</div>
</div>
</template>
<script>
export default {
    name: 'FlipcardComp'
}
</script>
<style scoped>
    .flip-card{
        border: 2px solid silver;
        width: 18rem;
        padding-block: 9px;
        background-image: linear-gradient(180deg, black 65%,#232323);
    }
    .flip-card-inner {
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.flip-card-back {
    transform: rotateY(180deg);
    background-color: red;
}
</style>