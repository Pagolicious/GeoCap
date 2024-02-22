<script setup>

</script>

<template>
  <div class="footer-container">
    <ul>
      <li>grupp 13 C 2024</li>
      <li>contact us</li>
      <li>terms & conditions</li>
      <li>FAQ</li>
      <li>Privacy policy</li>
      <li>abous us</li>
      <li class="social-media">
        <img src="/src/assets/general/youtube.svg">
        <img src="/src/assets/general/instagram.svg">
        <img src="/src/assets/general/facebook.svg">
      </li>
    </ul>
  </div>
</template>

<style scoped>
.footer-container {
  border: rgba(0, 0, 0, 11%);
  padding: 25px;
}

.footer-container ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
}

.social-media {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.social-media img {
  padding: 0 20px;
}
</style>
