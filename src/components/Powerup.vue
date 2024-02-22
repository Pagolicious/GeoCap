<!-- <script>
import { ref } from 'vue'
import { useQuestionStore } from '../store.js'; // Import the Pinia store


export default {
  props: {
    randomQuestion: {
      type: Array,
      required: true
    }
  },
  setup(props) {

    const questionStore = useQuestionStore();
    const fiftyFiftyDisabled = ref(false);


    const activateFiftyFifty = () => {
      if (!fiftyFiftyDisabled.value) {
        let disabledIndexes = [];
        while (disabledIndexes.length < 2) {
          const index = Math.floor(Math.random() * props.randomQuestion.length);
          if (!disabledIndexes.includes(index)) {
            disabledIndexes.push(index);
          }
        }
        disabledIndexes.forEach(index => {
          props.randomQuestion[index] = '';
        });
        fiftyFiftyDisabled.value = true;
        console.log("randomQuestion array after powerup", props.randomQuestion);
        questionStore.setRandomQuestion(props.randomQuestion); // Update store
      }
    };

    return {
      activateFiftyFifty,
      fiftyFiftyDisabled
    };
  },
};

</script> -->


<!-- <template>
  <div class="powerUps">
    <button class="powerBtn" id="fiftyFifty">50/50</button>
    <button class="powerBtn" :class="{ 'disabled': fiftyFiftyDisabled }" id="fiftyFifty" @click="activateFiftyFifty"></button>
    <button class="powerBtn" id="shield">SHIELD</button>
    <button class="powerBtn" id="pass">PASS</button>
  </div>
</template> -->
<!--
<style scoped>
.powerUps {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  width: 20rem;
}

.powerBtn {
  background-color: rgb(0, 146, 37);
  width: 3.6875rem;
 height: 3.6875rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 0px;

}

#fiftyFifty {
  background-color: #3AB296;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.839));
  background-image: url('../assets/fiftyFifty.svg');
  background-repeat: no-repeat;
  background-position: center center;
}

#fiftyFifty.disabled {
  background-color: gray;
  pointer-events: none;
} -->
</style>
