 <!-- maybe use this file instead of CategoryQuizView? -->
<script>
export default {
  name: 'Instructions'
}
</script>

<template v-if="selectedRegion === ''">    <!-- maybe add this to different file? -->
  <h1>How to Play GeoCap:</h1>
    <ol>
      <div class="instructions">
        <li><strong>Select Your Region:</strong> Choose your preferred continent from the available options.</li>
      </div>
      <div class="instructions">
        <li><strong>Match the Flag to the Capital:</strong> A flag will be displayed on the screen. Quickly select the capital city that corresponds to the country represented by the flag.</li>
      </div>
        <div class="instructions">
        <li><strong>Time Limit:</strong> You have only 10 seconds to make your choice! Hurry up!</li>
      </div>
        <div class="instructions">
        <li><strong>Be Careful:</strong> Choose the correct capital! If you pick the wrong one, you're out, and the game ends.</li>
      </div>
      <div id="lifelineInstructionsContainer">
        <li><strong>Lifelines:</strong> You have three lifelines to help you out:</li>
        <div class="lifelineContainer">
          <div class="lifelineGroup">
            <h3 class="lifelineHeader">50/50:</h3>
            <li class="lifeline">Removes two wrong answers, leaving one correct and one wrong option. The timer pauses temporarily.</li>
          </div>
          <div class="lifelineGroup">
            <h3 class="lifelineHeader">Skip:</h3>
            <li class="lifeline">Skip the current question and move on to the next one.</li>
          </div>
          <div class="lifelineGroup">
            <h3 class="lifelineHeader">Name:</h3>
            <li class="lifeline">This lifeline will reveal the name of the country corresponding to the flag.</li>
          </div>
        </div>
      </div>
    </ol>
</template>
