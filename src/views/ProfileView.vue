<script setup>
// Importing the Profile and Statistics components
import Profile from '../components/profile/Profile.vue';
import Statistics from '../components/profile/Statistics.vue'
</script>

<template>
  <div class="profile-component">
    <div class="profile-section">
      <Statistics />
    </div>
    <div class="profile-section">
      <Profile />
    </div>
  </div>
</template>
<style scoped>
.profile-component {
  display: flex;
  flex-direction: row;
  width: 100vw;
}
.profile-section {
  width: 80%;
  max-height: 900px;
}

/* Media Query for display less then or equal to 493px */
@media only screen and (max-width: 493px) {
  .profile-component {
    flex-direction: column; /* Ändra riktningen för mindre skärmar till kolumn */
    width: 100%;
  }
  .profile-section {
    width:100%;   
  }
}
</style>
