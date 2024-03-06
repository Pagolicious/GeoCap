<script setup>
import { defineEmits, ref } from 'vue'

const emits = defineEmits(['regionSelected']);
const selectedRegion = ref(null);

const sendData = (region) => {
  if (selectedRegion.value === region) {
    selectedRegion.value = null;
    emits('regionSelected', "");
  } else {
    emits('regionSelected', region);
    selectedRegion.value = region;
  }
}

</script>

<template>
  <div class="category-container stylish-scrollbar">
    <h1>Ready to Quiz?</h1>
    <h2>Try one of our quizzes</h2>
    <img src="/src/assets/general/howtoplay.svg" @click="sendData('howtoplay')" :class="{ 'selected': selectedRegion === 'howtoplay', 'notSelected': selectedRegion !== 'howtoplay' && selectedRegion !== null}">
    <img src="/src/assets/general/africa.svg" @click="sendData('africa')" :class="{ 'selected': selectedRegion === 'africa', 'notSelected': selectedRegion !== 'africa' && selectedRegion !== null }">
    <img src="/src/assets/general/asia.svg" @click="sendData('asia')" :class="{ 'selected': selectedRegion === 'asia', 'notSelected': selectedRegion !== 'asia' && selectedRegion !== null}">
    <img src="/src/assets/general/europe.svg" @click="sendData('europe')" :class="{ 'selected': selectedRegion === 'europe', 'notSelected': selectedRegion !== 'europe' && selectedRegion !== null}">
    <img src="/src/assets/general/northamerica.svg" @click="sendData('america')" :class="{ 'selected': selectedRegion === 'america', 'notSelected': selectedRegion !== 'america' && selectedRegion !== null }">
    <img src="/src/assets/general/oceania.svg" @click="sendData('oceania')" :class="{ 'selected': selectedRegion === 'oceania', 'notSelected': selectedRegion !== 'oceania' && selectedRegion !== null}">
    <img src="/src/assets/general/southamerica.svg" @click="sendData('south%20america')" :class="{ 'selected': selectedRegion === 'south%20america', 'notSelected': selectedRegion !== 'south%20america' && selectedRegion !== null}">
  </div>
</template>

<style scoped>

.selected {
  border: 20px solid rgb(100, 234, 118);
  animation: happyCategory 0.3s ease-in-out forwards;
}
@keyframes happyCategory {
  0% {
    filter: grayscale(60%);
    -webkit-filter: grayscale(60%);
    transform: scale(0.88);
    border: 0px solid rgb(100, 234, 118);
  }
  100% {
    filter: grayscale(0%);
    -webkit-filter: grayscale(0);
    transform: scale(1.1);
    border: 20px solid rgb(100, 234, 118);
  }
}


.notSelected {
  /* border: 20px solid yellow; */
  animation: sadCategory 0.3s ease-in-out forwards;
}
@keyframes sadCategory {
  0% {
    filter: grayscale(0%);
    -webkit-filter: grayscale(0);
  }
  100% {
    filter: grayscale(60%);
    -webkit-filter: grayscale(60%);
    transform: scale(0.88);
  }
}

.category-container {
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  align-items: center;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 4rem;
  border-right: 1px solid grey;
  max-height: 100%;
  overflow-y: scroll;
}

.category-container img {
  width: 500px;
  margin: 20px 20px 30px;
  border-radius: 7px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 25%);
  cursor: pointer;
}

.category-container h1 {
  color: #0B0957;
  font-family: Fredoka;
  font-weight: 600;
  font-size: 2.2 em;
}

.category-container h2 {
  font-size: 20px;
}

h1 {
  font-size: 2.2rem;
}

@media only screen and (max-width: 493px) {
  .category-container img {
    width: 50%;

  }
}

@media only screen and (max-width: 700px) {
  .category-container img {
    width: 50%;

  }
}

@media only screen and (max-width: 1200px) {
  .category-container img {
    width: 50%;

  }
}
</style>
