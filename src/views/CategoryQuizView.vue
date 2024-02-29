<script setup>
import Category from '../components/Category.vue'
import FetchQuestions from '../components/FetchQuestions.vue'
import Instructions from '../components/Instructions.vue'

import { ref } from 'vue'

// Define a variable to store the selected region
const selectedRegion = ref('')

// Define a method to receive the selected region from FirstComponent
const receiveData = (region) => {
  selectedRegion.value = region
}

</script>

<template>
  <Category @regionSelected="receiveData" />
  <div id="container">
    <div id="stickyQuiz">
      <template v-if="selectedRegion == 'europe'">
        <FetchQuestions :selectedRegion="selectedRegion" />
      </template>
      <template v-if="selectedRegion == 'asia'">
        <FetchQuestions :selectedRegion="selectedRegion" />
      </template>
      <template v-if="selectedRegion == 'oceania'">
        <FetchQuestions :selectedRegion="selectedRegion" />
      </template>
      <template v-if="selectedRegion == 'africa'">
        <FetchQuestions :selectedRegion="selectedRegion" />
      </template>
      <template v-if="selectedRegion == 'america'">
        <FetchQuestions :selectedRegion="selectedRegion" />
      </template>
      <template v-if="selectedRegion == 'south%20america'">
        <FetchQuestions :selectedRegion="selectedRegion" />
      </template>
      <template v-if="selectedRegion == ''">
        <Instructions />
      </template>
      <!-- <template v-else>
        <p>Loading...</p>
      </template> -->
    </div>
  </div>
  <!-- <h1>Quiz</h1> -->
</template>
<style scoped>
#container {
  width: 100%;
  background-color: #F5F5F5;
  padding-bottom: 4rem;
  padding-top: 2rem;
}

#stickyQuiz {
  position: sticky;
  display: flex;
  top: 10%;
  flex-direction: column;
  text-align: center;
  align-items: center;
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
