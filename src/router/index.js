import AccueilView from '@/views/AccueilView.vue'
import LoginView from '@/views/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loginView',
      component: LoginView
    },
    {
      path: '/AccueilView',
      name: 'accueilView',
      component: AccueilView
    }
  ],
})

export default router
