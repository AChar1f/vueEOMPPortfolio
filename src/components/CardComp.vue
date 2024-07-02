<template>
    <div class="card">
      <div class="card-header">
        <slot name="cardHeader"></slot>
      </div>
      <div class="card-body">
        <slot name="cardBody"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CardComp",
  };
  </script>
  
  <style scoped>
  .card {
    width: 18rem;
    padding-block: 9px;
    background-color: darkgray;
    color: whitesmoke;
  }
  .card-body{
    background-color:gray;
  }

  </style>
  