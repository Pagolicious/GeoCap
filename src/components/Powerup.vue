<script setup>
import { ref } from 'vue'

// Track if fiftyfifty is used
let fiftyFiftyDisabled = ref(false)


// Function to activate fiftyfifty
const activateFiftyFifty = () => {
  if (!fiftyFiftyDisabled.value) { // Checking if powerup is used or not
    let disabledBtns = 0;
    let disabledPicks = [];
    // Pick two random indexes to disable
    while (disabledBtns < 2) {
      const index = Math.floor(Math.random() * 3); // Picks a random index between 0 and 2
      if (!disabledPicks.includes(index)) { // Checks if the index is unique
        disabledPicks.push(index); // Adds the index to the disabledpicks array
        disabledBtns++; // ++ the amount of disabled buttons
      }
    }
    // Disabled picked buttons and update
    for (let i = 0; i < disabledPicks.length; i++) {
      incorrect[disabledPicks[i]] = '';
    }
    // Turns fiftyFiftyDisabled into true > this disables the power-up
    fiftyFiftyDisabled.value = true;
    console.log("incorrect array after powerup", incorrect);
  }
}
console.log("incorrect array before powerup", incorrect);
</script>


<template>
  <div class="powerUps">
    <button class="powerBtn" :class="{ 'disabled': fiftyFiftyDisabled }" id="fiftyFifty" @click="activateFiftyFifty">50/50</button>
    <button class="powerBtn" id="shield">SHIELD</button>
    <button class="powerBtn" id="pass">PASS</button>
  </div>
</template>


<!-- HOW ORIGINAL FILE-SETUP LOOKED LIKE -->

<!-- <script setup>
import { ref } from 'vue'

let incorrect = ["Moscow", "Paris", "Oslo"]
let correct = "Stockholm"

// Function to shuffle the array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle the incorrect array
shuffleArray(incorrect)


// Track if fiftyfifty is used
let fiftyFiftyDisabled = ref(false)


// Function to activate fiftyfifty
const activateFiftyFifty = () => {
  if (!fiftyFiftyDisabled.value) { // Checking if powerup is used or not
    let disabledBtns = 0;
    let disabledPicks = [];
    // Pick two random indexes to disable
    while (disabledBtns < 2) {
      const index = Math.floor(Math.random() * 3); // Picks a random index between 0 and 2
      if (!disabledPicks.includes(index)) { // Checks if the index is unique
        disabledPicks.push(index); // Adds the index to the disabledpicks array
        disabledBtns++; // ++ the amount of disabled buttons
      }
    }
    // Disabled picked buttons and update
    for (let i = 0; i < disabledPicks.length; i++) {
      incorrect[disabledPicks[i]] = '';
    }
    // Turns fiftyFiftyDisabled into true > this disables the power-up
    fiftyFiftyDisabled.value = true;
    console.log("incorrect array after powerup", incorrect);
  }
}
console.log("incorrect array before powerup", incorrect);
</script>

<template>
  <h1>Which capital?</h1>
  <div class="answer">
    <button class="quizButton" :class="{ 'disabled': fiftyFiftyDisabled && incorrect[0] === '' }">{{ incorrect[0] }}</button>
  </div>
  <div class="answer">
    <button class="quizButton" :class="{ 'disabled': fiftyFiftyDisabled && incorrect[1] === '' }">{{ incorrect[1] }}</button>
  </div>
  <div class="answer">
    <button class="quizButton" :class="{ 'disabled': fiftyFiftyDisabled && incorrect[2] === '' }">{{ incorrect[2] }}</button>
  </div>
  <div class="answer">
    <button class="quizButton">{{ correct }}</button>
  </div>

  <div class="powerUps">
    <button class="powerBtn" :class="{ 'disabled': fiftyFiftyDisabled }" id="fiftyFifty" @click="activateFiftyFifty">50/50</button>
    <button class="powerBtn" id="shield">SHIELD</button>
    <button class="powerBtn" id="pass">PASS</button>
  </div>
</template>

<style scoped>
.answerBtn.disabled {
  background-color: rgb(97, 97, 97);
}

.answer {
  height: 100px;
  width: 400px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border-radius: 10px;
}

.quizButton {
  background-color: sandybrown;
  width: 100%;
  height: 100%;
}

p {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: 1000;
}

.powerUps {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
}

.powerBtn {
  background-color: rgb(0, 146, 37);
  color: rgb(6, 8, 1);
  width: 59px;
  height: 59px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

}

#fiftyFifty {
  background-color: #3AB296;
}

#fiftyFifty.disabled {
  background-color: gray;
}
</style> -->
