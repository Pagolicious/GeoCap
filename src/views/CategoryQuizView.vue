<script setup>
import Category from '../components/Category.vue'
import FetchQuestions from '../components/FetchQuestions.vue'
import Powerup from '../components/Powerup.vue';
</script>

<template>
  <Category />
  <div id="container">
    <div id="stickyQuiz">
    <FetchQuestions />
    <h1>What is the capital<br>of this country?</h1>
    <!-- flag -->
    <div class="answer">
      <button class="quizButton"><p id="quizP">Placeholder</p></button></div>
    <div class="answer">
      <button class="quizButton"><p id="quizP">Placeholder</p></button></div>
    <div class="answer">
    <button class="quizButton"><p id="quizP">Placeholder</p></button></div>
    <div class="answer">
      <button class="quizButton"><p id="quizP">Placeholder</p></button></div>
   <!-- <Powerup /> -->
  </div>
</div>
  <!-- <h1>Quiz</h1> -->
</template>
<style scoped>

#container {
  width: 100%;
  background-color: F5F5F5;
}

#stickyQuiz {
  position: sticky;
  top: 25%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.answer {
  height: 5rem;
  width: 20rem;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0.4rem;
}

.quizButton {
  width: 100%;
  height: 100%;
  border-radius: 0.4375rem;
  border: 1px solid #E0E1E1;
  background: #F5F5F5;
  box-shadow: 0px 2px 2px 0px #E4E6E7;
}
.quizButton:hover {
  border-color: #646cff;
}
.quizButton:focus,
.quizButton:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

#quizP {
color: #0B0957;
font-family: Montserrat;
font-size: 1.2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 0rem;
}

h1 {
  font-family: "Fredoka", sans-serif;
  font-size: 2.2em;
  line-height: 1.1;
  margin-bottom: 3rem;
}
</style>
