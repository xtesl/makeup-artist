import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import Portfolio from '@/views/Portfolio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio
    }
  ],
  scrollBehavior(to) {

    if(to.hash){
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }

    return { top: 0}
  }
})

export default router
