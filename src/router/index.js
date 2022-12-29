import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index'
import Watch from '../views/Watch'
import Bookmark from '../views/Bookmark'

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
  },
  {
    path: '/bookmark',
    name: 'Bookmark',
    component: Bookmark
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
