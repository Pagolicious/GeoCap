<script setup>



</script>

<template>
  <div class="category-container">
    <h1>Ready to Quiz?</h1>
    <h2>try one of our quizzes</h2>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
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
}

.category-container div {
  width: 500px;
  height: 200px;
  background-color: rgb(67, 68, 72);
  padding: 4rem;
  margin: 2rem 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  color: white;
}

.category-container h1 {
  color: #41BA6C;
}

.category-container h2 {
  font-size: 20px;
}
</style>
