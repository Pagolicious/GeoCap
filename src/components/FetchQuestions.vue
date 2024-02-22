<script setup>
import { ref, onMounted } from 'vue';
// import { useQuestionStore } from '../store.js';

// export default {
//   setup() {
//     const questionStore = useQuestionStore();

//     onMounted(() => {
//       fetchData(); // Assuming fetchData is defined elsewhere to fetch data
//       // After fetching data and setting randomQuestion
//       questionStore.setRandomQuestion(randomQuestion.value);
//     });

//     // Other logic

//     return {};
//   },
// };
const fetchedData = ref(null),
  randomCorrectCapital = ref([]),
  correctEuropeAnswers = ref([]),
  randomQuestion = ref([]),
  fiftyFiftyDisabled = ref(false),
  passDisabled = ref(false),
  correctFlag = ref(null)



async function fetchData() {

  randomQuestion.value = [];
  // correctFlag.value = null

  fetch('https://restcountries.com/v3.1/region/europe')
    .then((response) => response.json())
    .then((result) => {
      fetchedData.value = result
      console.log(result)

      const keys = Object.keys(result)

      // Adds all the different capitals in Europe to session storage
      if (sessionStorage.length === 0) {
        for (let i = 0; i < keys.length; i++) {
          const item = result[keys[i]]
          const capital = item.capital[0]
          correctEuropeAnswers.value.push(capital)
        }
        saveAnswersToSessionStorage(correctEuropeAnswers)
      }

      // Get a random capital for an correct answer from the session storage
      const correctCapital = getRandomCorrectCapital()

      // Removes that capital from the session storage
      removeAnswerFromSessionStorage(correctCapital)

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
      const correctFlagItem = fetchedData.value[correctCapitalIndex]
      correctFlag.value = correctFlagItem.flags.svg

      // Get three random answers that are NOT correct into the question array
      getRandomCapitals(keys, result, correctCapital, randomQuestion)

      // Sort the answer to alphabetical order so the correct answer is not in
      // the beginning every time
      randomQuestion.value.sort()


      // 3 lines just to display in console
      console.log(randomQuestion.value)
      console.log(randomCorrectCapital.value)
      fetchSessionStorage()
      console.log(correctFlag)
    })
}

onMounted(() => {
  fetchData()
})

function activateFiftyFifty() {
  if (!fiftyFiftyDisabled.value) {
    let wrongIndexes = [];
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


function handlePass() {
  if (!passDisabled.value) {
    // Disable pass button
    passDisabled.value = true;

    // Generate new questions
    generateNewQuestions();
  }
}

function generateNewQuestions() {
  // Reset the state for new questions
  randomQuestion.value = [];

  // Check if the fiftyFifty button was not pressed
  if (!fiftyFiftyDisabled.value && !passDisabled.value) {
    fiftyFiftyDisabled.value = true; // Disable the fiftyFifty button for the new question
  }

  // Fetch new data and generate new questions
  fetchData();
}


async function fetchSessionStorage() {
  const storedData = sessionStorage.getItem('correctEuropeAnswers')
  if (storedData) {
    const array = JSON.parse(storedData)
    correctEuropeAnswers.value = array
    console.log(array)
  }
}

async function saveAnswersToSessionStorage(correctEuropeAnswers) {
  const dataToStore = JSON.stringify(correctEuropeAnswers.value)
  sessionStorage.setItem('correctEuropeAnswers', dataToStore)
}

async function removeAnswerFromSessionStorage(correctCapital) {
  const storedData = sessionStorage.getItem('correctEuropeAnswers')
  if (storedData) {
    const capitalArray = JSON.parse(storedData)
    const indexToRemove = capitalArray.indexOf(correctCapital)
    if (indexToRemove !== -1) {
      capitalArray.splice(indexToRemove, 1)
      sessionStorage.setItem('correctEuropeAnswers', JSON.stringify(capitalArray))
    }
  }
}

function getRandomCorrectCapital() {
  const storedData = sessionStorage.getItem('correctEuropeAnswers')
  if (storedData) {
    const capitalsArray = JSON.parse(storedData)
    const randomIndex = Math.floor(Math.random() * capitalsArray.length)
    return capitalsArray[randomIndex]
  } else {
    console.log("Quiz Finished, Well Done!")
    return null
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
</script>




<!-- <template>
  <dl v-if="fetchedData !== null">
    <template :key="fetchedData.id" v-for="capital in fetchedData">
      <dt>{{ fetchedData.name.common }}</dt>
      <dd>{{ fetchedData.capital[0] }}</dd>
    </template>
  </dl>
  <p v-else>Laddar...</p>
</template> -->

<template>
  <div class="flag-container">
    <img class="flag" :src="correctFlag" alt="Flag">
  </div>
  <div v-if="randomQuestion.length">
    <div v-for="(question, index) in randomQuestion" :key="index" class="answer">
      <button class="quizButton" :class="{ 'disabled': question === '' }" @click="handleAnswer(index)">
        <p id="quizP">{{ question }}</p>
      </button>
    </div>
  </div>

  <div class="powerUps">
    <button class="powerBtn" :class="{ 'disabledBtn': fiftyFiftyDisabled }" id="fiftyFifty"
      @click="activateFiftyFifty"></button>
    <button class="powerBtn" id="shield">SHIELD</button>
    <button class="powerBtn" :class="{ 'disabledBtn': passDisabled }" id="pass" @click="handlePass"></button>
  </div>

</template>


<style scoped>

.powerUps {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
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

#shield {
  background-color: #fffb25;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.839));
  background-image: url('../assets/shield.svg');
  background-repeat: no-repeat;
  background-position: center center;
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

h1 {
  font-family: "Fredoka", sans-serif;
  font-size: 2.2em;
  color: #2C7F49;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 3rem;
}


.disabled {
  opacity: 0.5;
  pointer-events: none;
  animation: ease-in-out 1s forwards;
}

.flag {
  width: 200px;
  height: auto;
  margin: 1rem;

}

.flag-container {
  border: 1px solid grey;
  margin: 3rem;
  border: 2px solid #c3c3c3;
  box-shadow: 0px 1px 4px 0px #36363691;
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
</style>
