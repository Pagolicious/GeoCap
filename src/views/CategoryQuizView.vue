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
</style>
