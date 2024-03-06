<script>
import { Vue3Lottie } from 'vue3-lottie'
import happyguy from '../assets/animation/happyguy.json'

export default {
  name: 'WelcomeAnimation',
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      happyguy,
    }
  },
}
</script>

<template>
  <div class="animation">
    <Vue3Lottie :animationData="happyguy" />
  </div>
</template>

<style scoped>

.animation {
width: 25rem;
height: 25rem;


}
</style>
