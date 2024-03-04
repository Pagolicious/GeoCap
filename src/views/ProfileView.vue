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
  width: 50%;
  max-height: 900px;
}

/* Media Query for display less then or equal to 375px */
@media only screen and (max-width: 768px) {
  .profile-component {
    flex-direction: column; /* Ändra riktningen för mindre skärmar till kolumn */
  }

  .profile-section {
    width: 100%; /* Göra full bredd för mindre skärmar */
  }
}
</style>
