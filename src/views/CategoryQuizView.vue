<script setup>
import Category from '../components/Category.vue'
import FetchQuestions from '../components/FetchQuestions.vue'

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
      <template  template v-if="selectedRegion === ''">    <!-- maybe add this to different file? tried to add into fetchQuestions but got error because selectedregion is empty (aka fetchUrl is 404)-->
        <h1>How to Play GeoCap:</h1>
          <ol>
            <div class="instructions">
              <li><strong>Select Your Region:</strong> Choose your preferred continent from the available options.</li>
            </div>
            <div class="instructions">
              <li><strong>Match the Flag to the Capital:</strong> A flag will be displayed on the screen. Quickly select the capital city that corresponds to the country represented by the flag.</li>
            </div>
              <div class="instructions">
              <li><strong>Time Limit:</strong> You have only 10 seconds to make your choice! Hurry up!</li>
            </div>
              <div class="instructions">
              <li><strong>Be Careful:</strong> Choose the correct capital! If you pick the wrong one, you're out, and the game ends.</li>
            </div>
            <div id="lifelineInstructionsContainer">
              <li><strong>Lifelines:</strong> You have three lifelines to help you out:</li>
              <div class="lifelineContainer">
                <div class="lifelineGroup">
                  <h3 class="lifelineHeader">50/50:</h3>
                  <li class="lifeline">Removes two wrong answers, leaving one correct and one wrong option. The timer pauses temporarily.</li>
                </div>
                <div class="lifelineGroup">
                  <h3 class="lifelineHeader">Skip:</h3>
                  <li class="lifeline">Skip the current question and move on to the next one.</li>
                </div>
                <div class="lifelineGroup">
                  <h3 class="lifelineHeader">Name:</h3>
                  <li class="lifeline">This lifeline will reveal the name of the country corresponding to the flag.</li>
                </div>
              </div>
            </div>
          </ol>
      </template>
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

strong {
  font-family: Montserrat, sans-serif;
  font-size: 1.2em;
  color: #0B0957;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 1rem;
}

ol {
  text-align: left;
  width: 90%;
  list-style: none;
}

li {
  margin-top: 1rem;
  padding: 1rem;

}
.instructions {
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 40%);
  border-radius: 7px;
}

#lifelineInstructionsContainer {
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 40%);
  border-radius: 7px;
  height: 21rem;
}

.lifelineContainer {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.lifeline {
  padding-top: 0;
  margin-top: 0;
}

.lifelineGroup {
  flex: 1;
  width: auto;
  margin-top: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 240px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 40%);
  margin-left: 2rem;
  margin-right: 2rem;
  border-radius: 7px;
}

.lifelineHeader {
  font-weight: bold;
  padding: 0.1rem 0.5rem 0.5rem 0.5rem;
  align-self: center;
}

h1 {
  font-family: "Fredoka", sans-serif;
  font-size: 2.2em;
  color: #0B0957;
  font-weight: 600;
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
