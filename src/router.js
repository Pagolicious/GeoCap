// router.js

import { createRouter, createWebHashHistory } from 'vue-router';
import LandingView from './views/LandingView.vue';
import CategoryQuizView from './views/CategoryQuizView.vue';
import ProfileView from './views/ProfileView.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: LandingView,
      path: '/',
    },
    {
      component: CategoryQuizView,
      path: '/quiz',
    },
    {
      component: ProfileView,
      path: '/profile',
      meta: { requiresAuth: true }, // Add this line for authentication check
    },
  ],
});

// Navigation guard to check authentication before entering the route
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('currentUser');
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/'); // Redirect to login if not authenticated and trying to access a protected route
  } else {
    next();
  }
});

export default router;
