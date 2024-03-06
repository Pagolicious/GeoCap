<script>
// Importing the StatisticsItem component
import StatisticsItem from '../profile/StatisticsItem.vue'
export default {
  data() {
    return {
      selectedCategory: "",
      categories: [
        { id: "africa", img: "/src/assets/general/africa.svg" },
        { id: "asia", img: "/src/assets/general/asia.svg" },
        { id: "europe", img: "/src/assets/general/europe.svg" },
        { id: "america", img: "/src/assets/general/northamerica.svg" },
        { id: "oceania", img: "/src/assets/general/oceania.svg" },
        { id: "south%20america", img: "/src/assets/general/southamerica.svg" }
      ]
    }
  },
  mounted() {
    //getting the last game category id
    this.selectedCategory = localStorage.getItem("lastGame")
    let selectedIndex = this.categories.findIndex(item => item.id === this.selectedCategory);
    if (selectedIndex >= 0 && selectedIndex < this.categories.length) {
      // Remove the selected item from its current position and put it to selectedItem
      let selectedItem = this.categories.splice(selectedIndex, 1)[0];
      this.categories.unshift(selectedItem);
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
      <h2 class="title">My History</h2>
    </div>
    <!--Binding (:selected) to see if the category is selected-->
    <div class="category-item" v-for="category in categories">
      <StatisticsItem :id="category.id" :img="category.img" :selected="selectedCategory === category.id"
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
