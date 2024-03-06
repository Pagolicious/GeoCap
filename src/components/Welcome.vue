<script>
import WelcomeAnimation from './Welcomeanimation.vue'

export default {
  name: 'Welcome',
  components: {
    WelcomeAnimation,
  },
}
</script>

<template>
<div class="container">
  <h1>Welcome to</h1>
    <welcomeanimation />
  <h1>GeoCap</h1>
  <p>Explore the World's Capitals in a Flash</p>
</div>
  </template>

<style scoped>

p {
  font-family: Montserrat, sans-serif;
  font-size: 1.2em;
  color: #000000b8;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 1rem;

}

.container {
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-left: 10%;

}

h1 {
  font-family: "Fredoka", sans-serif;
  font-size: 5em;
  color: #0B0957;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 1rem;
  text-transform: uppercase;
}
</style>
