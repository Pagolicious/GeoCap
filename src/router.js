import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import QuizView from './views/QuizView.vue'
import SignupView from './views/SignupView.vue'
import LoginView from './views/LoginView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/'
    },
    {
      component: QuizView,
      path: '/quiz'
    },
    {
      component: SignupView,
      path: '/signup'
    },
    {
      component: LoginView,
      path: '/login'
    }
  ]
})
