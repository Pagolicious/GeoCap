<script setup>
import Category from '../components/Category.vue'
import FetchQuestions from '../components/FetchQuestions.vue'
// import Powerup from '../components/Powerup.vue';
// import { useQuestionStore } from '../store.js';

// const questionStore = useQuestionStore();

// const randomQuestion = questionStore.randomQuestion;

</script>

<template>
  <Category />
  <div id="container">
    <div id="stickyQuiz">
      <h1>What is the capital<br>of this country?</h1>
      <FetchQuestions />

      <!-- <div id="flag">
        <img :src="flagImageUrl" alt="Flag" />
      </div> -->
      <!-- <div v-if="randomQuestion.length">
        <div :class="{ 'disabled': question === '' }" v-for="(question, index) in randomQuestion" :key="index"
          class="answer">
          <button class="quizButton" :class="{ 'disabled': question === '' }">
            <p id="quizP">{{ question }}</p>
          </button>
        </div>
      </div> -->
      <!-- <Powerup :randomQuestion="randomQuestion" /> -->
    </div>
  </div>
  <!-- <h1>Quiz</h1> -->
</template>
<style scoped>
#container {
  width: 100%;
  background-color: #F5F5F5;
  padding-bottom: 4rem;
}

#stickyQuiz {
  position: sticky;
  top: 10%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

h1 {
  font-family: "Fredoka", sans-serif;
  font-size: 2.2em;
  color: #2C7F49;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1rem;
}

/* .answer {
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
  box-shadow: 0px 1px 4px 0px #36363691;
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

.disabled {
  opacity: 0.5;
  pointer-events: none;
  animation: ease 1s forwards;
}

@keyframes ease {
  0% {
    transform: scaleX(1);
    transform: translateX(0px);
    filter: blur(0px);
    opacity: 1;
  }

  50% {
    transform: scaleX(0.8);
    transform: translateX(15px);
    filter: blur(2px);
    opacity: 0.5;
  }

  100% {
    transform: scaleX(0.5);
    transform: translateX(30px);
    filter: blur(4px);
    opacity: 0;
  }
} */
</style>
