<script setup>



</script>

<template>
  <div class="category-container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
  </div>
  <div class="login-container">Login / Signup</div>
</template>

<style scoped>
.category-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: grey;
  row-gap: 3rem;
  column-gap: 12rem;
  padding: 8rem 3rem 3rem 3rem;
}

.login-container {
  text-align: center;
  padding: 20px;
  background-color: #ae9999;
}



.category-container div {
  border: 2px solid white;
  background-color: rgb(45, 113, 207);
  padding: 20px;
}
</style>
