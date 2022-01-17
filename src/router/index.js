import { createRouter, createWebHistory } from 'vue-router'
import Practise from '../views/Practise.vue'
import Decks from '../views/Decks.vue'

const routes = [
  {
    path: '/',
    name: 'Practise',
    component: Practise
  },
  {
    path: '/decks',
    name: 'Decks',
    component: Decks
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
