<script setup>



</script>

<template>
  <div class="category-container stylish-scrollbar">
    <h1>Ready to Quiz?</h1>
    <h2>Try one of our quizzes</h2>
    <img src="/src/assets/general/northamerica.svg">
    <img src="/src/assets/general/southamerica.svg">
    <img src="/src/assets/general/asia.svg">
    <img src="/src/assets/general/europe.svg">
    <img src="/src/assets/general/africa.svg">
    <img src="/src/assets/general/australia.svg">
  </div>
</template>

<style scoped>
.category-container {
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  align-items: center;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 4rem;
  border-right: 1px solid grey;
  max-height: 100%;
  overflow-y: scroll;
}

.category-container img {
  width: 500px;
  margin: 20px 20px 30px;
  border-radius: 7px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 25%);
  cursor: pointer;
}

.category-container h1 {
  color: #0B0957;
  font-family: Fredoka;
  font-weight: 600;
  font-size: 2.2 em;
}

.category-container h2 {
  font-size: 20px;
}

h1 {
  font-size: 2.2rem;
}
</style>
