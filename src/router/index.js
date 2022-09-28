import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index'
import Watch from '../views/Watch'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/watch/:id',
    name: 'Watch',
    component: Watch
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
