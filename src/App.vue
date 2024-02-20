<script setup>
import Navbar from './components/Navbar.vue';
import FooterComp from './components/FooterComp.vue';
</script>

<template class="container">
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <FooterComp />
  </footer>
</template>

<style scoped>
.container {
  display: grid;
  /* grid-template-columns: 1fr; */
  grid-template-rows: 1fr auto 150px;
  height: 100vh;
}

header {
  background-color: whitesmoke;
  border-bottom: 1px solid grey;
  height: 120px;
}

main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  /* height: calc(100vh - 150px); */
  /* height: 100vh; */
}

footer {
  background-color: whitesmoke;
  border-top: 1px solid grey;
  height: 80px;
}
</style>
