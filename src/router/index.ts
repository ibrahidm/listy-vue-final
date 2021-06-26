import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:id',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/:(.*)*',
    name: 'Default',
    component: () => import('../views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
