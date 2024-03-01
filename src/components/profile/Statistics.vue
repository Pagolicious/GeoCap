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
  <div class="statistics stylish-scrollbar">
    <div>
      <h2 class="title">Statistics</h2>
    </div>
    <!--Binding (:selected) to see if the category is selected-->
    <div class="category-item">
      <StatisticsItem id="america" img="/src/assets/general/northamerica.svg" :selected="selectedCategory === 'america'"
        @onSelected="onCategorySelected" />
    </div>
    <div class="category-item">
      <StatisticsItem id="south%20america" img="/src/assets/general/southamerica.svg"
        :selected="selectedCategory === 'south%20america'" @onSelected="onCategorySelected" />
    </div>
    <div class="category-item">
      <StatisticsItem id="asia" img="/src/assets/general/asia.svg" :selected="selectedCategory === 'asia'"
        @onSelected="onCategorySelected" />
    </div>
    <div class="category-item">
      <StatisticsItem id="europe" img="/src/assets/general/europe.svg" :selected="selectedCategory === 'europe'"
        @onSelected="onCategorySelected" />
    </div>
    <div class="category-item">
      <StatisticsItem id="africa" img="/src/assets/general/africa.svg" :selected="selectedCategory === 'africa'"
        @onSelected="onCategorySelected" />
    </div>
    <div class="category-item">
      <StatisticsItem id="oceania" img="/src/assets/general/australia.svg" :selected="selectedCategory === 'oceania'"
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
