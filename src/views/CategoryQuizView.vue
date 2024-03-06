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
  <div id="container">
    <div class="category">
      <Category @regionSelected="receiveData" />
    </div>
    <div id="stickyQuiz">
      <div class="instructions" v-if="!selectedRegion">
        <Instructions />
      </div>
      <div class="quizSection" v-else>
        <div v-if="selectedRegion == 'europe'">
          <FetchQuestions :selectedRegion="selectedRegion" />
        </div>
        <div v-if="selectedRegion == 'asia'">
          <FetchQuestions :selectedRegion="selectedRegion" />
        </div>
        <div v-if="selectedRegion == 'oceania'">
          <FetchQuestions :selectedRegion="selectedRegion" />
        </div>
        <div v-if="selectedRegion == 'africa'">
          <FetchQuestions :selectedRegion="selectedRegion" />
        </div>
        <div v-if="selectedRegion == 'america'">
          <FetchQuestions :selectedRegion="selectedRegion" />
        </div>
        <div v-if="selectedRegion == 'south%20america'">
          <FetchQuestions :selectedRegion="selectedRegion" />
        </div>
        <div v-if="selectedRegion == ''"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#container {
  display: flex;
  flex-direction: row;
  width: 100vw;
  text-align: center;
  margin: 0 auto;
  padding: 0 auto;
}

.category {
  width: 50%;
}

.instructions {
  margin: 40px;
  max-height: 900px;
  /* position: sticky;
  top: 10%; */
}

#stickyQuiz {
  width: 50%;
  background-color: #F5F5F5;
  /* display: flex; */
  text-align: center;
  align-items: center;
  position: sticky;
  top: 10%;
}

.quizSection {
  width: 50%;
  background-color: #F5F5F5;
  padding-bottom: 4rem;
  padding-top: 2rem;
  text-align: center;
  align-items: center;
  margin: 50px auto;
  /* position: sticky;
  top: 10%; */
}

/* Media Query for display less then or equal to 429px */
@media only screen and (max-width: 493px) {
  #container {
    display: flex;
    flex-direction: column; /* Ändra riktningen för mindre skärmar till kolumn */
    width: 175%;
    font-size: 13px;
  };
  #stickyQuiz{
    width: 80%;
  }
  .instructions{
    width: 100%;
  };
  .category{
    width: 80%;
  }

}

/* Media Query for display less then or equal to 700px */
@media only screen and (max-width: 700px) {
  #container {
    display: flex;
    flex-direction: column; /* Ändra riktningen för mindre skärmar till kolumn */
    width: 195%;
    font-size: 13px;
  };
  #stickyQuiz{
    width: 80%;
  }
  .instructions{
    width: 100%;
  };
  .category{
    width: 80%;
  }



}


</style>
