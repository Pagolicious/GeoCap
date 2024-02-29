<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  mounted() {
    this.scores = localStorage.getItem("scores")
    this.bestScores = localStorage.getItem("scores")
    console.log(this.scores)
    //this.bestScores.sort()
    //this.bestScores.reverse()
  },
  components: {
    Line
  },
  data() {
    return {
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#41BA6C',
            data: [1, 2, 3, 4, 3, 8, 4]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      },
      scores: [],
      bestScores: []
    }
  },
  // Component props definition to pass data to the parent
  props: {
    img: String,
    selected: Boolean,
    id: String
  },
  methods: {
    //emiting 'onSelected' event when the category is clicked and sending the 'id' of the category
    onSelected() {
      this.$emit('onSelected', this.id)
    }
  }
}
</script>
<template>
  <div class="statistics-section">
    <div class="selected-category-pic">
      <img @click="onSelected" :class="{ 'img-selected': selected }" :src="img">
    </div>
    <div v-if="selected" class="statistics-container">
      <div class="data-wrapper">
        <div class="chart-wrapper">
          <h4 class="chart-title">Overall status</h4>
          <div class="chart">
            <Line :data="data" :options="options" />
          </div>
        </div>
        <div class="score-wrapper">
          <h4 class="chart-title">Best scores</h4>
          <div class="score-rows">
            <div class="vertical-row">
              <p class="row-title">Placing</p>
              <img class="medal" src="/src/assets/profile/medal1.svg">
              <img class="medal" src="/src/assets/profile/medal2.svg">
              <img class="medal" src="/src/assets/profile/medal3.svg">
            </div>
            <div class="vertical-row">
              <p class="row-title">Percent</p>
              <p class="text">10%</p>
              <p class="text">80%</p>
              <p class="text">20%</p>
            </div>
            <div class="vertical-row">
              <p class="row-title">Score</p>
              <p class="text">260</p>
              <p class="text">200</p>
              <p class="text">110</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.statistics-section {
  background-color: rgba(217, 217, 217, 0);
  border: 1px solid rgba(217, 217, 217, 66%);
  border-radius: 10px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 25%);
  width: 60%;
  margin: 0 auto;
  padding: 0;
}

.selected-category-pic {
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.selected-category-pic img {
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
}

.selected-category-pic img.img-selected {
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.statistics-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.chart-wrapper {
  margin: 0 10px;
}


.chart-title {
  font-family: Fredoka;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}

.chart {
  width: 230px;
}

.score-rows {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
}

.vertical-row {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px;
  align-items: center;
}

.row-title {
  font-weight: 500;
  color: rgb(95, 95, 95);
  font-size: 12px;
  margin: 0;
}

.text {
  font-size: 16px;
  font-weight: 600;
  color: rgb(28, 28, 28);
  margin: 15px 0 0
}

.medal {
  width: 20px;
  height: 28px;

}

.data-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
  color: rgb(65, 186, 108);
  font-weight: bold;
}

.data-wrapper div {
  font-family: Fredoka;
  font-size: 15px;
}
</style>
