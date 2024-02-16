import { createRouter, createWebHashHistory } from 'vue-router'

import CategoryLoginView from './views/CategoryLoginView.vue'
import CategoryQuizView from './views/CategoryQuizView.vue'
import ProfileView from './views/ProfileView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: CategoryLoginView,
      path: '/'
    },
    {
      component: CategoryQuizView,
      path: '/quiz'
    },
    {
      component: ProfileView,
      path: '/profile'
    }
  ]
})
