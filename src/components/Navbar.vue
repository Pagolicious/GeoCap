<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    // Data property to hold the state of the menu (cloed or open)
    return {
      MenuOpen: false,
    };
  },
  methods: {
    // Function to toggle the open/closed status of the menu
    toggleMenu() {
      this.MenuOpen = !this.MenuOpen;
    },
  },
};
</script>

<template>
  <div class="logo">
    <img id="logotype" src="/src/assets/general/logotypeBlue.svg">
  </div>
  <!-- Icon for the menu -->
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <nav>
    <!-- Toggle button to open and close the menu -->
    <button @click="toggleMenu" class="material-symbols-outlined"> Menu</button>

    <!-- The menu that is displayed only when isMenuOpen is true -->
    <ul v-if="MenuOpen" @click="toggleMenu">
      <!-- Navigation links to different views -->
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/quiz">Quiz</RouterLink>
      </li>
      <li>
        <RouterLink to="/profile">Profile</RouterLink>
      </li>
    </ul>
  </nav>
</template>


<style scoped>

#logotype {
  width: 12rem;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
}
.logo {
  text-align: center;
  padding: 20px;
}

nav {
  background-color: none;
  /* No background color for the navigation container */
}

/* Styles for the toggle button */
button {
  background: none;
  /* Transparent background for the button */
  border: none;
  /* No border for the button */
  cursor: pointer;
  /* Cursor style on hover */
  color: black;
  /* Color of the button */
  font-size: 30px;
  /* Font size of the button text */
  position: absolute;
  /* Absolute positioning for overlay effect */
  top: 20px;
  /* Distance from the top of the page */
  right: 10px;
  /* Distance from the right of the page */
}

/* Styles for the list of navigation links */
ul {
  list-style: none;
  /* Remove default list styles */
  display: flex;
  /* Display as a flex container for horizontal alignment */
  padding: 0;
  /* Remove padding for the list */
  margin: 0;
  /* Remove margin for the list */
  flex-direction: column;
  /* Arrange items in a column for vertical alignment */
  position: absolute;
  /* Absolute positioning for overlay effect */
  top: 80px;
  /* Distance from the top of the page */
  right: 0;
  /* Align to the right */
  background-color: rgb(245, 245, 245);
  /* Background color for the list */
  z-index: 1;
  /* Set z-index to ensure it's above other elements */
  height: 106.4%;
  width: 20%;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 50%);
}

/* Styles for each navigation link */
li {
  margin: 40px;
  /* Margin between each navigation link */
  text-align: center;
}

/* Styles for the navigation links */
a {
  text-decoration: none;
  /* Remove underline from links */
  color: #0B0957;
  /* Text color of the links */
  text-align: center;
  font-weight: 700;
  font-size: 25px;
  font-family: Montserrat;
}
/* Styles for small screens */

@media only screen and (max-width: 600px) {
  ul {
    width: 100%;
   
  }
}

</style>
