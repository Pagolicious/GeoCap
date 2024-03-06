<script setup>

import { ref, onMounted } from 'vue';

const fetchedData = ref(null),
  randomCorrectCapital = ref([]),
  correctEuropeAnswers = ref([]),
  randomQuestion = ref([]),
  fiftyFiftyDisabled = ref(false),
  passDisabled = ref(false),
  nameDisabled = ref(false),
  buttonsDisabled = ref(false),
  correctFlag = ref(null),
  correctFlagItem = ref(null),
  displayName = ref(false),
  score = ref(0),
  timer = ref(10),
  timeRunning = ref(false),
  percentage = ref(0),
  correctIndex = ref(null),
  wrongIndex = ref(null),
  countLifeline = ref(0),
  FULL_DASH_ARRAY = ref(283)

let countdown

const gameActive = ref(false);
const gameOver = ref(false);

const props = defineProps({
  selectedRegion: String
})

async function fetchData() {
  randomQuestion.value = []

  fetch(`https://restcountries.com/v3.1/region/${props.selectedRegion}`)
    .then((response) => response.json())
    .then((result) => {


      // Removing countries that not really are an official country
      result = removeNoneCountries(result)
      fetchedData.value = result
      // console.log(fetchedData.value[0].name.common)
      console.log(result)

      result.sort((a, b) => b.population - a.population)

      const keys = Object.keys(result)

      // Adds all the different capitals in Europe to session storage
      if (correctEuropeAnswers.value.length === 0) {
        for (let i = 0; i < keys.length; i++) {
          const item = result[keys[i]]
          // console.log()
          const capital = item.capital[0]
          correctEuropeAnswers.value.push(capital)
        }
      }

      // Get a random capital for an correct answer from the correct array
      const correctCapital = getRandomCorrectCapital(correctEuropeAnswers)

      // Removes that capital from the correct answers array
      removeAnswerFromSessionStorage(correctCapital, correctEuropeAnswers)

      // Add the capital to two different arrays, one array for only the correct
      // answer and one array for the 4 different answer options.
      randomCorrectCapital.value.push(correctCapital)
      randomQuestion.value.push(correctCapital)
      // Get the Index from the correct capital
      const correctCapitalIndex = keys.findIndex((key) => {
        const item = result[key]
        return item.capital[0] === correctCapital
      })

      // Get the flag from the correct Index
      correctFlagItem.value = fetchedData.value[correctCapitalIndex]
      correctFlag.value = correctFlagItem.value.flags.svg

      // Doesn't display the name with the Name lifeline until clicked on
      displayName.value = false

      // Get three random answers that are NOT correct into the question array
      getRandomCapitals(keys, result, correctCapital, randomQuestion)

      // Sort the answer to alphabetical order so the correct answer is not in
      // the beginning every time
      randomQuestion.value.sort()

      startTimer()

      correctIndex.value = null
      wrongIndex.value = null


      // 3 lines just to display in console
      console.log(randomQuestion.value)
      console.log(randomCorrectCapital.value)
      // fetchSessionStorage()
      // console.log(correctFlag.value)
      console.log("///")
      console.log(correctEuropeAnswers.value.length)
      // console.log(result.length)
      console.log("///")
      console.log(correctFlagItem.value.name.common)

      // console.log(gameActive.value)

      // for (let i = 0; i < correctEuropeAnswers.value.length; i++) {
      //   console.log(result[i].name.common)
      // }
      // console.log("props", props.gameNotActive)

    })
}

function beginQuiz() {
  if (gameActive.value === false) {
    gameActive.value = true;

    fetchData();
  }
}
onMounted(() => {
  initializeStorage()
})

function initializeStorage() {
  let scores = localStorage.getItem("scores")
  if (!scores) {
    scores = {
      "america": [],
      "south%20america": [],
      "asia": [],
      "europe": [],
      "africa": [],
      "oceania": []
    }
  }
  else {
    scores = JSON.parse(scores)
  }

  console.log(scores)
  scores[props.selectedRegion].push(0)
  localStorage.setItem("scores", JSON.stringify(scores))
}
function addScore(score) {
  let scores = JSON.parse(localStorage.getItem("scores"))
  let currentScoreIndex = scores[props.selectedRegion].length - 1
  scores[props.selectedRegion][currentScoreIndex] = scores[props.selectedRegion][currentScoreIndex] + score
  localStorage.setItem("scores", JSON.stringify(scores))
  return scores[props.selectedRegion][currentScoreIndex]
}

// function handleClickOutside(event) {
//   if (!quizContainer.value.contains(event.target)) {
//     gameActive.value = false
//   }
// }

function removeNoneCountries(result) {
  const notCountriesInEurope = ["Faroe Islands", "Gibraltar", "Jersey",
    "Svalbard and Jan Mayen", "Åland Islands", "Guernsey", "Isle of Man"]

  const notCountriesInAsia = ["Macau", "Palestine", "Hong Kong"]

  const notCountriesInAfrica = ["Mayotte", "British Indian Ocean Territory",
    "Saint Helena, Ascension and Tristan da Cunha", "Western Sahara", "Réunion"]

  const notCountriesInSouthAmerica = ["Falkland Islands"]

  const notCountriesInNorthAmerica = ["Turks and Caicos Islands", "Bermuda",
    "Colombia", "British Virgin Islands", "Suriname", "Ecuador", "Venezuela",
    "Paraguay", "Uruguay", "United States Virgin Islands", "Chile", "Brazil",
    "Saint Martin", "Montserrat", "Caribbean Netherlands", "Aruba", "Guadeloupe",
    "Guyana", "Sint Maarten", "Puerto Rico", "Falkland Islands", "Bolivia",
    "French Guiana", "Anguilla", "Curaçao", "Saint Barthélemy", "Argentina",
    "United States Minor Outlying Islands", "Martinique", "Peru", "Greenland",
    "Saint Pierre and Miquelon", "Cayman Islands"]

  const notCountriesInOceania = ["Tokelau", "Christmas Island",
    "Cook Islands", "Niue", "American Samoa", "Wallis and Futuna",
    "Norfolk Island", "French Polynesia", "Pitcairn Islands", "Guam",
    "Cocos (Keeling) Islands", "Northern Mariana Islands", "New Caledonia"]

  if (props.selectedRegion === "europe") {
    result = result.filter(country => !notCountriesInEurope.includes(country.name.common))
  }

  if (props.selectedRegion === "asia") {
    result = result.filter(country => !notCountriesInAsia.includes(country.name.common))
  }

  if (props.selectedRegion === "africa") {
    result = result.filter(country => !notCountriesInAfrica.includes(country.name.common))
  }

  if (props.selectedRegion === "south%20america") {
    result = result.filter(country => !notCountriesInSouthAmerica.includes(country.name.common))
  }

  if (props.selectedRegion === "america") {
    result = result.filter(country => !notCountriesInNorthAmerica.includes(country.name.common))
  }

  if (props.selectedRegion === "oceania") {
    result = result.filter(country => !notCountriesInOceania.includes(country.name.common))
  }

  return result
}

function countPercentage() {
  percentage.value = Math.ceil(((fetchedData.value.length - correctEuropeAnswers.value.length) / fetchedData.value.length) * 100)
  updateProgressBar(percentage.value)
  percentage.value = percentage.value.toFixed() + "%"
  return percentage.value
}

function updateProgressBar(percentage) {
  console.log("percentage", percentage)
  return `${percentage}%`;
}

function nameLifeline() {
  if (!nameDisabled.value) {
    nameDisabled.value = true
    displayName.value = true
    countLifeline.value++

    stopTimer()
  }
}

function activateFiftyFifty() {
  if (!fiftyFiftyDisabled.value) {
    stopTimer()
    let wrongIndexes = [];
    countLifeline.value++
    // Find the indexes of wrong questions
    for (let i = 0; i < randomQuestion.value.length; i++) {
      if (randomQuestion.value[i] !== randomCorrectCapital.value[0]) {
        wrongIndexes.push(i);
      }
    }

    // Shuffle the wrong indexes array
    wrongIndexes.sort(() => Math.random() - 0.5);

    // Disable the first two wrong answers
    for (let i = 0; i < Math.min(2, wrongIndexes.length); i++) {
      const index = wrongIndexes[i];
      randomQuestion.value[index] = '';
    }

    fiftyFiftyDisabled.value = true;

    console.log("randomQuestion array after powerup", randomQuestion.value);
  }
}

function handleAnswer(index) {
  const selectedAnswer = randomQuestion.value[index];
  const correctAnswer = randomCorrectCapital.value[0];// Det korrekta svaret är alltid det första elementet i randomCorrectCapital

  if (selectedAnswer === correctAnswer) {
    console.log("You're correct soldier!"); // Om det valda svaret är korrekt, logga meddelandet
    stopTimer()
    correctIndex.value = index
    buttonsDisabled.value = true
    countPercentage()

    setTimeout(() => {
      buttonsDisabled.value = false
      generateNewQuestions()
      score.value = addScore(timer.value > 5 ? 10 : 5)

      console.log(score.value)
      console.log(randomCorrectCapital.value)
      resetTimer()
      // correctEuropeAnswers.value = []
    }, 500)

  } else {
    correctEuropeAnswers.value = []; // Uppdatera den globala variabeln
    buttonsDisabled.value = true
    stopTimer()
    correctIndex.value = randomQuestion.value.findIndex(answer => answer === correctAnswer);
    wrongIndex.value = index

    setTimeout(() => {
      fiftyFiftyDisabled.value = false
      passDisabled.value = false
      nameDisabled.value = false
      gameOver.value = true;
      buttonsDisabled.value = false
      resetTimer()
      console.log("You're wrong soldier!"); // Om det valda svaret är fel, logga ett annat meddelande
      console.log(randomCorrectCapital.value)
    }, 2000)
  }
}


function handlePass() {
  if (!passDisabled.value) {
    // const correctAnswer = randomCorrectCapital.value[0]
    correctIndex.value = randomQuestion.value.findIndex(answer => answer === randomCorrectCapital.value[0]);

    // Disable pass button
    passDisabled.value = true
    buttonsDisabled.value = true
    countLifeline.value++
    stopTimer()
    setTimeout(() => {
      resetTimer()
      buttonsDisabled.value = false
      // Generate new questions
      generateNewQuestions();
    }, 2000)
  }
}

function generateNewQuestions() {
  // Add fade-out animation class to fade out old questions

  const answerElements = document.querySelectorAll('.answer');
  answerElements.forEach(element => {
    element.classList.add('fade-out');
  });
  // Reset the state for new questions after the fade-out animation completes
  setTimeout(() => {
    randomQuestion.value = [];
    randomCorrectCapital.value = [];
    fetchData(); // This will trigger the fade-in animation for new questions
  }, 500); // Assuming the fade-out animation duration is 0.5 seconds (500 milliseconds)
}

async function removeAnswerFromSessionStorage(correctCapital, correctEuropeAnswers) {
  const storedData = correctEuropeAnswers.value
  if (storedData) {
    const indexToRemove = storedData.indexOf(correctCapital)
    if (indexToRemove !== -1) {
      storedData.splice(indexToRemove, 1)
    }
  }
}

function getRandomCorrectCapital(correctEuropeAnswers) {
  let randomIndex
  if (correctEuropeAnswers.value.length > 7) {
    randomIndex = Math.floor(Math.random() * 7)
    return correctEuropeAnswers.value[randomIndex]
  } else {
    randomIndex = Math.floor(Math.random() * correctEuropeAnswers.value.length)
    return correctEuropeAnswers.value[randomIndex]
  }
}

function getRandomCapitals(keys, result, correctCapital, randomQuestion) {
  for (let i = 0; i < 3; i++) {
    let randomCapital
    do {
      const randomIndex = Math.floor(Math.random() * keys.length)
      const randomKey = keys[randomIndex]
      const randomItem = result[randomKey]
      randomCapital = randomItem.capital[0]
    } while (randomCapital === correctCapital || randomQuestion.value.includes(randomCapital))
    randomQuestion.value.push(randomCapital)
  }
}

function startTimer() {
  timeRunning.value = true

  countdown = setInterval(() => {
    if (timer.value > 0) {
      timer.value--
      setCircleDasharray()

      if (timer.value === 4) {
        play()

      }
    } else {
      stopTimer()
      gameOver.value = true;
      // countLifeline.value = 0
    }
  }, 1000)
}

function stopTimer() {
  clearInterval(countdown)
  timeRunning.value = false
}

function resetTimer() {
  stopTimer()
  timer.value = 10
  const initialDashArray = FULL_DASH_ARRAY.value;
  document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", `${initialDashArray} 283`);
}

// Divides time left by the defined time limit.
function calculateTimeFraction() {
  const rawTimeFraction = timer.value / 11;
  return rawTimeFraction - (1 / 11) * (1 - rawTimeFraction);
}

// Update the dasharray value as time passes, starting with 283
function setCircleDasharray() {
  if (document.getElementById("base-timer-path-remaining")) {
    const circle = document.getElementById("base-timer-path-remaining")
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY.value
    ).toFixed(0)} 283`
    document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", circleDasharray)

    if (timer.value <= 5) {
      circle.setAttribute("stroke", "red")
    } else {
      circle.setAttribute("stroke", "rgb(54, 118, 216)")
    }
  } else {
    stopTimer()
  }
}

function playAgain() {
  fetchedData.value = null;
  randomCorrectCapital.value = [];
  correctEuropeAnswers.value = [];
  randomQuestion.value = [];
  fiftyFiftyDisabled.value = false;
  passDisabled.value = false;
  correctFlag.value = null;
  score.value = 0;
  timer.value = 10;
  timeRunning.value = false;
  gameActive.value = true; // This begins a new game session directly, should we keep or not?
  gameOver.value = false;
  percentage.value = 0
  countLifeline.value = 0

  fetchData();
}


</script>

<template>
  <div class="quiz-container">
    <div v-if="!gameOver">
      <div v-if="!gameActive" class="readyScreenGameOver"> <!-- Ready screen if game is not active -->
        <h1 id="pickedContinent">Quiz picked: {{ selectedRegion }}</h1>
        <h1>Are you ready?</h1>


        <button class="readyBtn" @click="beginQuiz">Ready</button>
      </div>
      <div v-if="gameActive" id="centerItems"> <!-- If game is active, starts to render quiz -->
        <div class="progress-container">
          <div class="progressbar">
            <div class="progress" :style="{ width: percentage }"></div>
            <div class="percentage-container">
              <div class="percentage">{{ percentage }}</div>
            </div>
          </div>
          <div class="timer-container">

            <div class="base-timer">
              <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g class="base-timer__circle">
                  <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />


                  <path ref=timerElement id="base-timer-path-remaining" stroke-dasharray="283"
                    class="base-timer__path-remaining" d="
                    M 50, 50
                    m -45, 0
                    a 45,45 0 1,0 90,0
                    a 45,45 0 1,0 -90,0
                  "></path>
                </g>
              </svg>
              <span id="base-timer-label" class="base-timer__label">
                {{ timer }}
              </span>
            </div>
          </div>
        </div>
        <h1>What is the capital<br>of this country?</h1>
        <div class="flag-container">
          <img class="flag" :src="correctFlag" alt="Flag">
        </div>
        <div v-if="displayName" id="display-name" class="fade-in">{{ correctFlagItem.name.common }}
        </div>
        <div v-if="randomQuestion.length" class="fade-in">
          <div v-for="(question, index) in randomQuestion" :key="index" class="answer fade-in">
            <button class="quizButton"
              :class="{ 'disabled': question === '', 'disabledButton': buttonsDisabled, 'correct': index === correctIndex, 'wrong': index === wrongIndex }"
              @click="handleAnswer(index)">
              <p id="quizP">{{ question }}</p>
            </button>


          </div>
        </div>
        <div>
          <h3>{{ score }}</h3>
        </div>
        <div class="powerUps">
          <button class="powerBtn" :class="{ 'disabledBtn': fiftyFiftyDisabled }" id="fiftyFifty"
            @click="activateFiftyFifty"></button>
          <button class="powerBtn" :class="{ 'disabledBtn': nameDisabled }" id="name" @click="nameLifeline"></button>
          <button class="powerBtn" :class="{ 'disabledBtn': passDisabled }" id="pass" @click="handlePass"></button>
        </div>
      </div>
    </div>
  </div>

  <div v-if="gameOver" class="readyScreenGameOver">
    <div id="gameOverContainer">
      <h1>Game Over</h1>
      <span class="quizResult" style="animation-delay: 0.4s;">
        <p>Lifelines used: <b class="quizResultB" style="animation-delay: 1.6s;">{{ countLifeline }}/3</b></p>
      </span>
      <span class="quizResult" style="animation-delay: 0.8s;">
        <p>Levels completed: <b class="quizResultB" style="animation-delay: 1.8s;">{{ percentage }}</b></p>
      </span>
      <span class="quizResult" style="animation-delay: 1.2s;">
        <p>Score: <b class="quizResultB" style="animation-delay: 2s;">{{ score }}</b></p>
      </span>
      <button class="readyBtn" @click="playAgain">Play Again</button>
    </div>
  </div>
</template>


<style scoped>
.base-timer {
  position: relative;
  height: 80px;
  width: 80px;
}

/* Removes SVG styling that would hide the time label */
.base-timer__circle {
  fill: none;
  stroke: none;
}

/* The SVG path that displays the timer's progress */
.base-timer__path-elapsed {
  stroke-width: 9px;
  stroke: #bebcbc;
}

.base-timer__label {
  position: absolute;
  width: 80px;
  height: 80px;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 30px;
  font-weight: 500;

}

.base-timer__path-remaining {
  stroke-width: 7px;
  stroke-linecap: round;
  transform: rotate(90deg);
  transform-origin: center;
  transition: 1s linear all;
}

.base-timer__svg {
  transform: scaleX(-1);
}

.progress-container {
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
}

.score {
  font-size: 30px;
  font-weight: 500;
  position: relative;
  right: 8rem;

}

.progressbar {
  position: relative;
  width: 20rem;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 5px;
  height: 2rem;
  padding: 0;
  margin: 0 2rem 0 7rem;
}

.progress {
  border-radius: 0;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: rgb(76, 134, 221);
  transition: width 0.5s ease;
}

.percentage-container {
  color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.percentage {
  font-size: 25px;
  font-weight: 600;
  color: black;


}

#display-name {
  color: #0B0957;
  font-family: Montserrat;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0.5rem;
}


#gameOverContainer {
  font-size: 2rem;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
}


.quizResult {
  display: flex;
  text-align: center;
  opacity: 0;
  animation: showScoreList 0.5s ease-out forwards;
}

@keyframes showScoreList {
  from {
    opacity: 0;
    transform: translateX(100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.quizResultB {
  opacity: 0;
  animation: showScore 0.5s ease-out forwards;
}

@keyframes showScore {
  0% {
    font-size: 0;
    filter: blur(1.2px);
  }

  66% {
    font-size: 2.4rem;
    filter: blur(0.6px);
    opacity: 0.66;
  }

  100% {
    font-size: 2rem;
    filter: blur(0px);
    opacity: 1;
  }
}


#gameOver h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

#pickedContinent {
  text-transform: uppercase;
}

.readyScreenGameOver {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.readyBtn {
  border-radius: 7px;
  height: 3rem;
  width: 10rem;
  color: #0B0957;
  font-family: "Fredoka", sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  background-color: #F5F5F5;
  box-shadow: 0px 0px 4px 0px #363636d0;
  border-radius: 0.4375rem;
  border: 1px solid #E0E1E1;
}

.readyBtn:hover {
  border-color: #646cff;
}

#centerItems {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 20rem;
}

h1 {
  font-family: "Fredoka", sans-serif;
  font-size: 2.2em;
  color: #0B0957;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 1rem;
}

.powerUps {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  width: 20rem;
}

.powerBtn {
  background-color: rgb(0, 146, 37);
  width: 3.6875rem;
  height: 3.6875rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 0px;

}

#fiftyFifty {
  background-color: #3AB296;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.839));
  background-image: url('../assets/fiftyFifty.svg');
  background-repeat: no-repeat;
  background-position: center center;
}

#fiftyFifty.disabledBtn {
  background-color: gray;
  pointer-events: none;
}

#name {
  background-color: #fffb25;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.839));
  background-image: url('../assets/shield.svg');
  background-repeat: no-repeat;
  background-position: center center;
  /* pointer-events: none; */
}

#name.disabledBtn {
  background-color: gray;
  pointer-events: none;
}

#pass {
  background-color: #f95f5f;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.839));
  background-image: url('../assets/skip.svg');
  background-repeat: no-repeat;
  background-position: center center;
}

#pass.disabledBtn {
  background-color: gray;
  pointer-events: none;
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

.flag {
  width: auto;
  height: 120px;
  margin: 1rem;
}

.flag-container {
  background-color: #f5f5f5;
  border: 1px solid grey;
  margin: 0.2rem 0 1rem 0;
  border: 2px solid #c3c3c3;
  border-radius: 7px;
  box-shadow: 0px 1px 4px 0px #36363691;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
  animation: ease-in-out 1s forwards;
}


@keyframes ease-in-out {
  0% {
    transform: scaleX(1);
    transform: translateX(0px);
    filter: blur(0px);
    opacity: 1;
  }

  66% {
    transform: scaleX(0.75);
    transform: translateX(20px);
    filter: blur(2.6px);
    opacity: 0.33;
  }

  100% {
    transform: scaleX(0.5);
    transform: translateX(30px);
    filter: blur(4px);
    opacity: 0;
  }
}

.fade-in {
  opacity: 1;
  animation: ease-in 0.5s;
}

@keyframes ease-in {
  0% {
    opacity: 0;
  }

  66% {
    opacity: 0.66;
  }

  100% {
    opacity: 1;
  }
}

.fade-out {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}

.correct {
  background-color: #3AB296;
}

.wrong {
  background-color: #f95f5f;
}

.disabledButton {
  pointer-events: none;
}
</style>
