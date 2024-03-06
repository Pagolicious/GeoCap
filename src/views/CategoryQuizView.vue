<script setup>
import Category from '../components/Category.vue'
import FetchQuestions from '../components/FetchQuestions.vue'
import Instructions from '../components/Instructions.vue'
import Welcome from '../components/Welcome.vue'

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
      <div id="stickyQuizTest">
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
      <div v-if="selectedRegion == 'howtoplay'">
        <Instructions />
      </div>
      <div v-if="selectedRegion == ''">
        <Welcome />
      </div>
    </div>
  </div>
  </div>
</template>
<style scoped>

@media only screen and (min-width: 900px) {
#container {
  display: flex;
  flex-direction: row;
  /* width: 100vw; */
  text-align: center;
  margin: 0 auto;
  padding: 0 auto;
}

.category {
  width: 50%;
}

/* .instructions {
  margin: 40px;
  max-height: 900px;
  position: sticky;
  top: 10%;
} */

#stickyQuiz {
  position: sticky;
  top: 10%;
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: #F5F5F5;
  /* display: flex; */
  text-align: center;
  align-items: center;
  position: sticky;
  top: 10%;
}

#stickyQuizTest {
  position: sticky;
  top: 10%;
  display: flex;
  flex-direction: column;
  background-color: #F5F5F5;
  text-align: center;
  align-items: center;
}
}
/* Media Query for display less then or equal to 429px */
@media only screen and (max-width: 900px) {

  #container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    text-align: center;
    margin: 0;
    padding: 0;
  };

  .category {
  width: 100vw;
}

.instructions {
  margin: 40px;
  max-height: 900px;
  position: sticky;
  top: 10%;
  transform: scale(0.50);
  transform-origin: 0 0;
}

  #stickyQuiz {
  position: sticky;
  top: 10%;
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: #F5F5F5;
  text-align: center;
  align-items: center;
  position: sticky;
  top: 10%;
}

  #stickyQuizTest {
  position: sticky;
  top: 10%;
  display: flex;
  flex-direction: column;
  background-color: #F5F5F5;
  text-align: center;
  align-items: center;
}
  /* #stickyQuiz{
    width: 80%;
  }
  .instructions{
    width: 100%;
  };
  .category{
    width: 80%;
  } */

}
@media screen and (max-height: 1000px) {
  #stickyQuizTest {
    transform: scale(0.90);
    transform-origin: 0 0;
  }

}

@media screen and (max-height: 800px) {
  #stickyQuizTest {
    transform: scale(0.72);
    transform-origin: 0 0;
  }

}


/* Media Query for display less then or equal to 700px */
/* @media only screen and (max-width: 700px) {
  #container {
    display: flex;
    flex-direction: column;
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



} */


</style>
