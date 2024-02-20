<script setup>
import { ref } from 'vue'

const fetchedData = ref(null),
  randomQuestion = ref([]),
  randomCorrectCapital = ref([]),
  correctEuropeAnswers = ref([])


function fetchData() {
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

      // Get three random answers that are NOT correct into the question array
      getRandomCapitals(keys, result, correctCapital, randomQuestion)

      // Sort the answer to alphabetical order so the correct answer is not in
      // the beginning every time
      randomQuestion.value.sort()

      // 3 lines just to display in console
      console.log(randomQuestion.value)
      console.log(randomCorrectCapital.value)
      fetchSessionStorage()
    })
}

fetchData()

function fetchSessionStorage() {
  const storedData = sessionStorage.getItem('correctEuropeAnswers')
  if (storedData) {
    const array = JSON.parse(storedData)
    correctEuropeAnswers.value = array
    console.log(array)
  }
}

function saveAnswersToSessionStorage(correctEuropeAnswers) {
  const dataToStore = JSON.stringify(correctEuropeAnswers.value)
  sessionStorage.setItem('correctEuropeAnswers', dataToStore)
}

function removeAnswerFromSessionStorage(correctCapital) {
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
