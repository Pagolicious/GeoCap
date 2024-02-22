<script setup>



</script>

<template>
  <div class="category-container">
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
  padding-top: 4rem;
  border-right: 1px solid grey;
  max-height: 900px;
  overflow-y: scroll;
}

.category-container img {
  width: 500px;
  margin: 20px 20px 30px;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  cursor: pointer;
}

.category-container h1 {
  color: #2C7F49;
  font-family: Fredoka;
  font-weight: 600;
  font-size: 2.2 em;
}

.category-container h2 {
  font-size: 20px;
}
</style>
