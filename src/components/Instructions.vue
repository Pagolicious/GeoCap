<script>
export default {
  name: 'Instructions'
}
</script>

<template>

  <div class="container">
    <h1>How to Play GeoCap:</h1>

    <ol>
      <div class="instructions">
        <li><strong>Select Your Region:</strong> Choose your preferred continent from the available options.</li>
      </div>
      <div class="instructions">
        <li><strong>Match the Flag to the Capital:</strong> A flag will be displayed on the screen. Quickly select the capital city that corresponds to the country represented by the flag.</li>
      </div>
      <div class="instructions">
        <li><strong>Progression:</strong> You can track your progress through the quiz by checking the progression bar at the top of the screen.</li>
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
            <h3 class="lifelineHeader">Name:</h3>
            <li class="lifeline">This lifeline will reveal the name of the country corresponding to the flag.</li>
          </div>
          <div class="lifelineGroup">
            <h3 class="lifelineHeader">Skip:</h3>
            <li class="lifeline">Skip the current question and move on to the next one.</li>
          </div>
        </div>
      </div>
    </ol>
  </div>

  </template>

<style scoped>

.container {
  /* display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; */
  margin-left: 10%;
  margin-top: 1rem;
}

strong {
  font-family: Montserrat, sans-serif;
  font-size: 1.2em;
  color: #0B0957;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 1rem;
}

ol {
  text-align: left;
  width: 90%;
  list-style: none;

}

li {
  margin-top: 1rem;
  padding: 1rem;

}
.instructions {
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 40%);
  border-radius: 7px;

}

#lifelineInstructionsContainer {
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 40%);
  border-radius: 7px;
  height: 21rem;
}

.lifelineContainer {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.lifeline {
  display:flex;
  padding-top: 0;
  margin-top: 0;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.lifelineGroup {
  flex: 1;
  width: auto;
  margin-top: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 240px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 40%);
  margin-left: 2rem;
  margin-right: 2rem;
  border-radius: 7px;
}

.lifelineHeader {
  font-weight: bold;
  padding: 0.1rem 0.5rem 0.5rem 0.5rem;
  align-self: center;
}
h1 {
  font-family: "Fredoka", sans-serif;
  font-size: 2.2em;
  color: #0B0957;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 1rem;
}

/* Media Query for display  */
@media only screen and (max-width: 493px) {

  #lifelineInstructionsContainer {

};
  .lifelineContainer{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;

    };

  .lifelineGroup{
    width: 100%;

  }

  ol {
    transform: scale(0.80);
    transform-origin: 0 0;
    width: 100vw;
  }

}

/* Media Query for display  */
@media only screen and (max-width: 700px) {

#lifelineInstructionsContainer {

};
.lifelineContainer{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;

  };

.lifelineGroup{
  width: 100%;

}

}

/* Media Query for display  */
@media only screen and (max-width: 1200px) {

#lifelineInstructionsContainer {

};
.lifelineContainer{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  };

.lifelineGroup{
  width: 100%;

}

}


</style>
