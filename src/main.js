import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'


// import { createPinia } from 'pinia';

const app = createApp(App);

// Initialize Pinia and use it in the Vue app
// const pinia = createPinia();
// app.use(pinia);


createApp(App).use(router).mount('#app')
