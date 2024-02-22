<script>
// Importing the StatisticsItem component
import StatisticsItem from '../profile/StatisticsItem.vue'
export default {
  data() {
    return {
      selectedCategory: ""
    }
  },
  methods: {
    // This method is to handle the category selection
    onCategorySelected(categoryId) {
      this.selectedCategory = categoryId
    }
  }
}
</script>
<template>
  <div class="statistics">
    <div>
      <h2 class="title">Statistics</h2>
    </div>
    <!--Binding (:selected) to see if the category is selected-->
    <div class="category-item">
      <StatisticsItem id="1" img="/src/assets/general/northamerica.svg" :selected="selectedCategory === '1'"
        @onSelected="onCategorySelected" />
    </div>
    <div class="category-item">
      <StatisticsItem id="2" img="/src/assets/general/southamerica.svg" :selected="selectedCategory === '2'"
        @onSelected="onCategorySelected" />
    </div>
    <div class="category-item">
      <StatisticsItem id="3" img="/src/assets/general/asia.svg" :selected="selectedCategory === '3'"
        @onSelected="onCategorySelected" />
    </div>
    <div class="category-item">
      <StatisticsItem id="4" img="/src/assets/general/europe.svg" :selected="selectedCategory === '4'"
        @onSelected="onCategorySelected" />
    </div>
    <div class="category-item">
      <StatisticsItem id="5" img="/src/assets/general/africa.svg" :selected="selectedCategory === '5'"
        @onSelected="onCategorySelected" />
    </div>
    <div class="category-item">
      <StatisticsItem id="6" img="/src/assets/general/australia.svg" :selected="selectedCategory === '6'"
        @onSelected="onCategorySelected" />
    </div>
  </div>
</template>
<style scoped>
.statistics {
  max-height: 900px;
  overflow-y: scroll;
}

.title {
  font-family: Fredoka;
  font-size: 2.5rem;
  font-weight: 700;
  color: #2C7F49;
  text-align: center;
  margin: 20px;
}

.categories {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
}

.category-item {
  border-radius: 7px;
  margin: 20px auto;
}
</style>
