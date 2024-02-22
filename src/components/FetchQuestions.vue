<script>
import { ref, onMounted } from 'vue';
import { useQuestionStore } from '../store.js';

export default {
  setup() {
    const questionStore = useQuestionStore();

    onMounted(() => {
      fetchData(); // Assuming fetchData is defined elsewhere to fetch data
      // After fetching data and setting randomQuestion
      questionStore.setRandomQuestion(randomQuestion.value);
    });

    // Other logic

    return {};
  },
};
const fetchedData = ref(null),
  randomCorrectCapital = ref([]),
  correctEuropeAnswers = ref([]),
  randomQuestion = ref([])



async function fetchData() {

 randomQuestion.value = [];

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
      const correctFlag = correctFlagItem.flags.svg

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




<template>
  <!-- <dl v-if="fetchedData !== null">
    <template :key="fetchedData.id" v-for="capital in fetchedData">
      <dt>{{ fetchedData.name.common }}</dt>
      <dd>{{ fetchedData.capital[0] }}</dd>
    </template>
  </dl>
  <p v-else>Laddar...</p> -->
</template>

<style scoped>
</style>
